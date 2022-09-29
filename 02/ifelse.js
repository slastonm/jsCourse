// let userData = prompt("Hello");
// userData = parseInt(userData);
// if (userData>4){
//     alert('Hello');
// }
// alert ('world');
// if (userData > 10){
//     console.log(`user data ${userData} >10`);
// }
// else if(userData < 0){
//     console.log(`user data ${userData} <15`);
// }
// else{
//     console.log(`user data ${userData} < 10`);
// }

let bascket = prompt('Buy', 'milk');

if(bascket == 'milk' || bascket == 'Milk'){
    console.log(`You buy ${bascket}`);
}
else if(bascket == 'orange'){
    console.log(`You buy ${bascket} price $2`);
}
else if(bascket == 'cat'){
    console.log(`You buy ${bascket} price $200`);
}
else{
    console.log(`You buy ${bascket} price null`);
}

let trueValue = true;
let falseValue = false;
// falseValue == false
if(!falseValue){
    // alert(`Result ${falseValue}`);
}
let ifResult = "";
// if(trueValue){
//     ifResult = 'Hello';
// }
// else{
//     ifResult = 'World';
// }

ifResult = trueValue ? 'Hello22222' : 'World';
console.log(ifResult);

let firstValue = 10;
let secondValue = 20;

let maxValue = firstValue>secondValue? firstValue: secondValue;
console.log(maxValue);
