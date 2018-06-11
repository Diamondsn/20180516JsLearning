//http://www.runoob.com/nodejs/nodejs-router.html
////////////////////////////////////////////////////

var server=require('./nodejs_server');
var router=require('./nodejs_router');

server.start(router.router);
