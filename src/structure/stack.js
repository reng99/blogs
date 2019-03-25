// 栈
class Stack {
    constructor(){
        this.items = [];
    }
    // 入栈操作
    push(element = ''){
        if(!element) return;
        this.items.push(element);
        return this;
    }
    // 出栈操作
    pop(){
        this.items.pop();
        return this;
    }
    // 对栈一瞥，理论上只能看到栈顶或者说即将处理的元素
    peek(){
        return this.items[this.size() - 1];
    }
    // 打印栈数据
    print(){
        return this.items.join(' ');
    }
    // 栈是否为空
    isEmpty(){
        return this.items.length == 0;
    }
    // 返回栈的元素个数
    size(){
        return this.items.length;
    }
}
let stack = new Stack(),
    arr = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
arr.forEach(item => {
    stack.push(item);
});
console.log(stack.print()); // 鼠 牛 虎 兔 龙 蛇 马 羊 猴 鸡 狗 猪
console.log(stack.peek()); // 猪
stack.pop().pop().pop().pop();
console.log(stack.print()); // 鼠 牛 虎 兔 龙 蛇 马 羊
console.log(stack.isEmpty()); // false
console.log(stack.size()); // 8