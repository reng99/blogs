const http = require('http');

http.createServer(function(request, response) {
    
    response.writeHead(200, {
        'Access-Control-Allow-Origin': '*', // cors处理的重点
        'Content-Type' : 'application/json;charset=utf-8'
    });

    let data = {
        name: 'cors'
    };

    data = JSON.stringify(data);

    response.end(data);
}).listen(8887);

console.log('server2 is listen at 8887 port');