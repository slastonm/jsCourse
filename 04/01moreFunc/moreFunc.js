const numbers = [1,2,3,4];
// console.log(numbers.slice(1,-2));
// console.log(23%2);

// const sortFr = function (arr) {
//     // while
//     let newArr = arr;
//     // return newArr;
//     console.log(newArr);
//     return newArr;
// };

// sortFr([2,4,5]);
// sortFr([6,7,5]);

// console.log(sortFr([6,7,5]));

const doubleValue = function(item){
    return item*2;
}
console.log(doubleValue(2));

const doubleValue2 = (item)=>item*2;
console.log(doubleValue2(3));

// const doubleValue2 = (item)=>{
//     item +=2; 
//     return item*2;
// };

const returnValue =  (value)=> `I have ${value}`;

const fnCb = function (value, fn) {
    return fn(value);
};

let valueFromCb = fnCb("Value in fn", returnValue);
console.log(valueFromCb);
const doubleArr = function(arr, fn){
    let newArr=[];
    for(let i=0; i<arr.length; i++){
        newArr.push(fn(arr[i]));
    }
    return newArr;
}

console.log(doubleArr([1,2,3], doubleValue));
console.log(doubleArr([4,6,12], doubleValue));







