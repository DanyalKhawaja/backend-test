import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to backend-test app, use /api to view available endpoints';
  }
}
