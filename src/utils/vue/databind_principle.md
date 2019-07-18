## vue实现数据双向绑定的原理

vue实现数据的双向绑定主要是：采用**数据劫持结合发布者-订阅者模式**的方式，通过**Object.defineProperty()**来劫持各个属性的setter,getter，在数据变动时发布消息给订阅者，触发相应监听回调。

当把一个普通Javascript对象传给vue实例来作为它的data选项时，vue将遍历它的属性，用Object.defineProperty将它们转为getter/setter。用户看不到getter/setter，但是在内部它们让vue追踪依赖，在属性被访问和修改时通知变化。

vue的数据双向绑定将mvvm作为数据绑定的入口，整合Observer，Compile和Watch三者，通过Observer来监听自己的model的数据变化，通过Compile来解析编译模版指令（vue中是用来解析{{}}），最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化->更新视图，视图交互变化(input)->数据model变更双向绑定效果。

### 简单的双向绑定

```html
<input type="text"id="txt">
<p id="show"></p>
```

```javascript
let obj = {};
Object.defineProperty(obj, 'txt', {
    get: function() {
        return obj;
    },
    set: function(newValue) {
        document.getElementById('txt').value = newValue;
        document.getElementById('show').innerHTML = newValue;
    }
});
document.addEventListener('keyup', function(e) {
    obj.txt = e.target.value;
})
```