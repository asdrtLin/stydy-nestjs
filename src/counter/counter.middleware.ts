import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CounterMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('counter 中间件');
    // 拦截访问
    res.send('禁止访问');
  }
}
