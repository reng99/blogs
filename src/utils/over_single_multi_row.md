## CSS实现单行、多行文本溢出显示省略号(...)

### 实现单行溢出省略...

核心代码如下：

```css
#text{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
```

### 实现多行溢出省略...

核心代码：

```css
#text{
    display: -webkit-box; // 为box进行盒子限制
    -webkit-box-orient: vertical; // 文本的方向是垂直
    -webkit-line-clamp: 3; // 文本的行数
    overflow: hidden;
}
```

使用范围：

因使用了WebKit的CSS扩展属性，**该方法使用于WebKit浏览器及移动端**。

注：

- -webkit-line-clamp 用来限制在一个块元素显示的文本的行数。
- display: -webkit-box; 必须结合的属性，将对象作为弹性伸缩盒子模型显示。
- -webkit-box-orient 必须结合的属性，设置或检索伸缩盒对象的子元素的排列方式。

