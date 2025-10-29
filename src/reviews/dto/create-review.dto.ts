import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  Max,
} from 'class-validator';

export class CreateReviewDto {
  @IsInt()
  @IsNotEmpty({ message: 'Recipe ID is required' })
  recipeId: number;

  @IsInt()
  @IsNotEmpty({ message: 'Rating is required' })
  @Min(1, { message: 'Rating must be at least 1' })
  @Max(5, { message: 'Rating must be at most 5' })
  rating: number;

  @IsString()
  @IsOptional()
  comment?: string;
}
