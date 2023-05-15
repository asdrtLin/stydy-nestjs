import { Module } from '@nestjs/common';
import { GirlService } from './girl/girl.service';
import { GirlController } from './girl/girl.controller';
import { GirlModule } from './girl/girl.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoyModule } from './boy/boy.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'nest_js_study',
      // 重连时间间隔
      retryDelay: 500,
      // 重连连接次数
      retryAttempts: 10,
      // 指示是否在每次应用程序启动时自动创建数据库架构。 请注意此选项，不要在生产环境中使用它，否则将丢失所有生产数据。但是此选项在调试和开发期间非常有用。
      synchronize: true,
      // 自动加载实体
      autoLoadEntities: true,
    }),
    GirlModule,
    BoyModule,
    ConfigModule,
  ],
  controllers: [GirlController],
  providers: [GirlService],
})
export class AppModule {}
