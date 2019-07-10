## 栈

先进后来的数据结构

```javascript
class Stack {
    constructor() {
        this.items = []
    }
    // 入栈
    push(el) {
        this.items.push(el);
    }
    // 出栈
    pop() {
        return this.items.pop();
    }
    // 打印数据
    print() {
        console.log(this.items.join(' '));
    }
}

let stack = new Stack;

stack.push('jia');
stack.push('ming');
stack.print(); // jia ming
```