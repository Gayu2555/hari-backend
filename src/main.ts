<<<<<<< HEAD
import { NestFactory } from '@nestjs/core';
=======
// src/main.ts
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
>>>>>>> 2d347ef (oalah nimpa kode cik wkkwk)
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  await app.listen(process.env.PORT ?? 3000);
=======

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:5000',
      'http://localhost:8080',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  const port = process.env.PORT || 3850;
  await app.listen(port);
  console.log(`🚀 Recipe API running on: http://localhost:${port}`);
>>>>>>> 2d347ef (oalah nimpa kode cik wkkwk)
}
bootstrap();
