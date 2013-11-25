define(function (require) {
    'use strict';

    var $ = require('jquery'),
        Backbone = require('backbone'),
        _ = require('underscore'),
        recipesTemplate = require('text!template/recipes.html');
    
    return Backbone.View.extend({
        el: 'table tbody',
        template: _.template(recipesTemplate),

        initialize: function () {
            _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
        },

        render: function () {
            $(this.el).append(this.template({
                recipies: this.collection.models
            }));
        }

    });
});
