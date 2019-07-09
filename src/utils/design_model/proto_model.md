## 原型模式

### 概念

**原型模式**（prototype）是指原型实例指向创建对象的种类，并且通过拷贝这些原型创建新的对象。

### 作用和注意事项

#### 作用

1. 原型对象本身就是有效地利用了每个构造器创建的对象

#### 注意事项

1. 注意的依然是浅拷贝和深拷贝的问题，免得出现引用问题。

### 代码实战

```javascript
// 原型
var myobj = {
    str: 'mystring',
    num: 1,
    myarr: [30, {
        arrgo: 'I am arr'
    }],
    obj: {
        innerObj: {
            test: 25
        },
        innerStr: 'myobjInnerstr'
    }
}

// 浅拷贝
function clone(obj) {
    var ret = {}, k;
    for(k in obj) {
        ret[k] = obj[k];
    }
    return ret;
}
var result = clone(myobj);
result.obj.innerStr = 'outter';
console.log(result);

// 深拷贝
function clone1(obj) {
    var ret = {}, k, b;
    if((b=(obj instanceof Array)) || obj instanceof Object){
        ret = b?[]:{};
        for(k in obj) {
            if(obj[k] instanceof Array || obj[k] instanceof Object) {
                ret[k] = clone1(obj[k]);
            } else {
                ret[k] = obj[k];
            }
        }
    }
    return ret;
}
//  深拷贝二
funciton clone2(obj) {
}
clone2.prototype = Object.create(myobj);
```



