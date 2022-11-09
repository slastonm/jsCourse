window.onload =()=>{
    let div = document.querySelector('.mouse');
    div.addEventListener('mousemove', handler);
    function handler(e){
        let text = "";
        text = `Alt ${e.altKey} Ctrl ${e.ctrlKey} Shift ${e.shiftKey} X cordinat ${e.clientX} Y cordinat ${e.clientY}`
        div.innerHTML = text;
    }
    let hover = document.querySelector('.hover');
    hover.onmouseover = function(){
        this.style.backgroundColor = 'red';
    }
    hover.onmouseout = function(){
        this.style.backgroundColor = 'green';
    }

    let div1  = document.querySelector('.onmousedown');
    let div2 = document.querySelector('.onmousemove');
    let div3 = document.querySelector('.onmouseup');

    div1.onmousedown = function(e){
        this.innerHTML = `Подія ${e.offsetX} : ${e.offsetY} Client x  ${e.clientX} clientY ${e.clientX} `
    }
    div2.onmousemove = function(e){
        this.innerHTML = `Подія ${e.offsetX} : ${e.offsetY} Client x  ${e.clientX} clientY ${e.clientX} `
    }
    div3.onmouseup = function(e){
        this.innerHTML = `Подія ${e.offsetX} : ${e.offsetY} Client x  ${e.clientX} clientY ${e.clientX} `
    }
    let output = document.querySelector(".output");
    function clear (){
        output.innerHTML="";
    }
    let main = document.querySelector('body');
    main.onkeydown = function(e){
        clear();
        console.log(e);
        output.innerHTML = `${e.key} code ${e.keyCode}`;

    }

}