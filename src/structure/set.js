// 集合
class Set {
    constructor(){
        this.items = [];
    }
    /**
     * @method add 添加元素
     * @param { String } element 
     * @return { Boolean }
     */
    add(element = ''){
        if(this.items.indexOf(element) >= 0) return false;
        this.items.push(element);
        return true;
    }
    // 集合的大小
    size(){
        return this.items.length;
    }
    // 集合是否包含某指定元素
    has(element = ''){
        return this.items.indexOf(element) >= 0;
    }
    // 展示集合
    show(){
        return this.items.join(' ');
    }
    // 移除某个元素
    remove(element){
        let pos = this.items.indexOf(element);
        if(pos < 0) return false;
        this.items.splice(pos, 1);
        return true;
    }
    /**
     * @method union 并集
     * @param { Array } set 数组集合
     * @return { Object } 返回并集的对象
     */
    union(set = []){
        let tempSet = new Set();
        for(let i = 0; i < this.items.length; i++){
            tempSet.add(this.items[i]);
        }
        for(let i = 0; i < set.items.length; i++){
            if(tempSet.has(set.items[i])) continue;
            tempSet.items.push(set.items[i]);
        }
        return tempSet;
    }
    /**
     * @method intersect 交集
     * @param { Array } set 数组集合
     * @return { Object } 返回交集的对象
     */
    intersect(set = []){
        let tempSet = new Set();
        for(let i = 0; i < this.items.length; i++){
            if(set.has(this.items[i])){
                tempSet.add(this.items[i]);
            }
        }
        return tempSet;
    }
    isSubsetOf(set = []){
        if(this.size() > set.size()) return false;
        this.items.forEach*(item => {
            if(!set.has(item)) return false;
        });
        return true;
    }
}

let set = new Set(),
    arr = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴'];
arr.forEach(item => {
    set.add(item);
});
console.log(set.show()); // 鼠 牛 虎 兔 龙 蛇 马 羊 猴
console.log(set.has('猪')); // false
console.log(set.size()); // 9
set.remove('鼠');
console.log(set.show()); // 牛 虎 兔 龙 蛇 马 羊 猴
let setAnother = new Set(),
    anotherArr = ['马', '羊', '猴', '鸡', '狗', '猪'];
anotherArr.forEach(item => {
    setAnother.add(item);
});
console.log(set.union(setAnother).show()); // 牛 虎 兔 龙 蛇 马 羊 猴 鸡 狗 猪
console.log(set.intersect(setAnother).show()); // 马 羊 猴
console.log(set.isSubsetOf(setAnother)); // false