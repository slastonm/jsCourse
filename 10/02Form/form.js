window.onload =()=>{
    let formEl = document.querySelector('form');
    console.log(formEl);
    let [...inputs] = formEl.elements;
    console.log(inputs);
    inputs[0].value='Name';
    inputs[1].value='Last Name'
    inputs[2].value='Password'
}