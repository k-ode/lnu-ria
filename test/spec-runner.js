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
        when: '../vendor/when/when',
        text: '../vendor/requirejs-text/text',
        jquery: '../vendor/jquery/jquery',
        underscore: '../vendor/underscore/underscore',
        backbone: '../vendor/backbone/backbone',
        backboneLocalStorage: '../vendor/backbone.localStorage.async/backbone.localStorage.async.js',
        backboneModelBinder: '../vendor/backbone.modelBinder/Backbone.ModelBinder',
        backboneCollectionBinder: '../vendor/backbone.modelBinder/Backbone.CollectionBinder',
        chai: '../vendor/chai/chai',
        sinon: '../vendor/sinon/sinon',
        // Templates
        recipesTemplate: 'template/recipes.html'
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
