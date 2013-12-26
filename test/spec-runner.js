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
        },
        sinon: {
            exports: 'sinon'
        }
    },
    
    paths: {
        jquery: '../vendor/jquery/jquery',
        underscore: '../vendor/underscore/underscore',
        backbone: '../vendor/backbone/backbone',
        backboneLocalStorage: '../vendor/backbone.localStorage.async/backbone.localStorage.async.js',
        chai: '../vendor/chai/chai',
        sinon: '../vendor/sinon/lib/sinon',
        sinonChai: '../vendor/sinon-chai/lib/sinon-chai'
    }
});

require([
    'spec/util/extensions.spec',
    'spec/view/recipes.spec'
], function () {
    if (window.mochaPhantomJS) {
        mochaPhantomJS.run();
    }
    else {
        mocha.run();
    }
});
