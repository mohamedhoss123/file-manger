import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { patchNestJsSwagger } from 'nestjs-zod'
import "reflect-metadata"

async function bootstrap() {
  

  patchNestJsSwagger()
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('file manger')
    .setDescription('this is api docs for file manger')
    .setVersion('1.0')
    .build();
  app.setGlobalPrefix("api")
  app.enableCors({allowedHeaders:"*"});
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
