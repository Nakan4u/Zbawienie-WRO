const gulp = require("gulp");
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const fileInclude = require('gulp-file-include');

// Define the task to include HTML parts
gulp.task('html', function () {
    return gulp.src(['./source/html/index.html'])
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./'));
});

// compile file scss to css in folder > style
gulp.task("scss", function() {
    return gulp
        .src("./source/styles/style.scss")
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest("./source/styles/"));
});