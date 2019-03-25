// 二叉查找树
// 辅助节点类
class Node {
    constructor(data, left, right){
        this.data = data;
        this.left = left;
        this.right = right;
    }
    // 展示节点信息
    show(){
        return this.data;
    }
}
class BST {
    constructor(){
        this.root = null;
    }
    // 插入数据
    insert(data){
        let n = new Node(data, null, null);
        if(this.root == null){
            this.root = n;
        }else{
            let current = this.root,
                parent = null;
            while(true){
                parent = current;
                if(data < current.data){
                    current = current.left;
                    if(current == null){
                        parent.left = n;
                        break;
                    }
                }else{
                    current = current.right;
                    if(current == null){
                        parent.right = n;
                        break;
                    }
                }
            }
        }
        return this;
    }
    // 中序遍历
    inOrder(node){
        if(!(node == null)){
            this.inOrder(node.left);
            console.log(node.show());
            this.inOrder(node.right);
        }
    }
    //   先序遍历
    preOrder(node){
        if(!(node == null)){
            console.log(node.show());
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
    // 后序遍历
    postOrder(node){
        if(!(node == null)){
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.show());
        }
    }
    // 获取最小值
    getMin(){
        let current = this.root;
        while(!(current.left == null)){
            current = current.left;
        }
        return current.data;
    }
    // 获取最大值
    getMax(){
        let current = this.root;
        while(!(current.right == null)){
            current = current.right;
        }
        return current.data;
    }
    // 查找给定的值
    find(data){
        let current = this.root;
        while(current != null){
            if(current.data == data){
                return current;
            }else if(data < current.data){
                current = current.left;
            }else{
                current = current.right;
            }
        }
        return null;
    }
    // 移除给定的值
    remove(data){
        root = this.removeNode(this.root, data);
        return this;
    }
    // 移除给定值的辅助函数
    removeNode(node, data){
        if(node == null){
            return null;
        }
        if(data == node.data){
            // 叶子节点
            if(node.left == null && node.right == null){
                return null; // 此节点置空
            }
            // 没有左子树
            if(node.left == null){
                return node.right;
            }
            // 没有右子树
            if(node.right == null){
                return node.left;
            }
            // 有两个子节点的情况
            let tempNode = this.getSmallest(node.right); // 获取右子树
            node.data = tempNode.data; // 将其右子树的最小值赋值给删除的那个节点值
            node.right = this.removeNode(node.right, tempNode.data); // 删除指定节点的下的最小值，也就是置其为空
            return node;
        }else if(data < node.data){
            node.left = this.removeNode(node.left, data);
            return node;
        }else{
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }
    // 获取给定节点下的二叉树最小值的辅助函数
    getSmallest(node){
        if(node.left == null){
            return node;
        }else{
            return this.getSmallest(node.left);
        }
    }
}

let bst = new BST();
bst.insert(56).insert(22).insert(10).insert(30).insert(81).insert(77).insert(92);
bst.inOrder(bst.root); // 10, 22, 30, 56, 77, 81, 92
console.log('--中序和先序遍历分割线--');
bst.preOrder(bst.root); // 56, 22, 10, 30, 81, 77, 92
console.log('--先序和后序遍历分割线--');
bst.postOrder(bst.root); // 10, 30, 22, 77, 92, 81, 56
console.log('--后序遍历和获取最小值分割线--');
console.log(bst.getMin()); // 10
console.log(bst.getMax()); // 92
console.log(bst.find(22)); // Node { data: 22, left: Node { data: 10, left: null, right: null }, right: Node { data: 30, left: null, right: null } }
// 我们删除节点值为22，然后用先序的方法遍历，如下
console.log('--移除22的分割线--')
console.log(bst.remove(22).inOrder(bst.root)); // 10, 30, 56, 77, 81, 92