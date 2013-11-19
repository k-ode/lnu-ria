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
        },
        mocha: {
            exports: 'mocha'
        },
        chai: {
            exports: 'chai'
        }
    },
    paths: {
        jquery: '../vendor/jquery/jquery',
        underscore: '../vendor/underscore/underscore',
        backbone: '../vendor/backbone/backbone',
        backboneLocalStorage: '../vendor/backbone.localStorage.async/backbone.localStorage.async.js',
        mocha: '../vendor/mocha/mocha',
        chai: '../vendor/chai/chai'
    }
});

window.store = 'TestStore'; // override Local storage store name for testing

require([
    'jquery',
    'backbone',
    'mocha',
    'chai'
], function ($, Backbone, mocha, chai) {    
    // Chai
    this.assert = chai.assert;
    this.expect = chai.expect;

    // Mocha
    mocha.setup({ui: 'bdd', ignoreLeaks: true});

    var specs = [];
    specs.push('spec/namespace.spec');

    require(specs, function() {
        $(function() {
            mocha.run();
        });
    });
});
