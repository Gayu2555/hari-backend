import { Injectable } from '@nestjs/common';
import { cpus } from 'os';
import { hostname } from 'os';

@Injectable()
export class AppService {
  getHello(): Record<string, any> {
    return {
      status: 'Backend is online!',
      timestamp: new Date().toISOString(),
      hostname: hostname(),
      message: 'Hari Backend API is running smoothly.',
      version: '0.0.1',
    };
  }
}
