## javascript中callee 和 caller的作用

1. callee:对象的一个属性，该属性指向参数arguments对象的函数

作用：用来指向当前的对象

返回正被执行的Function对象，也就是所指定的Function对象的正文。

callee是arguments的一个属性成员，它表示对函数对象本身的引用，这有利于匿名函数的递归或者保证函数的封装性。

```javascript
// 首先来写个阶乘函数 公式：n!=n*(n-1)!
function fun1(x){
    if(x <= 1) {
        return 1;
    } else {
        return x * fun1(x - 1);
    }
}

// 这里用到递归函数（在内部调用），若改变函数名，里面的函数名也要跟着改变
// 用callee来写
function fun2(x) {
    if(x <= 1) {
        return 1;
    } else {
        return x * arguments.callee(x - 1);
    }
}
// callee是arguments对象的一个属性，指向arguments对象的函数，这个函数就是fun2(fun2=arguments.callee)
```


2. caller函数对象的一个属性，该属性保存这调用当前函数的函数引用（指向当前函数的直接父函数）

返回一个对函数的引用，该函数调用了当前函数。

functionName.caller

functionName 对象是所执行函数的名称。

```javascript
// caller是函数对象的一个属性，该属性保存着调用当前函数的函数引用（指向当前函数的直接父函数）
function a() {
    b();
}
function b() {
    console.log(b.caller);
}
b(); // 打印出函数a
// 函数b的属性caller调用当前函数b的函数引用a（就是指向当前函数b的父函数a），所以结果就是打印出function a(){ b();};
```

3. callee和caller结合

```javascript
(function a(){
    b()
})();
function b() {
    console.log(arguments.callee.caller);
}
// arguments.callee代替了b函数
```

应用场景：

- callee的应用场景一般用于匿名函数
- caller的应用场景主要是用于查看函数本身被哪个函数调用



















