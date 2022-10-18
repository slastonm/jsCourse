// Return true
console.log(Boolean('false'));
console.log(Boolean('Str'), 'Str');
console.log(Boolean(2.74), 'Num');
console.log(Boolean(10), 'Num');
console.log(Boolean(-1),'Num');
console.log(Boolean(2*3), 'Num');
console.log(Boolean(1<2),'Operation');
console.log(Boolean(Infinity),'Inf');
console.log(Boolean(-Infinity),'Inf');

// Return false
console.log(Boolean(false), 'Boolean');
console.log(Boolean(''), 'Str');
console.log(Boolean(0), 'Num');
console.log(Boolean(-0), 'Num');
console.log(Boolean(1>2), 'Operation');
console.log(Boolean(NaN), 'NaN');
console.log(Boolean(null), 'null');
console.log(Boolean(undefined), 'undefined');

// !!
console.log(!!"false", '!!false');
console.log(!!false, '!!Boolean');
console.log(!!undefined, 'undefined');
console.log(!!null, 'null');
console.log(!!NaN, 'NaN');
console.log(!!0, '0 num');
console.log(!!"", 'str');

let str = 'true';
let bool = true;
const stringToBoolean =(val)=> val ==='false' ? false : !!val;
if(typeof str == 'boolean'){
    console.log('Its boolean');
}
if(typeof bool == 'boolean'){
    console.log('Its boolean');
    console.log(stringToBoolean(bool));
}

const stringToBoolean2 = (stringValue)=>{
    switch(stringValue?.toLowerCase()?.trim()){
        case "true":
        case "yes":
        case "1":
            return true
        case "false":
        case "no":
        case "0":
        case null:
        case undefined:
            return false;
        default:
            // return JSON.parse(stringValue);
            return false
    }
}
console.log(stringToBoolean2('false'), 'test function');









