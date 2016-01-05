	  var gulp = require('gulp'),
 browserSync = require('browser-sync'),
		    sass = require('gulp-sass'),
        maps = require('gulp-sourcemaps'),
autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('./scss/**/bs4-one-ui-kit.scss')
    .pipe(maps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer("last 1 version", "> 1%", "ie 8", "ie 7"))
    .pipe(maps.write())
    .pipe(gulp.dest('./template/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('watch', ['default'], function(){
  browserSync.init({
      server: "./template"
  });
	gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch('./template/index.html', browserSync.reload);
});


gulp.task('default', function(){
});

