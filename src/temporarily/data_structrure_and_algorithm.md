## 数据结构和算法（浓缩版）

### 为什么学习数据结构和算法

随着应用程序越来越复杂和数据越来越丰富，有三个公共的问题需要应对：

- **数据搜索** - 考虑到仓库里面有一百万的库存的项目数据。如果应用程序在搜索一条项目数据的时候，它每次要在一百万的数据里面去搜索一条数据，这会降低搜索的速度。伴随着数据增长，搜索会更加慢。

- **处理器的速度** -  处理器的运行速度总是非常快的。如果数据增长到以亿计的时候，将会因为限制而降低速度。

- **多条请求** - 数千的用户可以同时在一台`web`服务器上面搜索数据。在搜索数据的时候，即使是性能很好的服务器也会失败。

为了解决上面提到的问题，数据结构应势而生。数据被很好地组织在数据结构里，在那里，每条数据有可能不被发起搜索请求，请求的数据可以很快的进行搜索。

从数据结构看来，这些范围将被算法应用到：

- **搜索（查找）** - 算法用来搜索数据结构的数据
- **排序** - 算法以指定的命令去排序
- **插入** - 算法在数据结构中插入一条数据
- **更新** - 算法更新存在数据结构的一条数据
- **删除** - 算法可以删除数据结构中存在的数据

### 数据结构

**数据结构**是计算机存储、组织数据的方式；是指相互之间存在一种或多种特殊关系的数据元素的集合。

#### 数组

数组是是最常用的一种数据结构，**寻址读取数据比较容易，插入和删除比较困难**。因为数组是开辟了连续的存储空间，读取数据的时候只需要通过下标进行读取就行了，而删除和插入需要对数组的元素进行移动。

数组中常用的属性为`length`，你可以使用`length`对数组进行巧妙的操作：

**1. 使用length调整数组长度**

```javascript
let entries = [1, 2, 3, 4, 5]
console.log(entries.length)
// 5
entries.length = 3
console.log(entries.length)
// 3
console.log(entries)
// [1, 2, 3]
```

**2. 清空数组**

```javascript
let entries = [1, 2, 3, 4, 5]
console.log(entries.length)
// 5
entries.length = 0
console.log(entries.length)
// 0
console.log(entries)
// []
```

数组中常用的方法有`push(), pop(), splice()`等等的方法，对数组进行`添加，移除，裁切`等等～

#### 栈

栈是一种`后进先出`的数据结构。

```javascript
class Stack {
  // 类似es5的构造函数
  constructor() {
    this.items = []
  }
  // 入栈
  push(element) {
    this.items.push(element)
    return this // 返回对象，可以进行链式调用
  }
  // 出栈
  pop() {
  	this.items.pop()
  }
  // 栈的深度
  size() {
    return this.items.length
  }
  // 栈顶元素
  peek() {
    return this.items[this.size() - 1]
  }
  // 判断栈是否为空
  isEmpty() {
    return this.items.length === 0
  }
}
```


#### 队列

队列是一种`先进先出`的线性表。

class Queue {
  constructor() {
    this.items = []
  }
  // 入队
  enqueue(element) {
  	this.items.push(element)
  	return this
  }
  // 出队
  dequeue() {
  	this.items.shift()
  	return this
  }
  // 队首元素
  front() {
    return this.items[0]
  }
  // 判断是否为空
  isEmpty() {
    return this.items.length === 0 
  }
  // 查看队列的长度
  len() {
  	return this.items.length
  }
}


#### 链表

链表较数组，不需要连续的内存空间，在插入和删除数据的时候效率更加高。

> 链表分为单链表、双链表、循环链表等，这里只是针对单链表给出示范：

```javascript
// 创建一个链表的节点对象
class Node {
  constructor(element) {
    this.element = element // 存储数据
    this.next = null // 尾指针
  }
}
```

```javascript
class LinkedList {
  constructor() {
    this.length = 0;
    this.head = new Node() //表头
  }
}

// 查找数据
find(item) {
  let currNode = this.head
  while(currNode.element !== item && currNode.next) {
  	currNode = currNode.next
  }
  return currNodess
}

// 查找上一个数据
findPrevious(item) {
  let currNode = this.headss
  while((currNode.next != null) && currNode.next.element !== item) {
    currNode = currNode.next
  }
  return currNode
}

// 插入数据
insert(newElement, item) { // newElement 新数据, item 已有/期望传入的数据，非填
 if(!newElement) { return }
 let newNode = new Node(newElement),
   currNode = this.find(item)
 newNode.next = currNode.next
 currNode.next = newNode
 this.length++
 return this
}
// 删除数据
removeEle(element) {
  let preNode = this.findPrevious(element)
  preNode.next = preNode.next != null ? preNode.next.next : null
}
// 查找数据的索引
indexOf(element) {
  let currNode = this.head,
    index = 0;
  while(currNode.next !== null) {
    index++;
    if(currNode.next.element === element) {
      return index
    }
    currNode = currNode.next
  }
  return -1 // 找不到
}
// 链表的长度
size() {
  return this.length
}
// 链表是否为空
isEmpty() {
  return this.length === 0
}
```

#### 字典

> 有待补充



#### 树



#### 散列表



#### 堆



#### 图





### 基本算法



### 参考

- [导师计划--数据结构和算法系列（上）](https://juejin.im/post/5c98b7215188252da8737c33)
- [导师计划--数据结构和算法系列（下）](https://juejin.im/post/5ca9b0a2e51d452b5372ed8f)

