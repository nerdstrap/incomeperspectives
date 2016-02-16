'use strict';

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var merge = require('merge-stream');

gulp.task('styles', function () {
	return sass('app/components/**/*.scss', {
		style: 'expanded'
	}).pipe(gulp.dest('app/css'));
});

gulp.task('build-sass', function () {

	var scssStream = sass(['app/components/**/*.scss'])
		.pipe(concat('scss-files.scss'));

	var mergedStream = merge(scssStream)
		.pipe(concat('components.css'))
		.pipe(minify())
		.pipe(gulp.dest('assets/css'));

	return mergedStream;
});
