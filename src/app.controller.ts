import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users/:id')
  getUser(@Param() params): User {
    return this.appService.getUser(params.id);
  }
}
