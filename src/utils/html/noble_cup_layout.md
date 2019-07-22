## 圣杯布局/双飞翼布局

**圣杯布局和双飞翼布局**功能相同，都是为了实现一个`两侧宽度固定，中间宽度自适应的三栏布局`。

两者的实现方法略有差异，不过都遵循以下要点：

- 两侧宽度固定，中间宽度自适应
- **中间部分**在DOM结构上优先，以便先行渲染
- 允许散列中的任意一列成为最高列
- 只需要使用一个额外的`<div>`标签

### 圣杯布局

**DOM结构**：

```html
<div id="header"></div>
<div id="container">
    <div id="center" class="column"></div>
    <div id="left" class="column"></div>
    <div id="right" class="column"></div>
</div>
<div id="footer"></div>
```

**CSS代码**：

分别为三列设置宽度与浮动以及margin值，同时对`footer`设置清除浮动：

```css
body {
    min-width: 550px; /*给一个合理的最小宽度，保证布局不被破坏*/
}
#container {
    padding-left: 200px;
    padding-right: 150px;
}
.column{
    float: left;
}
#center {
    width: 100%;
    height: 200px;
    background: red;
}
#left {
    width: 200px;
    margin-left: -100%; /* 重点1 将位置移动到center的左侧与其左侧内容重叠 */
    position: relative; /* 重点2 */
    right: 200px; /* 重点2 和上面的relative结合将其自身左移width的值 */
    height: 400px;
    background: blue;
}
#right {
    width: 150px;
    margin-right: -150px; /* 重点 */
    background: yellow;
    height: 50px;
}
#footer {
    clear: both;
}
```

### 双飞翼布局

**DOM结构**:

```html
<body>
    <div id="header"></div>
    <div id="container" class="column">
        <div id="center"></div>
    </div>
    <div id="left" class="column"></div>
    <div id="right" class="column"></div>
</body>
```

双飞翼布局的DOM结构和圣杯布局的区别是用`container`仅包裹`center`。另外将`.column类`从`center`移至`container`上。

**CSS代码**：

```css
body {
    min-width: 500px;
}
#container {
    width: 100%;
}
.column {
    float: left;
}
#center {
    margin-left: 200px;
    margin-right: 150px;
    height: 300px;
    background: red;
}
#left {
    width: 200px;
    margin-left: -100%;
    height: 50px;
    background: blue;
}
#right {
    width: 150px;
    margin-left: -150px;
    height: 200px;
    background: yellow;
}
#footer {
    clear: both;
}
```

### 其他方法实现这种三列布局

#### 实用calc()

**DOM结构**：

```html
<div id="header"></div>
<div id="container">
    <div id="left" class="column">left 200px </div>
    <div id="center" class="column">center=calc(100%-400px)</div>
    <div id="right" class="column">right 200px</div>
</div>
<div id="footer"></div>
```

**CSS代码**：

```css
body{
    margin: 0px;
}
#container{
    width: 100%;
}
.column{
    float: left;
}
#center{
    width: calc(100% - 400px); /* 重点 */
    background: #ccc;
    height: 200px;
}
#left{
    width: 200px;
    height: 200px;
    background: red;
}
#right{
    width: 200px;
    height: 200px;
    background: blue;
}
#footer{
    clear: both;
}
```

#### 实用border-box

**DOM结构**：

```html
<div id="header"></div>
<div id="container">
    <div id="center" class="column">borderbox</div>
    <div id="left" class="column">left 200px </div>
    <div id="right" class="column">right 150px</div>
</div>
<div id="footer"></div>
```

**CSS代码**：

```css
body{
    margin: 0px;
}
#container{
    width: 100%;
}
.column{
    float: left;
}
#center{
    background: #ccc;
    height: 200px;
    box-sizing: border-box; /* 重点 */
    padding-left: 200px;
    padding-right: 150px;
    width: 100%;
}
#left{
    width: 200px;
    height: 100px;
    background: red;
    margin-left: -100%;
}
#right{
    width: 150px;
    height: 50px;
    background: blue;
    margin-right: -150px;
    position: relative;
    right: 150px;
}
#footer{
    clear: both;
}
```

#### 使用flex布局

**DOM结构**：

```javascript
<div id="container">
  <div id="center"></div>
  <div id="left"></div>
  <div id="right"></div>
</div>
```

**CSS代码**：

```css
#container {
    display: flex;
}

#center {
    flex: 1;
    height: 400px;
    background: red;
}

#left {
    flex: 0 0 200px; /* 0 0 200px 意思是 flex-grow flex-shrink flex-basis*/
    order: -1; /* 表示次序 */
    height: 100px;
    background: blue;
}

#right {
    flex: 0 0 150px;
    height: 50px;
    background: yellow;
}
```

`flex = flex-grow + flex-shrink + flex-basis`

- flex-grow 放大的倍数
- flex-shrink 缩写的倍数
- flex-basis 基本的宽度大小，如果设置为0，则为内容的宽度