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
            jquery: '../bower_components/jquery/jquery',
            underscore: '../bower_components/underscore/underscore',
            backbone: '../bower_components/backbone/backbone',
            backboneLocalStorage: 'lib/backbone.localStorage.async/backbone.localStorage.async.js',
        }
    });

    require([
        'backbone',
        'view/app',
        'router/router',
    ], function (Backbone, AppView, AppRouter) {
        new AppRouter();
        Backbone.history.start();

        // Initialize the application view
        new AppView();
    });
})();
