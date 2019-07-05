## 发布-订阅模式

观察者模式又叫**发布-订阅模式**(Publish/Subscribe)，它定义了一种`一对多`的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生改变时就会通知所有的观察者对象，使得它们能够自动更新自己。

### 观察者模式作用和注意事项

**模式作用：**

1. 支持简单的广播通信，自动通知所有已经订阅过的对象。
2. 页面载入之后目标对象很容易与观察者存在一种动态关联，增加了灵活性
3. 目标对象与观察者之间的抽象耦合关系能够单独扩展以及重用。

**注意事项：**

1. 监听要在触发之前。

### 案例

以jquery为例：

```javascript
<script src="./jquery.js"></script>
<script type="text/javascript">
//jquery的执行
~(function(){
    var o = $({});
    $.jianting = function(){
        o.on.apply(o,arguments);
    }
    $.fabu = function(){
        o.trigger.apply(o,arguments);
    }
    $.qingchu =  function(){
        o.off.apply(o,arguments);
    }
})()
$.jianting('/test/ls',function(e,a,b,c){
    console.log(a + '||' + b + '||' + c);
})
$.jianting('/test/ls',function(e,a,b,c){
    console.log('ok');
})
$.fabu('test/ls',[1,2,3]);
</script>
```

