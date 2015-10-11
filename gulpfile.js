'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssImport = require("postcss-import")
var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  css: __dirname + '/css/main.css'
};
var dest = __dirname + '/dist';

gulp.task('css', function () {
  var plugins = [
    cssImport(),
    autoprefixer({
      browsers: [
        '> 1%'
      ],
      add: true,
      remove: true
    })
  ];

  return gulp.src(__dirname + '/css/main.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest(dest));
});

gulp.task('js', buildJs({ watch: false }));

gulp.task('default', ['css', 'js']);

gulp.task('watch', ['css'], function () {
  gulp.watch(__dirname + '/css/**/*.css', ['css']);
  buildJs({
    watch: true
  });
});

function buildJs (opts) {
  var watch = opts.watch;
  var b = browserify({
    entries: __dirname + '/client/main.js',
    debug: true
  });

  if (watch) {
    b = watchify(b);
    b.on('update', createBundle.bind(null, b));
  }

  b.on('log', gutil.log);
  createBundle(b);
}

function createBundle (b) {
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browseify Error'))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./dist'))
    .pipe(gulp.dest('./dist'));
}
