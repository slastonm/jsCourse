const app = Vue.createApp({
    // template:'<h2>Hello vue!</h2>'
    data(){
        return{
            productName:'TV',
            price:100,
            curency:'$',
            showInfo:true,
            link:"https://prog.academy/",
            users:[
                {
                    name:"Bob",
                    age:30,
                    isAdmin:true
                },
                {
                    name:"Tom",
                    age:35,
                    isAdmin:false
                },
                {
                    name:"Eva",
                    age:20,
                    isAdmin:false
                },
                {
                    name:"Olex",
                    age:40,
                    isAdmin:true
                }
            ]
        }
    },
    methods:{
        changeCurency(){
            console.log('Test');
            this.curency = "$$"
        },
        handleEvent(e, value){
            console.log(e);
        },
        addValue(value){
            this.price = this.price+value
        },
        showInfoBlock(){
            this.showInfo = !this.showInfo
        },
        adminMode(user){
            console.log(user);
            user.isAdmin = !user.isAdmin
        }
    },
    computed:{
        justAdmin(){
            return this.users.filter((user)=>user.isAdmin);
        }
    }
});

app.mount('#app');