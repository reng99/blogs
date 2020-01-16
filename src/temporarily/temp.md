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

因为是比较第`i`和第`i+1`个元素，所以在交换不符合排序的两个元素之前，只需要对`i`进行`n-2`的排序就即可。知道最大的`n-1`个元素将向右冒泡，因此排序可以在`n-1`个通过之后停止。

当重新遍历数组时，只要考虑没有排序的元素。当交换器保持为0时，就没有其他要交换的内容了。

**冒泡排序算法**

- **最坏的情况：**

一种情况是当数组已经是倒序排好，我们需要对每个数组元素进行冒泡。因为每遍只能将一个元素完全冒泡到其排序的位置，因此排序必须进行`n`次。

用大O表示法，这会被转换成O(n²)。

- **最好的情况：**

数组已经是完美排序好了，导致第一遍就没有元素交换。

用大O表示法，这会被转换成Ω(n)。

### 选择排序

找到最小的未排序的元素，然后将它放到排序好的列表末尾。

伪代码示例#1:

```bash
Repeat until there is no unsorted elements remaining:
  Search unsorted part of data to find the smallest value
  Swap the found value with the first element of the unsorted part
```

伪代码示例#2:

```bash
For i from 0 to n-1
  Find smallest item between i'th item and last item
  Swap smallest item with i'th item
```

`JavaScript`语言示例:

```javascript
selectionSort = arr => {
  for(let i = 0; i < arr.length-1; i++) {
    let min = i;
    for(let j = i+1; j < arr.length; j++) {
      if(arr[j] < arr[min]) {
        min = j
      }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
```

**选择排序算法**

- **最坏的情况：**

必须重复`n`次排序过程才能叠戴数组中的每一个，以找到未排序元素的最小元素，将其排序。每遍只排序一个元素。

用大O表示法，这会被转换成O(n²)。

- **最好的情况：**

与最好的情况相同，因为在排序过程遍历数组的**所有元素**之前，无法保证对数组进行排序。

用大O表示法，这会被转换成Ω(n²)。

### 插入排序

在适当的位置建立一个排序的数组；在构建数组时，如有必要，将元素移开以腾出空间。

伪代码示例#1:

```bash
Call the first element of the array sorted
Repeat until all elment are sorted:
  Insert next unsorted item into sorted part shifting the required number of items
```

伪代码示例#2:

```bash
For i from 1 to n-1
  Insert next unsorted item into sorted part shifting i items
```

`JavaScript`语言示例:

```javascript
insertionSort = arr => {
  for(let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i-1;
    while(j >= 0 && arr[j] > key) {
      arr[j+1] = arr[j];
      j = j-1;
    }
    arr[j+1] = key;
  }
  return arr;
}
```

**插入排序算法**

- **最坏的情况：**

因为已经是反向有序的数组了，所以每次需要将`n`个元素从`n`个位置移开。

用大O表示法，这会被转换成O(n²)。

- **最好的情况：**

数组已经排序。此时当我们遍历每个元素时，只在未排序和已排序元素之间移动。

用大O表示法，这会被转换成Ω(n)。

### 递归

优雅地编码。🌹

递归与算法或函数的实现方式有关，它不是算法本身。

递归函数将其自身作为执行函数的一部分进行调用。


















### 参考和后话

- 原文：https://dev.to/hexangel616/notes-on-algorithms-36pi























