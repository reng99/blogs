## 链表

 链表靠（前后指针）将各个元素结合起来;

 ```javascript
// 节点，包含节点元素和指针（这里的指针只演示指向下一个的指针）
class Node {
    constructor(el) {
        this.element = el;
        this.next = null; // 默认是指向空
    }
}
 ```

 ```javascript
// 实现链表类
class LinkedList {
    constructor() {
        this.length = 0; // 链表的长度
        this.head = new Node('head'); // 设置一个默认的头节点
    }
    // 查找存在的节点
    find(item) {
        let currNode = this.head;
        while(currNode.element != item && currNode.next) {
            currNode = currNode.next;
        }
        return currNode;
    }
    // 插入节点,找不到默认插在链表的后面
    insert(el, item) {
        let newNode = new Node(el),
            currNode = this.find(item);
        newNode.next = currNode.next;
        currNode.next = newNode;
        this.length++;
        return this;
    }
    // 展示
    display() {
        let currNode = this.head,
            arr = [];
        while(currNode.next) {
            arr.push(currNode.next.element);
            currNode = currNode.next;
        }
        console.log(arr.join(' '));
    }
}
 ```