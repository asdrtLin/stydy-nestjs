import {
  Controller,
  Get,
  Query,
  Post,
  Request,
  Body,
  Param,
  Headers,
  Delete,
  Put,
} from '@nestjs/common';
import { Girl } from './entities/girl.entity';
import { GirlService } from './girl.service';

@Controller('girl')
export class GirlController {
  constructor(private readonly girlService: GirlService) {}
  // 相当于 this.girlService = new GirlService();
  // @Get()
  // getGirls(): ReturnType<GirlService['getGirls']> {
  //   return this.girlService.getGirls();
  // }
  // @Post('add')
  // addGirls(@Body() body): ReturnType<GirlService['addGirls']> {
  //   return this.girlService.addGirls(body);
  // }
  // @Get('getGirlById')
  // getGirlById(@Query() query): ReturnType<GirlService['getGirlById']> {
  //   return this.girlService.getGirlById(query.id);
  // }
  // // 动态路由
  // @Get('findGirlById/:id')
  // findGirlById(
  //   @Param() params,
  //   @Headers() headers,
  // ): ReturnType<GirlService['findGirlById']> {
  //   console.log('headers: ', headers);
  //   return this.girlService.findGirlById(params.id);
  // }
  @Get()
  getGirls() {
    return this.girlService.getGirls();
  }
  @Post('add')
  addGirl(@Body() body: Girl) {
    return this.girlService.addGirl(body);
  }

  @Delete('delete/:id')
  delGirl(@Param() params) {
    const id: number = parseInt(params.id);
    return this.girlService.delGirl(id);
  }

  @Put('update/:id')
  updateGirl(@Body() body) {
    const id: number = parseInt(body.id);
    return this.girlService.updateGirl(id, body);
  }

  @Get('findGirlByName/:name')
  findGirlByName(@Param('name') name: string) {
    return this.girlService.getGirlByName(name);
  }
}
