<!-- CHANGELOG.md -->

RAPTORFrame Changelog
===============================================================================

## 1.0.3

- Add `source/assets/` directory
- Have `source/root/` build to the project root

## 1.0.2

- Add [eslint](https://github.com/eslint/eslint) and corresponding packages, for JavaScript linting
- Add `npm run lint-js` command for linting all `source/javascripts/` files
(except for `vendors/`)
- Create an `.eslintignore` file, so that JavaScript linting will only focus on development files
- Add [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) for image optimization
- Create the `source/javascripts/modules/` directory

## 1.0.1

- Generated `frame/` directory becomes new project root
- Add additional `npm run raptor` commands
- Match `source/` and `frame/` directory names for consistency
- Add [gulp-sass-glob](https://github.com/tomgrooffer/gulp-sass-glob) to make things more developer friendly
- Add all basic asset directories to complete `source/`

## 1.0.0

- RAPTORFrame and RAPTORSMACSS
  + Make RAPTORFrame a Gulp driven frontend framework
  + Make RAPTORSMACSS an SCSS boilerplate and nothing else
- Create SMSP branch
- Create Info branch and move the following files there
  + `CHANGELOG.md`
  + `humans.txt`
  + `LICENSE`
  + `VERSION`
