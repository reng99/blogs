## CORS案例

CORS是**跨域资源共享（Cross-origin resource sharing）**的简称。它允许浏览器向跨源（协议 + 域名 + 端口）服务器，发出`XMLHttpRequest`请求，从而克服`AJAX`只能同源使用的限制。

CORS的关键点是设置`Access-Control-Allow-Origin`的值。

- 如果是允许全部的域名请求，可以设置：`'Access-Control-Allow-Origin': '*'`

- 如果只是允许特定的域名请求，可以设置(demo)：`'Access-Control-Allow-Origin': '*.siteName.com'`

为了演示，我们使用node来搭建了两个服务：具体的文件是此`README.md`文件同级的`server.js和server2.js`，还有一个前端页面`index.html`。

### 如何运行demo

1. node 'path/to/server.js'

2. node 'path/to/server2.js'

3. 在浏览器上打开`localhost:8888`即可。控制台会打印出来自server2.js服务的`{"name":"cors"}`信息