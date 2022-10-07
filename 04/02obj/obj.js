// const user = ['userName', 'LastName', 32];
const user ={
    userName:"Tom",
    age:35,
    student: true,
    skill:['html', 'css'],
    friends:{
        best:['Sab', 'Tony'],
        minAge: 18
    }
}
console.log(user);
console.log(user.age);
console.log(user.skill);
console.log(user.friends.best);

const articles = [
    {
        tittle:"hello",
        text:"Lorem10"
    },
    {
        tittle:"hello",
        text:"Lorem10"
    },
    {
        tittle:"hello",
        text:"Lorem10"
    }
];

const cat = new Object();
cat.nickName = 'Timon';
cat.age = 1;
// cat.brothers = new Object();
let brother1 = {
    name:"Rex",
    age:1
}
cat.brothers = [
    brother1
];

// cat.brothers.firstBrotherName = 'Jobs';
// cat.brothers.secondBrotherName = 'Stiv';

console.log(cat);






