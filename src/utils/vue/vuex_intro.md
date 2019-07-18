## vuex的介绍

![vuex](https://vuex.vuejs.org/vuex.png)

用来读取的状态集中放在store中；

更改状态的方式是提交`mutations`，这是个同步的事务；

异步逻辑应该封装在`action`中。

在`main.js`引入store，注入。

场景有：单页应用中，组件之间的状态、音乐播放、登陆状态、加入购物车等。


- state

vuex使用单一状态树，即每个应用将仅仅包好一个store实例，但单一状态树和模块化并不冲突。存放的数据状态，不可以直接修改里面的数据。

- mutations

mutations定义的方法动态修改vuex的store中的状态和数据

- getters

getter类似vue的计算属性，主要用来过滤一些数据。

- action

action可以理解为通过将`mutations`里面的处理数据的方法变成可异步处理数据的方法，简单的说就是异步操作数据。view层通过store.dispatch来分发action。

```javascript
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions: {
        increment(context) {
            context.commit('increment');
        }
    }
})
```

- modules

项目特别复杂的时候，可以让每一个模块拥有自己的state、mutation、action、getters使得结构非常清晰，方便管理。

```javascript
const moduleA = {
    state: {
        ...
    },
    mutations: {
        ...
    },
    actions: {
        ...
    },
    getters: {
        ...
    }
};

const moduleB = {
    state: {
        ...
    },
    mutations: {
        ...
    },
    actions: {
        ...
    },
    getters: {
        ...
    }
}

new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB
    }
})
```