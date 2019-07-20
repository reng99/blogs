## HTTP版本信息

HTTP协议(HyperText Transfer Protocol，超文本传输协议)是因特网上应用最广泛的一种网络传输协议。

HTTP是`万维网WWW(World Wide Web)`的数据通信的基础。

### HTTP/0.9 【1991年】

该版本极其简单，只有一个命令GET：

GET /index.html

上面的命令表示，TCP连接(connection)建立之后，客户端向服务器请求(request)网页index.html

协议规定，服务器只能回应HTML格式的字符串，不能回应别的格式：

Hello World // 回应html

服务器发送完毕之后，就关闭TCP连接。

### HTTP/1.0 【1996年】

- 任何格式的内容都能发送。这使得互联网不仅可以传输文字，还能传输图像、视频、二进制文件。
- 除了GET命令，还引入了POST命令和HEAD命令，丰富了浏览器与服务器的互动手段
- HTTP请求和回应的格式也变了。除了数据部分，每次通信都必须包含头信息(HTTP header)
- 其他新增的功能还包括状态码(status code)、多字符集支持、多部分发送(multi-part type)、权限(authorization)、缓存(cache)、内容编码(content encoding)等

**请求格式**：

下面是1.0版本的HTTP请求的例子：

```bash
GET /HTTP/1.0
User-Agent: Mozilla/5.0(Macintosh; Intel Mac OS X 10_10_5)
Accept: */*
```

**响应格式**：

服务器的回应如下：

```javascript
HTTP/1.0 200 OK
Content-Type: text/plain
Content-Length: 137582
Expires: Thu, 05 Dec 1997 16:00:00 GMT
Last-Modified: Web, 5 August 1996 15:55:28 GMT
Server: Apache 0.84
Hello World
```

#### 缺点

HTTP/1.0版的主要缺点是，每个TCP连接只能发送一个请求。发送数据完毕，连接就关闭，如果还要请求其他资源，就必须再重新建一个连接。

TCP连接的新建成本很高，因为需要客户端和服务器三次握手，并且开始发送速率较慢(slow start)。所以，HTTP1.0版本的性能比较差。随着网页加载外部资源越来越多，这个问题就愈发突出了。

为了解决这个问题，有些浏览器在请求时，用了一个非标准的Connection字段：

```bash
Connection: keep-alive
```

这个字段要求服务器不要关闭TCP连接，以便其他请求复用。

服务器同样回应这个字段：

```bash
Connection: keep-alive
```

一个可以复用的TCP连接就建立了，直到客户端或服务器主动关闭连接。但是，这不是标准字段，不同实现的行为可能不一致，因此不是根本的解决方法。

### HTTP/1.1 【1997年】目前仍然受欢迎的版本协议

- 引入持久连接(persistent connection)，即TCP连接默认不关闭，可以被多个请求复用，不用生命`keep-alive`

客户端和服务器发现对方一段时间没有活动，就可以主动关闭连接。

不过规范的做法是，客户端在最后一个请求时，发送`Connection: close`，明确需求服务器关闭TCP连接：

```bash
Connection: close
```

- 管道机制(pipelining)，即在同一个TCP连接里面，客户端可以同时发送多个请求。这样就进一步改进了HTTP协议的效率。

举个例子：客户端需要发送两个资源。以前的做法是，在同一个TCP连接里面，先发送A请求，然后等待服务器作出响应，收到后再发出B请求。管道机制规则是允许浏览器同时发出A和B请求，但是服务器还是按照顺序，先回应A请求，完成后再回应B请求。

- 新增了更多请求方法：PUT、PATCH、HEAD、OPTIONS、DELETE。

#### 缺点

虽然1.1版本允许复用TCP连接，但是同一个TCP连接里面，所有的数据通信是按次序进行的。服务器只有处理完一个回应，才会进行下一个回应。要是前面的回应特别慢，后面就会有许多请求排队等着。这称为**队头堵塞(Head-of-line blocking)**。

为了避免这个问题，只有两种方法：一是减少请求，二是同时多开持久连接。这导致了很多的网页优化技巧，比如合并脚本和样式表，将图片嵌入CSS代码、域名分片(domain sharding)等等。如果HTTP协议设计得更好一些，这些额外的工作是可以避免的。

### HTTP/2 【2015年】

2015年，HTTP/2发布。它不叫HTTP/2.0，是因为标准委员会不打算再发布子版本其子版本了。

- 多路复用

HTTP/2复用TCP连接，在一个连接里，客户端和浏览器都可以同时发送多个请求或回应，并且不用按照顺序一一对应，这样一定程度上就避免了**队头堵塞**。

举个例子：在一个TCP连接里面，服务器同时收到了A和B请求，于是先回应A请求，结果发现处理过程非常耗时，于是就发送A请求已经处理好的部分，接着回应B请求，完成后，再发送A请求剩下的部分。

这样双向、实时的通信，就叫做多工(Multiplexing)，【多路复用】。

- 头信息压缩

HTTP协议不带有状态，每次请求都会必须附上所有信息。所以，请求的很多字段都是重复的，比如Cookie和User Agent，一摸一样的内容，每次请求必须附带，这会浪费很多带宽，也影响速度。

HTTP/2对这一点做了优化，引入了头信息压缩机制(header compression)。一方面，头信息使用gzip或compress压缩后再发送；另一方面，客户端和服务端同时维护一张头信息，所有的字段都会存入这个表，生成一个索引号，以后就不发送同样字段了，只发送索引号，这样就提高速度了。

- 服务端推送

HTTP/2 允许服务器未经请求，主动向客户端发送资源，这叫服务器推送(server push)。

#### 缺点

再弱环境下也会造成**队头阻塞**。

HTTP/2 的基础 TCP 协议本身却也存在着队头阻塞的问题。HTTP/2 的每个请求都会被拆分成多个 Frame，不同请求的 Frame 组合成 Stream，Stream 是 TCP 上的逻辑传输单元，这样 HTTP/2 就达到了一条连接同时发送多条请求的目标，这就是多路复用的原理。我们看一个例子，在一条 TCP 连接上同时发送 4 个 Stream，其中 Stream1 已正确送达，Stream2 中的第 3 个 Frame 丢失，TCP 处理数据时有严格的前后顺序，先发送的 Frame 要先被处理，这样就会要求发送方重新发送第 3 个 Frame，Stream3 和 Stream4 虽然已到达但却不能被处理，那么这时整条连接都被阻塞。

不仅如此，由于 HTTP/2 必须使用 HTTPS，而 HTTPS 使用的 TLS 协议也存在队头阻塞问题。TLS 基于 Record 组织数据，将一堆数据放在一起（即一个 Record）加密，加密完后又拆分成多个 TCP 包传输。

> 之所以所必须，是因为浏览器默认使用http/2的时候要使用https


### HTTP3 【2018年】

HTTP/3 是基于QUIC协议的HTTP(HTTP over QUIC)。


> QUIC全称 Quick UDP Internet Connections

- 零RTT建立连接

QUIC从请求连接到正式发出HTTP数据花了1个RTT，这1个RTT主要是为了获取`Server Config`，后面的连接如果客户端缓存了`Server Config`，那么就可以直接发送HTTP数据，实现0RTT建立连接。

- 解决队头阻塞问题

QUIC 的传输单元是 Packet，加密单元也是 Packet，整个加密、传输、解密都基于 Packet，这样就能避免 TLS 的队头阻塞问题；

QUIC 基于 UDP，UDP 的数据包在接收端没有处理顺序，即使中间丢失一个包，也不会阻塞整条连接，其他的资源会被正常处理。

...


### 参考

https://curl.haxx.se/

https://www.cnblogs.com/imstudy/p/9234124.html

https://www.youtube.com/watch?v=DtTKF5OcpsU

https://mp.weixin.qq.com/s/GICbiyJpINrHZ41u_4zT-A?

https://www.jianshu.com/p/bb3eeb36b479

https://zhuanlan.zhihu.com/p/58668946