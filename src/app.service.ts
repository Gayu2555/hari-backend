import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AppService {
  getHello() {
    return {
      status: 'Backend is online!',
      timestamp: new Date().toISOString(),
    };
  }

  async testDatabase() {
    try {
      // Jalankan query sederhana
      await prisma.$queryRaw`SELECT 1 + 1 AS result`;
      return {
        database: '✅ Connected to MariaDB!',
        status: 'OK',
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      return {
        database: '❌ Connection failed',
        error: error.message,
        timestamp: new Date().toISOString(),
      };
    }
  }
}
