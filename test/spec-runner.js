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
        jquery: '../bower_components/jquery/jquery',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        backboneLocalStorage: '../js/lib/backbone.localStorage.async/backbone.localStorage.async.js',
        mocha: '../bower_components/mocha/mocha',
        chai: '../bower_components/chai/chai'
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
