require.config({
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
        backboneLocalStorage: {
            deps: ['backbone'],
            exports: 'Store'
        },
        backboneModelBinder: {
            deps: ['backbone']
        },
        backboneCollectionBinder: {
            deps: ['backbone', 'backboneModelBinder']
        }
    },
    paths: {
        when: '../vendor/when/when',
        text: '../vendor/requirejs-text/text',
        jquery: '../vendor/jquery/jquery',
        underscore: '../vendor/underscore/underscore',
        backbone: '../vendor/backbone/backbone',
        backboneLocalStorage: '../vendor/backbone.localStorage.async/backbone.localStorage.async',
        backboneModelBinder: '../vendor/backbone.modelBinder/Backbone.ModelBinder',
        backboneCollectionBinder: '../vendor/backbone.modelBinder/Backbone.CollectionBinder'
    }
});

require([
    'backbone',
    'underscore',
    'backboneCollectionBinder',
    'util/extensions',
    'router/router'
], function (Backbone, _, bcb, extensions, Router) {
    var router = new Router();
    Backbone.history.start();
});
