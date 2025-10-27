// src/app.module.ts
import { Module } from '@nestjs/common';
import { RecipesModule } from './recipes/recipes.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { UsersModule } from './users/users.module';
import { FavoritesModule } from './favorites/favorites.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [RecipesModule, IngredientsModule, UsersModule, FavoritesModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
