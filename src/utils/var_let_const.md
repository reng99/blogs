## var、let和const

**var、let和const**三个都是声明变量，但是它们又各有千秋。

### var和let/const的区别：

**1. 块级作用域**

```javascript
for(var i = 0; i < 10; i++) {
    setTimeout(()=>{
        console.log(i); // 一秒后输出10次10
    }, 1000)
}
```

```javascript
for(let i = 0; i < 10; i++) {
    setTimeout(()=>{
        console.log(i); // 一秒后依次输出0、1、2、3、4、5、6、7、8、9
    }, 1000)
}
```

**2. 不存在变量提升**

```javascript
console.log(a); // undefined
var a = 100;
```

```javascript
console.log(b);
let b = 50;
// 有报错信息：VM353:1 Uncaught ReferenceError: Cannot access 'b' before initialization
```

**3. 暂时性死区**

暂时性死区：只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

```javascript
var tmp = 123;

if (true) {
   tmp = 'abc'; // ReferenceError
   let tmp;
}
```

上面代码中，存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。

ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。

**4. 不可重复声明**

```javascript
var a = 100;
var a = 1000;
console.log(a); // 1000
```

```javascript
let b = 10;
let b = 5;
console.log(b);
// 报错： VM89:2 Uncaught SyntaxError: Identifier 'b' has already been declared
```

**5. let、const生命的变量不会挂在顶层对象下面**

```javascript
var age = 18;
console.log(window.age); // 18
```

```javascript
let height = '122';
console.log(height); // undefined
```

### const命令注意点

1. `let`可以先声明稍后赋值；而`const`在声明之后必须马上赋值，否则会报错

2. const`简单类型`一旦声明就不能更改；`复杂类型（数组、对象等）`指针指向的地址不能更改，内部数据可以更改

### let和const的使用场景

1. `let`使用场景：变量，用以代替`var`

2. `const`使用场景：常量、声明匿名函数、箭头函数的时候。

```javascript
// 匿名函数
const Fn1 = function() {
    // do something
}

// 箭头函数
const Fn2 = () => {
    // do something
}
```