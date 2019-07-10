## 字典

顾名思义，`字典`类比我们生活中的字典，键值对（key - value）的数据存储。

那么，存储的内部就够就不用数组了，改成使用对象会更加方便。

```javascript
class Dictionary {
    constructor() {
        this.items = {}
    }
    // 判断是否存在相关的键值对
    has(key){
        return this.items.hasOwnProperty(key);
    }
    // 增加键值对
    set(key, value) {
        this.items[key] = value;
    }
    // 获取相关的key值
    get(key){
        return this.has(key) ? this.items[key] : undefined;
    }
    // 删除
    remove(key) {
        if (!this.has(key)) return false;
        delete this.items[key];
        return true
    }
    // 展示值
    show() {
        return Object.values(this.items).join(' ');
    }
}

let dic = new Dictionary;
dic.set('name', 'jiaming');
console.log(dic.show()); // jiaming
```