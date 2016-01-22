<!-- README.md -->

RAPTORFrame
===============================================================================

**R**apid **A**daptive **P**ractical **T**ricked-**O**ut **R**ocket **Frame**, or RAPTORFrame, is a light and modular framework what assists in rapidly developing modern frontend projects.
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
- Sass Option 1
  + [Ruby](https://www.ruby-lang.org/en/) 1.8.7+ 
  + [Sass](https://github.com/sass/sass) 3.4.0+
- Sass Option 2
  + A non-Ruby Sass alternative
- Necessities
  + [Node](https://github.com/nodejs/node) 5.0.0+
  + [NPM](https://docs.npmjs.com/getting-started/what-is-npm) 3.0.0+
  + [Gulp](https://github.com/gulpjs/gulp) 3.9.0+
  + [Gulp-CLI](https://github.com/gulpjs/gulp-cli) 1.1.0+

### Installation
1. Create a new project directory
2. Place the `assets/` and `source/` directories, and the `gulpfile.js` and `package.json` files from the `RAPTORFrame/` directory, into the root directory of your project (_do not_ transfer the `.git/` directory)
3. Optionally, repeat the previous step with the other files found in the `RAPTORFrame/` directory (`index.html`, `.gitignore`, `.editorconfig`, `rapticon-16x16.png`, etc.)
4. Link your base file (eg. `index.html`) to the `raptor.min.css` or `raptor.css` stylesheet, and to the `raptor.min.js` or `raptor.js` JavaScript file, found in the `assets/` directory

``` html
<!-- STYLESHEET EXAMPLE -->
<link rel="stylesheet" type="text/css" href="assets/stylesheets/raptor.min.css" />
```

``` html
<!-- JAVASCRIPT EXAMPLE -->
<script type="text/javascript" src="assets/javascripts/raptor.min.js"></script>
```
5. Within the project root directory, run `npm install` to setup the development environment

### Commands
|          Command          |            Task            |
|---------------------------|----------------------------|
|      `npm run raptor`     | `build` then `watch` files |
| `npm run raptor -- build` | `build` the _assets_ files |
| `npm run raptor -- serve` | `watch` the _source_ files |
|     `npm run launch`      | Starts a local server and opens the base file in a browser |

## ToDos

- Write thorough documentation or instructional `.md` file(s) explaining how to use everything
- Include logo, when developed
- Update `rapticon-16x16.png` and `rapticon-16x16.ico` favicons, when developed
- Create `apple-touch-icon` and `og:image`
- Create optional status files
  + `404.html`
  + `422.html`
  + `500.html`

-------------------------------------------------------------------------------

## Team

[The humans responsible and technology colophon](https://github.com/SuitAndCape/RAPTORFrame/blob/Info/humans.txt).

- **Ali Esmaili** _(Developer & Designer)_: [AESM](https://github.com/AESM)
- **Molly Allison-Baker** _(Consultant)_: [hermitina](https://github.com/hermitina)
- **Eric Lawrence Dapp** _(Consultant)_: [e-dapp](https://github.com/e-dapp)

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
