'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var cfg = require('./package.json');

function capitalise(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var pureConfig = {
  exports: capitalise(cfg.name),
  external: {
    lodash: {amd: 'lodash', global: '_'},
    react: {amd: 'react', global: 'React'},
    baconjs: {amd: 'baconjs', global: 'Bacon'}
  }
};

gulp.task('clean', function () {
  return gulp.src('dist', { read: false }).pipe($.clean());
});

gulp.task('build', function () {
  return gulp.src(cfg.main)
    .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.babel())
    .pipe($.pureCjs(pureConfig))
    .pipe($.concat('harukaze.js'))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['build']);
