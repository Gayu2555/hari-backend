// src/recipes/dto/create-recipe.dto.ts
import {
  IsString,
  IsNumber,
  IsBoolean,
  IsArray,
  IsOptional,
  IsUrl,
  Min,
  Max,
} from 'class-validator';

class CreateIngredientDto {
  @IsString()
  name: string;

  @IsNumber()
  order: number;
}

export class CreateRecipeDto {
  @IsNumber()
  recipeId: number;

  @IsString()
  recipeCategory: string;

  @IsString()
  recipeName: string;

  @IsString()
  @IsUrl()
  recipeImage: string;

  @IsNumber()
  @Min(0)
  prepTime: number;

  @IsNumber()
  @Min(0)
  cookTime: number;

  @IsNumber()
  @Min(1)
  recipeServing: number;

  @IsString()
  recipeMethod: string;

  @IsNumber()
  @Min(0)
  recipeReview: number;

  @IsBoolean()
  @IsOptional()
  isPopular?: boolean;

  @IsArray()
  @IsOptional()
  ingredients?: CreateIngredientDto[];
}
