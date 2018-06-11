//http://www.runoob.com/nodejs/nodejs-restful-api.html
//testful API
var express = require('express');
var fs = require('fs');

var app = express();

var user = {
    "user4": {
        "name": "xuli",
        "password": "psw",
        "profession": "student",
        "id": 4
    }
}

app.get('/list_users', function (req, res) {
    fs.readFile(__dirname + '/users.json', function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            //console.log(data);
           // console.log(JSON.stringify(data));
            res.end(data);
        }
    });
});

app.get('/addusers', function (req, res) {
    fs.readFile(__dirname + '/users.json', function (err, data) {
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        res.end(JSON.stringify(data));
    });
});

app.get('/:id',function(req,res){
      fs.readFile(__dirname+'/users.json',function(err,data){
          if(err){
              console.log(err);
          }
          else{
              data=JSON.parse(data);
              res.end(JSON.stringify(data["user"+req.params.id]));
          }
      });
});

app.get('/del/:id',function(req,res){
        fs.readFile(__dirname+'/users.json',function(err,data){
               if(err){
                   console.log(err);
               }
               else{
                   //console.log(data);
                   //delete data["user"+req.params.id];
                   data=JSON.parse(data);
                   console.log(delete data["user"+req.params.id]);
                   //console.log(data);
                   //res.end(JSON.stringify(data));
                   res.json(data);
                   res.end();
               }
        });
});

var server = app.listen(8081, function (req, res) {
    var host = server.address().address;
    var port = server.address().port;
    console.log('the server is listenning at http://%s:%s', host, port);
});