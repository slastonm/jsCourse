// alert(a);
// alert(b);

var a = 5;
let b = 6;

// var x = 10;
// if(true){
//     var x = 1000;
//     console.log(x); //1 1000
// }

// console.log(x); //2 1000


let x = 10;
if(true){
    let x = 1000;
    console.log(x); //1 1000
}

console.log(x); //2 10

// for(var i =0; i<5; i++){
//     console.log(`Inside loop ${i}`);
// }
// console.log(`Outside loop ${i}`);

for(let i =0; i<5; i++){
    console.log(`Inside loop ${i}`);
}
//console.log(`Outside loop ${i}`);  undefind

var globalValue = 'Hello';
console.log(window.globalValue);

let letValue = 'Hello let';
console.log(window.letValue);



