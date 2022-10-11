const nArr = new Array();
console.log(nArr);
const nUser = new Object();
nUser.name ="test";
nUser.age = 40;
console.log(nUser);

function ProductConstructor(name, price){
    this.name  = name;
    this.price = price;
    this.info = function(){
        return `${this.name} and price: ${this.price}`
    }
}

const tv = new ProductConstructor('Sony 5K', '230$');
console.log(tv);
console.log(tv.name);
console.log(tv.price);
let productInfo = tv.info();
console.log(productInfo);

const tv2 = new ProductConstructor('Sony 4K', '300$');
const tv3 = new ProductConstructor('Sony 4K', '300$');
let tvArr = [tv, tv2, tv3];
console.log(tvArr);

function MenuItem(type, items, price, workHours){
    this.type = type;
    this.items = items;
    this.price = price;
    this.workHours = workHours;
    this.menuInfo = function(){
        return `Work from ${this.workHours.start} to ${this.workHours.end}`
    }
}
const breackfast = new MenuItem('breackfast', ['eggs', 'orange', 'coffee'], '10$', {start:7, end:11});
const dinner = new MenuItem('dinner', ['pizza', 'orange', 'coffee'], '10$', {start:12, end:23});

console.log(breackfast.menuInfo());
console.log(breackfast);




