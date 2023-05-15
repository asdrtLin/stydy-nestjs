import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { GirlService } from './girl.service';
import { GirlController } from './girl.controller';
import { Girl } from './entities/girl.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CounterMiddleware } from 'src/counter/counter.middleware';

@Module({
  // 引入表
  imports: [TypeOrmModule.forFeature([Girl])],
  exports: [
    TypeOrmModule,
    {
      provide: 'girl',
      useClass: GirlService,
    },
    {
      provide: 'girlArray',
      useValue: ['小红', '小村'],
    },
    {
      provide: 'girlFC',
      useFactory() {
        console.log('useFactory-------');
      },
    },
  ],
  providers: [
    {
      provide: 'girl',
      // 传递class
      useClass: GirlService,
    },
    {
      provide: 'girlArray',
      // 传递值
      useValue: ['小红', '小村'],
    },
    {
      provide: 'girlFC',
      // 传递函数，直接调用，获取返回值
      useFactory() {
        console.log('useFactory-------');
        return 'useFactory';
      },
    },
  ],
  controllers: [GirlController],
})
export class GirlModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // girl 路由下调用中间件
    consumer.apply(CounterMiddleware).forRoutes('girl');
  }
}
