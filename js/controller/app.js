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
        _filteredCollection: undefined,
        _recipesCollection: undefined,
        _collectionBinder: undefined,

        initialize: function () {
            var self = this,
                viewCreator = function (model) { return new RecipesItemView({ model: model }); },
                elManagerFactory = new Backbone.CollectionBinder.ViewManagerFactory(viewCreator),
                collectionBinder = new Backbone.CollectionBinder(elManagerFactory);
            
            var collection = new Recipes({
                store: new Store("RIA.Recipes")
            });
            
            collection.load().then(
                function success (recipes) {
                    // Remember references and keep a copy of original 
                    // collection to filter on.
                    self._recipesCollection = recipes;
                    self._filteredColletion = recipes.clone();
                    self._collectionBinder = collectionBinder;
                    
                    self.recipesView = new RecipesView({
                        controller: self
                    });
                    self.render();
                }
            );
        },

        render: function () {
            this.recipesView.render();

            return this;
        },

        // TODO: Does this work as intended with this solution?
        close: function () {
            this._collectionBinder.unbind();
        },

        // Throttle updates to keep UI responsive
        filterBySearch: _.throttle(function (searchString) {
            this._filteredColletion.reset(this._recipesCollection.models);
            var newFilteredCollection = this._filteredColletion.filterCollection(searchString);
            this._filteredColletion.reset(newFilteredCollection);
        }, 1000)
        
    };

    return Backbone.View.extend(appController);
});
