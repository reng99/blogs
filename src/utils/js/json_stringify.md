## JSON.stringify()

`JSON.stringify()`将对象转换成字符串。

```javascript
var obj = {name: 'jiaming'}
console.log(JSON.stringify(obj)); // {"name":"jiaming"}
```

使用stringify和parse实现对象的深拷贝。

原理：

1. 先通过stringify将对象转换成基本的数据类型string
2. 再通过parse将字符串转换为对象

比如：

```javascript
var obj = {name: 'jiaming'}

var obj2 = JSON.parse(JSON.stringify(obj));

obj2.age = 10;

console.log(obj2); // {name: "jiaming", age: 10}

console.log(obj); // {name: "jiaming"}
```

### 问：JS怎样判断一个对象是否存在"环"？

当要转化的对象有“环”存在时（子节点属性赋值了父节点的引用），为了避免死循环，JSON.stringify 会抛出异常，例如：

```javascript
const obj = {
  foo: {
    name: 'foo',
    bar: {
      name: 'bar'
      baz: {
        name: 'baz',
        aChild: null  //待会让它指向obj.foo
      }
    }
  }
}
obj.foo.bar.baz.aChild = obj.foo // foo->bar->baz->aChild->foo 形成环
JSON.stringify(obj) // => TypeError: Converting circular structure to JSON
```

请完善以下“环”检查器函数 cycleDetector，当入参对象中有环时返回 true，否则返回 false。

```javascript
function cycleDetector(obj) {   
  // 请添加代码
}
```

**方法一**：

非严格模式下哦，严格模式下的arguments.callee会报错

```javascript
function cycleDetector(obj) {
    let hasCircle = false;
    let cache = [];
    (function(obj){
        Object.keys(obj).forEach(key => {
            let value = obj[key];
            if(typeof value === 'object' && value !== null) {
            let index = cache.indexOf(value);
            if(index !== -1) {
                hasCircle = true;
                return;
            }else {
                cache.push(value);
                arguments.callee(value);
            }
            }
        })
    })(obj)
    return hasCircle;
}
```

**方法二**：

使用`try catch finally`

```javascript
function cycleDetector(obj) {
    let hasCircle = false;
    try {
      JSON.stringify(obj);
    } catch (e) {
      hasCircle = true;
    } finally {
      return hasCircle;
    }
  }
```




