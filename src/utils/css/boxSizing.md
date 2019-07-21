## 盒子模型和boxzing

盒子模型分为标准盒模型和怪异盒模型/ie盒模型。

**标准的盒模型**

height = content;

**怪异盒模型**

height = content + paddingTop + paddingBottom +  borderTop + borderBottom;

如何将两种模型统一呢？

css3出现了个新的东西：`box-sizing`

它有三个属性，而且它们的作用如下：

- content-box: 这是由 CSS2.1 规定的宽度高度行为。宽度和高度分别应用到元素的内容框。在宽度和高度之外绘制元素的内边距和边框。【统一成标准和模型】
- border-box：为元素设定的宽度和高度决定了元素的边框盒。就是说，为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。【统一成ie盒模型】
- inherit: 规定应从父元素继承 box-sizing 属性的值。

例子如下：

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>box-sizing</title>
</head>
<body>
    <div id="id1" style='box-sizing: content-box; margin: 10; padding: 10; width: 200px; height: 200px;background: red;'></div>
    <div id='id2' style='box-sizing: border-box; margin: 10; padding: 10; width: 200px; height: 200px;background: blue;'></div>
</body>
</html>
```

### 使用场景

比如下面这个：

```javascript
<div style="width: 200px;background: red;height: 50px;">
    <div style="width: 100%;height: 30px;background: blue;border: 5px solid #333;"></div>
</div>
```

上面代码对应的图：

![boxsizing01](./imgs/boxsizing01.png)

修正后：

```javascript
<div style="width: 200px;background: red;height: 50px;">
    <div style="width: 100%;height: 30px;background: blue;border: 5px solid #333;box-sizing: border-box;"></div>
</div>
```

![boxsizing02](./imgs/boxsizing02.png)






