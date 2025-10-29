import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReviewDto } from './dto'; //Selalu pastikan Hierarki importnya bener!!!!
import { UpdateReviewDto } from './dto'; //Selalu pastikan Hierarki importnya bener!!!!

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: number, createReviewDto: CreateReviewDto) {
    const { recipeId, rating, comment } = createReviewDto;

    // Check if recipe exists
    const recipe = await this.prisma.recipe.findUnique({
      where: { id: recipeId },
    });

    if (!recipe) {
      throw new NotFoundException('Recipe not found');
    }

    // Check if user already reviewed this recipe
    const existingReview = await this.prisma.review.findUnique({
      where: {
        userId_recipeId: {
          userId,
          recipeId,
        },
      },
    });

    if (existingReview) {
      throw new BadRequestException('You have already reviewed this recipe');
    }

    // Create review
    const review = await this.prisma.review.create({
      data: {
        rating,
        comment,
        userId,
        recipeId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        recipe: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });

    // Update recipe average rating
    await this.updateRecipeAverageRating(recipeId);

    return {
      message: 'Review created successfully',
      data: review,
    };
  }

  async findAll(recipeId?: number, userId?: number) {
    const where: any = {};

    if (recipeId) {
      where.recipeId = recipeId;
    }

    if (userId) {
      where.userId = userId;
    }

    const reviews = await this.prisma.review.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        recipe: {
          select: {
            id: true,
            title: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return {
      message: 'Reviews retrieved successfully',
      data: reviews,
      total: reviews.length,
    };
  }

  async findOne(id: number) {
    const review = await this.prisma.review.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        recipe: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });

    if (!review) {
      throw new NotFoundException('Review not found');
    }

    return {
      message: 'Review retrieved successfully',
      data: review,
    };
  }

  async update(id: number, userId: number, updateReviewDto: UpdateReviewDto) {
    const review = await this.prisma.review.findUnique({
      where: { id },
    });

    if (!review) {
      throw new NotFoundException('Review not found');
    }

    // Check if user owns this review
    if (review.userId !== userId) {
      throw new ForbiddenException('You can only update your own reviews');
    }

    const updatedReview = await this.prisma.review.update({
      where: { id },
      data: updateReviewDto,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        recipe: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });

    if (updateReviewDto.rating) {
      await this.updateRecipeAverageRating(review.recipeId);
    }

    return {
      message: 'Review updated successfully',
      data: updatedReview,
    };
  }

  async remove(id: number, userId: number) {
    const review = await this.prisma.review.findUnique({
      where: { id },
    });

    if (!review) {
      throw new NotFoundException('Review not found');
    }

    if (review.userId !== userId) {
      throw new ForbiddenException('You can only delete your own reviews');
    }

    await this.prisma.review.delete({
      where: { id },
    });

    await this.updateRecipeAverageRating(review.recipeId);

    return {
      message: 'Review deleted successfully',
    };
  }

  async getRecipeReviews(recipeId: number) {
    const recipe = await this.prisma.recipe.findUnique({
      where: { id: recipeId },
    });

    if (!recipe) {
      throw new NotFoundException('Recipe not found');
    }

    const reviews = await this.prisma.review.findMany({
      where: { recipeId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0;

    return {
      message: 'Recipe reviews retrieved successfully',
      data: {
        recipeId,
        reviews,
        statistics: {
          totalReviews: reviews.length,
          averageRating: Number(averageRating.toFixed(2)),
        },
      },
    };
  }

  async getUserReviews(userId: number) {
    const reviews = await this.prisma.review.findMany({
      where: { userId },
      include: {
        recipe: {
          select: {
            id: true,
            title: true,
            image: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return {
      message: 'User reviews retrieved successfully',
      data: reviews,
      total: reviews.length,
    };
  }

  private async updateRecipeAverageRating(recipeId: number) {
    const reviews = await this.prisma.review.findMany({
      where: { recipeId },
      select: { rating: true },
    });

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0;

    // Jika Recipe nya pengen diupdate averageRatingnya bisa diupadate di database, "HAPUS KOMENTAR INI!!!"
    // await this.prisma.recipe.update({
    //   where: { id: recipeId },
    //   data: { averageRating },
    // });

    return averageRating;
  }
}
