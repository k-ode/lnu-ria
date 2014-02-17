define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Model = require('./model'),
        Store = require('backboneLocalStorage');

    return Backbone.Collection.extend({
        model: Model,
        localStorage: new Store("RIA.Recipes")
    })
})
