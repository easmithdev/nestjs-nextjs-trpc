import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { TrpcRouter } from './trpc/trpc.router';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const configService = app.get(ConfigService);
  const port = configService.get('nestPort');
  const trpc = app.get(TrpcRouter);
  trpc.applyMiddleware(app);
  await app.listen(port);
}
bootstrap();
