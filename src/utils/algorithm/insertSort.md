## 插入排序

关键点：往已经处理好的有序序列中添加元素。

```javascript
// 从小到大排序
function insertSort(arr) {
    for(let outer = 1; outer < arr.length; outer++) {
        let temp = arr[outer],
            inner = outer;
        while(inner > 0 && arr[inner-1] > temp){
            arr[inner] = arr[inner-1]; // 对已经排好序的数组进行插入的关键点
            inner--;
        }
        arr[inner] = temp;
    }
    return arr;
}
let demoArr = [6, 3, 10, 8, 9, 4, 2, 1, 2, 5, 90, 0];
let resultArr = insertSort(demoArr);
console.log(resultArr); // [0, 1, 2, 2, 3, 4, 5, 6, 8, 9, 10, 90]
```