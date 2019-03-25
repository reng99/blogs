// 哈希表
class HashTable {
    constructor(){
        this.table = new Array(137);
    }
    /**
     * @method hashFn 哈希函数
     * @param { String } data 传入的字符串
     * @return { Number } 返回取余的数字
     */
    hashFn(data){
        let total = 0;
        for(let i = 0; i < data.length; i++){
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    }
    /**
     * 
     * @param { String } data 传入的字符串
     */
    put(data){
        let pos = this.hashFn(data);
        this.table[pos] = data;
        return this;
    }
    // 展示
    show(){
        this.table && this.table.forEach((item, index) => {
            if(item != undefined){
                console.log(index + ' => ' + item);
            }
        })
    }
    // ...获取值get函数等看官感兴趣的话自己补充测试啦
}

let hashtable = new HashTable(),
    arr = ['mouse', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'sheep', 'monkey', 'chicken', 'dog', 'pig'];
arr.forEach(item => {
    hashtable.put(item);
});
hashtable.show();
// 5 => mouse
// 40 => dog
// 46 => pig
// 80 => rabbit
// 87 => dragon
// 94 => ox
// 111 => monkey
// 119 => snake
// 122 => sheep
// 128 => tiger
// 134 => horse

// 那么问题来了，十二生肖里面的_小鸡_去哪里了呢❓
// 被_小萌狗_给覆盖了，因为其位置都是40（这个可以自己证明下）
// 问题又来了，那么应该如何解决这种被覆盖的冲突呢❓