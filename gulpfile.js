// gulpfile.js

////= RAPTORFrame Gulp Tasks
//===========================================================================//

/// RAPTORFrame v1.0.1
  /// SOURCE: https://github.com/SuitAndCape/RAPTORFrame
  /// Authored by Ali Esmaili
  /// Copyright (c) 2015-2016 Ali Esmaili | SuitAndCape
  /// MIT: https://github.com/SuitAndCape/RAPTORFrame/blob/Info/LICENSE

    /// => ToDo: apply Gulp 4.0 updates when deemed appropriate <= ///
    /// SOURCE: https://github.com/gulpjs/gulp/blob/4.0/docs/API.md

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-cssnano'),
    path = require('path'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    sourcemaps = require('gulp-sourcemaps'),
    uglifyJS = require('gulp-uglify');

var framePath = {
      'stylesheets': './frame/stylesheets',
      'media': './frame/media',
      'javascripts': './frame/javascripts',
      'images': './frame/images',
      'glyphs': './frame/glyphs',
      'frame': './frame',
    },
    sourcePath = {
      'scssmanifest': './source/stylesheets/raptorframe.scss',
      'scss': './source/stylesheets/**/*.scss',
      'jsview': './source/javascripts/views/**/*.js',
      'jsvend': './source/javascripts/vendors/**/*.js',
      'jspoly': './source/javascripts/polyfills/**/*.js',
      'jsplug': './source/javascripts/plugins/**/*.js',
      'jsmain': './source/javascripts/*.js',
      'jshelp': './source/javascripts/helpers/**/*.js',
      'js': './source/javascripts/**/*.js',
    //   'jsmanifest': [
    //     './source/javascripts/polyfills/**/*.js',
    //     './source/javascripts/vendors/**/*.js',
    //     './source/javascripts/plugins/**/*.js',
    //     './source/javascripts/helpers/**/*.js',
    //     './source/javascripts/views/**/*.js',
    //     './source/javascripts/*.js',
    //   ],
      'img': './source/images/**/*.{gif,ico,jpeg,jpg,png,svg,tif,tiff}',
      'fi': './source/glyphs/**/*.{eot,svg,ttf,woff,woff2}',
      'base': [
        './source/root/**/*',
        './source/root/**/.editorconfig',
        './source/root/**/.gitignore',
        './source/root/**/.jshintignore',
        './source/root/**/.eslintignore',
      ],
      'av': './source/media/**/*.{aac,avi,m4a,mid,mov,mp3,mp4,ogg,ogv,swf,vtt,wav,webm,wma,wmv}',
    };

//== Functions ===============================================================/

/// Errors are reported in terminal and `watch` isn't broken by them
/// SOURCE: http://stackoverflow.com/a/23973536
function handleError(error) {
  console.error(error.toString());
  this.emit('end');
}

//== Frame Tasks =============================================================/

gulp.task('raptor-styles', function() {
  return gulp
    .src(sourcePath.scssmanifest)
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass())
    .on('error', handleError)
    .pipe(rename('raptor.css'))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(framePath.stylesheets));
});

gulp.task('raptor-scripts', function() {
  return gulp
    // .src(sourcePath.jsmanifest)
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
    .pipe(uglifyJS())
    .on('error', handleError)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(framePath.javascripts));
});

gulp.task('raptor-glyphs', function () {
  return gulp
    .src(sourcePath.fi)
    .pipe(gulp.dest(function(file) {
      file.path = file.base + path.basename(file.path);
      return framePath.glyphs;
    }));
});

gulp.task('raptor-images', function() {
  return gulp
    .src(sourcePath.img)
    .pipe(gulp.dest(framePath.images));
});

gulp.task('raptor-media', function() {
  return gulp
    .src(sourcePath.av)
    .pipe(gulp.dest(framePath.media));
});

gulp.task('raptor-base', function () {
  return gulp
    .src(sourcePath.base)
    .pipe(gulp.dest(function(file) {
      file.path = file.base + path.basename(file.path);
      return framePath.frame;
    }));
});

//== Management Tasks ========================================================/

// gulp.task('audvi', gulp.parallel('raptor-images', 'raptor-media');
gulp.task('audvi', ['raptor-images', 'raptor-media']);

gulp.task('glyph', ['raptor-glyphs']);

// gulp.task('smash', gulp.parallel('raptor-styles', 'raptor-scripts');
gulp.task('smash', ['raptor-styles', 'raptor-scripts']);

gulp.task('init', ['raptor-base']);

gulp.task('watch', function() {
  // gulp.watch(sourcePath.scss, gulp.registry().get('raptor-styles'))
  gulp.watch(sourcePath.scss, ['raptor-styles']);
  // gulp.watch(sourcePath.js, gulp.registry().get('raptor-scripts'))
  gulp.watch(sourcePath.js, ['raptor-scripts']);
  // gulp.watch(sourcePath.fi, gulp.registry().get('raptor-glyphs'))
  gulp.watch(sourcePath.fi, ['raptor-glyphs']);
  // gulp.watch(sourcePath.img, gulp.registry().get('raptor-images'))
  gulp.watch(sourcePath.img, ['raptor-images']);
  // gulp.watch(sourcePath.av, gulp.registry().get('raptor-media'))
  gulp.watch(sourcePath.av, ['raptor-media']);
  // gulp.watch(sourcePath.base, gulp.registry().get('raptor-base'))
  gulp.watch(sourcePath.base, ['raptor-base']);
});

// gulp.task('build', gulp.parallel('raptor-styles', 'raptor-scripts', 'raptor-glyphs', 'raptor-images', 'raptor-media', 'raptor-base');
gulp.task('build', ['raptor-styles', 'raptor-scripts', 'raptor-glyphs', 'raptor-images', 'raptor-media', 'raptor-base']);

// gulp.task('default', gulp.series('build', 'watch'));
gulp.task('default', ['build', 'watch']);
