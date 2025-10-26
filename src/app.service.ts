import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      status: 'Backend is online!',
      message: 'Hari Backend API is running.',
      timestamp: new Date().toISOString(),
      version: '0.0.1',
    };
  }
}
