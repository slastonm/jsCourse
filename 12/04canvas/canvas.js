window.onload = ()=>{
    let canvas = document.querySelector('canvas');
    let context = canvas.getContext('2d');
    function drawLine(){
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(100, 350);
        context.stroke();
    }
    // drawLine();
    function drawPath(){
        context.translate(50,150);
        context.beginPath(0,0);
        context.moveTo(0,0);
        context.lineTo(100,0);
        context.lineTo(100,100);
        context.lineTo(0,100);

        context.closePath();
        context.stroke();
        
    }
    drawPath();
    function printText(){
        context.font = "30px Arial"
        context.strokeText("Hello Canvas", 50, 50);
    }
    printText();
}