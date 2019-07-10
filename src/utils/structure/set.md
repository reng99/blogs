## 集合

集合中的元素都是唯一的。

这让我想起了es6中的`Set`，用于数组去重太有用了～

```javascript
let arr = [1, 2, 1, 3, 3, 5, 4, 4];
console.log([...new Set(arr)]); // [1, 2, 3, 5, 4]
```

实现一个集合：

```javascript
class Set {
    constructor() {
        this.items = []; // 选择数组，比较方便
    }
    // 添加
    add(el) {
        if(this.items.indexOf(el) > 0) return false;
        this.item.push(el);
        return true;
    }
    // 移除
    remove(el) {
        let pos = this.items.indexOf(el);
        if(pos < 0) return false;
        this.items.splice(pos, 1);
        return true;
    }
    // 集合中包含指定的元素
    has(el) {
        return this.items.indexOf(el) >= 0;
    }
    // 并集
    union(set) {
        let tempSet = new Set();
        for(let i = 0; i < this.items.length; i++) {
            tempSet.add(this.items[i]);
        }
        for(let i = 0; i < set.items.length; i++) {
            if(tempSet.has(set.items[i])) continue;
            tempSet.add(set.items[i]);
            
        }
        return tempSet;
    }
    // 交集
    intersect(set) {
        let tempSet = new Set();
        for(let i = 0; i < this.items.length; i++) {
            if(set.has(this.items[i])) {
                tempSet.add(this.items[i]);
            }
        }
        return tempSet;
    }
    // 长度
    size() {
        return this.items.length;
    }
    // 是否子集
    isSubsetOf(set) {
        if(tihs.size() > set.size()) return false;
        this.items.forEach(item => {
            if(!set.has(item)) return false;
        });
        return true;
    }
}
```