define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        when = require('when'),
        CollectionBinder = require('backboneCollectionBinder'),
        RecipesView = require('view/recipes'),
        RecipesItemView = require('view/recipes-item'),
        Recipes = require('collection/recipes'),
        Store = require('backboneLocalStorage');

    var appController = {
        
        recipesView: undefined,

        initialize: function (options) {
            var self = this,
                viewCreator = function (model) { return new RecipesItemView({ model: model }); },
                elManagerFactory = new Backbone.CollectionBinder.ViewManagerFactory(viewCreator),
                collectionBinder = new Backbone.CollectionBinder(elManagerFactory);
            
            var collection = new Recipes({
                store: new Store("RIA.Recipes")
            });
            
            collection.load().then(
                function success (recipes) {
                    self.recipesView = new RecipesView({
                        collection: recipes,
                        collectionBinder: collectionBinder
                    });
                    self.render();
                }
            );
        },

        render: function () {
            this.recipesView.render();

            return this;
        }
        
    };

    return Backbone.View.extend(appController);
});
