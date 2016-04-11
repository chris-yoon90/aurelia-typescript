import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import changed from 'gulp-changed';
import typescript from 'gulp-tsb';
import sourcemaps from 'gulp-sourcemaps';
import runSequence from 'run-sequence';
import babel from 'gulp-babel';
import sass from 'gulp-sass';

import config from './config';
import tsConfig from '../tsconfig.json';
import babelConfig from './babel-options.json';

gulp.task('build-js', () => {
    let typescriptCompiler = typescript.create(tsConfig.compilerOptions);
    return gulp.src(config.dts.concat(config.ts))
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(changed(config.dest, {extension: '.js'}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(typescriptCompiler())
        .pipe(babel(babelConfig))
        .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/src'}))
        .pipe(gulp.dest(config.dest));
});

gulp.task('build-css', () => {
    return gulp.src(config.css)
        .pipe(changed(config.dest, {extension: '.css'}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/assets/scss'}))
        .pipe(gulp.dest(config.dest));
});

gulp.task('build-html', function() {
  return gulp.src(config.html)
    .pipe(changed(config.dest, {extension: '.html'}))
    .pipe(gulp.dest(config.dest));
});

gulp.task('build', (callback) => {
    return runSequence(
        ['build-js', 'build-html', 'build-css'],
        callback
    );
})