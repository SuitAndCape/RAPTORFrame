<!-- README.md -->

RAPTORFrame
===============================================================================

**R**apid **A**daptive **P**ractical **T**ricked-**O**ut **R**ocket **Frame**work, or RAPTORFrame, is a light and modular framework which assists in rapidly developing modern frontend projects.
The Sass (SCSS) boilerplate, also known as [RAPTORSMACSS](https://github.com/SuitAndCape/RAPTORSMACSS), is loosely based on the [SMACSS](https://smacss.com/) architecture pattern.

## Contents

- [Title](#raptorframe)
- [Usage](#usage)
- [Riding the Raptor](#riding-the-raptor)
- [ToDos](#todos)
- [Team](#team)
- [License](#license)
- [Connect](#connect)

## Usage

### Requirements
- [Node](https://github.com/nodejs/node) 5.0.0+
- [NPM](https://docs.npmjs.com/getting-started/what-is-npm) 3.0.0+
- [Gulp](https://github.com/gulpjs/gulp) 3.9.0+
- [Gulp-CLI](https://github.com/gulpjs/gulp-cli) 1.1.0+

### Installation
1. Create a new project directory
2. Place the `assets/` and `source/` directories, and the `gulpfile.js` and `package.json` files from the `RAPTORFrame/` directory, into the root directory of your project
3. Optionally, repeat the previous step with the other files found in the `RAPTORFrame/` directory (`index.html`, `.gitignore`, `.editorconfig`, `rapticon-16x16.png`, etc.) [_do not_ transfer the `.git/` directory]
4. Within the project root directory, run `npm install` to setup the development environment
5. Link your base file (eg. `index.html`) to the `raptor.css` stylesheet, and to the `raptor.js` JavaScript file, found in the `assets/` directory

``` html
<!-- STYLESHEET EXAMPLE -->
<link rel="stylesheet" type="text/css" href="assets/stylesheets/raptor.css" />
```

``` html
<!-- JAVASCRIPT EXAMPLE -->
<script type="text/javascript" src="assets/javascripts/raptor.js"></script>
```

### Commands
|          Command          |            Task            |
|---------------------------|----------------------------|
|      `npm run raptor`     | `build` the entire _frame_, `watch` all of the _source_ files |
| `npm run raptor -- build` | `build` the entire _frame_ |
| `npm run raptor -- watch` | `watch` all of the _source_ files |
| `npm run raptor -- init` | `build` the _root_ files (`index.html`, `README.md`, `humans.txt`, `robots.txt`, `LICENSE`, `.editorconfig`, and `.gitconfig`) to the _root_ |
| `npm run raptor -- smash` | `build` the _stylesheets_ and _JavaScripts_ |
| `npm run raptor -- glyph` | `build` additional _glyphs_ (_fonts_ and _icons_) |
| `npm run raptor -- audvi` | `build` the _images_ and the _media_ (_favicons_, _images_, _audio_, and _video_) |
|     `npm run launch`      | Starts a local server and opens the base file in a browser |

## ToDos

- Write thorough documentation, including the following...
  + `source/root/` directory
    * Transfer made to `frame/`
    * Edit the hidden files
    * Subfolders will not transfer
    * Instructional `README.md` file
  + `source/glyphs/` directory
    * Transfer made to `frame/glyphs/`
    * Only `eot`, `svg`, `ttf`, `woff`, and `woff2` files will transfer
    * Subfolders will not transfer
  + `source/images/` directory
    * Transfer made to `frame/images/`
    * Only `gif`, `ico`, `jpeg`, `jpg`, `png`, `svg`, `tif`, and `tiff` files will transfer
    * Subfolders will transfer, for modularity
  + `source/javascripts/` directory
    * All concatenated and uglified to `frame/javascripts/raptor.js`
    * How and where to add JavaScript files
    * What each file and subfolder does
    * Subfolders will not transfer
  + `source/media/` directory
    * Transfer made to `frame/media/`
    * Only `aac`, `avi`, `m4a`, `mid`, `mov`, `mp3`, `mp4`, `ogg`, `ogv`, `swf`, `vtt`, `wav`, `webm`, `wma`, and `wmv` files will transfer
    * Subfolders will transfer, for modularity
  + `source/stylesheets/` directory
    * All compiled and minified to `frame/stylesheets/raptor.css`
    * How and where to add SCSS files
    * What each file and subfolder does
    * Subfolders will not transfer
  + `source/views/` directory
    * Transfer made to `frame/`
    * Subfolders will transfer, for modularity

- Add the following...
  + Linters 
    * `scss-lint`
    * `csslint`
    * `jshint` or `eslint`
    * Some for views
    * Some for markup languages (_maybe..._)
- Create the following...
  + Root files
    * New `rapticon-16x16.ico` and new `rapticon-16x16.png`
    * `apple-touch-icon.jpg` or `apple-touch-icon.png`
    * `404.html` (_maybe..._)
    * `422.html` (_maybe..._)
    * `500.html` (_maybe..._)
    * `.jshintignore`
    * `.eslintignore`
  + SCSS files
    * A `@font-face` mixin for glyphs (_maybe..._)
  + Images
    * RAPTORFrame logo – `.png` and/or `svg`
    * RAPTORFrame `og:image` – `.jpg` or `.png`
  + Lib directories
    * CSS libraries, non-compiled (_maybe..._)
    * JavaScript libraries, non-compiled (_maybe..._)

-------------------------------------------------------------------------------

## Team

[The humans responsible and technology colophon](https://github.com/SuitAndCape/RAPTORFrame/blob/Info/humans.txt).

- **Ali Esmaili** _(Developer & Designer)_: [AESM](https://github.com/AESM)
- **Molly Allison-Baker** _(Consultant)_: [hermitina](https://github.com/hermitina)
- **Allan Enemark** _(Consultant)_: [exactlyAllan](https://github.com/exactlyAllan)

## License

This [project](#raptorframe) is copyright © 2015 Ali Esmaili | SuitAndCape.  It is free software that may be redistributed under the terms specified in the [LICENSE](https://github.com/SuitAndCape/RAPTORFrame/blob/Info/LICENSE).

This is based on [The MIT License (MIT)](http://opensource.org/licenses/MIT).  For more information, visit the [Open Source Initiative](http://opensource.org/) website.

## Connect

|               :tophat:               |               :rocket:               |
| ------------------------------------ | ------------------------------------ |
**_SuitAndCape GitHub_** | https://github.com/SuitAndCape
**_Personal GitHub_**    | https://github.com/AESM
**_Website_**            | https://SuitAndCape.github.io/
**_LinkedIn_**           | https://www.linkedin.com/in/SuitAndCape
**_Twitter_**            | https://twitter.com/SuitAndCape
