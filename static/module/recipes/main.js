define(function (require) {
    'use strict';

    var Controller = require('controller'),
        RecipesView = require('./recipes-view'),
        RecipeView = require('./recipe-view'),
        Collection = require('./collection'),
        Model = require('./model'),
        _ = require('underscore');

    // Controller provides Public API for recipes module
    return Controller.extend({
        initialize: function () {
            console.log('init recipes');
        },

        showList: function (container) {
            this.collection = new Collection();
            this.collectionView = new RecipesView({
                el: container,
                collection: this.collection
            });
            this.collection.fetch({
                success: _.bind(function () {
                    this.collectionView.render();
                }, this)
            });
            // Add to collection manually
            // this.collection.create({
            //     "id": 0,
            //     "name": "test1",
            //     "description": "durrr"
            // });
            // this.collection.create({
            //     "id": 1,
            //     "name": "test2",
            //     "description": "hgahad"
            // });
            //this.collectionView.render();
        },

        showRecipe: function (container, id) {
            this.model = new Model({id: id});
            this.recipeView = new RecipeView({
                el: container,
                model: this.model,
                isDetails: true
            });
            this.model.fetch({
                success: _.bind(function () {
                    this.recipeView.render();
                }, this)
            });
        },

        remove: function () {
            console.log('remove recipes');
        }
    });
});
