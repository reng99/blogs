## 选择排序

关键点： 每次循环寻找最大值/最小值的下标。

```javascript
// 从小到大排序
function selectSort(arr) {
    for(let outer = 0; outer <= arr.length-2; outer++) {
        let minIndex = outer;
        for(let inner = outer+1; inner < arr.length; inner++) {
            if(arr[minIndex] > arr[inner]) {
                minIndex = inner; // 关键点，寻找最小元素的下标
            }
        }
        let temp = arr[outer];
            arr[outer] = arr[minIndex];
            arr[minIndex] = temp;
    }
    return arr;
}
let demoArr = [6, 3, 10, 8, 9, 4, 2, 1, 2, 5, 90, 0];
let resultArr = selectSort(demoArr);
console.log(resultArr); // [0, 1, 2, 2, 3, 4, 5, 6, 8, 9, 10, 90]
```