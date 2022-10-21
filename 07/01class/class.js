const cars = ['ford f-150', 'fiat tipo', 'toyota raw4'];

//  old way
// const ford = cars[0];
// const fiat = cars[1];
// const toyota = cars[2];

const [ford, fiat, toyota] = cars;
console.log(ford);
console.log(fiat);
console.log(toyota);

const hero = {
    nickName:'Batman',
    realName:'Bruce',
    suitColor:'Red'
}

// const nickName = hero.nickName;
// const realName = hero.realName;

// const {nickName, realName} = hero;
const {nickName, realName, suitColor='black'} = hero;

console.log(nickName);
console.log(realName);
console.log(suitColor);

const car ={
    0:'ford',
    model:'Mustang'
}

const {0:mustangBrand} = car;
console.log(mustangBrand);

const price = {
    breckfast:{
        type:'eggs'
    },
    dinner:{
        dinnerType:'soup',
        type:'soup',
    }
}

const { breckfast:{type}, dinner:{dinnerType}}=price;
console.log(type);
console.log(dinnerType);

console.log(price.breckfast.type);

const priceBrackfast = {
    drinks:{
        coffe:'1$',
        juice:'0.75$',
        cola:'0.5$'
    }
}
const {coffe, juice, cola} = priceBrackfast.drinks;
console.log(coffe);
console.log(juice);
console.log(cola);

const heroes = [
    {name:'Batman',
     suitColor:'red'},
    {name:'Joker',
    suitColor:'green'},
    {name:'LadyCat'}
];
for(const{name, suitColor="Black"} of heroes){
    console.log(name, suitColor);
}
const heroInfo = heroes.map(
    function({name}){
        console.log(`Heroes name ${name}`);
    }
);

function Person(fName, lName, age){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
}

let rob = new Person('Rob','Willims', 60);
let stiv = new Person('Stiv','Willims', 50);
console.log(rob, stiv);

class PersonClass {
    constructor(name, lName, age){
        this.name = name;
        this.lName = lName;
        this.age = age;
    }
    // method
    bornDate(){
        let date = new Date();
        return date.getFullYear() - this.age;
    }
    static personWork = 'Artist';
}

let bob = new PersonClass('Bob', 'Bobin', 45);
let tom = new PersonClass('Tom', 'Jery', 15);

console.log(bob, tom);

console.log(bob.bornDate());
console.log(bob.personWork);
console.log(PersonClass.personWork);

PersonClass.staticMethod = function(){console.log('Hello I am static method');};
PersonClass.prototype.publicMethod= function(){
    console.log("Hi I am object public method");
}

// bob.staticMethod();
PersonClass.staticMethod();
bob.publicMethod();








