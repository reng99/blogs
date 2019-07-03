## JS中的文档碎片

在浏览器中，我们通常使用`innerHTML()`或者`appendChild()`向页面中插入`DOM`节点，例如：

```javascript
for(var i=0; i<5; i++) {
    var op = document.createElement('span');
    var oText = document.createTextNode(i);
    op.appendChild(oText);
    document.body.appendChild(op);
}
```

上面一条条数据的添加，如果是大数据量的时候比如一万条，这样执行就很缓慢了。当然，你可以建个新的节点，比如`div`，先将op添加到div上，然后再将div添加到body中，但这样在body中多添加一个`<div></div>`。但是文档碎片不会产生这种节点。

```javascript
var oDiv = document.createElement('div');

for(var i=0; i<10000; i++) {
    var op = document.createElement('span');
    var oText = document.createTextNode(i);
    op.appendChild(oText);
    oDiv.appendChild(op);
}
document.body.appendChild(oDiv);
```

为了解决这个问题，JS中引入了`createDocumentFragment()`方法，它的作用就是**创建一个文档碎片，把要插入的新节点先附加在它上面，然后再一次性添加到document中**。

如下代码：

```javascript
// 先创建文档碎片
var oFragment = document.createDocumentFragment();

for(var i=0; i<10000; i++) {
    var op = document.createElement('span');
    var oText = document.createTextNode(i);
    op.appendChild(oText);

    // 先附加再文档碎片中
    oFragment.appendChild(op);
}

// 最后一次性添加到document中
document.body.appendChild(oFragment);
```

对上面如有疑问，可以复制代码到`*.html`的`script`标签内跑以下～