import { Module } from '@nestjs/common';
import { GirlService } from './girl/girl.service';
import { GirlController } from './girl/girl.controller';
import { GirlModule } from './girl/girl.module';

@Module({
  imports: [GirlModule],
  controllers: [GirlController],
  providers: [GirlService],
})
export class AppModule {}
