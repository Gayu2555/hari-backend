// src/recipes/dto/create-recipe.dto.ts
import {
  IsString,
  IsNumber,
  IsBoolean,
  IsArray,
  IsOptional,
  IsUrl,
  Min,
  ValidateNested,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

// DTO untuk setiap bahan (ingredient)
export class CreateIngredientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsOptional()
  quantity?: number;

  @IsString()
  @IsOptional()
  unit?: string;
}

// DTO untuk setiap langkah memasak (step)
export class CreateStepDto {
  @IsNumber()
  @Min(1)
  stepNumber: number;

  @IsString()
  @IsNotEmpty()
  description: string;
}

export class CreateRecipeDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  @IsUrl()
  image?: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  prepTime?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  cookTime?: number;

  @IsNumber()
  @Min(1)
  @IsOptional()
  servings?: number;

  @IsBoolean()
  @IsOptional()
  isPublic?: boolean;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateIngredientDto)
  @IsOptional()
  ingredients?: CreateIngredientDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateStepDto)
  @IsOptional()
  steps?: CreateStepDto[];
}
