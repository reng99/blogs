## pm2

pm2是一个带有负载均衡功能的Node应用的进程管理器。

pm2可以利用服务器上的所有cpu，并保证进程永远或者，0秒的重载，部署管理多个Node项目。

借助pm2让Nodejs服务常驻。

#### 安装

```bash
npm install pm2 -g
```

### 基本指令

```bash
pm2 start [应用入口文件名] // 启动
pm2 restart [name or id] // 重新启动服务
pm2 reload [name or id] // 和restart功能相同，但是可以实现0秒的无缝衔接
pm2 stop all // 关闭所有的应用
pm2 stop id // 关闭指定的应用
pm2 delete id // 删除指定的应用
pm2 monit // 监控开启的应用
```

### 实践

进入同级目录`pm2`文件夹内，在控制上运行`pm2 start all`，然后在浏览器上访问：

- http://127.0.0.1:8887/
- http://127.0.0.1:8888/

你就可以看到开启服务返回的文本内容了～