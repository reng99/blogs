## Vue.set()和vm.$set()的原理

在文章[defineProperty的缺点](./shortcoming_define_property.md)中，当我们对数组对象元素进行更改的时候可以通过`vm.$set(array, index, value)或Vue.set(array, index, value)`来实现，那么它们是怎样操作的呢？

我们看下源码就明白了：

**Vue.set()是挂载在构造函数上的**

```javascript
import { set } from '../observer/index.js'

...
Vue.set = set;
...
```

**vm.$set()是挂载在原型上的**

```javascript
import { set } from '../observer/index.js'

...
Vue.prototype.$set = set;
...
```

上面都是引入同一个函数，那么我们直接在`/path/to/observer/index.js` 内看这个**set函数**。

```javascript
/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
 path: https://github.com/vuejs/vue/blob/dev/src/core/observer/index.js
```