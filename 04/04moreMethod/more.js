const animals = [
    'cow',
    'cat',
    'dog'
]
// const animals = '';
console.log(Array.isArray(animals));
animals.forEach((arrItem)=>{console.log(`I am ${arrItem}`)});

const oldValue =[1,2,3];
const doubleValue = function(a) {
    return a*10;
};

const newValue = oldValue.map((item)=>item*2);
const newValue2 = oldValue.map(doubleValue);

console.log(oldValue);
console.log(newValue);
console.log(newValue2);

const ages = [20, 21, 24];
const checkAge = function (age) {
    return age>20;
};

const result = ages.filter((age)=>age>21);
console.log(result);
const newRes = ages.filter(checkAge);
console.log(newRes);

const numbers = [1,20,10,2,22,30,15];
// console.log(numbers.sort());
console.log(numbers.sort(function(a,b){return b-a}));
console.log(numbers.sort(function(a,b){return a-b}));

console.log(numbers, 'Numbers arr');

