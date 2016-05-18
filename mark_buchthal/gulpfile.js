const gulp = require('gulp');
const eslint = require('gulp-eslint');
const webpack = require('webpack-stream');
const nodemon = require('gulp-nodemon');
const html = require('html-loader');

var files = {
  APPJS: ['app/**/*.js'],
  SERVERJS: ['server.js', 'gulpfile.js'],
  TEST: 'test/**/*.js'
};

gulp.task('lint:browser', () => {
  return gulp.src(files.APPJS)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('lint:server', () => {
  return gulp.src(files.SERVERJS)
    .pipe(eslint())
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

gulp.task('webpack:test', () => {
  gulp.src('test/entry.js')
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

gulp.task('css:dev', () => {
  gulp.src('app/css/**/*.css')
    .pipe(gulp.dest('./build'));
});

gulp.task('develop', () => {
  nodemon({
    script: 'server.js',
    ext: 'html js css',
    ignore: ['build'],
    tasks: ['lint']
  })
  .on('restart', () => {
    console.log('restarted');
  });
});


gulp.task('lint', ['lint:browser', 'lint:server']);
gulp.task('build', ['webpack:dev', 'static:dev', 'css:dev']);
