import { Injectable } from '@nestjs/common';

@Injectable()
export class GirlService {
  getGirls() {
    return {
      code: 0,
      data: ['翠花'],
      msg: '成功',
    };
  }
  addGirls(data) {
    return {
      code: 200,
      data: {
        id: 3,
        name: '大力',
        age: 27,
        data,
      },
      msg: '添加成功',
    };
  }
  getGirlById(id: number) {
    const resJson = {
      name: '翠花',
      age: 18,
      id,
    };
    return resJson;
  }
  findGirlById(id: number) {
    const resJson = {
      name: '翠花',
      age: 18,
      id,
    };
    return resJson;
  }
}
