/////////////////////////////
//使用exports.attribute
// var Hello=require("./nodejs_modules");

// Hello.world();

/////////////////////////////////
//使用module.exports
// var Hello=require('./nodejs_modules');
// hello=new Hello();
// hello.setName('wkx');
// hello.sayHello();


/////////////////////////////
//使用module.exports.world()
var Hello=require('./nodejs_modules');
hello=new Hello.World();
hello.setName('wkx');
hello.sayHello();