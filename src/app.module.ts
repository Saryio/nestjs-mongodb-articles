import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [ArticlesModule, MongooseModule.forRoot('mongodb+srv://admin:p%40ssword@cluster0.4x6rh.mongodb.net/coodesh?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})  
export class AppModule {}
