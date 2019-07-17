## 观察者模式

### 概念

观察者模式又叫**发布订阅模式**（Publish/Subscribe），它定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生变化时就会通知所有的观察者对象，使得他们能够自动更新自己。

### 作用和注意事项

#### 作用

1. 支持简单的广播通信，自动通知所有已经订阅过的对象。

2. 页面载入后目标对象很容易与观察者存在一种动态的关联，增加了灵活性。

3. 目标对象与观察者直接的抽象耦合关系能够单独扩展以及重用。

#### 注意事项

1. 监听要在触发之前

### 实战演示

```javascript
(function(){
    var o = $({}); // 转换称jquery对象
    $.jianting = function() {
        o.on.apply(o, arguments);
    }
    $.fabu = function() {
        o.trigger.apply(o, arguments);
    }
    $.qingchu = function() {
        o.off.apply(o, arguments);
    }
})()
$.jianting('/test/ls', function(e, a, b, c){
    console.log(a + b + c);
})
$.fabu('test/ls', [1, 2, 3]);
```

再来个演示代码：

```javascript
var Observer = (function(){
    var _message = {};
    return {
        subscribe(type, fn) {
            if(_message[type]) {
                _message[type].push(fn);
            } else {
                _message[type] = [fn];
            }
        },
        publish(type, ...args) {
            if(!_message[type]) {
                return;
            }
            _message[type].forEach(item => {
                item.apply(this, args);
            });
        },
        unsubscribe(type, fn) {
            if(!_message[type]) {
                return;
            }
            if(fn) {
                _message[type].forEach(function(item, index) {
                    item === fn && _message[type].splice(index, 1);
                });
            } else {
                _message[type] = null;
            }
        }
    }
})();
```

### 参考文章

https://juejin.im/post/5c0a9d9bf265da612909ff1b
