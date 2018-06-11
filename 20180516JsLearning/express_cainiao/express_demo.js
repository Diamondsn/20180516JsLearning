//http://www.runoob.com/nodejs/nodejs-express-framework.html
/////////////////////////////////////////////////////////////
//express框架demo
// var express=require('express');
// app=express();

// app.get('/',function(req,res){
//     res.send('这是使用express框架发送的HelloWorld!');
// });

// var server=app.listen(8081,function(){
//      var host=server.address().address;
//      var port=server.address().port;

//      console.log('接收到来自访问地址为http://%s:%s',host,port);
// });

////////////////////////////////////////////////////////////////
//demo2响应不同类型的请求//访问方法localhost:8081/list_user
// var express=require('express');
// app=express();

// app.get('/',function(req,res){
//     console.log('get请求');
//     res.send('接收到express框架发送的get请求');
// });

// app.post('/',function(req,res){
//     console.log('post请求');
//     res.send('接收到expres框架发送的post请求');
// });

// app.get('/list_user',function(req,res){
//     console.log('list_user请求');
//    res.send('接收到express框架发送的list_user请求');
// });

// app.get('/del_list',function(req,res){
//     console.log('del_list请求');
//     res.send('接收到express框架发送的del_list请求');
// });

// app.get('/ab*cd',function(req,res){
//     console.log('正则匹配请求');
//     res.send('接收到express框架发送的正则匹配请求');
// });

// var server=app.listen(8081,function(){
//      var host=server.address().address;
//      var port=server.address().port;

//      console.log('接收到来自访问地址为http://%s:%s',host,port);
// });

////////////////////////////////////////////////////////////////////
//demo添加处理静态文件的功能//访问方法:localhost:8081/imgs/1.jpg
// var express=require('express');
// app=express();

// app.use(express.static('public'));//在./public目录下存放静态文件
// app.get('/',function(req,res){
//     console.log('get请求');
//     res.send('接收到express框架发送的get请求');
// });

// var server=app.listen(8081,function(){
//      var host=server.address().address;
//      var port=server.address().port;

//      console.log('接收到来自访问地址为http://%s:%s',host,port);
// });

////////////////////////////////////////////////////////////////////////
//demo添加get和post的功能//访问方法:localhost:8081/process_get
//post 访问方法localhost:8081/process_post
// var express=require('express');
// var app=express();

// //post方法专有
// var bodyparser=require('body-parser');

// var urlencodedparser=bodyparser.urlencoded({extended:false});

// app.use(express.static('public'));//在./public目录下存放静态文件
// app.get('/index_get.html',function(req,res){
//     console.log('get /index_get.html请求');
//     res.sendFile(__dirname+'/index_get.html');
// });

// // app.get('/index_post.html',function(req,res){
// //     console.log('post /index_post.html请求');
// //     res.sendFile(__dirname+'/index_post.html');
// // });

// app.get('/process_get',function(req,res){
//     console.log('process_get请求');

//     var response={
//        'first name':req.query.first_name,
//        'last name':req.query.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
// });

// // app.post('process_post',urlencodedparser,function(req,res){
// //     var response={
// //         'first name':req.body.first_name,//post方法内部不能query
// //         'last name':req.body.last_name
// //      };
// //      console.log(response);
// //      res.end(JSON.stringify(response));
// // });

// var server=app.listen(8081,function(){
//      var host=server.address().address;
//      var port=server.address().port;

//      console.log('接收到来自访问地址为http://%s:%s',host,port);
// });

////////////////////////////////////////////////////////////////////////////
//post方法
var express=require('express');
var app=express();

//post方法专有
var bodyparser=require('body-parser');

var urlencodedparser=bodyparser.urlencoded({extended:false});

app.use(express.static('public'));//在./public目录下存放静态文件
// app.get('/index_get.html',function(req,res){
//     console.log('get /index_get.html请求');
//     res.sendFile(__dirname+'/index_get.html');
// });

app.get('/index_post.html',function(req,res){
    console.log('post /index_post.html请求');
    res.sendFile(__dirname+'/index_post.html');
})

// app.get('/process_get',function(req,res){
//     console.log('process_get请求');

//     var response={
//        'first name':req.query.first_name,
//        'last name':req.query.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
// });

app.post('/process_post',urlencodedparser,function(req,res){
    var response={
        'first name':req.body.first_name,//post方法内部不能query
        'last name':req.body.last_name
     };
     console.log(response);
     res.end(JSON.stringify(response));
});

var server=app.listen(8081,function(){
     var host=server.address().address;
     var port=server.address().port;

     console.log('接收到来自访问地址为http://%s:%s',host,port);
});