import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto, UpdateSettingsDto } from './dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return this.usersService.findOne(id, req.user.id);
  }

  @Get('email/:email')
  findByEmail(@Param('email') email: string, @Request() req) {
    return this.usersService.findByEmail(email, req.user.id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
    @Request() req,
  ) {
    return this.usersService.updateProfile(id, updateUserDto, req.user.id);
  }

  @Patch(':id/settings')
  updateSettings(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSettingsDto: UpdateSettingsDto,
    @Request() req,
  ) {
    return this.usersService.updateSettings(id, updateSettingsDto, req.user.id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return this.usersService.remove(id, req.user.id);
  }

  @Get(':id/favorites')
  getUserFavorites(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return this.usersService.getUserFavorites(id, req.user.id);
  }

  @Get(':id/reviews')
  getUserReviews(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return this.usersService.getUserReviews(id, req.user.id);
  }

  @Get(':id/recipes')
  getUserRecipes(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return this.usersService.getUserRecipes(id, req.user.id);
  }

  @Get(':id/dashboard')
  getDashboardStats(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return this.usersService.getDashboardStats(id, req.user.id);
  }
}
