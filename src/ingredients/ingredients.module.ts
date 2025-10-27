// src/ingredients/ingredients.module.ts
import { Module } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [IngredientsController],
  providers: [IngredientsService, PrismaService],
})
export class IngredientsModule {}
