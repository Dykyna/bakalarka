var gulp = require('gulp');
var watch = require('gulp-watch');
var server = require('gulp-live-server');

// var express;

gulp.task('server', function() {
	var serv = server.static();
	serv.start();

	gulp.watch(['./static/**/*.css', './static/**/*.html', './static/**/*.js'], function (file) {
		serv.notify.apply(serv, [file]);
	});
});

gulp.task('watch', function() {
	return watch()
});