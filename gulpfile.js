// gulpfile.js

////= RAPTORFrame Gulp Tasks
//===========================================================================//

/// RAPTORFrame v1.0.0
  /// SOURCE: https://github.com/SuitAndCape/RAPTORFrame
  /// Authored by Ali Esmaili
  /// Copyright (c) 2015-2016 Ali Esmaili | SuitAndCape
  /// MIT: https://github.com/SuitAndCape/RAPTORFrame/blob/Info/LICENSE

    /// => ToDo: apply Gulp 4.0 updates when deemed appropriate <= ///
    /// SOURCE: https://github.com/gulpjs/gulp/blob/4.0/docs/API.md

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglifyJS = require('gulp-uglify');

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
    //   'scssmanifest': './source/scss/raptorframe.scss',
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
  console.error(error.toString());
  this.emit('end');
}

//== Compiler Tasks ==========================================================/

gulp.task('raptor-styles', function() {
  return gulp
    .src(sourcePath.scssmanifest)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .on('error', handleError)
    .pipe(rename('raptor.min.css'))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(assetsPath.stylesheets));
});

gulp.task('raptor-scripts', function() {
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
    .pipe(concat('raptor.min.js'))
    .pipe(uglifyJS())
    .on('error', handleError)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(assetsPath.javascripts));
});

//== Management Tasks ========================================================/

gulp.task('watch', function() {
  // gulp.watch(sourcePath.scss, gulp.registry().get('raptor-styles'))
  gulp.watch(sourcePath.scss, ['raptor-styles']);
  // gulp.watch(sourcePath.js, gulp.registry().get('raptor-scripts')) /// OPTION 2
  gulp.watch(sourcePath.js, ['raptor-scripts']);
});

gulp.task('serve', ['watch']);

// gulp.task('build', gulp.parallel('raptor-styles', 'raptor-scripts');
gulp.task('build', ['raptor-styles', 'raptor-scripts']);

// gulp.task('default', gulp.series('build', 'watch'));
gulp.task('default', ['build', 'watch']);
