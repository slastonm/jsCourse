window.onload=()=>{
    let menuContainer = document.querySelector('.menu');
    let menuItems = ["Home", "News", "About", "Sale"];
    let fragment = new DocumentFragment();

    menuItems.forEach((item)=>{
        let li = document.createElement('li');
        li.innerHTML = item;
        fragment.appendChild(li);
    });
    menuContainer.appendChild(fragment);

    let p = document.createElement('p');
    p.innerHTML ='after';
    let hEl= document.querySelector('h1');
    hEl.after(p);

    let mapMenu = document.querySelector(".mapMenu");
    let libs = ["React", "jQuery", "Angular", "Vue"];
    const items = libs.map((lib)=>{
        let item = document.createElement('li');
        item.innerText = lib;
        return item;
    });

    mapMenu.lastChild.after(...items);

    let newLi = document.createElement('li');
    newLi.textContent = 'New Element';
    mapMenu.replaceChild(newLi,mapMenu.firstElementChild);

    let cloneElem = document.querySelector('.clone');
    let cloneMenu = cloneElem.cloneNode(false); // true - deep clone  клонує батьківський елемент і чілдренів  false  тільки батьківський елемент
    mapMenu.firstElementChild.appendChild(cloneMenu);

    menuContainer.insertBefore(newLi, menuContainer.firstElementChild);
    
}