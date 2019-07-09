## 代理模式

### 概念

代理，顾名思义就是帮助别人做事，GoF对代理模式的定义如下：

**代理模式**（Proxy），为其他对象提供一种代理以控制对这个对象的访问。

代理模式使得代理对象控制具体对象的引用。代理几乎可以是任何对象：文件、资源，内存中的对象，或者是一些难以复制的东西。

### 作用和注意事项

#### 作用

1. 远程代理（一个对象将不同空间的对象进行局部代理）

2. 虚拟代理（根据需要创建开销很大的对象如渲染网页暂时用占位代替真图）

3. 安全代理（控制真实对象的访问权限）

4. 智能指引（调用对象代理处理另外一些事情如垃圾回收机制）


#### 注意事项

1. 不能滥用代理，有时候仅仅给代码增加复杂度。

### 实战代码

```javascript
// 代理模式需要3方
// 1.买家
functionn maijia(argument) {
    this.name = '小明';
}
// 中介
function zhongjie() {

}
zhongjie.prototype.maifang = function() {
    new fangdong(new maijia()).maifang('20万');
}
// 房东
function fangdong(maijia) {
    this.maijia_name = maijia.name;
    this.maifang = function(money) {
        console.log('收到来自【'this.maijia_name+'】'+money+'人名币');
    }
}  
// 中介干活
(new zhongjie()).maifang();
```