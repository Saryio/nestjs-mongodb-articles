import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMessage(): string {
    return 'Back-end Challenge 2021 🏅 - Space Flight News';
  }
}
