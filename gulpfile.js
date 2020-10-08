const {watch, src, series, parallel, dest} = require('gulp');
const webserver = require('gulp-webserver');
const del = require('del');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

function cleanBuild() {
  return del('./public/js/*');
}

function build() {
  return src('./index.web.js')
    .pipe(webpack(webpackConfig))
    .on('error', function handleError() {
      this.emit('end'); // Recover from errors
    })
    .pipe(dest('./'));
}

function watchChanges() {
  watch(['./app/**/**/**/*', './public/css/**/*', './index.web.js'], build);
}

function serve() {
  src('public').pipe(
    webserver({
      fallback: 'index.html',
      livereload: true,
      directoryListing: false,
      open: true,
    }),
  );
}

exports.build = series(cleanBuild, build);

exports.default = parallel(serve, watchChanges);
