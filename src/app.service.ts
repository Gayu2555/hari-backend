// src/app.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Recipe Sharing API is running!';
  }

  getHealth(): object {
    return {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      service: 'Recipe Sharing API',
      version: '1.0.0',
    };
  }

  getApiInfo(): object {
    return {
      name: 'sharerecipe-api berfungsi',
      description: 'A REST API Backend untuk ShareRecipe Application',
      version: '1.0.0',
      author: 'Gayu Yunma Ramadhan',
      endpoints: {
        auth: '/auth',
        users: '/users',
        recipes: '/recipes',
        ingredients: '/ingredients',
        favorites: '/favorites',
        reviews: '/reviews',
      },
    };
  }
}
