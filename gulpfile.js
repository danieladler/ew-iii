var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');

gulp.task('styles', function() {
  return sass('public/stylesheets/scss/*.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('public/stylesheets'))
    .pipe(livereload());
});

gulp.task('ejs',function(){
    return gulp.src('views/**/*.ejs')
    .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('public/stylesheets/scss/*.scss', ['styles']);
    gulp.watch('views/*.ejs', ['ejs']);
});

gulp.task('server',function(){
    nodemon({
        'script': './bin/www',
    });
});

gulp.task('serve', ['server','watch']);
