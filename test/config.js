module.exports = function (config) {
    config.set({
        basePath: '../',

        frameworks: ['mocha'],

        files: [
            'test/vendor/chai.js',
            'test/vendor/sinon.js',
            'static/assets/js/require.js',
            'static/config.js',

            {pattern: 'static/**/*.js', included: false, served: true, watched: true},
            {pattern: 'static/**/*.html', included: false, served: true, watched: true},

            'test/requirejs-test-config.js',
            {pattern: 'test/spec/**/*.js', included: true, served: true, watched: true}
        ],

        exclude: [
        ],

        client: {
            mocha: {
                ui: 'bdd'
            }
        },

        reporters: ['progress'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['Chrome'],

        captureTimeout: 20000,

        singleRun: false,

        reportSlowerThan: 500,

        plugins: [
            'karma-mocha',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-firefox-launcher'
        ]
    });
};
