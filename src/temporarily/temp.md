## 算法的时间复杂度

**一个算法在执行过程中所消耗的时间取决于下面的因素：**

1. 算法所需数据输入的时间
2. 算法编译为可执行程序的时间
3. 计算机执行每条指令所需的时间
4. 算法语句重复执行的次数

上面的因素中，`1`依赖于输入设备的性能，若是[脱机]([https://baike.baidu.com/item/%E8%84%B1%E6%9C%BA%E5%A4%84%E7%90%86/10173514?fr=aladdin](https://baike.baidu.com/item/脱机处理/10173514?fr=aladdin))输入，则输入数据的时间可以忽略不计；`2, 3`取决于计算机本身执行的速度和编译程序的性能。因此，习惯上将**算法语句重复执行的次数**作为算法的时间度量。

比如：

```javascript
// 'x = x + 1'执行一次
function add(x, y){
  x = x + 1
}

// 'x = x + 1'执行n次
function map_add(x, n) {
  for(let i = 0; i < n; i++){
    x = x + 1
  }
}

// 'x = x + 1'执行n²
function loop_add(x, n) {
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      x = x + 1
    }
  }
}
```

上面功能代码只是演示了下`x + 1`执行的次数，那上面的功能代码总共执行了多少次呢？见下面：

```javascript
function add(x, y){
  x = x + 1 // 执行1次
  // 总执行1次
}

function map_add(x, n) {
  for(let i = 0; i < n; i++) { // 执行n+1次
    x = x + 1 // 执行n 次
  }
  // 总执行(n+1)+n，即2n+1次
}

function loop_add(x, n) {
  for(let i = 0; i < n; i++) { // 执行n+1次
    for(let j = 0; j < n; j++) { // 执行n*(n+1)次
      x = x + 1 // 执行 n*n
    }
  }
    // 总执行(n+1)+n*(n+1)+n*n，即2n²+2n+1
}
```

### 时间复杂度

**`时间频度`：一个算法中的语句执行次数称为语句频度或时间频度。**

一个算法执行所消耗的时间，从理论上是不能够算出来的，必须上机测试才知道。

### 参考文件

- https://baijiahao.baidu.com/s?id=1609024533531824968&wfr=spider&for=pc
- https://github.com/reng99/blogs/issues/5
- 各个排序的算法的时间复杂度 https://blog.csdn.net/qq_30815237/article/details/90766878

