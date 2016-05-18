const gulp = require('gulp');
const webpack = require('webpack-stream');
const eslint = require('gulp-eslint');

const scripts = ['server.js', 'gulpfile.js', 'app/**/*.js'];

gulp.task('lint', () => {
  return gulp.src(scripts)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('webpack:dev', () => {
  return gulp.src('app/js/init.js')
    .pipe(webpack({
      devtool: 'source-map',
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('static:dev', () => {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('css:dev', () => {
  return gulp.src('app/**/*.css')
    .pipe(gulp.dest('./build'));
});

gulp.task('build:dev', ['lint', 'webpack:dev', 'static:dev', 'css:dev']);
gulp.task('default', ['build:dev']);
