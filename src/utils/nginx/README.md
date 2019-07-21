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

### nginx文件目录

1. nginx安装文件目录 `/usr/local/Cellar/nginx`

2. nginx配置文件目录 `/usr/local/etc/nginx`

3. config文件 `/usr/local/etc/nginx/nginx.conf`

4. 系统hosts位置 `/private/etc/hosts`

### nginx常用的命令

```bash
# 启动
sudo nginx

# 安全关闭（退出）
sudo nginx -s quit

# 快速停止
sudo nginx -s stop

# 查看版本
nginx -v

# 重新加载配置
sudo nginx -s reload

# 重新打开
sudo nginx reopen

# 帮助
nginx -h

# 测试nginx的文件又没有语法错误
sudo nginx -t
```

### 卸载nginx

使用`homebrew`进行卸载，在控制台上输入：

```bash
brew uninstall nginx
```

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

在完成上面的代码之后，再运行同级别的文件目录下的两个server文件：

- node path/to/server.js
- node path/to/server2.js

之后开启你的nginx代理`sudo nginx`。

然后在浏览器上打开你的`localhost:8080`页面，在控制台上就可以看到输出内容为服务端返回的数据`{"name":"nginx proxy"}`。


### 后话

如果nginx运行出错的话，尝试杀死进程再运行。杀掉进程的步骤如下：

1. 找到nginx进程占用的端口 `ps -ef| grep nginx`。端口为显示信息的第三列～
2. kill +端口号， 如`kill 66669`
