// var b=Buffer.alloc(256);
// var len=b.write("Hello World!");
// console.log("buffer is"+len);

//////////////////////////////

// var b=Buffer.alloc(26);
// for(var i=0;i<26;++i)
// {
//     b[i]=i+97;
// }
// console.log(b.toString("ascii"));
// console.log(b.toString("ascii",0,5));
// console.log(b.toString("utf8",0,5));
// console.log(b.toString(undefined,0,5));

///////////////////////////////////

// var b=Buffer.from([0x1,0x2,0x3,0x4,0x5]);
// console.log(b);
// var json=JSON.stringify(b);
// console.log(json);

// var copy=JSON.parse(json,function(key,value)
// {
//     return value && value.type==="Buffer"?
//     Buffer.from(value.data):value;
// });

// console.log(copy);

//////////////////////////////////

// var buffer1=Buffer.from("菜鸟教程：www");
// var buffer2=Buffer.from("666");
// var buffer3=Buffer.concat([buffer1,buffer2]);
// console.log(buffer3.toString());

////////////////////////////

// var buffer1=Buffer.from("ABC");
// var buffer2=Buffer.from("ABCD");
// var result=buffer1.compare(buffer2);
// console.log(result);

//////////////////////////////////

// var buffer1=Buffer.from("abcdefghijklmn");
// var buffer2=Buffer.from("ABCDEF");
// //buffer1.copy(buffer2,2);
// buffer2.copy(buffer1,2);
// console.log(buffer1.toString());
// console.log(buffer2.toString());

/////////////////////////////////////

// var buffer1=Buffer.from("abcdefghijklm");
// var buffer2=buffer1.slice(0,4);
// console.log(buffer1.toString());
// console.log(buffer2.toString());
// console.log(buffer1.length);
// console.log(buffer2.length);

///////////////////////////////////