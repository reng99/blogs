## data 必须是一个函数

原因 ：**一个组建的data必须是一个函数，因此每个实例都可以维护一份被返回对象的独立的拷贝**：

```javascript
data: function() {
    return {
        count: 0
    }
}
```

[vue introduce](https://cn.vuejs.org/v2/guide/components.html#data-%E5%BF%85%E9%A1%BB%E6%98%AF%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0)