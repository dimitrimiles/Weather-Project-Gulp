var gulp = require('gulp');
var gulputil = require('gulp-util');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');

gulp.task('jshint', function(){
    gulp.src('QA/Todd/*.js')
    .pipe(jshint()) 
    .pipe(jshint.reporter('default', { verbose: true }));
});

gulp.task('concat-js', function(){
    gulp.src('QA/Todd/*.js')
    .pipe(concat("production.js"))
    .pipe(gulp.dest('QA/Todd'))
});

gulp.task('deploy', function(){
    gulp.src('QA/Todd/production.js')
    .pipe(gulp.dest('production/Weather Dot Com'))
});

gulp.task('default', function(){
	console.log('Test');

});

