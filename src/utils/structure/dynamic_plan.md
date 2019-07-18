## 动态规划

动态规划是求解决策过程最优化的数学方法，将问题拆分成小问题，并从解决小问题作为起点，从而解决问题。

使用递归算法实现**斐波那锲**数列：

```javascript
function recurFib(n){
    if(n < 2){
        return n;
    } else{
        return recurFib(n-1) + recurFib(n-2);
    }
}
console.log(recurFib(10)); // 55
```

我们使用动态规划来写下：

```javascript
function dynFib(n){
    var val = [];
    for(var i = 0; i <= n; i++) {
        val[i] = 0;
    }
    if(n == 1 || n == 2){
        return 1;
    }else {
        val[1] = 1;
        val[2] = 2;
        for(var i = 3; i <= n; i++){
            val[i] = val[i-1] + val[i-2];
        }
        return val[n-1];
    }
}
console.log(dynFib(10)); // 55
```