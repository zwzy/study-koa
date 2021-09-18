# fs 文件模块

### 1、异步读文件

```
const fs = require('fs');
fs.readFile('1.txt', 'utf-8', function(err, data){
  if (err) {
      console.log(err)
    } else {
      console.log(data)
  }
})

// 读二进制文件 例图片
fs.readFile('user.png', function(err, data) {
  if(err) {
    console.log(err)
  } else {
    console.log(data)
  }
})
```

### 2、同步读文件
