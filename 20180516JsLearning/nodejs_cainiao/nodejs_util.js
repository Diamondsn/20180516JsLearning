//http://www.runoob.com/nodejs/nodejs-util.html
/////////////////////////////////////////////////////////////////////
//util.inherits

// var util=require('util');

// function Base(){
//     this.name='base';
//     this.base=1991;
//     this.sayHello=function(){
//          console.log('Hello'+this.name);
//     };
// };

// Base.prototype.showName=function(){
//     console.log(this.name);
// };

// function sub(){
//      this.name='sub';
// };

// util.inherits(sub,Base);
// var objBase=new Base();
// objBase.sayHello();
// objBase.showName();
// console.log(objBase);
// var objSub=new sub();
// objSub.showName();
// //objSub.sayHello();//没有继承在基类构造函数内部定义的方法;
// console.log(objSub);

////////////////////////////////////////////////////////////////////////
//util.inspect方法,适用于调试，输出对象信息

// var util=require('util');

// function Person()
// {
//     this.name='wkx';
//     this.showName=function(){
//         console.log(this.name);
//     };
// };

// var person=new Person();
// console.log(util.inspect(person));
// console.log(util.inspect(person,true));
// console.log(util.inspect(person,true,null,true));//第二个参数表示显示更多隐藏信息
//第三个参数表示显示更多递归层级
//第四个参数表示显示时加入更多的颜色

////////////////////////////////////////////////////////////////////////
//util.isArray()方法在参数为数组时显示true

// var util =require('util');

// console.log(util.isArray([]));//true
// console.log(util.isArray({}));//false
// console.log(util.isArray(new Array));//true

/////////////////////////////////////////////////////////////////////////
//util.isRegExp()参数是正则表达式时返回true

// var util=require('util');
// console.log(util.isRegExp(new RegExp('/d/g')));
// console.log(util.isRegExp({}));

////////////////////////////////////////////////////////////////////////
//util.isDate()如果参数是日期对象则返回true

// var util=require('util');
// console.log(util.isDate(new Date('20180516')));//true
// console.log(util.isDate({}));//false

///////////////////////////////////////////////////////////////////////
//util.isError()如果对象是错误对象则返回true

// var util=require('util');

// console.log(util.isError(new Error()));//true
// console.log(util.isError(new TypeError()));//false