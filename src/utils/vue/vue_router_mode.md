## vue-router的模式

模式包括`hash模式和history模式`。

**hash模式**：在浏览器中符号“#”，#以及#以后的字符串称之为hash，用window.location.hash读取；

特点：hash虽然在URL中，但不被包括在HTTP请求中；hash用来指导浏览器动作，对服务端安全无用，hash不会重加载页面。

hash模式下，仅hash符号之前的内容被包含在请求中，因此对于后端来说，即使没有做到对路由的全覆盖，也不会返回404错误。

**history模式**：history采用html5的新特性；且提供了两个新方法：`pushState()和replaceState()`可以对浏览器历史记录栈进行修改，以及popState事件监听到状态变更。

history模式下，前端的URL必须和实际向后端发起请求的URL一致，如www.xxx.com/items/id。后端如果缺少对`/items/id`的路由处理，将返回404错误。