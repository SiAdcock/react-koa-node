'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('js', () => {
  return gulp.src('**/*.jsx')
    .pipe(babel({
      presets: ['react']
    }))
    .pipe(gulp.dest('build'));
});
