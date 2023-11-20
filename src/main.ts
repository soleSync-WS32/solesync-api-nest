import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('SoleSync DDD API')
    .setDescription('SoleSync API Documentation')
    .setVersion('1.0')
    .addTag('root')
    .addTag('users')
    .addTag('shoes')
    .addTag('physical activities')
    .addTag('statistics')
    .addTag('shopping')
    .addTag('shoes designs')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
