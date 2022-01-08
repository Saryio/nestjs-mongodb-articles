import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

const port = 3000

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle('Back-end Challenge 🏅 2021 - Space Flight News')
  .setDescription('Articles REST API')
  .setVersion('1.0.0')
  .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  await app.listen(port);
  console.log("\nListening app in port:", port)
}

bootstrap();

