## 哈希表/散列表

我们的哈希表是基于数组完成的，我们从数组这里切入解析下。`数组可以通过下表直接定位到相应的空间`，哈希表的做法就是类似的实现。哈希表吧`key（键）`通过一个固定的算法函数（此函数称为哈希函数/散列函数）转换成一个整型数字，然后就将数字对数组长度进行**取余**，取余结果就当作数组的下标，将`value值`存储在以该数字为下标的数组空间里，而当使用哈希表进行查询的时候，就再次使用哈希函数将`key`转换为对应的数组下标，并定位到该空间获取`value`。

```javascript
// hash table
class HashTable {
    constructor() {
        this.table = new Array(137); // 一般取质数
    }
    // 哈希函数
    hashFn(data) {
        let total = 0;
        for(let i = 0; i < data.length; i++) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    }
    // 添加
    put(data) {
        let pos = this.hashFn(data);
        this.table[pos] = data;
    }
    // 获取
    get(data) {
        let pos = this.hashFn(data);
        if(this.table[pos]) {
            console.log(this.table[pos]);
        }
    }
    // 展示
    show() {
        this.table && this.table.forEach((item, index) => {
            if(item != undefined) {
                console.log(index + ' => ' + item);
            }
        })
    }
}
```

因为空间是有限的，那如果产生存储的数据有冲突怎么办？

有两种方法：

### 1. 线性探测法

当发生碰撞（冲突）时，线性探测法检查散列表中的下一个位置【有可能非顺序查找位置，不一定是下一个位置】是否为空。如果为空，就将数据存入该位置；如果不为空，则继续检查下一个位置，直到找到一个空的位置为止。该技术是基于一个事实：每个散列表都有很多空的单元格，可以使用它们存储数据。

```javascript
class HashTable {
    constructor() {
        this.table = new Array(137);; // 存储键
        this.values = []; // 存储值
    }
    // 添加
    put(key, data) {
        let pos = this.hashFn(key);
        if(this.table[pos] == undefined) {
            this.table[pos] = key;
            this.values[pos] = data;
        }else {
            while(this.table[pos] != undefined) {
                pos++;
            }
            this.table[pos] = key;
            this.values[pos] = data;
        }
    }
    // 获取
    get(key) {
        let hash = -1;
        hash = this.hashFn(key);
        if(hash > -1) {
            for(let i = hash; this.table[hash] != undefined; i++) {
                if(this.table[hash] == key) {
                    return this.values[hash];
                }
            }
        }
        return undefined;
    }
}
```

### 2.开链法

但是，当发生碰撞时，我们任然希望将key（键）存储到通过哈希函数产生的索引位置上，那么我们可以使用开链法。开链法是指实现哈希表底层的数组中，每个数组元素又是一个新的数据结构，比如另一个数组（这样结合起来就是二位数组了），链表等，这样就能存储多个键了。使用这种技术，即使两个key（键）散列后的值相同，依然是被保存在同样的位置，只不过它们是被保存在另一个数据结构上而已。以数组为例：

```javascript
class HashTable() {
    constructor() {
        this.table = new Array(137);;
    }
    buildChains() {
        for(let i = 0; i < this.table.length; i++) {
            this.table[i] = new Array();
        }
    }
    // 添加
    put(key, data) {
        let pos = this.hashFn(key);
        let index = 0;
        if(this.table[pos][index] == undefined) {
            this.table[pos][index] = {
                key: data
            };
            index++;
        }else {
            while(this.table[pos][index] != undefined) {
                index++
            }
            this.table[pos][index] = data;
        }
    }
    // 获取
    get(key) {
        var index = 0;
        var pos = this.hashFn(key);
        if(this.table[pos][index] && this.table[pos][index].key) {
            return this.table[pos][index];
        }else {
            index++
        }
        return undefined;
    }
}
```

