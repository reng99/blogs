## 单例模式

> 定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点。实现的方法为先判断实例存在与否，如果存在则直接返回，如果不存在就创建了再返回，这就保证了一个类只有一个实例对象。

使用场景：一个单一对象。比如：弹窗，无论点击多少次，弹窗只应该被创建一次。

```javascript
class CreateUser {
    constructor(name) {
        this.name = name;
        this.getName();
    }
    getName() {
        return this.name;
    }
}
// 代理实现单例模式
var ProxyMode = (function() {
    var instance = null;
    return function(name) {
        if(!instance) {
            instance = new CreateUser(name);
        }
        return instance;
    }
})();

// 测试单例模式
var a = new ProxyMode('aaa');
var b = new ProxyMode('bbb');
// 因为单例模式是只实例化一次，所以下面的实例是相等的
console.log(a === b); // true
```

### 实现一个弹窗

这里直接上代码：

```html
<button id="btn1">
    点我创建新窗口
</button>
<button id="hide">
    点我隐藏
</button>
```

```css
.common-box {
    background: rgb(233, 90, 90);
    width: 100px;
    height: 100px;
    overflow: hidden;
}
```

```javascript
const btn1 = document.querySelector('#btn1');
const createWindow = (() => {
    let div = null;
    return (words) => {
        if (!div) {
            div = document.createElement('div');
            div.innerHTML = words || '我是默认的语句';
            div.className = 'common-box';
            div.style.display = 'none';
            document.body.appendChild(div);
        }
        
        return div;
    }
})();   

btn1.addEventListener('click', ()=>{
    let box = createWindow('content');
    box.style.display = 'block';
}, false);

//隐藏
document.querySelector('#hide').addEventListener('click', ()=>{
    document.querySelector('.common-box').style.display = 'none';
}, false);
```

### 两个单例进行通信

```javascript
var xiaowang = (function(argument) {
    var xiaowangjia = function(message) {
        this.menling = message;
    };
    var men;
    var info = {
        sendMessage: function(message) {
            if(!men) {
                men = new xiaowangjia(message);
            }
            return men
        }
    }
    return info;
})();

var xiaoli = {
    callXiaowang: function(msg) {
        var _xw = xiaowang.sendMessage(msg);
        alert(_xw.menling);
        _wx = null; // 解除必包，等待垃圾回收
    }
}
xiaoli.callXiaowang('didi');
```

### 作用和注意事项

#### 模式的作用

1. 模块之间的通信

2. 系统中某个类的对象只存在一个

3. 可以保护自己的属性和方法

#### 注意事项

1. 注意下this的使用

2. 闭包容易造成内存泄漏，不需要的赶紧null掉

3. 注意new的成本（继承）

```javascript
var s1 = 'jiaming'; // 隐式创建
var s2 = new String('jiaming'); // 显示创建，成本高
```