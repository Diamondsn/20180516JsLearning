//http://nodejs.cn/api/assert.html#assert_new_assert_assertionerror_options
///////////////////////////////////////////////////////////////////////////
//assert错误差异比较
const assert=require('assert').strict;
//console.log(assert.deepEqual);
console.log(require('assert').strict);
console.log(assert.deepEqual([1,2,3],[1,2,"3"]));

//////////////////////////////////////////////////////////////////////////////
//