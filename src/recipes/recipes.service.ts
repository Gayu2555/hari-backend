// src/recipes/recipes.service.ts
import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRecipeDto, UpdateRecipeDto } from './dto';
import { CreateIngredientDto, CreateStepDto } from './dto/create-recipe.dto'; // Impor tipe untuk kejelasan

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  /**
   * Membuat resep baru untuk pengguna yang sedang login.
   * @param userId - ID pengguna yang membuat resep.
   * @param createRecipeDto - Data resep baru.
   * @returns Resep yang baru dibuat beserta relasinya.
   */
  async create(userId: number, createRecipeDto: CreateRecipeDto) {
    // Destrukturisasi data dari DTO untuk memisahkan data utama dan relasi
    const { ingredients, steps, ...recipeData } = createRecipeDto;

    return this.prisma.recipe.create({
      data: {
        ...recipeData, // Data utama resep (title, description, dll.)
        userId, // Hubungkan resep dengan pengguna
        ingredients: {
          // Buat entri ingredient baru yang terhubung ke resep ini
          create: ingredients as CreateIngredientDto[],
        },
        steps: {
          // Buat entri step baru yang terhubung ke resep ini
          create: steps as CreateStepDto[],
        },
      },
      include: {
        // Sertakan data relasi pada hasil yang dikembalikan
        ingredients: true,
        steps: {
          orderBy: { stepNumber: 'asc' }, // Urutkan langkah berdasarkan nomor
        },
        _count: {
          select: {
            favorites: true,
            reviews: true,
          },
        },
      },
    });
  }

  /**
   * Mendapatkan semua resep yang bersifat publik atau milik pengguna sendiri.
   * Mendukung paginasi, filter kategori, dan pencarian.
   * @param userId - ID pengguna yang sedang login.
   * @param options - Opsi untuk filter, pencarian, dan paginasi.
   * @returns Daftar resep dan metadata paginasi.
   */
  async findAll(
    userId: number,
    options?: {
      category?: string;
      search?: string;
      page?: number;
      limit?: number;
    },
  ) {
    const { category, search, page = 1, limit = 10 } = options || {};
    const skip = (page - 1) * limit;

    const where = {
      OR: [
        { isPublic: true }, // Resep publik bisa dilihat siapa saja
        { userId }, // Pengguna bisa melihat resepnya sendiri
      ],
      ...(category && { category }),

      ...(search && {
        OR: [
          { title: { contains: search, mode: 'insensitive' as const } },
          { description: { contains: search, mode: 'insensitive' as const } },
        ],
      }),
    };

    // Jalankan query untuk mendapatkan data dan total hitungan secara paralel
    const [recipes, total] = await Promise.all([
      this.prisma.recipe.findMany({
        where,
        skip,
        take: limit,
        include: {
          ingredients: true,
          user: {
            select: {
              id: true,
              name: true,
              avatar: true,
            },
          },
          _count: {
            select: {
              favorites: true,
              reviews: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.recipe.count({ where }),
    ]);

    return {
      data: recipes,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Mendapatkan satu resep berdasarkan ID.
   * Memeriksa apakah pengguna memiliki akses ke resep tersebut.
   * @param id - ID resep yang akan dicari.
   * @param userId - ID pengguna yang sedang login.
   * @returns Data resep lengkap.
   */
  async findOne(id: number, userId: number) {
    const recipe = await this.prisma.recipe.findUnique({
      where: { id },
      include: {
        ingredients: true,
        steps: {
          orderBy: { stepNumber: 'asc' },
        },
        user: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
        reviews: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                avatar: true,
              },
            },
          },
          orderBy: { createdAt: 'desc' },
        },
        _count: {
          select: {
            favorites: true,
            reviews: true,
          },
        },
      },
    });

    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }

    // Cek akses: jika resep privat dan bukan milik user, tolak akses
    if (!recipe.isPublic && recipe.userId !== userId) {
      throw new ForbiddenException('You do not have access to this recipe');
    }

    return recipe;
  }

  /**
   * Memperbarui data resep.
   * Hanya pemilik resep yang bisa memperbarui.
   * @param id - ID resep yang akan diperbarui.
   * @param userId - ID pengguna yang sedang login.
   * @param updateRecipeDto - Data baru untuk resep.
   * @returns Resep yang telah diperbarui.
   */
  async update(id: number, userId: number, updateRecipeDto: UpdateRecipeDto) {
    // Cek apakah resep ada
    const recipe = await this.prisma.recipe.findUnique({
      where: { id },
    });

    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }

    // Cek kepemilikan
    if (recipe.userId !== userId) {
      throw new ForbiddenException('You can only update your own recipes');
    }

    // Pisahkan data relasi dari data utama
    const { ingredients, steps, ...recipeData } = updateRecipeDto;

    // Jika ada data ingredients baru, hapus yang lama terlebih dahulu
    if (ingredients) {
      await this.prisma.ingredient.deleteMany({
        where: { recipeId: id },
      });
    }

    // Jika ada data steps baru, hapus yang lama terlebih dahulu
    if (steps) {
      await this.prisma.recipeStep.deleteMany({
        where: { recipeId: id },
      });
    }

    return this.prisma.recipe.update({
      where: { id },
      data: {
        ...recipeData, // Update data utama resep
        // Buat ulang relasi ingredients jika ada
        ...(ingredients && {
          ingredients: {
            create: ingredients as CreateIngredientDto[],
          },
        }),
        // Buat ulang relasi steps jika ada
        ...(steps && {
          steps: {
            create: steps as CreateStepDto[],
          },
        }),
      },
      include: {
        ingredients: true,
        steps: {
          orderBy: { stepNumber: 'asc' },
        },
      },
    });
  }

  /**
   * Menghapus resep.
   * Hanya pemilik resep yang bisa menghapus.
   * @param id - ID resep yang akan dihapus.
   * @param userId - ID pengguna yang sedang login.
   * @returns Resep yang telah dihapus.
   */
  async remove(id: number, userId: number) {
    const recipe = await this.prisma.recipe.findUnique({
      where: { id },
    });

    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }

    // Cek kepemilikan
    if (recipe.userId !== userId) {
      throw new ForbiddenException('You can only delete your own recipes');
    }

    return this.prisma.recipe.delete({
      where: { id },
    });
  }

  /**
   * Menambah atau menghapus resep dari daftar favorit pengguna.
   * @param recipeId - ID resep.
   * @param userId - ID pengguna.
   * @returns Status favorit.
   */
  async toggleFavorite(recipeId: number, userId: number) {
    // Pastikan resep ada dan pengguna memiliki akses
    await this.findOne(recipeId, userId);

    const existingFavorite = await this.prisma.favorite.findUnique({
      where: {
        userId_recipeId: {
          userId,
          recipeId,
        },
      },
    });

    if (existingFavorite) {
      // Jika sudah favorit, hapus dari favorit
      await this.prisma.favorite.delete({
        where: { id: existingFavorite.id },
      });
      return { isFavorite: false, message: 'Removed from favorites' };
    } else {
      // Jika belum, tambahkan ke favorit
      await this.prisma.favorite.create({
        data: {
          userId,
          recipeId,
        },
      });
      return { isFavorite: true, message: 'Added to favorites' };
    }
  }

  /**
   * Menambahkan ulasan baru atau memperbarui ulasan yang sudah ada.
   * @param recipeId - ID resep.
   * @param userId - ID pengguna.
   * @param rating - Nilai rating.
   * @param comment - Komentar ulasan.
   * @returns Ulasan yang telah dibuat atau diperbarui.
   */
  async addReview(
    recipeId: number,
    userId: number,
    rating: number,
    comment?: string,
  ) {
    // Pastikan resep ada dan pengguna memiliki akses
    await this.findOne(recipeId, userId);

    const existingReview = await this.prisma.review.findUnique({
      where: {
        userId_recipeId: {
          userId,
          recipeId,
        },
      },
    });

    if (existingReview) {
      // Jika ulasan sudah ada, perbarui
      return this.prisma.review.update({
        where: { id: existingReview.id },
        data: { rating, comment },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              avatar: true,
            },
          },
        },
      });
    } else {
      // Jika belum, buat ulasan baru
      return this.prisma.review.create({
        data: {
          userId,
          recipeId,
          rating,
          comment,
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              avatar: true,
            },
          },
        },
      });
    }
  }

  /**
   * Menghapus ulasan.
   * Hanya pemilik ulasan yang bisa menghapusnya.
   * @param recipeId - ID resep.
   * @param userId - ID pengguna.
   * @returns Ulasan yang telah dihapus.
   */
  async deleteReview(recipeId: number, userId: number) {
    const review = await this.prisma.review.findUnique({
      where: {
        userId_recipeId: {
          userId,
          recipeId,
        },
      },
    });

    if (!review) {
      throw new NotFoundException('Review not found');
    }

    // Cek kepemilikan ulasan
    if (review.userId !== userId) {
      throw new ForbiddenException('You can only delete your own reviews');
    }

    return this.prisma.review.delete({
      where: { id: review.id },
    });
  }
}
