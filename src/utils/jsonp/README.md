## jsonp案例

> jsonp是JSON with padding的简称，是json的一种“使用模式”。可以让网页从别的域名（网站）那获取资料，即跨域读取数据。

使用script标签进行跨域请求的。

使用jsonp，服务器后台也是要做相关改动的，否则后台还是返回json对象的话，是会报错的；返回的是`application/javascript`类型。

前后端约定`callback（也可以约定是其他，比如cb，反正前后端要一致。callback为默认）`作为jsonp的请求的参数。客户端请求的`callback`的值作为函数名，而服务端返回的数据作为函数的参数。

需要注意⚠️ 使用JSONP模式来请求数据时，`服务端返回一段可执行的JavaScript代码（这也是有可能造成XSS攻击的）`。

举个例子，假如需要从服务器(http://www.a.com/user?id=123)获取的数据如下（一般的形式后端返回json格式）：

`{"id": 123, "name" : 张三, "age": 17}`

那么使用JSONP方式请求(http://www.a.com/user?id=123&callback=foo)的数据将会如下：

`foo({"id": 123, "name" : 张三, "age": 17})` // 这就有可能带来XSS攻击了

### jsonp的弊端

- **服务器需要改动代码来支持**：如果使用是自己的服务器的请求，改动还不算弊端；但是使用到别人服务器的情况下，那就有点尴尬了。

- **只支持GET方法**：无法满足实际开发中的需求，`POST, DELETE`方法就无能为力了。

- **发送的不是XHR请求**：这也是jsonp能够跨域的原因，但是就拥有不了`XHR`的一些特性了，比如异步。


### 关键代码

```html
<!DOCTYPE html>
    <head>
        <title>jsonp</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    </head>
    <body>
        <script>
            function test(data){
                alert(data.name);
            };
        </script>
        <script src="http://127.0.0.1:8080/jsonp?callback=test"></script>
    </body>
</html>
```

下面我们来动态创建`script`标签和使用node来模拟情况。详细内容请戳同层级的`html和js`代码了解。