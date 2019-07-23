## HTTPS

HTTPS(Hyper Text Transfer Protocol over Secure Socket Layer)，是以安全为目标的HTTP通道，简单讲就是HTTP的安全版。HTTPS的安全基础是是SSL，因此加密的详细内容就需要SSL。现在它被广泛用于万维网上安全敏感的通讯，例如交易支付方面。现在网站也统统偏向使用HTTPS了。

### HTTP与HTTPS的区别

- HTTP是明文传输，HTTPS通过SSL\TLS进行了加密
- HTTP的端口号是80，HTTPS是443
- HTTPS需要到CA(CertificationAuthority)申请证书，一般免费的证书很少，需要交费
- HTTP的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比HTTP协议安全

### HTTPS原理

![https_principle](./imgs/https_principle.md)

文章参考：https://mp.weixin.qq.com/s/StqqafHePlBkWAPQZg3NrA