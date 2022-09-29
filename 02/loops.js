// console.log("text 1");
// console.log("text 2");
// console.log("text 3");
// ...
let counter = 0;
let text = "";
let star ="";
while (counter < 10){
    text = `Counter value ${counter}`;
    // star +="*"; 
    console.log(text);
    if(counter == 4){
        console.log('Stop', counter);
        break;
        console.log('Nooo');
    }
    // console.log(star);
    counter ++;
}

// while (counter < 10){
//     text = `Counter value ${counter}`;
//     // star +="*"; 
//     console.log(text);
//     if(counter == 4){
//         console.log('Stop', counter);
//         continue;
//     }

//     counter ++;
// }

let doText ="";
let doCounter =0;
// do {
//     doText +=doCounter;
//     console.log(doText);
//     doCounter++;
// }
// while (doCounter<5);

let maxAttempts = 3;
let attempt = 0;
let color = 'pink';

// while (attempt<maxAttempts){
//     attempt++;
//     userColor = prompt("Color ?");
//     if(userColor == null){
//         break;
//     }
//     if(userColor != color){
//         alert("Nooo");
//         continue;
//     }
//     alert('You win!');
//     break;
// }

for(let i=0; i<9; i++){
    let templateCard = `<div class="card">
    <h1>Title ${i}</h1>
    <p>text text ${i}</p>
</div>`
    document.write(templateCard);
}

for(let c = 0; c <4; c++){
    console.log(`First loop value ${c}`);
    for(let d=0; d<4; d++){
        console.log(d);
    }
}