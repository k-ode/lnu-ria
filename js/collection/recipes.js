define(function (require) {
   'use strict'; 

    var Backbone = require('backbone'),
        Store = require('backboneLocalStorage'),
        Recipe = require('model/recipe');

    return Backbone.Collection.extend({
        model: Recipe,
        localStorage: new Store("RIA.Recipes")
    });
});
