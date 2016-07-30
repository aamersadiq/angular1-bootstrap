var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./app/app.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./app/assets/css/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});