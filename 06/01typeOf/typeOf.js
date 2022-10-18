let test = typeof 'str';
console.log(test, 'str');

console.log(typeof undefined, 'undefined');
console.log(typeof null, 'null'); 
console.log(typeof true, 'boolean');
console.log(typeof false, 'boolean');
console.log(typeof '', 'str');
console.log(typeof 'String value', 'str');
console.log(typeof `Operation ${1+3}`, 'str');
console.log(typeof `${1+3}`, 'str');
console.log(typeof [1,2,3], 'Array'); // obj
// [1,2,3] {0:1, 1:2, 2:3}
console.log(typeof {a:3}, 'obj');
console.log(typeof new Date(), 'Date return obj');
console.log(typeof new String(), 'String() return obj');
console.log(typeof /regex/, 'obj');

const sym = Symbol();
console.log(typeof sym, 'Symbol');

let fn = ()=>true;
console.log(typeof fn, 'fn');
console.log(typeof function(){}, 'fn');
console.log(typeof class C{}, 'fn');
console.log(typeof Math.round, 'fn');










