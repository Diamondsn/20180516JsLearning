//http://www.runoob.com/nodejs/nodejs-express-framework.html
/////////////////////////////////////////////////////////////////////
var express=require('express');
var app=express();
var fs=require('fs');
var bodyParser=require('body-parser');
var multer=require('multer');

app.use(express.static('public'));

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer().array('image'));

app.get('/index_uploadfile',function(req,res){
      res.sendFile(__dirname+'/index_uploadfile.html')
});

app.post('/upload_file',function(req,res){
    console.log(req.files[0]);
    var des=__dirname+'/'+req.files[0].originalname;
    fs.readFile(req.files[0].buffer,function(err,data){
          fs.writeFile(des,data,function(err){
              if(err){
                  console.log(err);
              }
              else{
                 var response={
                     message:'file is uploaded successfully',
                     path:req.files[0].originalname
                 };
              }
              console.log(response);
              res.end(JSON.stringify(response));
          });
    });
});

var server=app.listen(8081,function(){
   var host=server.address().address;
   var port=server.address().port
    console.log('the server is listen http://%s:%s',host,port);
});