window.onload =()=>{
    let formEl = document.querySelector('form');
    formEl.onsubmit = function(e){
        let isValid = true;
        let name = document.querySelector("[name='Fname']");
        let password = document.querySelector("[name='Pname']");
        if(name.value.length == 0){
            isValid = false;
        }
        if(password.value.length == 0){
            isValid = false;
        }
        if(!isValid){
            e.preventDefault();
            alert('Всі поля треба заповнити даними');
        }

    }
}