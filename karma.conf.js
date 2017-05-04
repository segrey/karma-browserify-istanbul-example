var istanbul = require('browserify-istanbul');

module.exports = function(config) {
    config.set({
        basePath: './',
        frameworks: ['jasmine', 'browserify'],
        files: ['app/**/*.js'],
        preprocessors: {
            'app/**/*.js': ['browserify']
        },
        reporters: ['dots', 'coverage'],
        coverageReporter: {
            reporters: [{ type: 'html' }, { type: 'json'}]
        },
        colors: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        autoWatch: true,
        browserify: {
            debug: true,
            transform: [
              ['babelify', { presets: 'es2015' }],
              istanbul({
                instrumenterConfig: {
                  embedSource: true
                },
                ignore: ['**/node_modules/**', '**/*Test.js']
              })
            ]
        }
    });
};
