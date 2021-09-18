// 流其实就是读取文件时的生命周期
const fs = require('fs');

// // 以文件流的形式写入
// const rs = fs.createReadStream(__dirname + '/assets/test.txt')
// rs.on('data', function (chunk) {
//   console.log(1, chunk)
// })
// rs.on('data', function (chunk) {
//   console.log(2, chunk)
// })
// rs.on('end', function () {
//   console.log('END');
// });
// rs.on('error', function (err) {
//   console.log('ERROR: ' + err);
// });

// // 以文件流形式写入
// const write_rs = fs.createWriteStream(__dirname + '/assets/test.txt')
// write_rs.write('第一步写入\n')
// write_rs.write('第二步写入\n')
// write_rs.write('第三步写入\n')
// write_rs.end();

// 以文件流形式复制文件

const copy_rs = fs.createReadStream(__dirname + '/assets/test.txt');
console.log(123, copy_rs);
const copy_ws = fs.createWriteStream(__dirname + '/assets/test-copy.txt');
// copy_rs.pipe(copy_ws) // 因为这时rs文件自动end关闭
copy_rs.pipe(copy_ws, { end: false }) 