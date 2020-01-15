## 【译】算法的笔记

### 目录

- 线性查找（done）
- 二分查找（done）
- 冒泡排序（doing）
- 选择排序
- 插入排序
- 递归
- 归并排序

### 线性搜索

为了搜索一个目标元素，从数组的左侧到右侧进行遍历。

伪代码示例#1:

```bash
Repeat, starting at the first element:
  If the element is the target element, stop
  Else, move to the next element
```

伪代码示例#2:

```bash
For i from 0 to n-1
  If i'th element is target_element
    Reture true
  Reture false
```

`JavaScript`语言示例:

```javascript
linearSearch = (arr, target) => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === target) return true;
  }
  return false
}
```

**线性搜索算法**

- **最坏的情况：**

如果目标元素在数组的最后一个或者不在数组中，需要遍历整个含有`n`个元素的数组。用大O表示法，这会被转换成O(n)。

- **最好的情况：**

目标元素是第一个元素。用大O表示法，这会被转换成Ω(1)。

### 二分查找

为了找到目标元素，每次可以通过减少搜索区域的一半来查找。二分查找算法是针对有序的数组进行，否则毫无意义。

伪代码示例#1:

```bash
Repeat until the (sub)array is of size 0:
  Calculate the middle point of the current (sub)array
  If the target element is the middle element, stop
  Else if it's less than the middle:
    End point is now just to the left of the current middle, repeat
  Else if it's greater then the middle:
    Start point is now just to the right of the current middle, repeat
```

伪代码示例#2:

```bash
If no items
  Return false
If middle item is target_element
  Return  true
Else if target_element < middle item
  Update end point
  Search left half
Else if target_element > middle item
  Update start point
  Search right half
```

`JavaScript`语言示例（递归）:

```javascript
binarySearch = (arr, target, start, end) => {
  if(end >= start) {
    let mid = Math.floor((start+end)/2);
    if(arr[mid] === target) return mid;
    else if(arr[mid] > target) return binarySearch(arr, target, start, mid-1);
    else return binarySearch(arr, target, mid+1, end);
  }
  return false;
}
```

**二分查找算法：**

- **最坏的情况：**

需要将`n`个元素的列表分为两部分，并重复此操作直到查到目标元素，因为元素有可能在最后一次拆分中，或者不在数组中。

用大O表示法，这会被转换成O(log n)。

- **最好的情况**

目标元素刚好在元素的中间，所以我们刚开始立马就可以停止搜索。

用大O表示法，这会被转换成Ω(1)。

### 冒泡排序

冒泡排序：将大值移动到数组右边，将小值移到数组的左边。

伪代码示例#1:

```bash
Set swap counter to a non-zero value
Repeat until the swap counter is equal to 0:
  Reset swap counter to 0
  Look at each adjacent pair:
    If two adjacent elements are not in order:
      Swap them
      Add one to the swap counter
```

伪代码示例#2:

```bash
Repeat until no swaps
  For i from 0 to n-2
    If i'th and i+1'th elements out of order
      Swap them
```

`JavaScript`语言示例:

```javascript
bubbleSort = arr => {
  for(let i = 0; i < arr.length-1; i++) {
    for(let j = 0; j < arr.length-i-1; j++) {
      if(arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}
```




### 参考和后话

- 原文：https://dev.to/hexangel616/notes-on-algorithms-36pi























