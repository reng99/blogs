## 嘉明的进阶笔记

> 前端进阶

- HTML相关
  - [canvas html5]
  - [拖拽 html5](./drag/html5_drag.md)
  - [圣杯布局/双飞翼布局](./html/noble_cup_layout.md)

- CSS相关
  - [盒模型和box-sizing;](./css/boxSizing.md)
  - [rem、em、px、%、vh、vw、vm单位区别](./rem_em_etc.md)
  - [实现单行、多行文本溢出显示](./over_single_multi_row.md)
  - [CSS选择器的优先级](./css/priority.md)
  - [BFC](./css/bfc.md)

- javascript
  - [模拟call, apply和bind](./imitate_call_apply_bind.md)
  - [模拟字符串的indexOf方法](./imitate_string_indexof.md)
  - [防抖和节流](./debounce_and_throttle.md)
  - [事件委托/事件代理](./event_agent.md)
  - [对象深拷贝](./obj_deep_clone.md)
  - [类数组和数组](./array_like_and_array.md)
  - [var、let和const](./var_let_const.md)
  - [简易版promise](./simple_promise.md)
  - [实现数组去重](./arr_remove_repeat.md)
  - [new都干了什么](./what_new_done.md)
  - [理解this](./understand_this.md)
  - [检出变量是String类型](./check_type_string.md)
  - [手写一个ajax](./write_ajax.md)
  - [callee和caller](./callee_caller.md)
  - [strict 严格模式](./js/strict_mode.md)
  - [JSON.parse](./js/json_parse.md)
  - [JSON.stringify](./js/json_stringify.md)
  - [重排和重绘](./js/relayout_repaint.md)
  - [websocket介绍](./js/websocket.md)

- HTTP相关
  - [HTTP的原理](./http/http_principle.md)
  - [TCP/IP协议族按层次划分了哪几层](./http/tcp_ip_level.md)
  - [什么是restful](./http/restful_intro.md)
  - [TCP三次握手](./http/tcp_establish.md)
  - [TCP四次挥手](./http/tcp_close.md)
  - [HTTP缓存](./http/http_cache.md)
  - [HTTP的版本历史](./http/http_version_history.md)
  - [Etag值](./http/etag.md)
  - [HTTPS](./http/https.md)

- 浏览器
  - [cookie和session的区别](./diff_cookie_session.md)
  - 跨域解决方案
    - [jsonp案例](./jsonp/)
    - [cors案例](./cors/)
    - [nginx反向代理案例](./nginx/)
    - [WebSocket协议案例](./websocket/)

- VUE相关
  - [defineProperty的缺点](./shortcoming_define_property.md)
  - [vm.$set和Vue.set的实现](./principle_set_$set.md)
  - [虚拟dom](./virtual_dom.md)
  - [计算属性和监听属性](./computed_watch.md)
  - [事件总线 EventBus](./eventBus.md)
  - [data必须是一个函数](./data_should_function.md)
  - [mvvm的理解](./vue/mvvm_note.md)
  - [Vue的生命周期](./vue/lifecycle.md)
  - [Vue实现数据双向绑定的原理](./vue/databind_principle.md)
  - [vue-router的路由模式](./vue/vue_router_mode.md)
  - [vue-router钩子函数](./vue/vue_router_hook.md)
  - [vuex介绍](./vue/vuex_intro.md)
  - [自定义指令](./vue/vue_directive.md)
  - [自定义过滤事件](./vue/vue_filter.md)
  - [其他要点](./vue/vue_other_point.md)

- 前端监控
  - [页面埋点](./bury_on_page.md)

- 优化
  - [JS中的文档碎片](./fragment_in_js.md)
  - [首屏优化](./first_screen_optimise.md)

- 设计模式
  - [概要](./design_model/overview.md)
  - [单例模式](./design_model/singleton_model.md)
  - [构造函数模式](./design_model/constructor_model.md)
  - [建造者模式](./design_model/builder_model.md)
  - [工厂模式](./design_model/factory_model.md)
  - [外观模式](./design_model/appearance_model.md)
  - [代理模式](./design_model/proxy_model.md)
  - [发布-订阅模式 或说 观察者模式](./design_model/watcher_model.md)
  - [策略模式](./design_model/tack_model.md)
  - [命令模式](./design_model/command_model.md)
  - [迭代器模式](./design_model/repeat_model.md)
  - [职责链模式](./design_model/duty_chain_model.md)
  - [适配器模式](./design_model/adapt_model.md)
  - [模版方法](./design_model/template_methods.md)
  - [原型模式](./design_model/proto_model.md)

- 数据结构和算法
  - 数据结构
    - [栈](./structure/stack.md)
    - [队列](./structure/queue.md)
    - [链表](./structure/linkedList.md)
    - [字典](./structure/dictionary.md)
    - [集合](./structure/set.md)
    - [哈希表](./structure/hashTable.md)
    - [二叉查找树](./structure/binary_tree.md)
    - [图](./structure/graph.md)
  - 基本算法
    - [冒泡排序](./algorithm/bubble.md) 
    - [选择排序](./algorithm/selectSort.md)
    - [插入排序](./algorithm/insertSort.md)
    - [归并排序](./algorithm/mergeSort.md)
    - [快速排序](./algorithm/quickSort.md)
    - [动态规划](./algorithm/dynamic_plan.md)
    - [贪心算法](./algorithm/greedAlgorithm.md)
    - [时间和空间复杂度](./algorithm/time_and_space.md)
  - 参考题
    - [B是A子集的问题](./algorithm/sub_arr.md)

- nodeJs
  - [nodejs的事件循环](./nodejs/node_event_loop.md)
  - [koa2](./nodejs/koa2.md)
  - [pm2](./nodejs/pm2.md)
  - [fs文件系统](./nodejs/file_system.md)
  - [path路径](./nodejs/path.md)
  - [events事件触发器](./nodejs/events.md)

- 前端安全
  - [跨站脚本攻击XSS](./security/xss.md)
  - [跨站点请求伪造CSRF](./security/csrf.md)
  - [点击劫持](./security/clickJacking.md)
  - [sql注入](./security/sqlInject.md)

- webpack
  - [hash,chunkhash,contenthash解析](./webpack/hash_chunkhash_contenthash.md)
