import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Girl } from './entities/girl.entity';

@Injectable()
export class GirlService {
  constructor(
    @InjectRepository(Girl) private readonly girls: Repository<Girl>,
  ) {}
  /** 添加 */
  addGirl(girl: Girl) {
    return this.girls.save(girl);
  }
  /** 删除 */
  delGirl(id: number) {
    return this.girls.delete(id);
  }
  /** 修改 */
  updateGirl(id: number, data: Girl) {
    return this.girls.update(id, data);
  }
  /** 获取所有 */
  getGirls() {
    return this.girls.find();
  }
  /** 获取名称-模糊查询 */
  getGirlByName(name: string) {
    return this.girls.find({
      where: {
        // 名字模糊查询
        name: Like(`%${name}%`),
      },
    });
  }
  // getGirlById() {
  //   return this.girls.find(1);
  // }
  // getGirls() {
  //   return {
  //     code: 0,
  //     data: ['翠花'],
  //     msg: '成功',
  //   };
  // }
  // addGirls(data) {
  //   return {
  //     code: 200,
  //     data: {
  //       id: 3,
  //       name: '大力',
  //       age: 27,
  //       data,
  //     },
  //     msg: '添加成功',
  //   };
  // }
  // getGirlById(id: number) {
  //   const resJson = {
  //     name: '翠花',
  //     age: 18,
  //     id,
  //   };
  //   return resJson;
  // }
  // findGirlById(id: number) {
  //   const resJson = {
  //     name: '翠花',
  //     age: 18,
  //     id,
  //   };
  //   return resJson;
  // }
}
