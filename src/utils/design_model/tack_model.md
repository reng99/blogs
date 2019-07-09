## 策略模式

### 概念

策略模式定义了算法家族，分别封装起来，让他们之间可以互相替换，此模式让算法的变化不会影响到使用算法的客户。

### 作用和注意事项

#### 作用

1. 所有的这些算法都是做相同的事情，只是实现不同。

2. 以相同的方式调用所有的方法，减少了各种算法类与使用算法类直接耦合。

3. 单独定义算法类，也方便了单元测试。


#### 注意事项

1. 不仅可以封装算法，也可以用来封装几乎任何类型的规则，是要在分析过程中需要在不同时间应用不同的业务规则，就可以考虑是要策略模式来处理。


### 代码实战

```javascript
var $input = $('#input').val();
var val = {
    isEmpty: function(argument){
        return false
    },
    isTel: function() {
        return true
    }
}

// 不推荐
var ise = val.isEmpty($input);
var isTel = val.isTel($input);
if(!ise && isTel) {
    console.log('通过审核');
}

// 策略模式
$.input.val({
    isEmpty: false,
    isTel: true
})
```