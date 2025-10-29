import { IsInt, IsOptional, IsString, Min, Max } from 'class-validator';

export class UpdateReviewDto {
  @IsInt()
  @IsOptional()
  @Min(1, { message: 'Rating must be at least 1' })
  @Max(5, { message: 'Rating must be at most 5' })
  rating?: number;

  @IsString()
  @IsOptional()
  comment?: string;
}
