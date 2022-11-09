window.onload = ()=>{
    
    let div = document.querySelector('div');
    function drag(element, event){
        let startX = event.clientX;
        let startY = event.clientY;
        console.log(startX, startY);
        let elementX = element.offsetLeft;
        let elementY = element.offsetTop;
        console.log(elementX, elementY);

        let deltaX = startX - elementX;
        let deltaY = startY - elementY;

        function moveHandler(e){
            console.log(e, 'moveEvent');
            element.style.left = (e.clientX - deltaX) + 'px';
            element.style.top = (e.clientY - deltaY) + 'px';

        }
        function upHandler(e){
            document.removeEventListener("mouseup", upHandler);
            document.removeEventListener("mousemove", moveHandler);
        }

        document.addEventListener("mousemove", moveHandler);
        document.addEventListener("mouseup", upHandler);
    }
    function init(){
        div.onmousedown = function(e){
            console.log(e);
            drag(this, e);
        }        
    }
    init();

}