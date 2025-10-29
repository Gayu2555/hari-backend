// src/app.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/decorators/public.decorator';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Public()
  @Get('health')
  getHealth(): object {
    return this.appService.getHealth();
  }

  @Public()
  @Get('api-info')
  getApiInfo(): object {
    return this.appService.getApiInfo();
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getProtected(): object {
    return {
      message: 'This is a protected route',
      timestamp: new Date().toISOString(),
    };
  }
}
