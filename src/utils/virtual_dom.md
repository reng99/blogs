## 了解虚拟DOM

render function 会被转化成 VNode 节点。Virtual DOM 其实就是一棵以JavaScript对象（VNode节点）作为基础的树，用对象属性来描述节点，实际上它只是一层对真实DOM的抽象。最终可以通过一系列操作使这棵树映射到真实环境上。

由于Virtual DOM是以JavaScript为基础而不依赖真实平台环境，所以使它具有了跨平台的能力，比如说浏览器平台、Weex、Node等。

### 实现一个VNode

VNode 归根结底就是一个JavaScript对象，只要这个类的一些属性可以正确直观地描述当前节点的信息即可。我们来实现一个简单的VNode类，加入一些基本属性，为了便于理解，暂时不考虑复杂的情况。

```javascript
class VNode {
    constructor (tag, data, children, text, elm) {
        // 当前节点的标签名
        this.tag = tag;
        // 当前节点的一些数据信息，比如props、attrs等数据
        this.data = data;
        // 当前节点的子节点，是一个数组
        this.children = children;
        // 当前节点的文本
        this.text = text;
        // 当前虚拟节点对应的真实dom节点
        this.elm = elm;
    }
}
```

比如有这么一个Vue组件。

```bash
<template>
    <span class="demo" v-show="isShow">
        This is a span.
    </span>
<template>
```

用JavaScript代码形式就是这样的。

```javascript
function render() {
    return new VNode(
        'span',
        {
            // 指令集合数组
            directives: [
                {
                    // v-show指令
                    rawName: 'v-show',
                    expression: 'isShow',
                    name: 'show',
                    value: true
                }
            ],
            // 静态class
            staticClass: 'demo'
        },
        [ new VNode(undefined, undefined, undefined, 'This is a span.')]
    );
}
```