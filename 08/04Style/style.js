window.onload = ()=>{
    let h1 =  document.querySelector('h1');
    h1.setAttribute('style','color:blue;background-color:yellow;border:2px solid black');
    // h1.setAttribute('style','padding:50px'); перетирає попеднє значення
    h1.style.cssText +="padding:50px";
    let p =  document.querySelector('p');
    p.style.color ='red';
    p.style.fontWeight = 'bold';

}