define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        template = require('text!./templates/recipe.html'),
        detailsTemplate = require('text!./templates/recipe-details.html'),
        _ = require('underscore');

    return Backbone.View.extend({
        className: 'row book-item',

        initialize: function (options) {
            options = options || {};
            if (options.isDetails) {
                this.template = _.template(detailsTemplate);
            } else {
                this.template = _.template(template);
            }
        },

        render: function () {
            this.$el.html(this.template({model: this.model.toJSON()}));

            return this;
        }
    });
});
