import { Controller, Get } from '@nestjs/common';
import { GirlService } from './girl.service';

@Controller('girl')
export class GirlController {
  constructor(private readonly girlService: GirlService) {}
  // 相当于 this.girlService = new GirlService();
  @Get()
  getGirls(): ReturnType<GirlService['getGirls']> {
    return this.girlService.getGirls();
  }
}
