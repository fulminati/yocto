var gulp = require('gulp')
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon')
var browserSync = require('browser-sync').create();

//script paths
var jsFiles = 'src/js/**/*.js',
    jsDest = 'dist/js';

gulp.task('js', function() {
    return gulp.src(jsFiles)
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(jsDest))
});

gulp.task('sass', function () {
    return gulp.src('./src/sass/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function () {
    gulp.watch('./src/js/**/*.js', gulp.parallel(['js'])),
    gulp.watch('./src/sass/**/*.scss', gulp.parallel(['sass']));
});

gulp.task('serve', function (done) {
    nodemon({
        script: 'yocto.js'
        , ext: 'js html'
        , env: { 'NODE_ENV': 'development' }
        , done: done
    })
})

gulp.task('browser-sync', function() {
    browserSync.init({
        port: 4000,
        proxy: "localhost:3000"
    });
});

gulp.task('start', gulp.parallel('watch', 'serve', 'browser-sync'))