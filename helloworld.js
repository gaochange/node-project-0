var http = require('http');
var host = "0.0.0.0";
var port = 8888;

http.createServer(function (request, response) {

        // 发送 HTTP 头部 
        // HTTP 状态值: 200 : OK
        // 内容类型: text/plain
        response.writeHead(200, {'Content-Type': 'text/html';charset=utf-8'});

        // 发送响应数据 "Hello World"
        response.end('<p>我打尼玛的 牛志敏
                                 <img src="/root/b/1.jpg" width="128" height="128">'');
}).listen(port,host);

// 终端打印如下信息
console.log('Server running at http://%s:%d',host,port);

