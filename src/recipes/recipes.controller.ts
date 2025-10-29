// src/recipes/recipes.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
  Request,
  UseGuards,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
// Asumsi Anda menggunakan JWT untuk autentikasi. Sesuaikan path jika perlu.
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('recipes')
// Anda bisa menambahkan guard di seluruh controller jika sebagian besar endpoint memerlukan autentikasi
// @UseGuards(JwtAuthGuard)
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Post()
  // Endpoint ini memerlukan autentikasi untuk mendapatkan userId
  @UseGuards(JwtAuthGuard)
  create(@Request() req, @Body() createRecipeDto: CreateRecipeDto) {
    // Ambil userId dari objek request yang telah diisi oleh guard
    const userId = req.user.id;
    return this.recipesService.create(userId, createRecipeDto);
  }

  @Get()
  findAll(@Request() req) {
    // userId bisa null jika pengguna tidak login, service sudah menanganinya
    const userId = req.user?.id;
    // Panggil findAll dengan opsi filter dari query
    const options = {
      category: req.query.category as string,
      search: req.query.search as string,
      page: req.query.page ? parseInt(req.query.page as string) : 1,
      limit: req.query.limit ? parseInt(req.query.limit as string) : 10,
    };
    return this.recipesService.findAll(userId, options);
  }

  // Endpoint yang tidak ada di service telah dihapus:
  // - findPopular
  // - search
  // - getCategories
  // - findByCategory
  // - findByRecipeId

  @Get(':id')
  findOne(@Request() req, @Param('id', ParseIntPipe) id: number) {
    // userId bisa null jika pengguna tidak login, service akan mengecek akses
    const userId = req.user?.id;
    return this.recipesService.findOne(id, userId);
  }

  @Patch(':id')
  // Endpoint ini memerlukan autentikasi
  @UseGuards(JwtAuthGuard)
  update(
    @Request() req,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRecipeDto: UpdateRecipeDto,
  ) {
    const userId = req.user.id;
    return this.recipesService.update(id, userId, updateRecipeDto);
  }

  @Delete(':id')
  // Endpoint ini memerlukan autentikasi
  @UseGuards(JwtAuthGuard)
  remove(@Request() req, @Param('id', ParseIntPipe) id: number) {
    const userId = req.user.id;
    return this.recipesService.remove(id, userId);
  }
}
