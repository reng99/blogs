## BFC

**BFC**生成了一套封闭的布局空间，内部子元素无论怎么布局，都不会影响到外部的元素。BFC可以用来**清除浮动，防止margin重叠，去除float文字环绕，第一个子元素margin-top和父元素重叠**等。

以下几种元素会生成BFC:

- html元素
- float不是none的元素
- overflow: auto/hidden/scroll的元素
- display: table-cell/inline-block的元素
- position不是static和relative元素