// gulpfile.js

////= RAPTORFrame Gulp Tasks
//===========================================================================//

    /// => ToDo: update for Gulp 4.0 upon release <= ///
    /// SOURCE: https://github.com/gulpjs/gulp/blob/4.0/docs/API.md

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglifyJS = require('gulp-uglify'),
    runSequence = require('run-sequence');

var dest = gulp.dest,
    err = console.error,
    src = gulp.src;

var assetsPath = {
      'raptorcss': './assets/stylesheets/raptor.css',
      'raptorjs': './assets/javascripts/raptor.js',
      'stylesheets': './assets/stylesheets',
      'javascripts': './assets/javascripts',
    },
    sourcePath = {
      'scssmanifest': './source/scss/raptorframe.scss',
      'scss': './source/scss/**/*.scss',
      'jsview': './source/js/views/**/*.js',
      'jsvend': './source/js/vendors/**/*.js',
      'jspoly': './source/js/polyfills/**/*.js',
      'jsplug': './source/js/plugins/**/*.js',
      'jsmain': './source/js/*.js',
      'jshelp': './source/js/helpers/**/*.js',
      'js': './source/js/**/*.js',
    };
    // sourcePath = {
    //   'scssmanifest': './source/scss/raptor.scss',
    //   'scss': './source/scss/**/*.scss',
    //   'js': [
    //     './source/js/polyfills/**/*.js',
    //     './source/js/vendors/**/*.js',
    //     './source/js/plugins/**/*.js',
    //     './source/js/helpers/**/*.js',
    //     './source/js/views/**/*.js',
    //     './source/js/*.js',
    //   ]
    // };

//== Functions ===============================================================/

/// Errors are reported in terminal and `watch` isn't broken by them
/// SOURCE: http://stackoverflow.com/a/23973536
function handleError(error) {
  err(error.toString());
  this.emit('end');
}

//== Style Tasks =============================================================/

gulp.task('compile-styles', function() {
  return gulp
    .src(sourcePath.scssmanifest)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(rename('raptor.css'))
    .on('error', handleError)
    .pipe(dest(assetsPath.stylesheets))
    .pipe(sourcemaps.write('./'))
    .pipe(dest(assetsPath.stylesheets));
});

gulp.task('minify-styles', function() {
  return gulp
    .src(assetsPath.raptorcss)
    .pipe(sourcemaps.init())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(dest(assetsPath.stylesheets));
});

//== Script Tasks ============================================================/

gulp.task('concat-scripts', function() {
  return gulp
    // .src(sourcePath.js) /// OPTION 2
    .src([
      sourcePath.jspoly,
      sourcePath.jsvend,
      sourcePath.jsplug,
      sourcePath.jshelp,
      sourcePath.jsview,
      sourcePath.jsmain,
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('raptor.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(dest(assetsPath.javascripts));
});

gulp.task('uglify-scripts', function() {
  return gulp
    .src(assetsPath.raptorjs)
    .pipe(sourcemaps.init())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglifyJS())
    .on('error', handleError)
    .pipe(sourcemaps.write('./'))
    .pipe(dest(assetsPath.javascripts));
});

//== Management Tasks ========================================================/

gulp.task('raptor-style', function() {
  // gulp.series('compile-styles', 'minify-styles');
  runSequence('compile-styles', 'minify-styles');
});

gulp.task('raptor-script', function() {
  // gulp.series('concat-scripts', 'uglify-scripts'); /// OPTION 1
  runSequence('concat-scripts', 'uglify-scripts');
});

gulp.task('watch', function() {
  gulp.watch(sourcePath.scss, ['raptor-style']);
  // gulp.watch(sourcePath.js, gulp.series('raptor-script')); /// OPTION 2
  gulp.watch(sourcePath.js, ['raptor-script']);
});

//== Command Line Tasks ======================================================/

gulp.task('serve', ['watch']);

// gulp.task('build', gulp.parallel('raptor-style', 'raptor-script');
gulp.task('build', ['raptor-style', 'raptor-script']);

// gulp.task('default', gulp.series('build', 'watch'));
gulp.task('default', ['build', 'watch']);
