let buy = prompt("I want buy");
// let product = 'Cat';
// buy = 'cAt';
// product = 'caT';

// switch(buy){
//     case 'cat':
//         console.log('cat price $1');
//         break;
//     case 'dog':
//         console.log('cat price $2');
//         break;
//     case 'parot':
//         console.log('parrot price $3');
//         break;
//     default:
//         console.log('Sorry we just have cat, dog, parrot');
// }

switch(buy){
    case 'cat2':
    case 'dog2':
        console.log('price $2');
        break;
    case 'parot':
        console.log('parrot price $3');
        break;
    default:
        console.log('Sorry we just have cat, dog, parrot');
}

let day = prompt('Type day');
switch(day){
    case 'Mo':
    case 'Th':
    case 'Wd':
    case 'Thu':
    case 'Fr':
        console.log('Work day');
        break;
    case 'Su':
    case 'Sa':
        console.log('Not work day');
        break;
    default:
        console.log('Sorry');
}