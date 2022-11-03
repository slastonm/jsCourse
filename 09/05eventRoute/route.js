window.onload = function(){
    let isTunel = true;
    let div1 = document.querySelector('#first');
    let div2 = document.querySelector('#second');
    let div3 = document.querySelector('#third');
    div1.addEventListener('click',function(){
        this.style.backgroundColor="green";
        alert('1');
    },isTunel);
    div2.addEventListener('click',function(){
        this.style.backgroundColor="orange";
        alert('2');

    },isTunel);
    div3.addEventListener('click',function(){
        this.style.backgroundColor="red";
        alert('3');
    },isTunel);
}