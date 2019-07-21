## 动态规划

动态规划的核心思想就是把原问题分解成子问题进行求解，也就是分治的思想。

斐波那契数列的实现：

使用递归的方案--

```javascript
function recurFib(n) {
    if(n < 2){
        return n;
    } else {
        return recurFib(n-1) + recurFib(n-2);
    }
}
recurFib(10)
```

使用动态规划方法--

```javascript
function dynFib(n) {
    var val = [];
    for (var i = 0; i <= n; i++) {
        val[i] = 0;
    }
    if(n == 1 || n == 2) {
        return 1;
    }
    else {
        val[1] = 1;
        val[2] = 2;
        for(var i = 3; i <= n; i++) {
            val[i] = val[i-1] + val[i-2];
        }
        return val[n-1];
    }
}
dynFib(10)
```