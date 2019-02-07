### 简述js

> 下面的内容是javascript的简单概述

```bash
    . ES5
    │
    ├── 浏览器兼容的历史
    │       ├── Netscape 于1995年发布JavaScript
    │       └── 微软于1996年发布JScript
    │
    ├── JavaScript构成
    │       ├── ECMAScript(核心)
    │       ├── DOM(文档对象模型)
    │       └── BOM(浏览器对象模型)
    │
    ├── [当前五大浏览器](https://www.kuyh.com/642.html)
    │       ├── IE
    │       ├── Firefox
    │       ├── Chrome
    │       ├── Safari
    │       └── Opera
    │
    ├── ES5的数据类型
    │       ├── 基本数据类型: Undefined,Null,Boolean,Number和String       
    │       └── 复杂数据类型: Object
    │
    ├── 函数参数传递方式（高3说的是按值传递，个人理解是栈区）
    │       ├── 基本类型（按值传递--栈区）
    │       └── 引用类型（按值传递--栈区，按引用传递--堆区）
    │
    ├── 垃圾收集(自动垃圾收集机制)
    │       ├── 标记清除（离开作用域的值将被自动标记为可回收）
    │       ├── 引用计数（IE9后消除了这种原因导致的内存泄漏问题）
    │       ├── 性能问题（周期性进行垃圾回收）
    │       └── 管理内存（解除引用，为执行中的代码只保留必要的数据）
    │
    ├── [引用类型](https://www.cnblogs.com/guorange/p/6657765.html?utm_source=itdadao&utm_medium=referral)
    │       ├── Object
    │       ├── Array
    │       ├── Date
    │       ├── RegExp
    │       ├── Function
    │       ├── 基本包装类型（是基本类型也是引用类型）所以对应的基本类型值可以当作对象来访问
    │       │       ├── Boolean
    │       │       ├── Number
    │       │       └── String
    │       │
    │       └── 当体内置对象
    │               ├── Global对象
    │               └── Math对象
    │
    │
    ├── 函数length和prototype属性
    │       ├── length（函数希望接收的命名参数的个数）
    │       └── prototype（它是保存引用类型所有实例方法的真正所在）
    │
    ├── [函数中的call()和apply()方法](https://www.cnblogs.com/phoebeyue/p/9216514.html)
    │       ├── call 设置函数体内this的指向。参数传值(obj,arg1,arg2)
    │       └── apply 设置函数体内this的指向。参数传值(obj,[arg1,arg2])
    │
    ├── 对象属性类型（通过Object.defineProperty进行定义）
    │       ├── 数据属性（[[Configurable]],[[Enumerable]],[[Writable]],[[Value]]）
    │       └── 访问器属性（[[Configurable]],[[Enumerable]],[[Get]],[[Set]]）
    │
    ├── 创建对象
    │       ├── 工厂模式（解决了创建多个相似对象的问题，没有解决对象识别的问题）
    │       ├── 构造函数模式
    │       ├── 原型模式
    │       ├── 
    │
    │
    │
    │
    │
    │
    │
    │
    │
    │
    │
    │
    │
    │
    └──
```