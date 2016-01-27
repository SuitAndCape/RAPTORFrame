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
    /// SOURCE: http://fettblog.eu/gulp-4-sourcemaps/
    /// SOURCE: http://fettblog.eu/gulp-4-passthrough/
    /// SOURCE: http://fettblog.eu/gulp-4-incremental-builds/

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-cssnano'),
    path = require('path'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglifyJS = require('gulp-uglify');

var rootPath = './',
    framePath = {
      'stylesheets': './frame/stylesheets',
      'raptorjs': './frame/javascripts/raptor.js',
      'raptorcss': './frame/stylesheets/raptor.css',
      'media': './frame/media',
      'javascripts': './frame/javascripts',
      'images': './frame/images',
      'glyphs': './frame/glyphs',
      'frame': './frame',
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
    //   'js': [
    //     './source/js/polyfills/**/*.js',
    //     './source/js/vendors/**/*.js',
    //     './source/js/plugins/**/*.js',
    //     './source/js/helpers/**/*.js',
    //     './source/js/views/**/*.js',
    //     './source/js/*.js',
    //   ],
      'img': './source/static/img/**/*.{gif,jpeg,jpg,png,svg,tif,tiff}',
      'fonticon': [
        './source/fonts/**/*.{eot,svg,ttf,woff,woff2}',
        './source/icons/**/*.{eot,svg,ttf,woff,woff2}',
      ],
      'fav': './source/static/fav/**/*.{gif,ico,jpeg,jpg,png}',
      'base': [
        './source/base/**/*',
        './source/base/**/.editorconfig',
        './source/base/**/.gitignore',
        './source/base/**/.jshintignore',
        './source/base/**/.eslintignore',
      ],
      'av': [
        './source/static/aud/**/*.{aac,m4a,mid,mp3,ogg,wav,wma}',
        './source/static/vid/**/*.{avi,mov,mp4,ogg,ogv,swf,vtt,webm,wmv}',
      ],
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
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .on('error', handleError)
    .pipe(rename('raptor.min.css'))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(framePath.stylesheets));
});

gulp.task('raptor-scripts', function() {
  return gulp
    // .src(sourcePath.js)
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
    .pipe(gulp.dest(framePath.javascripts));
});

gulp.task('raptor-glyphs', function () {
  return gulp
    .src(sourcePath.fonticon)
    .pipe(gulp.dest(function(file) {
      file.path = file.base + path.basename(file.path);
      return framePath.glyphs;
    }));
});

/// Combine this with `raptor-base` if you make `frame/` the root
gulp.task('raptor-favicons', function () {
  return gulp
    .src(sourcePath.fav)
    .pipe(gulp.dest(function(file) {
      file.path = file.base + path.basename(file.path);
      return framePath.frame;
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
      return rootPath;
      // return framePath.frame; /// Use this if you make `frame/` the root
    }));
});

//== Management Tasks ========================================================/
// gulp.task('shift', gulp.parallel('raptor-favicons', 'raptor-images', 'raptor-media');
gulp.task('shift', ['raptor-favicons', 'raptor-images', 'raptor-media']);

gulp.task('hiero', ['raptor-glyphs']);

// gulp.task('smash', gulp.parallel('raptor-styles', 'raptor-scripts');
gulp.task('smash', ['raptor-styles', 'raptor-scripts']);

gulp.task('watch', function() {
  // gulp.watch(sourcePath.scss, gulp.registry().get('raptor-styles'))
  gulp.watch(sourcePath.scss, ['raptor-styles']);
  // gulp.watch(sourcePath.js, gulp.registry().get('raptor-scripts'))
  gulp.watch(sourcePath.js, ['raptor-scripts']);
  // gulp.watch(sourcePath.fonticon, gulp.registry().get('raptor-glyphs'))
  gulp.watch(sourcePath.fonticon, ['raptor-glyphs']);
  // gulp.watch(sourcePath.fav, gulp.registry().get('raptor-favicons'))
  gulp.watch(sourcePath.fav, ['raptor-favicons']);
  // gulp.watch(sourcePath.img, gulp.registry().get('raptor-images'))
  gulp.watch(sourcePath.img, ['raptor-images']);
  // gulp.watch(sourcePath.av, gulp.registry().get('raptor-media'))
  gulp.watch(sourcePath.av, ['raptor-media']);
});

// gulp.task('build', gulp.parallel('raptor-styles', 'raptor-scripts', 'raptor-glyphs', 'raptor-favicons', 'raptor-images', 'raptor-media');
gulp.task('build', ['raptor-styles', 'raptor-scripts', 'raptor-glyphs', 'raptor-favicons', 'raptor-images', 'raptor-media']);

gulp.task('init', ['raptor-base']);

// gulp.task('default', gulp.series('build', 'watch'));
gulp.task('default', ['build', 'watch']);
