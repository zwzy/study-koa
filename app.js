const Koa = require('koa')
const app = new Koa();

// const fn_router = require('koa-router');
// const router = fn_router();

// 匹配接口路径

const router = require('koa-router')()
// router.get('/path', async fn)处理的是get请求。
// 如果要处理post请求，可以用router.post('/path', async fn)

// post 请求，解析body参数用的
const bodyParser = require('koa-bodyparser');


// 原生写法
// app.use(async (ctx, next) => {
//   if (ctx.request.path === '/') {
//       ctx.response.body = 'index page';
//   } else {
//       await next();
//   }
// });
// router写法
router.get('/hello/:name', async (ctx, next) => {
  var name = ctx.params.name;
  ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

app.use(router.routes()).use(bodyParser()).listen(3000);
console.log('app started at port 3000...');