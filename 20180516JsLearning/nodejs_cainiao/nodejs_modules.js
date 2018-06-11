//http://www.runoob.com/nodejs/nodejs-module-system.html
//模块导出
// exports.world=function(){
//     console.log("Hello World!");
// }

//////////////////////////////////////////////
//使用module.exports
// function Hello(){
//     var name;
//     this.setName=function(n)
//     {
//         name=n;
//     };
//     this.sayHello=function()
//     {
//         console.log(name);
//     };
//  console.log('HelloWorld!');
// };

// module.exports=Hello;

//////////////////////////////////////////////
//使用module.exports.Attribute
function Hello(){
       var name;
       this.setName=function(n)
       {
           name=n;
       };
       this.sayHello=function()
       {
           console.log(name);
       };
    console.log('HelloWorld!');
};

module.exports.World=Hello;