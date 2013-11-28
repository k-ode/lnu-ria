define(function (require) {
    'use strict';

    var $ = require('jquery'),
        Backbone = require('backbone'),
        CollectionBinder = require('backboneCollectionBinder'),
        AppView = require('view/app'),
        Recipes = require('collection/recipes'),
        RecipesView = require('view/recipes'),
        when = require('when');

    // TODO: Consider refactor of loading data
    function loadRecipes() {
        var deferred = when.defer();
        var recipesCollection = new Recipes();
        recipesCollection.fetch({
            success: function () {
                console.log("fetched!");
                deferred.resolve(recipesCollection);
            }
        });

        return deferred.promise;
    }

    return Backbone.Router.extend({
        routes: {
            "": "app"
        },

        app: function () {
            loadRecipes().then(
                function success (recipesCollection) {
                    var viewCreator = function (model) { return new RecipesView({model: model}); };
                    var elManagerFactory = new Backbone.CollectionBinder.ViewManagerFactory(viewCreator);
                    var collectionBinder = new Backbone.CollectionBinder(elManagerFactory);
                    var appView = new AppView({collection: recipesCollection});
                    appView.render(collectionBinder);
                }
            );
        }
    });
});
