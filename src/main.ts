import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const cors = {
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS', 'PATCH'],
  };

  // Configuration de Swagger
  const config = new DocumentBuilder()
    .setTitle('Api RenconSport')
    .setDescription('Documentation Pour API RenconSport')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors(cors);
  await app.listen(3000, '0.0.0.0');
}

bootstrap();
