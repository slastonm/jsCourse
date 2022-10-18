function fun(a, b, c){
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
    // arguments.map((a)=>console.log(a*2));
    let normArr = Array.from(arguments);
    console.log(normArr);
    normArr.map((a)=>console.log(a*2));

}   
fun (1,2,3,4);

function modernFn(a,...arg){
    console.log(a,arg);
    for(const item of arg){
        console.log(item);
    }
}
modernFn(1,2,3,4,'a', 'b');

// spread operator

let first = [1,2,3];
let second =[4,5,6];

first = first.concat(second);
console.log(first);

let fValue = ['a', 'b', 'c'];
let sValue = ['e', 'f', 'g'];

sValue = [...fValue, ...sValue, ...first];
console.log(sValue);

let nameArr = [
    'Tom',
    'Jack',
    'Jon'
];
let objName = {...nameArr};
console.log(objName);
const dataArr = [1999, 1, 1];
const date = new Date(...dataArr);
console.log(date);

let sum = 1+1;

let tLiteral= `Sum ${sum} divide ${1/2}`;
console.log(tLiteral);
