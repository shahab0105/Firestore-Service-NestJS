import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { MongoService } from './mongo.service';
import { IConnectionService } from './IConnection.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, @Inject('FirestoreService') private readonly dbService: IConnectionService) {}

  @Get()
  async getHello(): Promise<string> {
    return JSON.stringify(await this.dbService.connectDB());
  }
}
