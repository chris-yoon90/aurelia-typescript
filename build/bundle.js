import gulp from 'gulp';

import bundles from './bundles.json'

var bundler = require('aurelia-bundler');

var config = {
    force: true,
    baseURL: '.',
    configPath: './config.js',
    bundles: bundles.bundles
};

gulp.task('unbundle', function() {
    return bundler.unbundle(config);
});

gulp.task('bundle', ['unbundle', 'build'], function() {
    return bundler.bundle(config);
});

