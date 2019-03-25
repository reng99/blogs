// 链表
class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.length = 0; // 链表长度
        this.head = new Node('head'); // 表头节点
    }
    /**
     * @method find 查找元素的功能，找不到的情况下直接返回链尾节点
     * @param { String } item 要查找的元素
     * @return { Object } 返回查找到的节点 
     */
    find(item = ''){
        let currNode = this.head;
        while(currNode.element != item && currNode.next){
            currNode = currNode.next;
        }
        return currNode;
    }
    /**
    * @method findPrevious 查找链表指定元素的前一个节点
    * @param { String } item 指定的元素
    * @return { Object } 返回查找到的之前元素的前一个节点，找不到节点的话返回链尾节点
    */
    findPrevious(item){
        let currNode = this.head;
        while((currNode.next != null) && (currNode.next.element != item)){
            currNode = currNode.next;
        }
        return currNode;
    }
    /**
     * @method insert 插入功能
     * @param { String } newElement 要出入的元素
     * @param { String } item 想要追加在后的元素（此元素不一定存在）
     */
    insert(newElement = '', item){
        if(!newElement) return;
        let newNode = new Node(newElement),
            currNode = this.find(item);
        newNode.next = currNode.next;
        currNode.next = newNode;
        this.length++;
        return this;
    }
    // 展示链表元素
    display(){
        let currNode = this.head,
            arr = [];
        while(currNode.next != null){
            arr.push(currNode.next.element);
            currNode = currNode.next;
        }
        return arr.join(' ');
    }
    // 链表的长度
    size(){
        return this.length;
    }
    // 查看链表是否为空
    isEmpty(){
        return this.length == 0;
    }
    /**
     * @method indexOf 查看链表中元素的索引
     * @param { String } element 要查找的元素
     */
    indexOf(element){
        let currNode = this.head,
            index = 0;
        while(currNode.next != null){
            index++;
            if(currNode.next.element == element){
                return index;
            }
            currNode = currNode.next;
        }
        return -1;
    }
    /**
     * @method removeEl 移除指定的元素
     * @param { String } element 
     */
    removeEl(element){
        let preNode = this.findPrevious(element);
        preNode.next = preNode.next != null ? preNode.next.next : null;
    }
}

let linkedlist = new LinkedList();
console.log(linkedlist.isEmpty()); // true
linkedlist.insert('鼠').insert('虎').insert('牛', '鼠');
console.log(linkedlist.display()); // 鼠 牛 虎
console.log(linkedlist.find('猪')); // Node { element: '虎', next: null }
console.log(linkedlist.find('鼠')); // Node { element: '鼠', next: Node { element: '牛', next: Node { element: '虎', next: null } } }
console.log(linkedlist.size()); // 3
console.log(linkedlist.indexOf('鼠')); // 1
console.log(linkedlist.indexOf('猪')); // -1
console.log(linkedlist.findPrevious('虎')); // Node { element: '牛', next: Node { element: '虎', next: null } }
linkedlist.removeEl('鼠');
console.log(linkedlist.display()); // 牛 虎