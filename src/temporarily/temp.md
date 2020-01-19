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
  for(let i = 0; i < n; n++){
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



### 参考文件

- https://baijiahao.baidu.com/s?id=1609024533531824968&wfr=spider&for=pc

