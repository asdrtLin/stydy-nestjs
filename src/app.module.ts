import { Module } from '@nestjs/common';
import { GirlService } from './girl/girl.service';
import { GirlController } from './girl/girl.controller';
import { GirlModule } from './girl/girl.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'nest_js_study',
      retryDelay: 500,
      retryAttempts: 10,
    }),
    GirlModule,
  ],
  controllers: [GirlController],
  providers: [GirlService],
})
export class AppModule {}
