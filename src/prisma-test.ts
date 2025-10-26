import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function testConnection() {
  try {
    await prisma.$connect();
    console.log('✅ Berhasil terhubung ke MariaDB!');
  } catch (error) {
    console.error('❌ Gagal terhubung:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
