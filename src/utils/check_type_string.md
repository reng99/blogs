## 检查变量是String类型

有下面这几种方法：

**方法一**：

> 通过typeof

```javascript
function isString(obj) {
    return typeof(obj) === 'string' ? true : false;
}
```

**方法二**：

> 通过constructor

```javascript
function isString(obj) {
    return obj.constructor === String ? true : false;
}
```

**方法三**：

> 通过toString方法

```javascript
function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]' ? true : false;
}
```

说下方法三的原理：`在任何值上调用object原生的toString()方法，都会返回一个[object NativeContructorName]格式的字符串。每个类内部都有一个[[Class]]属性，这个属性中就指定了上述字符串中的构造函数名。`比如：

`Object.prototype.toString.call([]) // '[object Array]'`