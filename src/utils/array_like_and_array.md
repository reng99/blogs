## 类数组和数组

### 类数组

什么是类数组？

1. 本身是一个对象，拥有length属性，其他属性（索引）为非负整数。
2. 不具有数组所具有的方法

常见的类数组有：**函数的参数`arugments`，`DOM`对象列表**。

### 判断一个对象是否是类数组

```javascript
function isArrayLike(o) {
    if (o &&                                // o is not null, undefined, etc.
        typeof o === 'object' &&            // o is an object
        isFinite(o.length) &&               // o.length is a finite number
        o.length >= 0 &&                    // o.length is non-negative
        o.length===Math.floor(o.length) &&  // o.length is an integer
        o.length < 4294967296)              // o.length < 2^32
        return true;                        // Then o is array-like
    else
        return false;                       // Otherwise it is not
}
```

### 类数组转化为数组的方法

**1. Array.prototype.slice.call(arrayLike)**

Array.prototype.slice的内部实现：

```javascript
Array.prototype.slice = function(start, end){
    var result = new Array();
    start = start || 0;
    end = end || this.length; //this指向调用的对象，当用了call后，能够改变this的指向，也就是指向传进来的对象，这是关键
    for(var i = start; i < end; i++) {
        result.push(this[i]);
    }
    return result;
}
```

**2. 使用Array.from(arrayLike)**

Array.from()方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组。


根据slice的内部实现，如果类数组索引不以0开头会出现转化不全的情况，`Array.from(arraylike)`也是如此，比如:

```javascript
var a = {1:'asda',2:'aa',length:2};
console.log(Array.prototype.slice.call(a)); //[empty, "asda"]
console.log(Array.from(a)); //[empty, "asda"]
```

### 将数组转化为类数组

可以使用apply方法（它将传入的第二个参数（应该是一个数组）作为函数参数调用调用它的函数）来实现

```javascript
function convertToArrayLike(array) {
    if(array instanceof Array){
        return arguments.callee.apply(this, array)
    }else{
        return arguments;
    }
}
```
