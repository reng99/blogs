const http = require('http');
const url = require('url');
const querystring = require('querystring'); // 处理query字符串

http.createServer(function(request, response) {
    console.log(request.url);
    let urlPath = url.parse(request.url).pathname;
    let qs = querystring.parse(request.url.split('?')[1]);
    console.log(qs);
    if(urlPath === '/jsonp' && qs.callback) {
        response.writeHead(200, {'Content-Type' : 'application/javascript;charset=utf-8'});
        let data = {
            name: 'jsonp'
        };
        data = JSON.stringify(data);
        var callback = qs.callback+'('+data+')';
        response.end(callback);
    } else{
        response.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
        response.end('hello');
    }
}).listen(8888);

console.log('server listening on 8888');