## 路径path

`path`模块提供用于处理文件路径和目录路径的使用工具。

### path.extname(path)

文件路径的扩展名：

```javascript
const path = require('path');
console.log(path.extname('./text.txt')); // .txt
```

### path.join([...paths])

- `...path` string 路径片段的序列
- 返回string

连接路径:

```javascript
const path = require('path');
console.log(path.join('./text', 'name')); // text/name
```

### path.normalize(path)

- path string类型
- 返回string


对路径进行序列化：

```javascript
const path = require('path');
path.normalize('/foo/bar//baz/asdf/quux/..');
// 返回: '/foo/bar/baz/asdf'
```

### path.resolve([...path])

对路径进行分解合并

- `...path` string 路径或者路径片段的序列
- 返回string

```javascript
path.resolve('/foo/bar', './baz');
// 返回: '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/');
// 返回: '/tmp/file'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// 如果当前工作目录是 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'
```
