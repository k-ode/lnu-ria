define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        template = require('text!./templates/recipes.html'),
        RecipeView = require('./recipe-view'),
        $ = require('jquery'),
        _ = require('underscore');

    return Backbone.View.extend({
        template: _.template(template),

        initialize: function (options) {
        },

        render: function () {
            this.$el.html(this.template());

            // Create fragment before inserting into DOM
            // to avoid page reflows.
            var docfrag = document.createDocumentFragment();
            this.collection.each(function (model) {
                var recipeView = new RecipeView({model: model});
                docfrag.appendChild(recipeView.render().$el[0]);
            });

            this.$('.recipes-collection-view').html(docfrag);

            return this;
        }
    });
});
