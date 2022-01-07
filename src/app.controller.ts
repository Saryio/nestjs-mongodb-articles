import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiCreatedResponse } from '@nestjs/swagger'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiCreatedResponse({
    description: "Get welcome message"
  })
  getMessage(): string {
    return this.appService.getMessage();
  }
}
