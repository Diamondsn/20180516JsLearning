//http://www.runoob.com/nodejs/nodejs-process.html
//nodejs exec()
// var fs = require('fs');
// var childprocess = require('child_process');

// for (var i = 0; i < 3; ++i) {
//     var work = childprocess.exec('node nodejs_child.js '+i, function (err, stdout, stderr) {
//         if (err) {
//             console.log(err);
//             console.log(err.code);
//             console.log(err.siginal);
//         }

//         console.log('stdout:' + stdout);
//         console.log('stderr:' + stderr);

//     });

//     work.on('exit', function (code) {
//         console.log('退出码为:' + code);
//     });
// }

//////////////////////////////////////////////////////////////////
//spawn()方法
// var fs=require('fs');
// var childprocess=require('child_process');

// for(var i=0;i<3;++i){
//     var workprocess=childprocess.spawn('node',['nodejs_child.js',i]);

//     workprocess.stdout.on('data',function(d){
//         console.log(d);
//     });

//     workprocess.stderr.on('data',function(d){
//         console.log(d);
//     });

//     workprocess.on('close',function(code){
//         console.log('子进程已退出，退出码为:'+code);
//     });
// }

//////////////////////////////////////////////////////////////////////
//fork()
var fs=require('fs');
 var childprocess=require('child_process');

 for(var i=0;i<3;++i){
     var workprocess=childprocess.fork('nodejs_child.js',[i]);
     
     workprocess.on('close',function(code){
         console.log('退出码为：'+code);
     });
 }