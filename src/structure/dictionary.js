// 字典
class Dictionary {
    constructor(){
        this.items = {};
    }
    /**
     * @method set 设置字典的键值对
     * @param { String } key 键
     * @param {*} value 值
     */
    set(key = '', value = ''){
        this.items[key] = value;
        return this;
    }
    /**
     * @method get 获取某个值
     * @param { String } key 键
     */
    get(key = ''){
        return this.has(key) ? this.items[key] : undefined;
    }
    /**
     * @method has 判断是否含有某个键的值
     * @param { String } key 键
     */
    has(key = ''){
        return this.items.hasOwnProperty(key);
    }
    /**
     * @method remove 移除元素
     * @param { String } key 
     */
    remove(key){
        if(!this.has(key))  return false;
        delete this.items[key];
        return true;
    }
    // 展示字典的键
    keys(){
        return Object.keys(this.items).join(' ');
    }
    // 字典的大小
    size(){
        return Object.keys(this.items).length;
    }
    // 展示字典的值
    values(){
        return Object.values(this.items).join(' ');
    }
    // 清空字典
    clear(){
        this.items = {};
        return this;
    }
}

let dictionary = new Dictionary(),
    // 这里需要修改
    arr = [{ key: 'mouse', value: '鼠'}, {key: 'ox', value: '牛'}, {key: 'tiger', value: '虎'}, {key: 'rabbit', value: '兔'}, {key: 'dragon', value: '龙'}, {key: 'snake', value: '蛇'}, {key: 'horse', value: '马'}, {key: 'sheep', value: '羊'}, {key: 'monkey', value: '猴'}, {key: 'chicken', value: '鸡'}, {key: 'dog', value: '狗'}, {key: 'pig', value: '猪'}];
    arr.forEach(item => {
        dictionary.set(item.key, item.value);
    });
console.log(dictionary.keys()); // mouse ox tiger rabbit dragon snake horse sheep monkey chicken dog pig
console.log(dictionary.values()); // 鼠 牛 虎 兔 龙 蛇 马 羊 猴 鸡 狗 猪
console.log(dictionary.has('dragon')); // true
console.log(dictionary.get('tiger')); // 虎
console.log(dictionary.remove('pig')); // true
console.log(dictionary.size()); // 11
console.log(dictionary.clear().size()); // 0