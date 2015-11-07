'use strict';

const babel = require('gulp-babel');
const gulp = require('gulp');

module.exports = () => {
  return gulp.src('./app/**/*.jsx')
    .pipe(babel({
      presets: ['es2015', 'react']
    }))
    .pipe(gulp.dest('./build/assets/js'));
};
