window.onload =()=>{
    let submit = document.querySelector('.submit');
    let [...formElements] = myForm.elements;
    // console.log(formElements);
    submit.onclick =(e)=>{
        e.preventDefault();
        // console.log(formElements);
        for(let i =0; i<formElements.length; i++){
            let element = formElements[i];
            console.log(
                `Name ${element.name} value ${element.value} type ${element.type}`
            );
        }
    }
    let output = document.querySelector('p');
    for(let i =0; i<formElements.length; i++){
        let element = formElements[i];
        element.onchange = function(){
            output.innerHTML=`Змінилось значення в ${this.name} нове значення ${this.value}`
        }
    }
}