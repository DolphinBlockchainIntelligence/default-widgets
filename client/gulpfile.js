'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('sass', function () {
  return gulp.src('**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer({
      "browsers": [
        "android > 2",
        "chrome > 40",
        "firefox > 30",
        "ie > 5",
        "ios > 7",
        "opera > 25",
        "safari > 5"
      ],
      "cascade": "false"
    })]))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function () {
  gulp.watch('**/*.sass', ['sass']);
});

gulp.task('default', ['sass', 'watch']);