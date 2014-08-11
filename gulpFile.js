/**
 * TODO:
 *  - Watch HTML
 *  - Build (concat, uglify, copy, cleanup)
 **/

var gulp = require('gulp'),
	source = require('vinyl-source-stream'),
	watchify = require('watchify'),
	str2functionify = require('string-to-functionify'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	gutil = require('gulp-util'),
	plumber = require('gulp-plumber'),
	config = require('./gulpConfig.js'),
	watch = require('gulp-watch'),
	sass = require('gulp-sass');


var production = false; //Link this to build options


gulp.task('watch-js', function() {

	var bundler = watchify(config.js.src);

	bundler.transform(str2functionify.configure({
		extensions: '.html'
	}));

	bundler.on('update', rebundle);

	function rebundle (file) {
		return bundler.bundle({
				debug: !production
			})
			.pipe( plumber() )
			.pipe( source(config.js.output) )
			.pipe( gulp.dest(config.js.dist) )
			.pipe( livereload() );
	}

	return rebundle();
});

gulp.task('sass', function(){
	return gulp.src('app/styles/styles.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/assets/styles/'))
		.pipe(livereload());
});

gulp.task('watch-sass', function(){
	gulp.watch([
		'app/styles/*.scss',
		'app/styles/**/*.scss',
		'app/modules/**/*.scss',
		'app/views/**/*.scss'
	], ['sass']);
});


gulp.task('connect-dev', function () {
	connect.server({
		root: './app',
		port: 3000,
		livereload: true
	});
});


gulp.task('default', [
	'sass',
	'watch-sass',
	'watch-js',
	'connect-dev'
]);