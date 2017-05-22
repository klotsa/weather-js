var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');

gulp.task('jsBrowserify', function(){
  return browserify({ entries:['./js/journal-interface.js'] })
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build/js'));
});
