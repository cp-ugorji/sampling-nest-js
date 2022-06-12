import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  //adding validation pipe to validate request payload before it hits the controller
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
