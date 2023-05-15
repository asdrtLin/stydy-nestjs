import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { allCounterMiddleware } from './all-counter/all-counter.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // api前缀
  app.setGlobalPrefix('api');
  app.use(allCounterMiddleware);
  await app.listen(3000, function () {
    console.log('http://localhost:3000/');
  });
}
bootstrap();
