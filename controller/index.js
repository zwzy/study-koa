const fs = require('fs');

// 增加Route映射
function addMapping(router, mapping) {
  console.log('addMapping', router, mapping);
  for (const url in mapping) {
    const typeStr = url.split(' ')[0] // GET | POST
    const path = url.split(' ')[1] // /login | /logout
    if(!typeStr || !path) {
      console.log('方法类型问题或路径问题')
    }
    // 匹配接口路径
    // router.get('/path', async fn)处理的是get请求。
    // 如果要处理post请求，可以用router.post('/path', async fn)
    switch (typeStr) {
      case 'GET':
        router.get(path, mapping[url]);
        break;
      case 'POST':
        router.post(path, mapping[url]);
        break;
      default:
        console.log(`invalid URL: ${url}`)
        break;
    }
  }
}

function addControllers(router) {
  const files = fs.readdirSync(__dirname)
  const routes_files = files.filter(file => file.endsWith('.js') && file!=='index.js')
  routes_files.forEach(file=>{
    const mapping = require(`${__dirname}/${file}`)
    addMapping(router, mapping)
  })
}

module.exports = function () { 
  // const fn_router = require('koa-router');
  // const router = fn_router();
  const router = require('koa-router')()
  addControllers(router)
  return router.routes()
};