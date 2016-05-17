var gulp = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browser-sync').create()
var autoprefixer = require('gulp-autoprefixer')

gulp.task('default', ['watch'])

gulp.task('sass', () => {
  return gulp.src('scss/styles.scss')
    .pipe(sass({
      includePaths: ['./node_modules']
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('css'))
})

gulp.task('watch', () => {
  gulp.watch('scss/styles.scss', ['sass'])
})

gulp.task('browsersync', ['watch'], () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
})
