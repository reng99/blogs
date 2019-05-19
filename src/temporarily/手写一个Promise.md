## 手写一个Promise

手写一个Promise这篇博文我很久就酝酿着怎么写了，无奈不止从何下手，于是各种搜索。并翻译了下面的两篇文章：

- [JavaScript中的Promises](https://github.com/reng99/blogs/issues/19)
- [怎么写一个JavaScript Promise](https://github.com/reng99/blogs/issues/24)

感觉现在捋清了下思路，那么就开始表演吧😊

### 实现基本功能

`promise`中有三种状态，分别是`pending,resolve和reject`。在新建一个`promise`对象的时候，就是默认为`pending`状态(也就是即将发生的状态)。这个状态会往两个方向发展，一是`resolve`，成功解决了问题；另一个是`reject`，解决问题失败执行。

为了方便编写，我们使用es6来编写，并以**Reng**代替`Promise`。

```javascript
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

class Reng {
    constructor(fn) {
        this.state = PENDING;
        // 终值，成功的时候
        this.value = null;
        const name = 'rengjjkj';
        // 拒因，失败的时候
        this.reason = null;
        // 成功回调
        const resolve = value => {
            setTimeout(() => {
                if(this.state === PENDING) {
                    this.state = RESOLVED;
                    this.value = value;
                    console.log('resolve situation', this.value);
                }
            }) 
        };
        // 回调失败
        const reject = reason => {
            setTimeout(() => {
                if(this.state === PENDING) {
                    this.state = REJECTED;
                    this.reason = reason;
                    console.log('reject situation', this.reason);
                }
            })
        }
        // 进来就执行promise
        try {
            fn(resolve, reject);
        } catch (e) {
            reject(e)
        }
    }
    sayName(){
        console.log(this.name)
    }
}

let reng = new Reng((resolve, reject) => {
    let a = 1 + 1;
    if(a === 2){
        resolve(2);
    } else {
        reject('no equal!');
    }
});
```


### 参考

- https://juejin.im/post/5c41297cf265da613356d4ec

