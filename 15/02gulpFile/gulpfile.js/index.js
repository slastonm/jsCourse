const {series, parallel} = require('gulp');
const {style} = require('./style');

function test(cb){
    console.log("Test task");
    cb();
}
function publicktask(cb){
    console.log('publick');
    cb();
}
function scssToCss(cb){
    console.log('compile');
    cb();
}
function minCss(cb){
    console.log('min css');
    cb();
}
function esTojs(cb){
    console.log('compile es');
    cb();
}
function minJs(cb){
    console.log('min js');
    cb();
}

exports.publicktask = publicktask;

exports.first = series(style, test, scssToCss, publicktask);
exports.second = parallel(scssToCss, esTojs);
exports.prod = parallel(
    series(esTojs, minJs),
    series(scssToCss, minCss),
    series(test),
    series(style)   
)