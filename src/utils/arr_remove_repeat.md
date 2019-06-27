## 数组去重

常用的方法如下：

```javascript
// 使用es6 set集合
let arr = ['reng', 'reng', 'jia'];
let result = [...new Set(arr)];
console.log(result); // ['reng', 'jia']
```

```javascript
// 使用includes
let arr = ['reng', 'reng', 'jia'];
let result = [];
arr.forEach(function(item) {
    if(!result.includes(item)) {
        result.push(item);
    }
});
console.log(result); // ['reng', 'jia']
```

```javascript
// 使用indexOf
let arr = ['reng', 'reng', 'jia'];
let result = [];
arr.forEach(function(item) {
    if(result.indexOf(item) == -1) {
        result.push(item);
    }
});
console.log(result); // ['reng', 'jia']
```