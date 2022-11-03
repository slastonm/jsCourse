window.onload = ()=>{
    let h1 =  document.querySelector('h1');
    h1.setAttribute('style','color:blue;background-color:yellow;border:2px solid black');
    // h1.setAttribute('style','padding:50px'); перетирає попеднє значення
    h1.style.cssText +="padding:50px";
    let p =  document.querySelector('p');
    p.style.color ='red';
    p.style.fontWeight = 'bold';
    // to be continued
    let h2= document.querySelector('h2');
    let style = getComputedStyle(h2);
    console.log(style);
    console.log(style.backgroundColor);
    let menu = document.querySelector('#menu');
    
    // menu.className =''; remove all class name
    menu.classList.add('addClass', 'NewSecond', 'NewSecond');
    menu.classList.add('addClass2');
    menu.classList.add('addClass3');
    console.log(menu.className);
    // remove
    menu.classList.remove('main');
    menu.classList.remove('main', 'NewSecond', 'addClass3');
    console.log(menu.className);
    // replace
    menu.classList.replace('vertical', 'horizontal');
    console.log(menu.className);
    // test class name
    console.log(menu.classList.contains('addClass5'), 'Class contains addClass');

    let btn = document.querySelector('button');
    btn.onclick= function(){
        menu.classList.toggle('hide');
    }
    
    let box = document.querySelector('.box');

    // console.log(width, height);
    box.style.width ='100px';
    let width = box.offsetWidth;
    let height = box.offsetHeight;
    console.log(width, height);

    let domRect = box.getBoundingClientRect();
    console.log(domRect);
    let boxStyleCompile = getComputedStyle(box);
    let marginTop = parseInt(boxStyleCompile.marginTop);
    let marginBottom = boxStyleCompile.marginBottom;
    let marginLeft = boxStyleCompile.marginLeft;
    let marginRight = boxStyleCompile.marginRight;
    console.log(`Top ${marginTop} bottom ${marginBottom} left ${marginLeft} right ${marginRight}`);

}