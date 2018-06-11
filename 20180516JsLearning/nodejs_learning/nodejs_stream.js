//////////////////////////////

//管道在文件尾部追加
// var fs=require('fs');
// var data='';
// data2='你是我的小可爱';

// var read=fs.createReadStream('input.txt');
// read.setEncoding('utf-8');
// read.on('data',d=> data+=d);
// read.on('end',()=>writeappend(data));
// read.on('error',err=>console.log('err.stack'));
// console.log('程序1执行完毕');
// function writeappend(data)
// {
//     var writeSream=fs.createWriteStream('output.txt');
//     writeSream.write(data+data2,'utf-8');
//     writeSream.end();
//     writeSream.on('finish',()=>console.log('finished'));
//     writeSream.on('error',err=>conosle.log(err.stack));
//     console.log('子程序结束');
// };

//////////////////////////////////
//设置追加参数
var fs=require('fs');

var read=fs.createReadStream('input.txt');
read.setEncoding('utf-8');
var writeStream=fs.createWriteStream('output.txt',{'flags':'a'});
read.pipe(writeStream);
//read.pipe(fs.createWriteStream('output.txt'),{'flags':'a'});//此种写法不能实现追加
console.log('program is finished');