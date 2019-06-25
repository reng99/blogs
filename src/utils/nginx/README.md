## 反向代理

### mac上安装

1. 下载安装homebrew

可以先通过`brew --version`查看下自己的电脑上是否安装了homebrew。如果已经安装，则忽略步骤1；如果没有安装，则通过下面的命令行进行安装。

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

2. 安装nginx

在控制台上运行`brew install nginx`进行nginx的安装。

3. 启动nginx

在控制台上运行`sudo nginx`，提示的输入密码是你设置的电脑开机密码。之后在浏览器上打开`localhost:8080`就可以看到运行的内容了。

### nginx配置跨域demo

配置的文件`./nginx.conf`，其中第48到第54行代码是自己测试时添加的，内容如下：

```bash
location /app/ {
    proxy_pass http://localhost:8888/;
}

location /api/ {
    proxy_pass http://localhost:8887/;
}
```

> 有待补充