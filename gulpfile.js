// gulpfile.js

////= RAPTORFrame Gulp Tasks
//============================================================================//

/// RAPTORFrame v1.0.3
  /// SOURCE: https://github.com/SuitAndCape/RAPTORFrame
  /// Authored by Ali Esmaili
  /// Copyright (c) 2015-2016 Ali Esmaili | SuitAndCape
  /// MIT: https://github.com/SuitAndCape/RAPTORFrame/blob/Info/LICENSE

    /// => ToDo: apply Gulp 4.0 updates when deemed appropriate <= ///
    /// SOURCE: https://github.com/gulpjs/gulp/blob/4.0/docs/API.md

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin');
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    sourcemaps = require('gulp-sourcemaps'),
    uglifyJS = require('gulp-uglify'),
    path = require('path');

var framePath = {
      'stylesheets': './frame/stylesheets',
      'media': './frame/media',
      'javascripts': './frame/javascripts',
      'images': './frame/images',
      'glyphs': './frame/glyphs',
      'frame': './frame',
    },
    rootPath = './',
    sourcePath = {
      'scss': './source/stylesheets/**/*.scss',
      'root': [
        './source/root/**/*',
        './source/root/**/.editorconfig',
        './source/root/**/.gitignore',
        './source/root/**/.jshintignore',
        './source/root/**/.eslintignore',
      ],
      'jsview': './source/javascripts/views/**/*.js',
      'jsvend': './source/javascripts/vendors/**/*.js',
      'jspoly': './source/javascripts/polyfills/**/*.js',
      'jsplug': './source/javascripts/plugins/**/*.js',
      'jsmods': './source/javascripts/modules/**/*.js',
      'jsmain': './source/javascripts/*.js',
      'jshelp': './source/javascripts/helpers/**/*.js',
      'js': './source/javascripts/**/*.js',
    //   'jsmanifest': [
    //     './source/javascripts/polyfills/**/*.js',
    //     './source/javascripts/vendors/**/*.js',
    //     './source/javascripts/plugins/**/*.js',
    //     './source/javascripts/helpers/**/*.js',
    //     './source/javascripts/modules/**/*.js',
    //     './source/javascripts/views/**/*.js',
    //     './source/javascripts/*.js',
    //   ],
      'img': './source/images/**/*.{gif,ico,jpeg,jpg,png,svg,tif,tiff}',
      'hiero': './source/glyphs/**/*.{eot,svg,ttf,woff,woff2}',
      'assets': './source/assets/**/*',
    };

//== Functions ================================================================/

/// Errors are reported in terminal and `watch` isn't broken by them
/// SOURCE: http://stackoverflow.com/a/23973536
function handleError(error) {
  console.error(error.toString());
  this.emit('end');
}

//== Frame Tasks ==============================================================/

gulp.task('raptor-root', function () {
  return gulp
    .src(sourcePath.root)
    .pipe(gulp.dest(rootPath));
});

gulp.task('raptor-stylesheets', function() {
  return gulp
    .src(sourcePath.scss)
    .pipe(sourcemaps.init())
      .pipe(sassGlob())
      .pipe(sass())
      .on('error', handleError)
      .pipe(rename('raptor.css'))
      .pipe(minifyCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(framePath.stylesheets));
});

gulp.task('raptor-javascripts', function() {
  return gulp
    // .src(sourcePath.jsmanifest)
    .src([
      sourcePath.jspoly,
      sourcePath.jsvend,
      sourcePath.jsplug,
      sourcePath.jshelp,
      sourcePath.jsview,
      sourcePath.jsmods,
      sourcePath.jsmain,
    ])
    .pipe(sourcemaps.init())
      .pipe(concat('raptor.js'))
      .pipe(uglifyJS())
      .on('error', handleError)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(framePath.javascripts));
});

gulp.task('raptor-glyphs', function () {
  return gulp
    .src(sourcePath.hiero)
    .pipe(gulp.dest(function(file) {
      file.path = file.base + path.basename(file.path);
      return framePath.glyphs;
    }));
});

gulp.task('raptor-images', function() {
  return gulp
    .src(sourcePath.img)
      .pipe(imagemin({
        optimizationLevel: 3,
        progessive: true,
        interlaced: true
      }))
    .pipe(gulp.dest(framePath.images));
});

gulp.task('raptor-assets', function () {
  return gulp
    .src(sourcePath.assets)
    .pipe(gulp.dest(framePath.frame));
});

//== Management Tasks =========================================================/

gulp.task('other', ['raptor-assets']);

gulp.task('image', ['raptor-images']);

gulp.task('glyph', ['raptor-glyphs']);

// gulp.task('smash', gulp.parallel('raptor-stylesheets', 'raptor-javascripts');
gulp.task('smash', ['raptor-stylesheets', 'raptor-javascripts']);

gulp.task('floor', ['raptor-root']);

gulp.task('watch', function() {
  // gulp.watch(sourcePath.root, gulp.registry().get('raptor-root'))
  gulp.watch(sourcePath.root, ['raptor-root']);
  // gulp.watch(sourcePath.scss, gulp.registry().get('raptor-stylesheets'))
  gulp.watch(sourcePath.scss, ['raptor-stylesheets']);
  // gulp.watch(sourcePath.js, gulp.registry().get('raptor-javascripts'))
  gulp.watch(sourcePath.js, ['raptor-javascripts']);
  // gulp.watch(sourcePath.hiero, gulp.registry().get('raptor-glyphs'))
  gulp.watch(sourcePath.hiero, ['raptor-glyphs']);
  // gulp.watch(sourcePath.img, gulp.registry().get('raptor-images'))
  gulp.watch(sourcePath.img, ['raptor-images']);
  // gulp.watch(sourcePath.assets, gulp.registry().get('raptor-assets'))
  gulp.watch(sourcePath.assets, ['raptor-assets']);
});

// gulp.task('build', gulp.parallel('raptor-stylesheets', 'raptor-javascripts', 'raptor-glyphs', 'raptor-images', 'raptor-root', 'raptor-assets');
gulp.task('build', ['raptor-stylesheets', 'raptor-javascripts', 'raptor-glyphs', 'raptor-images', 'raptor-root', 'raptor-assets']);

// gulp.task('default', gulp.series('build', 'watch'));
gulp.task('default', ['build', 'watch']);
