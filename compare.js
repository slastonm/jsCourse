// == 

let firstValue = 2;
let secondValue = 3;
console.log(firstValue == secondValue);

let noValue = null;
let notFind = undefined;

console.log(noValue == notFind);

let a = 10;                  
let b = "10";               
let c = "some";                        
let d = 'some';            
let e = true;              
let f = 10;
let g = true;
let res;

console.log("num and str", a==b);
console.log("nuvber and number", a==f);
console.log("str and str", c==d);
console.log("bool and number", e==f);
console.log("number and bool ", f==g);

console.log("num and str ===", a===b);

// != 

console.log('a not string', a!=c);

//  >, <, <=, >= 

console.log("a>2", a>2);
console.log("a<2", a<2);
console.log("a<=10", a<=10);

// && і
//         true  && true = true
//         false && true = false
//         true  && false = false
//         false && false = false

let firstUserAge = 18;
let secondUserAge = 17;

console.log( 'user info', firstUserAge>16 && secondUserAge >40);

//  || чи

//     true  || true = true
//     false || true = true
//     true  || false = true
//     false || false = false

console.log( 'user info || ', firstUserAge>16 || secondUserAge >40);


