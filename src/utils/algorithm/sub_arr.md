## 数组判断子集的问题

需求：两个顺序排列的数组A和B 求B数组是否为A的子集(数组内肯呢个有重复的数字)?用js实现

### 解决方案

**1. 方案一**：用双重循环实现，时间复杂度为O(n*n)

这里的答案就不写了

**2. 方案二**：直接一个循环，时间复杂度为O(n)

代码如下：

```javascript
Array.prototype.isSubArrayOf = function(a){
  if(!a || !(a instanceof Array)) return false;

  let b = this;
  let aLength = a.length, bLength = b.length;
  if(aLength < bLength) return false;

  let indexA = 0, indexB = 0;

  while(indexB < bLength && indexA < aLength ) {
    let tempA = a[indexA], tempB = b[indexB];

    if(tempB === tempA) {
      indexA++;
      indexB++;
    } else if(tempB > tempA) {
      indexA++;
    } else {
      return false;
    }
  }

  return indexB === bLength;
}
```