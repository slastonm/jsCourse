var gulp = require('gulp');

var path={
    images:'img/*.png',
    css:'style/*.css',
    buildImg:'dist/img',
    buildStyle:'dist/style'
}

gulp.task('images', () =>

  gulp.src(path.images)
    // .other plugins
    .pipe(gulp.dest(path.buildImg))

);
gulp.task('css', () =>

  gulp.src(path.css)
    // .other plugins
    .pipe(gulp.dest(path.buildStyle))

);
gulp.task("default", ["css", "images"]);

const {src, dest, parallel} = require('gulp');

function images(){
    return src(path.images)
    // plugins work
    .pipe(dest(path.buildImg))
}

function style(){
    return src(path.css)
    // plugins work
    .pipe(dest(path.buildStyle));
}

exports.default = parallel(images, style);