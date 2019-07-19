## 点击劫持

点击劫持是一种视觉上的欺骗手段。攻击者使用一个透明的、不可见的iframe，覆盖在一个网页上，然后诱使用户在该网页上进行操作，此时用户将在不知情的情况下点击透明的iframe页面。

### 防御

使用`X-Frame-Options`：DENY这个HTTP Header来明确告诉浏览器，不要把当前HTTP响应中的内容在HTML Frame中显示出来。

`X-Frame-Options`有三个值：

- DENY：浏览器会拒绝当前页面加载任何frame页面；
- SAMEORIGIN：frame页面的地址只能为同源域名下的页面
- ALLOW-FROM：定义允许frame加载的页面地址