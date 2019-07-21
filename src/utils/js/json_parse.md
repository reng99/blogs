## JSON.parse()

将js中的字符串转化成json对象。

```javascript
var str = '{"name":"小明","age":18}';
var json = JSON.parse(str);
console.log(json); // {name: "小明", age: 18}
```

还有能够将字符串转化为json对象：

`var json = eval("(" +str +")")`

`var json = (new Function("return" + str))()`

使用JSON.parse()方法来转换json对象，需要注意的坑点：

1. 字符串的数据格式

以上举例`str = '{"name":"小明","age":18}'`; 属性name和age都用双引号引住。

2. 单引号与双引号

我们看到一开始的举例中 var str = '{"name":"小明","age":18}'; 使用单引号来套双引号，如果反过来写呢，如：var str = "{'name':'小明', 'age':18}";（相信也不少人习惯用双引号套单引号

结果使用JSON.parse()来转化也会报错