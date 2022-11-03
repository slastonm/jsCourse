window.onload = function(){
    let btn = document.querySelector('button');
    function displayAlert(){
        alert('Button click');
    }
    btn.addEventListener('click', displayAlert, true);
   

    let btnRemove = document.querySelector('.remove');
    
    btnRemove.addEventListener('click', ()=>{
        btn.removeEventListener('click', displayAlert, true);
        alert('Done!');
    }, true);

    let h1 = document.querySelector('h1');
    h1.addEventListener('click', function(){
        console.log(this);
        this.innerHTML = 'Hello Js '
    })
    let [...pArr] = document.querySelectorAll('div p');
    console.log(pArr);
    for( let i =0; i<pArr.length; i++){
        pArr[i].onclick = function(){
            this.style.backgroundColor = 'green';
        }
    }
    let link = document.querySelector('a');
    link.addEventListener('click', function(event){
        alert('clicked');
        console.log(event);
        console.log(event.ctrlKey, 'Press');
        event.preventDefault();
    });
}