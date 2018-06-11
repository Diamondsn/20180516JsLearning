//http://www.runoob.com/nodejs/node-js-get-post.html
//////////////////////////////////////////////////////////////////////////
var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');

var postHTML = '<html><head><meta charset="utf-8"><title>表单提交</title></head>' +
    '<body>' +
    '<form method="post">' +
    '你的名字：<input name="name"><br>'+
    '你的域名：<input name="url"><br>'+
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function (request, response) {
    //response.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});

    //输出请求url信息
    // response.write('HelloWorld!');
    // response.end(util.inspect(url.parse(request.url),true));

    //获取请求更多信息query
    // var param=url.parse(request.url,true).query;
    // response.write(param.name+'\n');
    // response.write(param.url);
    // response.end();

    //有表单提交信息
    var data = '';

    request.on('data', d => data += d);
    request.on('end', function () {
        data = querystring.parse(data);
        response.writeHead(200, { 'Contnt-Type': 'text/html;charset=utf-8' });
        if (data.name && data.url) {
            //response.write('你的姓名为：' + data.name + '<br>' + '你的域名为：' + data.url);
           var responseHTML='<html><head><meta charset="utf-8"><title>表单提交</title></head>' +
           '<body>' +
           '<p>你的姓名为：'+data.name+'</p>'+
           '<p>你的域名为：'+data.url+'</p>'+
           '</body></html>';
           response.write(responseHTML);
           data='';
           data.name=undefined;
           data.url=undefined;
        }
        else {
            response.write(postHTML);
        }
        response.end();
    });

}).listen(8888);