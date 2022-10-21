
window.onload = () => {
    let btn = document.getElementById("clickMe");
    console.log(btn);
    let [...pElements] = document.getElementsByTagName('p');
    // console.log(pElements);
    // let pElementsArr = Array.from(pElements);
    // console.log(pElementsArr);
    console.log(pElements, 'Array to');
    for (let i = 0; i < pElements.length; i++) {
        pElements[i].innerHTML = `${i}`;
    }
    pElements.forEach(item => {
        item.innerHTML = `<p>
        Text
    </p>`;
    });
    let [...textBlocks] = document.getElementsByClassName('text-block');
    console.log(textBlocks);
    let divData = textBlocks.map(item=>item.textContent);
    console.log(divData);

    // document.querySelector
    const firstLInk = document.querySelector("footer a");
    console.log(firstLInk);
    // document.querySelectorAll
    const links = document.querySelectorAll('footer a');
    console.log(links);

    const pId = document.querySelectorAll('#id-js');
    console.log(pId);
    const footerClass = document.querySelectorAll("footer .class-js");
    console.log(footerClass);
    const ulLi = document.querySelectorAll("ul>li");
    console.log(ulLi);
    let selectedLi = document.querySelector('footer li:nth-child(2)');
    console.log(selectedLi);
}
