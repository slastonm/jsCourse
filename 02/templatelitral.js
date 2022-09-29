let one =  1;
let two = 2;
// let result = "Result sum = " + one+two;
let template = `Some value ${one}`;
console.log(template);
let result =`Result ${one+two}`;
console.log(result);
let col = `<div class="row">
                <div class="col">${one+two}</div>
            </div>`
document.write(col);