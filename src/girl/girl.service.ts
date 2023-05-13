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
  addGirls() {
    return {
      code: 200,
      data: {
        id: 3,
        name: '大力',
        age: 27,
      },
      msg: '添加成功',
    };
  }
}
