## 命令模式

### 概念

**命令模式**(Command)的定义是：用来对方法调用进行参数化处理和传达，经过这样处理的方法调用可以在任何需要的时候执行。也就是说该模式旨在将函数的调用、请求和操作封装称一个单一的对象，然后对这个对象进行一些列的处理。它也可以用来消除调用操作的对象和实现操作的对象之间的耦合。这为各种具体的类的更换带来了极大的灵活性。

### 作用和注意事项

#### 作用

1. 将函数的封装、请求、调用结合为一体

2. 调用具体的函数解耦命令对象与接收对象

3. 提高程序模块化的灵活性

#### 注意事项

1. 不需要接口一致，直接调用函数即可，以免造成浪费

### 代码实战

```javascript
var lian = {};
lian.paobing = function(pao_num) {
    console.log('pao'+pao_num);
}
lian.bubing = function(bubing_num) {
    console.log('bubing'+bubing_num);
}
lian.lianzhang = function(mingling) {
    lian[mingling.type](mingling.num);
}
// 总司令开始发命令
lian.lianzhang({
    type: 'paobing',
    num: 100
});
lian.liangzhang({
    type: 'bubing',
    num: 500
})
```



