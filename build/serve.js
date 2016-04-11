import gulp from 'gulp';
import browserSync from 'browser-sync';
import config from './config';

gulp.task('ts-watch', ['build-js'], browserSync.reload);
gulp.task('css-watch', ['build-css'], browserSync.reload);
gulp.task('html-watch', ['build-html'], browserSync.reload);

gulp.task('serve', ['build'], function(done) {
  browserSync({
    online: false,
    open: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      middleware: function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
  
  gulp.watch(config.ts, ['ts-watch']);
  gulp.watch(config.css, ['css-watch']);
  gulp.watch([config.index, config.html], ['html-watch']);
});

gulp.task('serve-bundle', ['bundle'], function(done) {
  browserSync({
    online: false,
    open: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      middleware: function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});