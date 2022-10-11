function clientCounstructor(name, buy){
    this.name=name;
    this.buy=buy;
    // this.clientInfo = function(){
    //     return `Total buy ${this.buy}`
    // }
    clientCounstructor.number++;
    if(clientCounstructor.number>5){
        console.log(
            'You special client'
        );
    }
}


// clientCounstructor.discount = '5%';
clientCounstructor.number=0;

clientCounstructor.prototype.getInfo = function(){
    return `${this.name} and made buy ${this.buy}`
}
const clientAlex =new clientCounstructor('Alex', '300$');
// console.log(clientAlex);
// clientAlex.discount = '5%';

const clientPoll = new clientCounstructor('Poll', '400$');
// console.log(clientPoll);
const clietLex2 = new clientCounstructor('Lex', '500$');

const clientPoll3 = new clientCounstructor('Poll', '400$');
// console.log(clientPoll);
const clietLex5 = new clientCounstructor('Lex', '500$');
const clietLex6 = new clientCounstructor('Lex', '500$');
let nArr = new Array();
// console.log(nArr);
console.log(clientAlex);

function Rectangle(sideA, sideB){
    this.sideA = sideA;
    this.sideB = sideB;
}
Rectangle.prototype.getArea = function(){
    return `Area = ${this.sideA*this.sideB}`
}

let area1 = new Rectangle(2,3);
let area2 = new Rectangle(4,3);

console.log(area1.getArea());
console.log(area2.getArea());
