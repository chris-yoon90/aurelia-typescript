import gulp from 'gulp';
import bundler from 'aurelia-bundler';
import bundles from './bundles.json'

var config = {
    force: true,
    baseURL: '.',
    configPath: './config.js',
    bundles: bundles.bundles
};

gulp.task('bundle', ['build'], function() {
    return bundler.bundle(config);
});

gulp.task('unbundle', function() {
    return bundler.unbundle(config);
});