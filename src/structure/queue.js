// 队列
class Queue {
    constructor(){
        this.items = [];
    }
    // 入队操作
    enqueue(element = ''){
        if(!element) return;
        this.items.push(element);
        return this;
    }
    // 出队操作
    dequeue(){
        this.items.shift();
        return this;
    }
    // 查看队前元素或者说即将处理的元素
    front(){
        return this.items[0];
    }
    // 查看队列是否为空
    isEmpty(){
        return this.items.length == 0;
    }
    // 查看队列的长度
    len(){
        return this.items.length;
    }
    // 打印队列数据
    print(){
        return this.items.join(' ');
    }
}

let queue = new Queue(),
    arr = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
arr.forEach(item => {
    queue.enqueue(item);
});
console.log(queue.print()); // 鼠 牛 虎 兔 龙 蛇 马 羊 猴 鸡 狗 猪
console.log(queue.isEmpty()); // false
console.log(queue.len()); // 12
queue.dequeue().dequeue();
console.log(queue.front()); // 虎
console.log(queue.print()); // 虎 兔 龙 蛇 马 羊 猴 鸡 狗 猪