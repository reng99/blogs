## vue-cli如何新增自定义指令

**通过关键字directives**

1. 创建局部的指令

```javascript
let app = new Vue({
    el: '#app',
    data: {
        name: 'hello'
    },
    // 创建指令（可以多个）
    directives: {
        // 指令名称
        dir1: {
            inserted(el) { // inserted也是关键
                // 指令中的第一个参数是当前使用指令的DOM
                console.log(arguments);
                // 对dom进行操作
                el.style.width = '200px'
                el.style.height = '200px'
                el.style.background = '#000'
            }
        }
    }
})
```

2. 全局指令

```javascript
Vue.directive('dir2', {
    inserted(el) {
        console.log(el);
    }
})
```

3. 指令的使用

```html
<div id="app">
    <div v-dir1></div>
    <div v-dir2></div>
</div>
```
