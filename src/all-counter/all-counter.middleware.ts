export function allCounterMiddleware(req, res, next) {
  console.log('all-中间件');
  next();
}
