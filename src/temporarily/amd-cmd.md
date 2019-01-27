## 关于 AMD,CMD,CommonJS和UMD

### 模块化

>模块化是指在解决某一个复杂问题或者一些列的杂糅问题时，依照一种分类的思维把问题进行系统性的分解以之处理。

网络上专业一点的定义：`模块化是软件系统的属性，这个系统被分解为一组高内聚，低耦合的模块`。

### 关于CommonJS

CommonJS是服务端模块的规范，Node.js就是采用这种规范。

根据CommonJS规范，一个单独的文件就是一个模块。加载模块使用`require`方法，该方法读取一个文件并执行，最后返回内部的`exports对象`。

eg:

```javascript
// foobar.js

let test = 123;

function foobar(){
	this.foo = function (){
        // do something ...
    }

    this.bar = function (){
        // do somethind ...
    }
}

// exports 对象上的方法和变量是公有的
let foobar = new foobar();
exports.foobar = foobar;
```

```javascript
// require 方法默认读取js文件，所以可以省略js后缀
let test = require('./foobar').foobar;

test.bar();
```

CommonJS加载模块是同步的，所以只有加载完成才能执行后面的操作。像Node.js主要用于服务器的编程，加载的模块文件一般都已经存在本地硬盘，所以加载起来比较快，不用考虑异步加载的方式，所以CommonJS规范比较适用。

但是如果是浏览器环境，要从服务器加载模块，这就必须采取异步模式。所以有了AMD CMD解决方案。

### 关于AMD

AMD(Asynchronous Module Definition) 异步模块定义。

> 有待补充...


相关的参考链接： https://segmentfault.com/a/1190000004873947

> npm 包创建  https://juejin.im/post/5a9911b9f265da23793b9881