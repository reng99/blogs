## 从零开始搭建JENKINS自动发布

### 1.购买一个服务器

你需要购买一个服务器，这里我购买的是阿里云的低配服务器。使用的是centos7

购买好服务器之后，我简单通过NGINX来代理，展示一个简单的静态页面，初具成就感~

安装nginx，你可以参考这篇文章进行：http://reng99.cc/2018/08/19/static-website-deploy/

我现在了一款[SecureCRT](https://www.vandyke.com/products/securecrt/mac_osx.html)【一款支持SSH(SSH1和SSH2)的终端仿真程序】，进行资源的上传。

注意点：在上传了资源的时候，你打开相关的ip地址，如果你没有看到页面，请检查一下安全组的设置。

我这里设置如下：

![group_secure](C:\Users\yamei\Desktop\group.jpg)

例如：

```bash
# 配置好之后，需要在“安全列表 - 配置规则”中“添加安全组规则”进行配置
端口范围 80/80
授权对象 0.0.0.0
```

### 2.在服务器上面搭建JENKINS环境

#### 2.1 安装java sdk

可以参考文章[待定]()




















### 参考文件
