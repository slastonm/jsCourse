const {src, dest, series} = require('gulp');

// function movefile(){
//     return src('application/index.html')
//     .pipe(dest('dest-folder/'));
// }
function movefile(){
    return src('application/js/*.js')
    .pipe(dest('dest-folder/js/'));
}
exports.default = movefile;