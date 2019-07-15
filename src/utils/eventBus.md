## 事件总线

事件总线是使用**发布订阅者**的设计模式实现。

```javascript
// 使用了发布订阅者的设计模式

function EventBus() {
    this.listeners = {} // 保存注册的事件
}
// 判断是否是函数
function isFunction(fn) {
    return fn && Object.prototype.toString.call(fn) === '[object Function]';
}
// 判断是否是字符串
function isString(str) {
    return str && (typeof(str) === 'string' || Object.prototype.toString.call(str) === '[object String]')
}
// 验证事件和传入回调函数是否有效
function isValid(event, callback) {
    return isString(event) && isFunction(callback);
}

// 监听的事件
EventBus.prototype.$on = function(event, callback) {
    if(isValid(event, callback)) {
        if(this.listeners[event] && !this.listeners[event].includes(callback)) { // 已经注册过该事件并且是回调函数不存在的情况
            this.listeners[event].push(callback);
        } else {
            this.listeners[event] = [callback]; // 之前没有监听过该事件，则初始化为一个数组
        }
    } else {
        console.error('参数不合法或已存在');
    }
}

// 触发已经监听过的事件
EventBus.prototype.$emit = function(event, params) {
    if(isString(event) && this.listeners[event]) {
        this.listeners[event].forEach(cb => { // 触发该事件的每个触发函数
            cb(params);
        })
    }
}

// 移除某事件对应的回调函数
EventBus.prototype.$remove = function(event, callback) {
    if(isValid(event, callback) && this.listeners[event]) {
        let index = this.listeners[event].indexOf(callback);
        if(index != -1) {
            this.listeners[event].splice(index, 1);
        }
    }
}

// 例子
var eb = new EventBus();
const cb = function(params) {
    console.log('add first');
}
const cb2 = function(params) {
    console.log('add second');
}
// 先订阅
eb.$on('add', cb);
eb.$on('add', cb2);

// 发布
eb.$emit('add', 123);
// 打印出 
// add first
// add second

console.log(eb);
// 打印出事件总线的对象

// eb.$remove('add', cb2);
// console.log(eb);

```