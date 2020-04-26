(() => {

  'use strict';

  const {
    src,
    dest,
    parallel,
    series,
    watch
  } = require('gulp');

  /**
   * Modules
   */
  const connect = require('gulp-connect');
  const open = require('gulp-open');
  const plumber = require('gulp-plumber');
  const rollup = require('rollup').rollup;
  const babel = require('rollup-plugin-babel');


  /**
   * Config
   */
  const cfg = {
    src: {
      js: './src/javascript/**/*.js',
      jsBuild: './src/build/javascript/**/*.js',
      html: './src/*.html'
    },
    dest: {
      js: './src/build/javascript/',
      jsDist: './dist/'
    },
    roll: {
      input: './src/javascript/app.js',
      file: './src/build/javascript/app.js',
      format: 'iife'
    },
    server: {
      host: '0.0.0.0',
      root: './src/',
      port: 3000,
      src: './src/index.html',
      uri: 'http://localhost:3000/',
    }
  }


  /**
   * JS Bundler
   */
  const roll = () =>
    rollup({
      input: cfg.roll.input,
      plugins: [
        babel()
      ]
    }).then(bundle => {
      return bundle.write({
        file: cfg.roll.file,
        format: cfg.roll.format,
        name: 'library',
        sourcemap: true
      });
    });

  /**
   * Scripts Reload
   */
  const scripts = () =>
    src(cfg.src.jsBuild)
    .pipe(connect.reload());

  /**
   * Scripts Copy
   */
  const scriptsCopy = () =>
    src('./src/javascript/text-fragment.js')
    .pipe(dest('./'));


  /**
   * Patching
   */
  const bumper = () =>
    src('./package.json')
    .pipe(bump())
    .pipe(dest('./'));


  /**
   * HTML
   */
  const html = () =>
    src(cfg.src.html)
    .pipe(connect.reload())


  /**
   * Create Local Web Server
   */
  const openServer = () => {
    connect.server({
      host: cfg.server.host,
      root: cfg.server.root,
      port: cfg.server.port,
      livereload: true
    });
  }

  /**
   * Open Default Browser
   */
  const openBrowser = () => {
    return src(cfg.server.src)
      .pipe(plumber())
      .pipe(open({
        uri: cfg.server.uri
      }));
  }

  /**
   * Watcher
   */
  const watcher = () => {
    watch(cfg.src.html, html);
    watch(cfg.src.js, series(roll, scripts, scriptsCopy));
  }

  exports.default = parallel(series(roll, scripts, scriptsCopy), html, openServer, openBrowser, watcher);
})();
