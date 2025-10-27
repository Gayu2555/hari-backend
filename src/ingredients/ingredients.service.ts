// src/ingredients/ingredients.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class IngredientsService {
  constructor(private prisma: PrismaService) {}

  async findAllByRecipe(recipeId: number) {
    const ingredients = await this.prisma.ingredient.findMany({
      where: { recipeId },
      orderBy: { order: 'asc' },
    });

    if (!ingredients.length) {
      throw new NotFoundException(
        `No ingredients found for recipe ID ${recipeId}`,
      );
    }

    return ingredients;
  }

  async findOne(id: number) {
    const ingredient = await this.prisma.ingredient.findUnique({
      where: { id },
    });

    if (!ingredient) {
      throw new NotFoundException(`Ingredient with ID ${id} not found`);
    }

    return ingredient;
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.ingredient.delete({
      where: { id },
    });
  }
}
