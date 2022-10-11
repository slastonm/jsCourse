const bank ={
    bankName:'abs',
    coutry:'Canada',
    postId: 12300,
    getBankData: function(){
        return `${this.bankName} in ${this.coutry} have post ID ${this.postId}`
    }
}

console.log(bank.getBankData());

const user ={
    fName:'Test',
    lName:'Pix',
    id:123,
    getUserData:function(){
        return this
    }
}
console.log(user.getUserData(), 111);

const userData ={
    fullData: function(){
        return `${this.userName} and last name ${this.userLastName}`
    }
}

const userForMethod = {
    userName:"Mark",
    userLastName:"Twen"
}

let data = userData.fullData.call(userForMethod);
console.log(data);

let thisLink = this;
console.log(thisLink.innerWidth);
let windowsData = window;
console.log(windowsData.innerWidth, 'compare');

