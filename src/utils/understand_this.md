## 理解this

在开题之前，你必须明白的一条规律是`this的值并不是由函数定义放在哪个对象里面决定的，而是函数执行时由谁唤起来决定的`。

比如:

```javascript
var name = 'window name';
var obj = {
    name: 'call_me_R',
    sayHi: function() {
        console.log('Hello ' + this.name);
    }
};
obj.sayHi(); // Hello call_me_R
window.fn = obj.sayHi;
window.fn(); // Hello window name
```

**问-当涉及到this关键字，`箭头函数`和`普通函数`主要是不同是什么？**

答：箭头函数按**词法作用域**来绑定它的上下文，所以`this`实际上会引用到原来的上下文。

**问-严格模式下的this**

答：看下下面的例子

```javascript
(function() {
    "use strict";
    console.log(this); // undefined
})();
(function() {
    // 不使用严格模式
    console.log(this); // window
})();
```

`this`在严格模式下指向`undefined`。相对的，非严格模式下`this`指向全局变量`window`。大部分情况下，开发者使用`this`，并不希望它指向全局`window对象`。严格模式帮我们在使用this关键词时，尽量少做搬起石头砸自己脚的事情。
