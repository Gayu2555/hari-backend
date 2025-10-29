import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto';
import { UpdateReviewDto } from './dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Public } from '../auth/decorators/public.decorator';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  create(@CurrentUser() user: any, @Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.create(user.sub, createReviewDto);
  }

  @Public()
  @Get()
  findAll(
    @Query('recipeId', new ParseIntPipe({ optional: true })) recipeId?: number,
    @Query('userId', new ParseIntPipe({ optional: true })) userId?: number,
  ) {
    return this.reviewsService.findAll(recipeId, userId);
  }

  @Public()
  @Get('recipe/:recipeId')
  getRecipeReviews(@Param('recipeId', ParseIntPipe) recipeId: number) {
    return this.reviewsService.getRecipeReviews(recipeId);
  }

  @Get('my-reviews')
  @UseGuards(JwtAuthGuard)
  getUserReviews(@CurrentUser() user: any) {
    return this.reviewsService.getUserReviews(user.sub);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.reviewsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id', ParseIntPipe) id: number,
    @CurrentUser() user: any,
    @Body() updateReviewDto: UpdateReviewDto,
  ) {
    return this.reviewsService.update(id, user.sub, updateReviewDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  remove(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: any) {
    return this.reviewsService.remove(id, user.sub);
  }
}
