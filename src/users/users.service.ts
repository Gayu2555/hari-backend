// src/users/users.service.ts
import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dto';
import { UpdateSettingsDto } from './dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany({
      select: this.getUserSelectFields(),
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number, currentUserId: number) {
    // Users can only see their own profile
    if (id !== currentUserId) {
      throw new ForbiddenException('You can only view your own profile');
    }

    const user = await this.prisma.user.findUnique({
      where: { id },
      select: this.getUserSelectFields(),
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  async findByEmail(email: string, currentUserId: number) {
    // Users can only search their own email
    const currentUser = await this.prisma.user.findUnique({
      where: { id: currentUserId },
    });

    // Add null check
    if (!currentUser) {
      throw new NotFoundException(`User with ID ${currentUserId} not found`);
    }

    if (currentUser.email !== email) {
      throw new ForbiddenException('You can only search your own email');
    }

    const user = await this.prisma.user.findUnique({
      where: { email },
      select: this.getUserSelectFields(),
    });

    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    return user;
  }

  async updateProfile(
    userId: number,
    updateUserDto: UpdateUserDto,
    currentUserId: number,
  ) {
    // Users can only update their own profile
    if (userId !== currentUserId) {
      throw new ForbiddenException('You can only update your own profile');
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    // If changing email, check if it's already taken
    if (updateUserDto.email && updateUserDto.email !== user.email) {
      const existingUser = await this.prisma.user.findUnique({
        where: { email: updateUserDto.email },
      });

      if (existingUser) {
        throw new BadRequestException('Email already taken');
      }
    }

    // If changing password, hash it
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 12);
    }

    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: updateUserDto,
      select: this.getUserSelectFields(),
    });

    return updatedUser;
  }

  async updateSettings(
    userId: number,
    updateSettingsDto: UpdateSettingsDto,
    currentUserId: number,
  ) {
    // Users can only update their own settings
    if (userId !== currentUserId) {
      throw new ForbiddenException('You can only update your own settings');
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: updateSettingsDto,
      select: this.getUserSelectFields(),
    });

    return updatedUser;
  }

  async remove(userId: number, currentUserId: number) {
    // Users can only delete their own account
    if (userId !== currentUserId) {
      throw new ForbiddenException('You can only delete your own account');
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    // Delete user's data (cascade will handle related records)
    return this.prisma.user.delete({
      where: { id: userId },
      select: this.getUserSelectFields(),
    });
  }

  async getUserFavorites(userId: number, currentUserId: number) {
    // Users can only view their own favorites
    if (userId !== currentUserId) {
      throw new ForbiddenException('You can only view your own favorites');
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return this.prisma.favorite.findMany({
      where: { userId },
      include: {
        recipe: {
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
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getUserReviews(userId: number, currentUserId: number) {
    // Users can only view their own reviews
    if (userId !== currentUserId) {
      throw new ForbiddenException('You can only view your own reviews');
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return this.prisma.review.findMany({
      where: { userId },
      include: {
        recipe: {
          select: {
            id: true,
            title: true,
            image: true,
            category: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getUserRecipes(userId: number, currentUserId: number) {
    // Users can only view their own recipes
    if (userId !== currentUserId) {
      throw new ForbiddenException('You can only view your own recipes');
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return this.prisma.recipe.findMany({
      where: { userId },
      include: {
        ingredients: true,
        steps: {
          orderBy: { stepNumber: 'asc' },
        },
        favorites: {
          where: { userId: currentUserId },
        },
        _count: {
          select: {
            favorites: true,
            reviews: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getDashboardStats(userId: number, currentUserId: number) {
    // Users can only view their own dashboard
    if (userId !== currentUserId) {
      throw new ForbiddenException('You can only view your own dashboard');
    }

    const [
      recipesCount,
      favoritesCount,
      reviewsCount,
      recentRecipes,
      recentFavorites,
    ] = await Promise.all([
      this.prisma.recipe.count({ where: { userId } }),
      this.prisma.favorite.count({ where: { userId } }),
      this.prisma.review.count({ where: { userId } }),
      this.prisma.recipe.findMany({
        where: { userId },
        select: {
          id: true,
          title: true,
          image: true,
          category: true,
          createdAt: true,
        },
        take: 5,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.favorite.findMany({
        where: { userId },
        include: {
          recipe: {
            select: {
              id: true,
              title: true,
              image: true,
              category: true,
            },
          },
        },
        take: 5,
        orderBy: { createdAt: 'desc' },
      }),
    ]);

    return {
      recipesCount,
      favoritesCount,
      reviewsCount,
      recentRecipes,
      recentFavorites,
    };
  }

  private getUserSelectFields() {
    return {
      id: true,
      uuid: true,
      name: true,
      email: true,
      phone: true,
      avatar: true,
      notificationsEnabled: true,
      darkModeEnabled: true,
      autoPlayVideos: true,
      language: true,
      createdAt: true,
      updatedAt: true,
    };
  }
}
