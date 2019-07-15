## 快速排序

**快速排序**的关键点是设置基准值和停止递归的判断条件。

```javascript
function quickSort(arr) {
    return quickAux(arr);
}
function quickAux(arr){
    // 停止递归的判断条件
    if(arr.length == 0) return [];
    // 设置基准值
    let pivot = arr[0],
        left = [],
        right = [];
    for(let i = 1; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
    return quickAux(left).concat(pivot, quickAux(right));
}
let demoArr = [6, 3, 10, 8, 9, 4, 2, 1, 2, 5, 90, 0];
let resultArr = quickSort(demoArr);
console.log(resultArr); //  [0, 1, 2, 2, 3, 4, 5, 6, 8, 9, 10, 90]
```