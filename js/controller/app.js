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
        Store = require('backboneLocalStorage'),
        appTemplate = require('text!template/app.html');

    return Backbone.View.extend({

        el: '.ria-app',
        
        template: _.template(appTemplate),

        initialize: function (options) {
            var self = this;
            
            var viewCreator = function (model) { return new RecipesItemView({ model: model }); },
                elManagerFactory = new Backbone.CollectionBinder.ViewManagerFactory(viewCreator),
                collectionBinder = new Backbone.CollectionBinder(elManagerFactory);
            
            var collection = new Recipes({
                store: new Store("RIA.Recipes")
            });
            
            collection.load().then(
                function success (recipes) {
                    var recipesView = new RecipesView({
                        collection: recipes,
                        collectionBinder: collectionBinder
                    });
                    self.render();
                    recipesView.render();
                }
            );
        },

        render: function () {
            this.$el.html(this.template);

            return this;
        }
    });
        
});
