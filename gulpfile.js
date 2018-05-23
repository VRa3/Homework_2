var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');

gulp.task('sass', () => {
  return gulp.src('sass/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('css'))
});

gulp.task('watch', ['sass'], () => {
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('sass/partials/*.scss', ['sass']);
});

gulp.task('default', function (callback) {
  runSequence(['watch', 'sass'],
    callback
  )
})