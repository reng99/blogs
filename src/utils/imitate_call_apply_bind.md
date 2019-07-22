## 模拟call、apply和bind

我在文章[谈谈JavaScript中的call、apply和bind](https://github.com/reng99/blogs/issues/29)中有详细的介绍了。我下面直接列出模拟的代码吧：

**模拟call**

```javascript
Function.prototype.call2 = function(context, ...args){
    context = context || window; // 因为传递过来的context有可能是null
    context.fn = this; // 让fn的上下文是context
    const result = context.fn(...args);
    delete context.fn;
    return result; // 因为有可能this函数会有返回值return
}
```

**模拟apply**

```javascript
Function.prototype.apply2 = function(context, arr){
    context = context || window; // 因为传递过来的context有可能是null
    context.fn = this; // 让fn的上下文为context
    arr = arr || []; // 对传进来的数组参数进行处理
    const result = context.fn(...arr); // 相当于context.fn(arguments[1], arguments[2], ...)
    delete context.fn;
    return result; // 因为有可能this函数会有返回值return
}
```

**模拟bind**

```javascript
Function.prototype.bind2 = function(context, ...args){
    var fn = this; 
    return function () { // 这里不能使用箭头函数，不然参数arguments的指向就很尴尬了，指向父函数的参数
        fn.call(context, ...args, ...arguments); // 不能直接使用this.call(context, ...args, ...arguments), this指向错误，指到了window
    }
}
```
