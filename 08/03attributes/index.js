window.onload = ()=>{
    let figurs = ['img/queen.png'];
    let firstLink = document.querySelector('#firstLink');
    let secondLink = document.querySelector('#secondLink');
    let reset = document.querySelector('#reset');
    let inputEl = document.querySelector('#testInput');
    firstLink.getAttribute('href')

    console.log(firstLink.getAttribute('href'));
    console.log(secondLink.getAttribute('target'));
    console.log(reset.getAttribute('href'));


    if(inputEl){
        console.log(inputEl.getAttribute('type'));
        console.log(inputEl.getAttribute('name'));
        console.log(inputEl.getAttribute('id'));        
    }

    let btn = document.querySelector('button');
    if(btn){
        btn.setAttribute('class', 'js-btn');
        btn.setAttribute('disabled','disabled');
    }

    firstLink.setAttribute('href', 'https://prog.kiev.ua/');
    firstLink.setAttribute('target', '_blank');
    firstLink.innerHTML = 'Js'

    inputEl.removeAttribute('name');
    secondLink.removeAttribute('target');
    secondLink.removeAttribute('name');

    let nameAtrr = secondLink.hasAttribute('class');
    console.log(nameAtrr);



}