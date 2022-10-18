const d = new Date();
console.log(d);

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// const createDate = new Date(2000, 03, 24, 06, 0, 30, 0);
// console.log(createDate);

// short
// const createDate = new Date(2001, 01, 1);
// console.log(createDate, 'short');

const createDate = new Date(2014, 01);
console.log(createDate, 'short short');

// work with str

const strDate = new Date("October 12, 2022 11:13:00");
console.log(strDate, 'str date');

const dateMethod = new Date();
console.log(dateMethod.toISOString(), 'Iso');
console.log(dateMethod.toDateString(), 'Date string');
console.log(dateMethod.toUTCString(), 'UTS');

const today = new Date();
console.log(today.getDay(), 'Day');
// "Sun, Mon, Th ... San"
// "Mon, Th, Wd"
console.log(today.getMonth(), 'Month');
console.log(today.getMonth(), 'Month');
console.log(today.getFullYear(), 'Year');
console.log(today.getMinutes(), 'Minutes');
console.log(today.getMilliseconds(), 'Milleseconds');



