const fs = require('fs');

// 读取文件
fs.readFile(__dirname + '/assets/test.txt', 'utf-8', function(err, data){
  if (err) {
      console.log('err', err)
    } else {
      console.log('txt', data)
  }
})
// 读取二进制文件
fs.readFile(__dirname + '/assets/avator.jpg', function(err, data){
  if (err) {
      console.log('err', err)
    } else {
      const res = 'data:image/png;base64,' + new Uint8Array(data).reduce((data, byte) => data + String.fromCharCode(byte), '')
  }
})
// 同步获取文件
const syncData = fs.readFileSync(__dirname + '/assets/test.txt', 'utf-8');

// 写文件
function writeFile(fileName, data) {
  fs.writeFileSync(fileName, data)
}
writeFile(__dirname + '/assets/test1.txt', '这是一个test1测试')

// 获得文件详情
const info = fs.statSync(__dirname + '/assets/test.txt')
console.log('文件详情', info);