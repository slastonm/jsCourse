let product ="cat";
let product2 ="dog";
let product3 ="fish";
let product4 ="cow";

let arrayValue =[];
let arrayValueNew = new Array(10);

console.log(arrayValue, arrayValueNew);


let allArray = [product, product2, product3, product4];
let allArrayStr = [['cat', 'gray', '6m'], 'Dog', 'Cow'];

console.log(allArray[0]);

const KEY_API = "Van1434";
const userAges = [];
userAges[0] = 32;
userAges[1] = 33;
// userAges = 34;
console.log(userAges);

for(let a=0; a<10; a++){
    arrayValueNew[a]= `array value ${a}`;
}
console.log(arrayValueNew);

for(let t=0; t<arrayValueNew.length; t++){
    console.log(arrayValueNew[t], 'loop value');
}

arrayValueNew[0] = true;
arrayValueNew = [];
console.log(arrayValueNew);


