import { Module } from '@nestjs/common';
import { GirlService } from './girl.service';
import { GirlController } from './girl.controller';

@Module({
  providers: [GirlService],
  controllers: [GirlController],
})
export class GirlModule {}
