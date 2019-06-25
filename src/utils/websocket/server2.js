const http = require('http');
const socket = require('socket.io');

// 启动http服务
let server = http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-type': 'text/html'
    });
    response.end('socket');
});

server.listen('8887');

console.log('server is listening at 8887 port');
// 监听socket连接
socket.listen(server).on('connection', function(client) {
    // 接受信息
    client.on('message', function(msg) {
        client.send(`hello ${msg}`); // 返回给客户端浏览器的数据
        console.log(`data from client: --> ${msg}`);
    });

    // 断开链接
    client.on('disconnect', function() {
        console.log('client socket has closed');
    });
})