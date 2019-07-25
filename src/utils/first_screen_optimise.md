## 首屏优化

### 1. 骨架屏Skeleton Screen

骨架屏幕就是在页面内容未加载完成的时候，先使用一些图形进行占位，等待内容加载完成之后再把它替换掉。

可以使用`page-skeleton-webpack-plugin`来实现。

掘金，知乎的页面上就使用了骨架屏。

### 2. 路由懒加载

把不同路由对应的组件分割为不同的代码快，当路由被访问的时候，再加载对应的组件，对中大型项目来说，会显得很高效，对开发者而言，也方便维护。不过这里要对生成环境和开发环境做区分，因为如果项目很大的话，每次更改代码触发的热更新时间都会很长，所以只在生产环境中使用路由懒加载。

```javascript
// 生产环境  _import_production.js
module.exports = file => () => import('@/pages/' + file + '.vue');
// 开发环境 _import_development.js
module.exports = file => require('@/pages/' + file + '.vue').default; // vue-loader at least v13.0.0+
// router.js中引用
const _import = require('./_import_' + process.env.NODE_ENV);
{
    path: 'course',
    component: _import('course/index'),
    name: 'course'
}
```

### 图片懒加载 vue-lazyload

```javascript
// 安装
npm install vue-lazyload --save-dev
// 使用 main.js
import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
Vue.use(VueLazyload, {
    preLoad: 1.8,
    error: require('@/assets/lazy/error.png'),
    loading: require('@/assets/lazy/loading.png'),
    attempt: 1,
    listenEvents: ['scroll']
});

new Vue({
  el: 'body',
  components: {
    App
  }
});
// 在使用图片的地方加上v-lazy即可
<img v-lazy="img.src" >
```

### 浏览器缓存 localStorage

对于不频繁改动的数据做了缓存，并且根据变换频率，缓存时间不同。

### 其他一些常规的动作

- 使用cdn
- 开启gzip
- 使用http/2





