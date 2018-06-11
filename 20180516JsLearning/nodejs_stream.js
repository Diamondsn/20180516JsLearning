//http://www.runoob.com/nodejs/nodejs-stream.html

//读入流读取文件
// var fs=require('fs');
// var data='';

// var readStream=fs.createReadStream('input.txt');
// readStream.setEncoding('utf-8');

// readStream.on('data',function(d){
//     data+=d;
// });

// readStream.on('end',function(){
//     console.log(data);
// });

// readStream.on('error',function(err){
//      console.log(err.stack());
// });

// console.log("程序结束");

///////////////////////////////

//写出流写文件
// var fs=require('fs');
// var data="abcdefghijklm";

// var writeStream=fs.createWriteStream('output.txt');
// writeStream.write(data,'utf-8');
// writeStream.end();

// writeStream.on('finish',function(){
//      console.log('finished');
// });

// writeStream.on('error',function(err)
// {
//     console.log(err.stack);
// });

// console.log("程序结束");

////////////////////////////////////////

//管道
// var fs=require('fs');

// var readStream=fs.createReadStream('input.txt');
// var writeStream=fs.createWriteStream('output.txt');

// readStream.pipe(writeStream);

// console.log("program is finished");

///////////////////////////////////

//压缩
// var fs =require('fs');
// var zip=require('zlib');
// fs.createReadStream('input.txt').
// pipe(zip.createGzip()).
// pipe(fs.createWriteStream('input.txt.gz'));

// console.log("program is finished");

///////////////////////////////////////

//解压缩
// var fs= require('fs');
// var zlib=require('zlib');

// fs.createReadStream('input.txt.gz').
// pipe(zlib.createGunzip()).
// pipe(fs.createWriteStream('decompress.txt'));

// console.log('peogram is finished');

///////////////////////////////////////////

//管道读取写入文件时不覆盖原有文件内容改为追加
//方法1
var fs =require('fs');

var data='';
var data2='你是我的小可爱';

var read=fs.createReadStream('input.txt');
read.setEncoding(utf-8);

read.on('data',d=> data+=d);
read.on('end',()=> writeappend(data));
read.on('error',err=> console.log(err.stack));

writeappend(data)
{
    var writeStream=fs.createWriteStream("output.txt");
    writeStream.write(data+'\n'+data2,);
}

