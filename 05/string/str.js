let textArr = 'Hello';
console.log(textArr[0]);
console.log(textArr.length);
// ['H','e','l','l',' ']
let someText ="Hello world";
console.log(someText.slice(6), 'slice');
console.log(someText.substring(6),'substring');

let aboutUser = "Html and js and css and css";
let newUserData = aboutUser.replace("css", "js");
console.log(newUserData);

let userName = '!aDmIn';
console.log(userName.toUpperCase());
console.log(userName.toLocaleLowerCase());

let getCode = userName.charCodeAt(0);
console.log(getCode);

let transformStr = "Hello*I*    am                  * array";
let aStr = 'Hello';
let arrValue = transformStr.split("*");
console.log(aStr.split(""));
console.log(arrValue[2], 'original');
console.log(arrValue[2]);
// console.log(arrValue[2].trim(), 'trim');
// console.log(arrValue[2].trimStart(), 'trimStart');
console.log(arrValue[2].trimEnd(), 'trimEnd');






