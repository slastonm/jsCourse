const product ={
    productName:'Tv',
    price:'200$',
    discount:false,
    colors:['white','black']
}

for (const key in product) {
    const element = product[key];
    console.log(element);   
}
let colors = product.colors;
for (let index in colors){
    console.log(colors[index]);
}
console.log('For of');
for (const iterator of colors) {
    console.log(iterator);
}

// for (const iterator of product) {
//     console.log(iterator);
// }
const obj = { France: 'Paris', England: 'London' };
// Iterate over the property names:
for (const country of Object.keys(obj)) {
  const capital = obj[country];
  console.log(country, capital);
}

const worker={
    workerName: 'Stiv',
    position: 'QA',
    age:45,
    skills:[
        'html',
        'js',
        'css',
        'Java'
    ],
    updateWorkerInfo: function(){
        let curentName = prompt('Curent name');
        worker.workerName = curentName;
        alert(worker.workerName);
    }
}
delete worker.position;
console.log(worker.position, 'after delete');
// const test = function () {
//     let res=2+2;
// };
// console.log(test());

// console.log(delete worker.skills[0]);
console.log(worker.skills.pop());
console.log(worker.skills.pop());

worker.updateWorkerInfo();






