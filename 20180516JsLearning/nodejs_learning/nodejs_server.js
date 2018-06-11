//http://www.runoob.com/nodejs/nodejs-router.html
//////////////////////////////////////////////////////
//简单服务器响应
// var http=require("http");

// http.createServer(function(request,response){
//     response.writeHead(200,{'Content-Type':'text/plain'});    
//     response.end("Hello World!\n")
// }).listen(8888);

// console.log("Server running at http://127.0.0.1:8888");

////////////////////////////////////////////////////////

var http=require('http');
var url=require('url');

function start(route){
      function onrequest(request,response)
      {
          var path=url.parse(request.url).pathname;
          route(path);

          console.log('server has receive the request from path');
          response.writeHead(200,{'Contnt-Type':'text/plain'});
          response.write('HelloWorld');
          response.end();
      }

      http.createServer(onrequest).listen(8888);
      console.log('server is running')
};

exports.start=start;