define(function (require) {
    'use strict';

    var $ = require('jquery'),
        Backbone = require('backbone'),
        _ = require('underscore'),
        recipeTemplate = require('text!template/recipe.html');
    
    return Backbone.View.extend({
        tagName: 'tr',
        template: _.template(recipeTemplate),
        _modelBinder: undefined,

        initialize: function () {
            _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
            this._modelBinder = new Backbone.ModelBinder();
        },

        close: function () {
            this._modelBinder.unbind();
            this.off();
            this.undelegateEvents();
            this.remove();
        },

        render: function () {
            this.$el.html(this.template);
            this._modelBinder.bind(
                this.model,
                this.el,
                Backbone.ModelBinder.createDefaultBindings(this.el, 'data-name')
            );
            return this;
        }

    });
});
