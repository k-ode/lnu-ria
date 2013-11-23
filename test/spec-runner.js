require.config({
    urlArgs: "v="+(new Date()).getTime(),
    
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        backboneLocalStore: {
            deps: ['backbone'],
            exports: 'Store'
        }
    },
    
    paths: {
        jquery: '../vendor/jquery/jquery',
        underscore: '../vendor/underscore/underscore',
        backbone: '../vendor/backbone/backbone',
        backboneLocalStorage: '../vendor/backbone.localStorage.async/backbone.localStorage.async.js',
        chai: '../vendor/chai/chai',
    }
});

require([
    'spec/util/extensions.spec'
], function () {
    if (window.mochaPhantomJS) {
        mochaPhantomJS.run();
    }
    else {
        mocha.run();
    }
});
