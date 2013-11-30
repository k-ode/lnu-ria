define(function (require) {
    'use strict';

    var $ = require('jquery'),
        Backbone = require('backbone'),
        CollectionBinder = require('backboneCollectionBinder'),
        RecipesView = require('view/recipes'),
        RecipesItemView = require('view/recipes-item'),
        when = require('when');

    return Backbone.Router.extend({
        routes: {
            "": "app",
            "create": "create"
        },

        initialize: function (options) {
            var viewCreator = function (model) { return new RecipesItemView({ model: model }); },
                elManagerFactory = new Backbone.CollectionBinder.ViewManagerFactory(viewCreator),
                collectionBinder = new Backbone.CollectionBinder(elManagerFactory);
            
            var recipesView = new RecipesView({
                collection: options.recipes,
                collectionBinder: collectionBinder
            });
            recipesView.render();
        },
        
        app: function () {
            console.log("app route!");
        },

        create: function () {
            console.log("create route!");
        }
    });
});
