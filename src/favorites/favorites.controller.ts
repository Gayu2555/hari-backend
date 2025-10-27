// src/favorites/favorites.controller.ts
import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post('user/:userId/recipe/:recipeId')
  addToFavorites(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('recipeId', ParseIntPipe) recipeId: number,
  ) {
    return this.favoritesService.addToFavorites(userId, recipeId);
  }

  @Delete('user/:userId/recipe/:recipeId')
  removeFromFavorites(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('recipeId', ParseIntPipe) recipeId: number,
  ) {
    return this.favoritesService.removeFromFavorites(userId, recipeId);
  }

  @Get('user/:userId')
  getUserFavorites(@Param('userId', ParseIntPipe) userId: number) {
    return this.favoritesService.getUserFavorites(userId);
  }

  @Get('user/:userId/recipe/:recipeId')
  isRecipeFavorited(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('recipeId', ParseIntPipe) recipeId: number,
  ) {
    return this.favoritesService.isRecipeFavorited(userId, recipeId);
  }
}
