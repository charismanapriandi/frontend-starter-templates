import gulp from 'gulp';
import pug from 'gulp-pug';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import concat from 'gulp-concat';
import imagemin from 'gulp-imagemin';
import svg from 'gulp-svgmin';

const sass = gulpSass(dartSass)

gulp.task('pug', async function() {
  return gulp.src('src/pug/*.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('dist'))
})
gulp.task('scss', async function() {
  return gulp.src('src/scss/app.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/assets/css'))
})
gulp.task('js', async function() {
  return gulp.src('src/js/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/assets/js'))
})
gulp.task('img', async function() {
  return gulp.src('src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/images'))
})
gulp.task('svg', async function() {
  return gulp.src('src/svg/*.svg')
    .pipe(svg())
    .pipe(gulp.dest('dist/assets/svg'))
})

gulp.task('watch', async function() {
  gulp.watch('src/pug/**/*.pug', gulp.series('pug'));
  gulp.watch('src/scss/**/*.scss', gulp.series('scss'));
  gulp.watch('src/js/**/*.js', gulp.series('js'));
  gulp.watch('src/images/**/*', gulp.series('img'));
  gulp.watch('src/svg/*.svg', gulp.series('svg'));
})

export default gulp.series('pug', 'scss', 'js', 'img', 'svg');