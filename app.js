const Koa = require('koa')
const app = new Koa();

// 文件模块学习
// require('./demo/test-fs.js');

// 文件流学习
require('./demo/test-stream.js');

// post 请求，解析body参数用的
const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

app.use(controller()).use(bodyParser()).listen(3000);
console.log('app started at port 3000...');