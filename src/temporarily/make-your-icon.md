## 制作自己的icon

在使用`element-ui`进行开发的过程中，发现其自带的icon的数量有限，不能满足我们日常开发中对icon的需求，所以我们要额外引进。

嗯～可以考虑到使用[Font Awesome](http://fontawesome.dashgame.com/)，不过，cdn方式引入的时候不够稳定,当然，你也可以下载下来再引入，里面的图标也够平时使用了。我们这里使用[阿里巴巴的图标库](http://www.iconfont.cn/)来制作自己的图标，结合`element-ui`使用。下面是详细的制作步骤:

### 添加项目

首先你得**登陆**站点[阿里巴巴的图标库](http://www.iconfont.cn/),搜索你想要的icon，将其**添加入库**(也就是点击相关icon上的购物车的提示)。

然后你就可以到右上角的购物车图标进入所选的icon区域了，接着就是**添加至项目**。这里如果你没有对应的项目的话，就要新建一个项目--`点击加入项目的右边的添加icon进行项目的创建`。


### 下载到本地

在对所选的icon添加到项目后，会自动跳转到你的项目。点击`更多操作`->`编辑项目` 对**FontClass/Symbol前缀**进行命名，因为这里是和element-ui的库结合，这里就命名为`el-icon`后进行保存。

然后，对自己的项目选择为**Font class**，将其`下载至本地`。


### 项目的引用

在项目下载下来之后，打开文件夹，里面有一个`iconfont.css`，可以认为这是这个icon文件夹的入口文件，将其在项目的入口文件中引入即可。比如我这里在`webpack-cli`搭建的vue项目中引入，那就在main.js中引入了（当然还可以在其他文件中引入，比如入口的css文件，这里我喜欢在main.js中引入而已）。

```javascript
import './assets/icon/iconfont.css'
```

嗯～可以使用阿里云的链接进行引入:`查看在线链接`->`点击生成链接`->`点击复制代码`，然后将链接进行import就行了，比如我的：

```css
# 在全局的css样式中引入
@import '//at.alicdn.com/t/font_891369_t1x449p4ssn.css';
```

美滋滋，之后你就可以像`element-ui`这样进行引入icon了。


更多的使用，查看[使用帮助](http://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8cf4382a&helptype=code)