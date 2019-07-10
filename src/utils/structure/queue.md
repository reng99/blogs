## 队列

先进先出的数据结构

```javascript
class Queue {
    constructor() {
        this.items = []
    }
    // 入队
    enqueue(el) {
        this.items.push(el);
    }
    // 出队
    dequeue() {
        this.items.shift();
    }
    // 打印
    print() {
        console.log(this.items.join(' '));
    }
}
let queue = new Queue;
queue.enqueue('jia');
queue.enqueue('ming');
queue.dequeue();
queue.print(); // ming
```