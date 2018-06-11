//http://www.runoob.com/nodejs/nodejs-express-framework.html
///////////////////////////////////////////////////////////////
var express=require('express');
var app=express();
var cookieparser=require('cookie-parser');
var util=require('util');

app.use(cookieparser());

app.get('/',function(req,res){
    console.log(util.inspect(req.cookies));
     res.end('cookie:'+util.inspect(req.cookies));
});

app.listen(8081);