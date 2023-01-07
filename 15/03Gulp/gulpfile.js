const {src, dest, series, watch} = require('gulp');

// function movefile(){
//     return src('application/index.html')
//     .pipe(dest('dest-folder/'));
// }
// function movefile(){
//     return src('application/js/*.js')
//     .pipe(dest('dest-folder/js/'));
// }
// function movefile(){
//     return src('application/js/**/*.js')
//     .pipe(dest('dest-folder/js/'));
// }
// function movefile(){
//     return src(['application/js/**/*.js', 'application/style/**/*.css', '!application/index.html'])
//     .pipe(dest('dest-folder/'));
// }
function css(cb){
    console.log('Style changed');
    cb();
}

const htmlmin = require('gulp-htmlmin');
function minifyhtml(){
    return src('application/index.html')
    .pipe(htmlmin({
         collapseWhitespace: true,
        removeComments: true
    }))
    .pipe(dest('dest-folder/'))

}
const sass = require('gulp-sass')(require('sass'));
function convertstyle(){
    return src('application/style/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dest-folder/style/'));
}
const browserSync = require('browser-sync').create();

function watchfn(){
    browserSync.init({
        server: {
            baseDir: "./dest-folder"
        }
    });
    // watch('application/style/**/*.css', {delay:3000}, css);
    // watch('application/style/**/*.css', css);
    // watch('application/*', {events:'addDir'}, function(cb){
    //     console.log('User add new folder');
    //     cb();
    // });
    watch('application/index.html', minifyhtml);
    watch('application/style/*.scss', convertstyle);
    watch(`application/**/*.*`).on('change', browserSync.reload);
}



exports.default = watchfn;