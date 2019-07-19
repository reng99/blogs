## 垮站脚本攻击XSS

**跨站脚本攻击**，英文全称`Cross Site Script`，本来缩写是`CSS`，但是为了和层叠样式表（Cascading Style Sheet, CSS）有所区别，所以在安全领域叫做`XSS`。

XSS属于客户端攻击，攻击者在我们网页中嵌入恶意脚本，当用户使用浏览器浏览这些被嵌入恶意脚本的网页时候，脚本会在我们的浏览器中执行。

XSS攻击的核心方式是**脚本**。这些脚本通常是`javascript`脚本，从这个层面来说`javascript`能做的事情，XSS攻击一般都能做到。比如：获取页面内容，盗取用户cookie，劫持前端逻辑，发送非法请求，盗取页面数据，url跳转等。

### 分类

XSS主要分为三类：

#### 反射型XSS

反射型XSS只是简单的将用户输入的数据**反射**给浏览器。也就是说，黑客往往需要诱使用户“点击”一个恶意链接，才能攻击成功。反射型XSS也叫做"非持久型XSS（Non-persistent XSS）"。

#### 存储型XSS

存储型XSS会把用户输入的数据“存储”在服务器端。这种XSS具有很强的稳定性。存储型XSS通常也叫“持久型XSS（Persistent XSS）”，因为从效果上来说，它存在的时间比较长的。

比较常见的场景就是：黑客写下一篇包含恶意Javascript代码的博客文章，文章发表后，所有访问该博客文章的用户，都会在他们的浏览器中执行这段恶意的JavaScript代码。黑客把恶意的脚本保存到服务器端，所以这种XSS攻击就叫做"存储型XSS"。

#### DOM型XSS

通过修改页面的DOM节点形成XSS，称之为**DOM Based XSS**。

```javascript
<div id="t"></div>
<input type="text" id="text" value=""/>
<input type="button" id="s" value="write" onclick="test()"/>
<script>
    function test() {
        var str = document.getElementById('text').value;
        document.getElementById('t').innerHTML = `<a href=${str}> testLink </a>`
    }
</script>
```

### XSS防御

#### HttpOnly

浏览器将禁止页面的JavaScript访问带有HttpOnly属性的Cookie。

#### 输入检查

#### 处理富文本

在富文本编写内容的时候，有时候允许标签的写入`<img>`。那可以通过配置白名单的方法进行。

#### dom型的处理

对javascript进行`javascriptEncode`，对html内容进行`HtmlEncode`。

