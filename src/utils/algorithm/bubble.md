## 冒泡排序

```javascript
// 由小到大的排列顺序
function bubble(arr) {
    for(let outer = 0; outer < arr.length-1; outer++) {
        for(let inner = 0; inner < arr.length - outer; inner++) {
            if(arr[inner] > arr[inner+1]){
                let temp;
                temp = arr[inner];
                arr[inner] = arr[inner+1];
                arr[inner+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubble([3, 2, 5, 9, 8, 3])); // [2, 3, 3, 5, 8, 9]
```