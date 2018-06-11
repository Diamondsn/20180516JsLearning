var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('request from' + pathname + 'has received');
    fs.readFile(pathname.substr(1), function (err, data) {//path.substr(1)去掉开头的/
        if (err) {
            return response.writeHead(404, { 'Content-Type': 'text/html' });//404 NOT FOUND
        }
        else {
            switch (path.parse(pathname).ext) {
                case '.js':
                    response.writeHead(200, { 'Content-Type': 'text/javascript' });
                    response.write(data);
                    break;
                case '.css':
                    response.writeHead(200, { 'Content-Type': 'text/css' });
                    response.write(data);
                    break;
                case '.png':
                    response.writeHead(200, { 'Content-Type': 'image/png' });
                    response.write(data);
                    break;
                case '.jpg':
                    response.writeHead(200, { 'Content-Type': 'image/jpg' });
                    response.write(data);
                    break;
                default:
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.write(data);
                    break;
            }
            // response.writeHead(200, { 'Content-Type': 'text/html' });
            // response.write(data);
        }
        response.end();
    })
}).listen(8888);

console.log('server is running at 127.0.0.1:8888');