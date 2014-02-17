require.config({
    baseUrl: 'static/',
    
    urlArgs: 'bust=' + Date.now(),
    
    paths: {
        when: 'assets/js/when',
        text: 'assets/js/require-text',
        jquery: 'assets/js/jquery',
        underscore: 'assets/js/underscore',
        backbone: 'assets/js/backbone',
        backboneLocalStorage: 'assets/js/backbone.localStorage.async',
        controller: 'assets/js/backbone.controller',
        mem: 'assets/js/mem'
    },

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
        controller: {
            deps: ['underscore', 'backbone']
        },
        mem: {
            deps: ['underscore']
        },
    },

    packages: [
        'screen/recipes',

        'module/recipes',
        'module/menu'
    ]

});

require(['screen/recipes'], function () {
    Backbone.history.start();
});
