## vue路由的钩子函数

首页可以控制导航跳转，beforeEach，afterEach等，一般用于页面title的修改。一些需要登陆才能调整页面的重定向功能。

**beforeEach**主要有三个参数`to, from, next`

- to: route即将进入的目标路由对象
- from: route当前导航正要离开的路由
- next：function一定要调用该方法resolve这个钩子。执行效果依赖next方法的调用参数。可以控制网页的跳转。