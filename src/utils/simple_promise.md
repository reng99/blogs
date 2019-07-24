## 简易版promise

简易版的promise，来源airuikun: https://github.com/airuikun/Weekly-FE-Interview/issues/10

直接上代码：

```javascript
// 第一步：列出三大块 this.then resolve/reject fn(resolve, reject)
// 第二步：this.then负责注册所有的函数 resolve/reject负责执行所有的函数
// 第三步：在resolve/reject里面加上setTimeout防止还没进行then注册 就直接执行resolve了
// 第四步：resolve/reject里面要返回this 这样就可以进行链式调用了
// 第五步：三个状态的管理 pending fulfilled rejected

// promise的链式调用 在then里面return一个promise 这样才能then里面加上异步函数
function PromiseM(fn) {
    var value = null;
    var callbacks = [];
    // 加入状态 为了解决Promise异步操作成功之后调用的then注册的回调不会执行的问题
    var state = 'pending';
    var _this = this;

    // 注册所有的回调函数
    this.then = function(fulfilled, rejected) {
        // 如果想链式promise 那就要在这边return一个new Promise
        return new PromiseM(function(resolv, rejec) {
            // 异常处理
            try {
                if(state == 'pending') {
                    callbacks.push(fulfilled);
                    // 实现链式调用
                    return;
                }
                if(state == 'fulfilled') {
                    var data = fulfilled(value);
                    // 为了让两个promise连接起来
                    resolv(data);
                    return;
                }
                if(state == 'rejected') {
                    var data = rejected(value);
                    // 为了让两个promise连接起来
                    resolv(data);
                    return;
                }
            } catch(e) {
                _this.catch(e);
            }
        })
    }

    // 执行所有的回调函数
    function resolve(valueNew) {
        value = valueNew;
        state = 'fulfilled';
        execute();
    }

    // 执行所有的回调函数
    function reject(valueNew) {
        value = valueNew;
        state = 'rejected';
        execute();
    }

    function execute() {
        // 加入延时机制 防止promise里面有同步函数 导致resolve先执行 then还没注册上函数
        setTimeout(function() {
            callbacks.forEach(function(cb) {
                value = cb(value);
            })
        }, 0);
    }

    // 错误的捕获
    this.catch = function(e) {
        console.log(JSON.stringify(e));
    }

    // 经典 实现异步回调
    fn(resolve, reject);
}
```


### 使用es6的实现方案

```javascript
// 未添加异步处理等其他边界情况
// 1. 自动执行函数 2. 三个状态 3. then
class Promise{
    constructor(fn) {
        // 三个状态
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        let resolve = value => {
            if(this.state === 'pending'){
                this.state = 'fulfilled';
                this.value = value;
            }
        }
        let reject = value => {
            if(this.state === 'pending') {
                this.state = 'rejected'
                this.reason = value;
            }
        }
        // 自执行函数
        try {
            fn(resolve, reject);
        } catch(e) {
            reject(e);
        }
    }
    // then
    then(onFulfilled, onRejected) {
        switch(this.state) {
            case 'fulfilled':
                onFulfilled();
                break;
            case 'rejected':
                onRejected();
                break;
            default:;
        }
    }
}
```