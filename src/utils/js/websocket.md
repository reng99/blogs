## websocket的介绍

**长连接**：一个连接上可以连续发送多个数据包，在连接期间，如果没有数据包发送，需要双方发链路检查包。

**TCP/IP**：TCP/IP属于运输层，主要解决数据在网络中的传输问题，只管传输数据。但是那样对传输的数据没有一个规范的封装、解析等处理，使得传输的数据就很难识别，所以才有了应用层协议对数据的封装、解析等，如HTTP协议。

**HTTP**：HTTP是应用层协议，封装解析传输的数据。从HTTP1.1开始其实就默认开启了长连接，也就是请求header中看到的Connection: Keep-alive。但是这个长连接只是说保持了（服务器可以告诉客户端保持时间Keep-Alive: timeout=200;max=20;）这个TCP通道，直接`Request-Response`，而不需要再创建一个连接通道，做到了一个性能优化。但是HTTP通讯本身还是`Request-Response`。

**socket**：与HTTP不一样，socket不是协议，它是在程序层面上对传输层协议（可以主要理解为TCP/IP）的接口封装。我们知道传输层的协议，是解决数据在网络中传输的，那么socket就是传输通道两端的接口。所以对于前端而言，socket也可以简单的理解为对TCP/IP的抽象协议。

**WebSocket**：WebSocket是包装成了一个应用层协议作为socket，从而能够让客户端和远程服务端通过web建立双工通信。websocket提供ws和wss两种URL方案。

### websocket简单实现

WebSocket协议有两部分：握手、数据传输。

其中，握手是关键，是一切的先决条件。

**握手**

1. 客户端握手

```javascript
// 创建WebSocket实例，可以使用ws和wss。第二个参数可以选填自定义协议，如果多协议，可以以数组方法
var socket = new WebSocket('ws://localhost:8081', [protocol]);
```

2. 服务端握手响应

服务器向客户端证明它接收到了客户端的WebSocket握手，为使服务器不接受非WebSocket连接，防止攻击者通过XMLRequest发送或表单提交精心构造的包来欺骗WebSocket服务器

3. 握手关闭

关闭握手可用使用TCP直接关闭连接的方式来关闭握手。但是TCP关闭握手不总是端到端可靠的，特别是出现拦截代理和其他的中间设施。

**数据传输**


