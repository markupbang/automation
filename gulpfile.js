'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify');

// paths
var DIR = {
    SRC: 'src',
    DEST: 'dist',
    MAP: 'map'
};
var SRC = {// input file
    JS: DIR.SRC + '/js/**/*.js',
    SCSS: DIR.SRC + '/sass/*.s+(a|c)ss'
};
var dist = DIR.DEST; // output file

// task
gulp.task('lint-js', function() {
    gulp.src(SRC.JS)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('sass', function() {
    gulp.src(SRC.SCSS)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
    .pipe(sourcemaps.write(DIR.MAP))
    .pipe(gulp.dest(dist));
});

gulp.task('js', ['lint-js'], function() {
    return browserify(DIR.SRC + '/js/entry.js')
   .bundle()
   .pipe(source('bundle.js'))
   .pipe(buffer())
   .pipe(sourcemaps.init({loadMaps: true}))
   .pipe(uglify())
   .pipe(sourcemaps.write(DIR.MAP))
   .pipe(gulp.dest(dist));
});

// watch
gulp.task('watch', function() {
    gulp.watch(SRC.SCSS, ['sass']);
    gulp.watch(SRC.JS, ['js']);
});

gulp.task('default', ['sass','js','watch']);
