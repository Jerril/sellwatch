 var gulp = require('gulp');
 var sass = require('gulp-sass');
 var cleanCSS = require('gulp-clean-css');

 gulp.task('css', function(){
    return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    // .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css'));
 });

 gulp.task('default', [ 'css' ]);

 gulp.task('watch', function(){
    gulp.watch('./sass/**/*.scss', ['css']);
 });

 