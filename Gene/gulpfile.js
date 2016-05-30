const gulp = require('gulp');
const webpack = require('webpack-stream');
const eslint = require('gulp-eslint');
var paths = {
  scripts: [
    __dirname + '/app/**/*.js',
    __dirname + 'server.js',
    __dirname + 'gulpfile.js'
  ]
};

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

gulp.task('webpack:test', () => {
  return gulp.src('test/entry.js')
    .pipe(webpack({
      devtool: 'source-map',
      output: {
        filename: 'bundle.js'
      },
      module: {
        loaders: [
          {
            test: /\.html$/,
            loader: 'html'
          }
        ]
      }
    }))
    .pipe(gulp.dest('test/'));
});

gulp.task('static:dev', () => {
  gulp.src('app/**/*.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('lint', () => {
  return gulp
  .src(paths.scripts)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('build:dev', ['webpack:dev', 'static:dev']);
gulp.task('default', ['build:dev', 'lint']);
