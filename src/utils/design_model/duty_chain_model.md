## 职责链模式

### 概念

**职责链模式**是使多个对象都有机会处理请求，从避免请求的发送者和接收者之间的耦合关系。将这个对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它为止。

链中收到的请求对象要么亲自处理，要么转发给下一个候选者，提交方并不明确有多少个对象会处理它，任一候选者都可以响应相应的请求，可以在运行时刻决定哪些候选者参与到链中。

### 作用和注意事项

#### 作用

1. dom的冒泡有些类似职责链


2. nodejs当controller中有很多负责操作逻辑的时候拆分中间件

3. 解耦发送者和接受者

#### 注意事项

1. javascript中的每一次【.】是有代价的，要在有必要的时候应用。


### 代码实战

```javascript
function laoban(xiangmujingli) {
    if(xiangmujingli) {
        this.xiangmujingli = xiangmujingli;
    }
}
laoban.prototype.write = function(php) {
    this.xiangmujingli.write(php);
}
function xiangmujingli(coder) {
    if(coder) {
        this.coder = coder;
    }
}
xiangmujingli.prototype.write = function(php) {
    this.coder.write(php);
}
function coder(php) {
    // this.write(php);
}
coder.prototype.write = function(php) {
    console.log('codeing'+php);
}
// begin发起者 coder结束者 
var begin = new lanban(new xiangmujingli(new coder()));
begin.write('php');
```