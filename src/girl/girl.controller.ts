import {
  Controller,
  Get,
  Query,
  Post,
  Request,
  Body,
  Param,
  Headers,
} from '@nestjs/common';
import { GirlService } from './girl.service';

@Controller('girl')
export class GirlController {
  constructor(private readonly girlService: GirlService) {}
  // 相当于 this.girlService = new GirlService();
  @Get()
  getGirls(): ReturnType<GirlService['getGirls']> {
    return this.girlService.getGirls();
  }
  @Post('add')
  addGirls(@Body() body): ReturnType<GirlService['addGirls']> {
    return this.girlService.addGirls(body);
  }
  @Get('getGirlById')
  getGirlById(@Query() query): ReturnType<GirlService['getGirlById']> {
    return this.girlService.getGirlById(query.id);
  }
  // 动态路由
  @Get('findGirlById/:id')
  findGirlById(
    @Param() params,
    @Headers() headers,
  ): ReturnType<GirlService['findGirlById']> {
    console.log('headers: ', headers);
    return this.girlService.findGirlById(params.id);
  }
}
