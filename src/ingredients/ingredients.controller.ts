// src/ingredients/ingredients.controller.ts
import { Controller, Get, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Get('recipe/:recipeId')
  findAllByRecipe(@Param('recipeId', ParseIntPipe) recipeId: number) {
    return this.ingredientsService.findAllByRecipe(recipeId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ingredientsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ingredientsService.remove(id);
  }
}
