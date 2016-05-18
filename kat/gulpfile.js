const gulp = require('gulp');
const webpack = require('webpack-stream');
const eslint = require('gulp-eslint');
const html = require('html-loader');

var serverFiles = ['gulpfile.js', 'server.js'];
var clientFiles = ['./app**/*.js'];

gulp.task('lintServer', () => {
  return gulp.src(serverFiles)
  .pipe(eslint('./app/.eslintrc'))
  .pipe(eslint.format());
});

gulp.task('lintClient', () => {
  return gulp.src(clientFiles)
  .pipe(eslint('./.eslintrc'))
  .pipe(eslint.format());
});

gulp.task('webpack:dev', () => {
  gulp.src('app/js/entry.js')
    .pipe(webpack({
      devtool: 'source-map',
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('static', () => {
  gulp.src('app/**/*.html')
  .pipe(gulp.dest('./build'));
  gulp.src('app/**/*.css')
  .pipe(gulp.dest('./build'));
});

gulp.task('lint', ['lintServer', 'lintClient']);
gulp.task('default', ['webpack:dev', 'static']);
