var http=require('http');

var options={
   host:'localhost',
   port:'8888',
   path:'/modal/index.html'
};

var callback=function(response){
    var data='';

    response.on('data',d=>data+=d);
    response.on('end',()=>console.log(data));
};

var req=http.request(options,callback);
req.end();