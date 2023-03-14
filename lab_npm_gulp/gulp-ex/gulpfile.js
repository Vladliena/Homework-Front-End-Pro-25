const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('sass');
const gulpSass = require('gulp-sass');
const scss = gulpSass(sass);
const babel = require('gulp-babel');
const watch = require('gulp-watch');

const SRC_DIR = './src'
const DIST_DIR = './dist/'

const JS_DIR = SRC_DIR + '/js/**/*.js'
const SCSS_DIR = SRC_DIR + '/css/**/*.scss'

async function def () {
    gulp.src(JS_DIR)
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest(DIST_DIR))
}

async function sassCompilation () {
    gulp.src(SCSS_DIR)
        .pipe(scss())
        .pipe(gulp.dest(DIST_DIR))
}

async function watchScss () {
    gulp.watch(SCSS_DIR,sassCompilation)
}

gulp.task('sass-compilation',sassCompilation);
gulp.task('default',def);
gulp.task('watch-scss',watchScss)

gulp.task('default', gulp.parallel(['default', 'watch-scss']))