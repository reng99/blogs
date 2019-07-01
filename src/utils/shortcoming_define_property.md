## vue中defineProperty的缺点

vue使用了`defineProperty`进行响应式的设计，但是使用这种方法有它自己的缺点：

### vue不支持IE8

因为Vue使用了`IE8`无法模拟的ECMAScript 5的特性，但是Vue支持所有**兼容ECMAScript 5**的浏览器。

不过这个缺点在移动互联网火热的时代，有点肉里挑刺了～

### Object.defineProperty无法监听数组变化

在[Vue的文档](https://cn.vuejs.org/v2/guide/list.html#%E6%95%B0%E7%BB%84%E6%9B%B4%E6%96%B0%E6%A3%80%E6%B5%8B)提到了Vue是可以检测到数组变化的，但是只有以下几种方法：

```javascript
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
```

而`vm.item[indexOfItem] = newValue`这种设置数组的某个值和`vm.items.length = newLength`这种改变数组长度是无法检测的。

你可以保存下面的html代码进行演示下，点击按钮后，列表数据没有发生改变：

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>define property</title>
</head>
<body>
    <div id='app'>
        <p v-for='item in arr'>{{item}}</p>
        <p>length is: {{arr.length}}</p>
        <button @click="changeArr">change arr data and arr length</button>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script>
        new Vue({
            el: '#app',
            data() {
                return {
                    arr: ['hello', 'world']
                }
            },
            mounted() {
                this.arr.push('!');
            },
            methods: {
                changeArr(){ // 1. Object.defineProperty无法监控到数组下标的变化，导致直接通过数组的下标给数组设置值，不能实时响应
                    this.arr[1] = 'jia ming';
                    this.arr.length = 2;
                }
            },
        })
    </script>
</body>
</html>
```

其实上面的`push`等方法，Vue在内部已经对他们进行了相关的hack，以下是示例：

```javascript
const aryMethods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
const arrayAugmentations = [];

aryMethods.forEach((method) => {
    // 这里是原生Array的原型方法
    let original = Array.prototype[method];
    
    // 将push,pop等封装号的方法定义在对象arrayAugmentations的属性上
    // 注意：是属性而非原型属性
    arrayAugmentations[method] = function() {
        console.log('我被改变了!');
        
        // 调用对应的原生方法并放回结果
        return original.apply(this, arguments);
    }
})
```

除了通过上面的几种方法来改变数组的某个值或其他值的情况，我们还可以使用`this.$set()或Vue.set()`方法来实现，比如改变数组第二个的值：

```javascript
data() {
    return {
        arr: ['hello', 'world']
    }
},
methods: {
    changeArr(){ 
        this.$set(this.arr, 1, 'jia ming');
    }
}
```

### Vue不能检测对象属性的添加和删除

比如：

```javascript
var vm = new Vue({
    data() {
        return {
            a: 1
        }
    }
})
// `vm.a`现在是响应式的

vm.b = 2
// `vm.b`不是响应式的
```

对于已经创建的实例，**Vue 不允许动态添加根级别的响应式属性**。但是，可以使用 `Vue.set(object, propertyName, value)或vm.$set(object, propertyName, value)` 方法向嵌套对象添加响应式属性。例如，对于:

```javascript
var vm = new Vue({
  data: {
    userProfile: {
      name: 'Anika'
    }
  }
})

Vue.set(vm.userProfile, 'age', 27)

// 或通过实例的$set方法
vm.$set(vm.userProfile, 'age', 27)
```