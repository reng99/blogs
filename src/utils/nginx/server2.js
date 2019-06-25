const http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type' : 'application/json;charset=utf-8'
    });

    let data = {
        name: 'nginx proxy'
    };

    data = JSON.stringify(data);

    response.end(data);

}).listen(8887);

console.log('server2 is listen at 8887 port');