// src/recipes/recipes.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  async create(createRecipeDto: CreateRecipeDto) {
    const { ingredients, ...recipeData } = createRecipeDto;

    return this.prisma.recipe.create({
      data: {
        ...recipeData,
        ingredients: {
          create:
            ingredients?.map((ingredient) => ({
              name: ingredient.name,
              order: ingredient.order,
            })) || [],
        },
      },
      include: {
        ingredients: {
          orderBy: { order: 'asc' },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.recipe.findMany({
      include: {
        ingredients: {
          orderBy: { order: 'asc' },
        },
      },
      orderBy: {
        recipeId: 'asc',
      },
    });
  }

  async findOne(id: number) {
    const recipe = await this.prisma.recipe.findUnique({
      where: { id },
      include: {
        ingredients: {
          orderBy: { order: 'asc' },
        },
      },
    });

    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }

    return recipe;
  }

  async findByRecipeId(recipeId: number) {
    const recipe = await this.prisma.recipe.findUnique({
      where: { recipeId },
      include: {
        ingredients: {
          orderBy: { order: 'asc' },
        },
      },
    });

    if (!recipe) {
      throw new NotFoundException(`Recipe with recipeId ${recipeId} not found`);
    }

    return recipe;
  }

  async findByCategory(category: string) {
    return this.prisma.recipe.findMany({
      where: {
        recipeCategory: {
          contains: category,
          // mode: 'insensitive', // <-- BARIS YANG DIHAPUS
        },
      },
      include: {
        ingredients: {
          orderBy: { order: 'asc' },
        },
      },
    });
  }

  async findPopular() {
    return this.prisma.recipe.findMany({
      where: {
        isPopular: true,
      },
      include: {
        ingredients: {
          orderBy: { order: 'asc' },
        },
      },
    });
  }

  async searchRecipes(searchText: string) {
    return this.prisma.recipe.findMany({
      where: {
        OR: [
          {
            recipeName: {
              contains: searchText,
              // mode: 'insensitive', // <-- BARIS YANG DIHAPUS
            },
          },
          {
            recipeCategory: {
              contains: searchText,
              // mode: 'insensitive', // <-- BARIS YANG DIHAPUS
            },
          },
        ],
      },
      include: {
        ingredients: {
          orderBy: { order: 'asc' },
        },
      },
    });
  }

  async update(id: number, updateRecipeDto: UpdateRecipeDto) {
    const { ingredients, ...recipeData } = updateRecipeDto;

    await this.findOne(id);

    return this.prisma.recipe.update({
      where: { id },
      data: {
        ...recipeData,
        ...(ingredients && {
          ingredients: {
            deleteMany: {},
            create: ingredients.map((ingredient) => ({
              name: ingredient.name,
              order: ingredient.order,
            })),
          },
        }),
      },
      include: {
        ingredients: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.recipe.delete({
      where: { id },
    });
  }

  async getCategories() {
    const categories = await this.prisma.recipe.findMany({
      select: {
        recipeCategory: true,
      },
      distinct: ['recipeCategory'],
    });

    return categories.map((cat) => cat.recipeCategory);
  }
}
