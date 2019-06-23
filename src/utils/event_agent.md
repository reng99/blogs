## 事件代理/事件委托

**事件代理/事件委托**就是利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。

比如：

- 现员工可以委托前台代收快递，即程序中的现有dom是有事件的；
- 新员工也可以委托前台代收快递，即程序中的新添加的dom也是有事件的。

```html
<ul id="ul">
    <li>0</li>
    <li>1</li>
    <li>2</li>
</ul>
<button id="btn">Click me to add a li element</button>
```

```javascript
// 事件代理/事件委托实现
var ul = document.getElementById("ul");
    ul.onclick = function(event) {
        console.log(event);
        event = event || window.event;
        var target = event.target;
        if(target.nodeName.toLowerCase() == 'li') {
            console.log(target.innerHTML);
        }
    }
    // 为按钮添加点击事件
    var btn = document.getElementById('btn');
    btn.onclick = function() {
        var li = document.createElement('li');
        li.textContent = ul.children.length;
        ul.appendChild(li);
    }
```