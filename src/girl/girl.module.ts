import { Module } from '@nestjs/common';
import { GirlService } from './girl.service';
import { GirlController } from './girl.controller';
import { Girl } from './entities/girl.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // 引入表
  imports: [TypeOrmModule.forFeature([Girl])],
  providers: [GirlService],
  controllers: [GirlController],
})
export class GirlModule {}
