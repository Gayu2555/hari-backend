// src/recipes/entities/recipe.entity.ts
export class Recipe {
  id: number;
  recipeId: number;
  recipeCategory: string;
  recipeName: string;
  recipeImage: string;
  prepTime: number;
  cookTime: number;
  recipeServing: number;
  recipeMethod: string;
  recipeReview: number;
  isPopular: boolean;
  createdAt: Date;
  updatedAt: Date;
  ingredients?: any[];
  favorites?: any[];
  reviews?: any[];
}
