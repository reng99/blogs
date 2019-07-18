## data 必须是一个函数

原因 ：**一个组建的data必须是一个函数，因此每个实例都可以维护一份被返回对象的独立的拷贝**：

```javascript
data: function() {
    return {
        count: 0
    }
}
```