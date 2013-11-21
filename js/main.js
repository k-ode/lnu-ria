(function () {
    'use strict';

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
            backboneLocalStore: {
                deps: ['backbone'],
                exports: 'Store'
            }
        },
        paths: {
            text: '../vendor/requirejs-text/text',
            jquery: '../vendor/jquery/jquery',
            underscore: '../vendor/underscore/underscore',
            backbone: '../vendor/backbone/backbone',
            backboneLocalStorage: '../vendor/backbone.localStorage.async/backbone.localStorage.async.js',
        }
    });

    require([
        'backbone',
        'router/router'
    ], function (Backbone, Router) {
        var router = new Router();
        Backbone.history.start();
    });
})();
