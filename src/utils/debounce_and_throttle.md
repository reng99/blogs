## 防抖和节流

**防抖和节流**是针对响应跟不上触发频率这类问题的两种解决方案。

### 防抖

> 防抖：在滚动事件中需要做个复杂计算或者实现一个按钮的防二次点击操作。可以通过函数防抖动来实现。【执行最后一次】

```javascript
window.onload = function() {
    const debounce = function(fn, delay) {
        let timer = null;
        return function() {
            console.log('carry out');
            const context = this;
            let args = arguments;
            clearTimeout(timer); // 每次调用前都会将前一次的timer清空
            timer = setTimeout(() => {
                console.log(context); // document
                fn.apply(context, args);
            }, delay);
        }
    }
    let num = 0;
    function scrollTap() {
        num++;
        console.log(`current num is ${num}`);
    }
    document.addEventListener('scroll', debounce(scrollTap, 500));
}
```

### 节流

> 节流：防抖和节流的本质是不一样的。防抖是将多次执行变成最后一次执行；节流是将多次执行变成每隔一段时间执行。【每隔一个时间段执行一次】

```javascript
window.onload = function() {
    const throttle = function(fn, delay) {
        let timer = null;
        return function() {
            console.log('carry out');
            const context = this;
            let args = arguments;
            console.log(context); // document
            if(!timer) {
                timer = setTimeout(() => {
                    fn.apply(context, args);
                    timer = null;
                }, delay);
            }
        }
    }
    let num = 0;
    function scrollTap() {
        num++;
        console.log(`current num is ${num}`);
    }
    document.addEventListener('scroll', throttle(scrollTap, 1000));
}
```
