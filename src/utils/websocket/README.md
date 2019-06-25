## WebSocket协议跨域

`WebSocket protocol`是`HTML5`的一种新协议。它实现了浏览器和服务器的**全双工通信**，同时允许跨域通信，是`server push`技术的一种很好实现。

> 全双工通信：又称为双向同时通信，即通信的双方可以同时发送和接受信息交互方式。

原生WebSocket API使用起来不太方便，我们使用Socket.io，它很好地封装了webSocket接口，提供了更简单、灵活的接口，也对不支持webSocket的浏览器提供了向下兼容。

演示的代码见同目录级别下的`index.html, package.json, server.js, server2.js`文件。

### 如何运行呢？

1. 进入此目录`npm install`

2. node server.js

3. npm run start 或 npm run dev

4. 在浏览器上打开`localhost:8888`

5. 打开浏览器控制台；在页面的input栏随便输入内容，光标移开输入框之后看看控制台上打印出来的信息（那时来自服务器的数据）。