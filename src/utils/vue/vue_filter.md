## vue 自定义一个过滤器

**通过关键字filters**

html代码:

```html
<div id="app">
    <input type="text" v-model="msg">
    {{ msg | capitalize}}
</div>
```

js代码:

```javascript
let vm = new Vue({
    el: '#app',
    data: {
        msg: '',
    },
    filters: {
        capitalize: function(value) {
            if(!value) return '';
            value = value.toString();
            return value.chatAt(0).toUpperCase() + value.slice(1);
        }
    }
})
```

通过全局定义过滤器：

```javascript
Vue.filter('capitalize', function(value){
    if(!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1)
})
```

过滤器接受表达式的值(msg)作为第一个参数。

capitalize过滤器将会收到msg的值作为第一个参数。