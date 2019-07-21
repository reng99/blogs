## events事件触发器

采用了发布者订阅者的模式。

下面给出一个例子：

```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => { //  可以使用 ES6 的箭头函数作为监听器。但 this 关键词不会指向 EventEmitter 实例：
    console.log(a, b, this);
    // 打印: a b {}
})
myEmitter.emit('event', 'a', 'b')
```

更多的使用情况，在实际开发中查看下文档就ok了～