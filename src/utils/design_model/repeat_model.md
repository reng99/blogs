## 迭代器模式

### 概念

**迭代器模式**提供了一种方法顺序访问一个聚合对象中各个元素，而又不需要暴露该方法中的内部表示。

jquery中我们经常会用到一个each函数就是迭代器模式。

### 作用和注意事项

#### 作用

1. 为遍历不同的集合结构提供一个统一的接口，从而支持同样的算法在不同的集合结构上进行操纵。

2. 对于集合内部结果常常变化各异，我们不想暴露其内部结构的话，但又想让客户代码透明访问其中的元素，这种请情况下我们可以使用迭代器模式

#### 注意事项

1. 一般的迭代，我们至少要有两个方法，`hasNext()`和`Next()`，这样才做到遍历所有对象。

2. 遍历的同时更改迭代器所在的集合结构可能会导致问题（比如C#的foreach里不允许修改item）

### 代码实战

```javascript
var arr = [1, 2, 3];
var diedai = (function() {
    var length = arr.length;
    var index = 0;
    return {
        hasNext: function() {
            return index < length;
        },
        next: function() {
            data = arr[index];
            index = index + 1;
            return data;
        }
    }
})();
while(deidai.hasNext()) {
    console.log(deidai.next())
}
```



