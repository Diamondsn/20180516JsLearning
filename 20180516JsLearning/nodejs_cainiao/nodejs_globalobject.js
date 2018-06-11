//http://www.runoob.com/nodejs/nodejs-global-object.html
//////////////////////////////////////////////////////
//输出全局变量的值
//console.log(__filename);
//输出当前目录的值
//console.log(__dirname);

//定时器setTimeOut(cb,ms)
// function sayHello()
// {
//     console.log("HelloWorld!");
// };
// var t=setTimeout(sayHello,1000);

//使用clearTimeOut
//clearTimeout(t);

//使用setInterval()
// function sayHello(){
//     console.err('HelloWorld!');
// };

// setInterval(sayHello,1000);

//使用console的其他方法
//console.error("HelloWorld");
//console.warn("HelloWorld!");
//console.info('HelloWorld!');

//trace方法
// function sayHello(){
//     console.warn('HelloWorld!');
// };

// console.trace(sayHello);

//assert方法
// console.assert(false,"666");

//time和timeEnd方法
// console.time('start');
// console.log('666');
// console.timeEnd('start');

//////////////////////////////////////////
//process全局变量
// process.on('exit',function(code){
//      setTimeout(function()
//     {
//       console.log("exitexit");//永远不会执行
//     },0);

//     console.log(code);
// });
// setTimeout(function(){
//     console.log('HelloWorld!');
// },1000);
// console.log('program is finished');


// process.stdout.write('HelloWorld!'+'\n');
// process.argv.forEach(function(val,index,array){
//     console.log(index+':'+val);
// });
// console.log(process.platform);//平台信息  
// console.log(process.execPath);//执行绝对路径
// console.log(process.cwd());//当前目录与__dirname一样
// console.log(process.version);//当前版本
// console.log(process.memoryUsage());//内存使用情况