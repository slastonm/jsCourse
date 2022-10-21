window.onload = ()=>{
    let insideP = document.querySelector('.inside-main');
    let parentBlock = insideP.parentNode;
    let menu = document.querySelector('.menu');
    console.log(menu.firstChild); // text Node
    console.log(menu.firstElementChild);
    console.log(menu.lastChild); // text Node
    console.log(menu.lastElementChild);

    let [...childrens] = menu.children;
    console.log(childrens);
    let activeElem = document.querySelector('.active');
    console.log(activeElem.nextElementSibling, 'Sibling');
    console.log(activeElem.previousElementSibling, 'Sibling');
    activeElem.innerHTML=`<div class="inside-main">
    ${childrens}
</div>`
    // activeElem.nextElementSibling.innerHTML='Next Sibling';
    // activeElem.previousElementSibling.innerHTML='Prev Siblin';
};