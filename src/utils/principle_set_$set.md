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
 export function set (target: Array<any> | Object, key: any, val: any):any {
     if(process,env,NODE_ENV !== 'production' && (isUndef(target) || isPrimitive(target))) {
         warn(`Cannot set reactive property on undefined, null, or primitive value: ${(target: any)}`)
     }
     if (Array.isArray(target) && isValidArrayIndex(key)) {
         target.length = Math.max(target.length, key); // 解决数组的长度问题
         target.splice(key, 1, val); // 解决数组的值更改问题
         return val;
     }
     if (key in target && !(key in Object.prototype)) {
         target[key] = val;
         return val;
     }
    const ob = (target: any).__ob__
    if (target._isVue || (ob && ob.vmCount)) {
        process.env.NODE_ENV !== 'production' && warn(
            'Avoid adding reactive properties to a Vue instance or its root $data ' +
            'at runtime - declare it upfront in the data option.'
        )
        return val
    }
    if (!ob) {
        taget[key] = val
        return val
    }
    defineReactive(ob.value, key, val)
    ob.dep.notify() // 触发当前的依赖
    return val
 }

 // 代码来源：https://github.com/vuejs/vue/blob/dev/src/core/observer/index.js
```