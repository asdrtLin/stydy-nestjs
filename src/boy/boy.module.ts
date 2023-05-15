import { Module } from '@nestjs/common';
import { BoyService } from './boy.service';
import { BoyController } from './boy.controller';

// 命令生成模块
// nest g res boy
// REST API

@Module({
  controllers: [BoyController],
  providers: [BoyService],
  exports: [BoyService],
})
export class BoyModule {}
