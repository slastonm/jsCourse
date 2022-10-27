window.onload = ()=>{
    let newElement = document.createElement('p');
    newElement.innerHTML= 'Hello';
    document.body.appendChild(newElement);

    let div = document.createElement('div');
    div.id='js-id';
    div.className = 'js-className';
    div.innerHTML ='Hello in div';
    document.body.appendChild(div);

    // let hElement = document.createElement('h1');
    let spanElement = document.createElement('span');
    spanElement.innerHTML = 'Inside h';
    // document.body.appendChild(hElement);
    let getH = document.querySelector('h1');
    getH.appendChild(spanElement);

    let list = document.querySelector('.list');

    let li = document.createElement('li');
    li.innerHTML= 'Hello';
    list.appendChild(li);

    function createElement(name){
        let li = document.createElement('li');
        li.textContent = name;
        return li;
    }
    let toDo =[
        'Buy milk',
        'Buy dog'
    ]
    list.appendChild(createElement('News'));
    list.appendChild(createElement('Home'));
    list.appendChild(createElement('About'));


    let menu = document.querySelector('.menu');
    menu.removeChild(menu.lastElementChild);

    const removeLastChild = ()=>{
        let menu = document.querySelector('.menu');
        const item = menu.lastElementChild;
        console.log(item);
        if( item != null){
            console.log(item, 'inside');
            menu.removeChild(item);
        }
    }

    removeLastChild();

}