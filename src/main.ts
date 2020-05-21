import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as chalk from 'chalk'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Nest Kitchensink')
    .setDescription('The Kitchensink API description')
    .setVersion('1.0')
    .addTag('kitchensink')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'JWT',
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);



  await app.listen(3000);
  const project = 'NESTJS KITCHENSINK';
  const author = 'dery febriantara';

  console.log(chalk`
  	 {red.bold ${project}}.
  	Author: {green.bold ${author}}.
  `);
}

bootstrap();
