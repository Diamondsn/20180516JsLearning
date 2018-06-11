//http://www.runoob.com/nodejs/nodejs-fs.html
///////////////////////////////////////////////////////////
//nodejs 文件系统fs readFile()、readFileSync()

//同步或异步读取文件
// var fs=require('fs');

// fs.readFile('input.txt',function(err,data){
//     if(err){
//         console.log(err.stack);
//     }
//     else{
//         console.log('readFile同步读取文件信息'+data.toString());
//     }
// });

// var data=fs.readFileSync('input.txt');
// console.log('readFileSync同步读取文件成功'+'\n'+data);

///////////////////////////////////////////////////////////
//fs.open()方法

// var fs = require('fs');

// fs.open('input.txt', 'r+', function (err, fd) {
//     if (err) {
//         return console.log(err.stack);
//     }
//     console.log('文件打开成功');
// })

/////////////////////////////////////////////////////////////
//fs.stat()方法获取文件信息

// var fs=require('fs');

// fs.stat('input.txt',function(err,stats){
//     if(err){
//         return console.log(err.stack);
//     }
//     console.log(stats.isFile());
// });

///////////////////////////////////////////////////////////////
//fstat.stat()方法实例
// var fs=require('fs');
// fs.stat('input.txt',function(err,stats){
//     if(err){
//         return console.log(err);
//     }
//     console.log(stats);
//     console.log(stats.isFIFO());//false
//     console.log(stats.isDirectory());//false
// });

////////////////////////////////////////////////////////////////
//fs.writeFile()异步写入文件
// var fs=require('fs');

// fs.writeFile('output.txt','这是通过fs.writeFile()方法写入的数据',function(err){
//     if(err){
//         return console.log(err);
//     }
//     fs.readFile('output.txt',function(err,data){
//         if(err){
//             return console.log(err);
//         }
//         console.log(data.toString());
//     });
// });

///////////////////////////////////////////////////////////////////
//fs.read()读取文件

// var fs=require('fs');
// var buf=new Buffer(1024);

// fs.open('input.txt','r+',function(err,fd){
//     if(err){
//         return console.log(err);
//     }
//     fs.read(fd,buf,0,buf.length,0,function(err,byte,buf){
//         if(err){
//             return console.log(err);
//         }
//         console.log(byte+'字节被读取');
//         if(byte>0){
//             console.log(buf);
//             console.log(buf.toString());
//             console.log(buf.slice(0,byte));
//             console.log(buf.slice(0,byte).toString());
//         }
//     });
// });

//////////////////////////////////////////////////////////////////////
//fs.close()方法关闭文件

// var fs = require('fs');
// var buf = new Buffer(1024);
// fs.open('input.txt', 'r+', function (err, fd) {
//     if (err) {
//         return console.log(err)
//     }
//     fs.read(fd, buf, 0, buf.length, 0, function (err, byte, buf) {
//         if (err) {
//             return console.log(err);
//         }
//         if (byte > 0) {
//             console.log(buf.slice(0, byte).toString());
//         }
//         fs.close(fd, function (err) {
//             if (err) {
//                 return console.log(err);
//             }
//             console.log('文件已被关闭');
//         });
//     });
// });

/////////////////////////////////////////////////////////////////////////
//fs.ftruncate()方法截取文件

// var fs = require('fs');
// var buf = new Buffer(1024);
// fs.open('input.txt', 'r+', function (err, fd) {
//     if (err) {
//         return console.log(err)
//     }
//     fs.ftruncate(fd,10,function(err){
//         if (err) {
//             return console.log(err);
//         }
//         fs.read(fd, buf, 0, buf.length, 0, function (err, byte, buf) {
//             if (err) {
//                 return console.log(err);
//             }
//             if (byte > 0) {
//                 console.log(buf.slice(0, byte).toString());
//             }
//             fs.close(fd, function (err) {
//                 if (err) {
//                     return console.log(err);
//                 }
//                 console.log('文件已被关闭');
//             });
//         });
//     });
// });

///////////////////////////////////////////////////////////////////////////////
//fs.readdir()读取目录

// var fs=require('fs');

// fs.readdir('../nodejs_learning/',function(err,files){
//     if(err){
//         return console.log(err);
//     }
//     files.forEach(element=>{
//         console.log(element);
//     });
// });

//////////////////////////////////////////////////////////////////////////////////
