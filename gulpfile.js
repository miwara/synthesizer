let gulp = require('gulp');
let webpack = require('gulp-webpack');
let webpackConfig = require('./webpack.config.js');

gulp.task('build', function() {
  return gulp.src('./app.js')
    .pipe(webpack(Object.assign({}, webpackConfig, {
      watch: true
    })))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['build']);
