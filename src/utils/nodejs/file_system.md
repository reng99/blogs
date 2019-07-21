## fs文件系统

### fs.Stats类

`fs.Stats`对象提供有关文件的信息。

```javascript
const fs = require('fs');
fs.stat('./text.txt', (err, status) => {
    if(err) throw err;
    console.log(status);
})
```

### fs.open(path[, flags[, mode]], callback)

- path 文件名称
- flags 支持的文件系统标志
- mode 用于创建文件时给文件制定权限， 默认值 `0o666`
- callback 回调函数；
  - err
  - fd 文件的描述符

flags的的文件打开方式：

- 'r' 以读取模式打开；（如果文件不存在，会报错）
- 'r+' 以读取模式打开；（如果文件不存在，会报错）
- 'w' 以读写模式打开；（如果文件不存在，会创建新的文件）
- 'w+' 以读写模式打开；（如果文件不存在，会创建新的文件）
- 'a' 以追加模式打开;（如果文件不存在，会创建新的文件）
- 'a+' 以读取和追加模式打开（如果文件不存在，会创建新的文件）

```javascript
const fs = require('fs');

fs.open('./text.txt', 'r', function(err, fd){
    if(err) throw err;
    console.log(fd);
    // do something
})
```

### fs.close(fd[, callback])

- fd 所打开文件的文件描述符
- callback 回调函数
  - err

```javascript
const fs = require('fs');
fs.open('./text.txt', 'r', function(err, fd){
    if(err) throw err;
    console.log('open file success');
    fs.close(fd); // 关闭文件
})
```




### fs.read(fd, buffer, offset, length, position, callback)

- fd 指定的文件中读取数据
- buffer 是读取的数据将要存储在buffer中
- offset 在buffer中开始存储的偏移量
- length 是一个整数，要读取的字节数
- position 指定从文件中开始读取的位置
- callback 回调函数
  - err
  - bytesRead 
  - buffer 代表读取的内容

```javascript
const fs = require('fs');

// 打开文件
fs.open('./text.txt', 'r', function(err, fd) {
    if(err) throw err;
    console.log('open file success.');
    var buf = Buffer.alloc(1024);
    // 读取文件
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytesRead, buffer) {
        if(err) throw err;
        // 打印出buffer中存入的数据
        console.log(bytesRead, buffer.slice(0, bytesRead).toString());
 
        // 关闭文件
        fs.close(fd, function(err){
            if(err) throw err;
        });
    });
});
```

### fs.writeFile(file, data[, options], callback)

- callback 回调函数
  - err 

将buffer写入到指定的文件。

````javascript
var fs = require("fs");
fs.writeFile("./text.txt","\r\n我是要写入的text.txt文件的内容\r\n",{flag:"a"},function (err) {
    if(err){
        return console.log(err);
    }else {
        console.log("写入成功");
    }
})
```

还有其他实际开发中看文档就可以了...