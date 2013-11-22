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
        chai: '../vendor/chai/chai',

        // app files
        'util.extensions': '../../js/util/extensions'
    }
});

window.store = 'TestStore'; // override Local storage store name for testing

require([
    'jquery',
    'underscore',
    'backbone',
    'mocha',
    'chai'
], function ($, _, Backbone, mocha, chai) {    
    
    // Chai
    this.assert = chai.assert;
    this.expect = chai.expect;

    // Mocha
    mocha.setup({ui: 'bdd', ignoreLeaks: true});

    // Make sure app files are loaded
    var app = [];
    app.push('util.extensions');

    // Run test files
    var specs = [];
    specs.push('spec/namespace.spec');
    specs.push('spec/util/extensions.spec');

    require(app.concat(specs), function() {
        $(function() {
            mocha.run();
        });
    });
});
