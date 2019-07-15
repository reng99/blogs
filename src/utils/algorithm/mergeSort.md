## 归并排序

思想：分而治之【分治法】

```javascript
// 从小到大排序
function mergeSort(arr) {
    if(arr.length == 1) return arr;
    // 分治法，取中间值
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    let result = [];
    let il = 0;
    let ir = 0;
    // left, right本身肯定从大到小拍好序了
    while(il < left.length && ir < right.length) {
        if(left[il] < right[ir]){
            result.push(left[il]);
            il++;
        } else{
            result.push(right[ir]);
            ir++;
        }
    }
    // 不能同时存在left和right都有余项的情况，要么left要么right有余项，把余项加进来就可以了
    while(il < left.length) {
        result.push(left[il]);
        il++;
    }
    while(ir < right.length) {
        result.push(right[ir]);
        ir++;
    }
    return result;
}
let demoArr = [6, 3, 10, 8, 9, 4, 2, 1, 2, 5, 90, 0];
let resultArr = mergeSort(demoArr);
console.log(resultArr); // [0, 1, 2, 2, 3, 4, 5, 6, 8, 9, 10, 90]
```
