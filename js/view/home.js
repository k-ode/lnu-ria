define(function (require) {
    'use strict';

    var $ = require('jquery'),
        Backbone = require('backbone'),
        _ = require('underscore'),
        filterService = require('service/filter');

    return Backbone.View.extend({
        el: 'table tbody',
        template: _.template($('#recipeTmpl').html()),

        initialize: function () {
            _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
        },

        render: function () {
            console.log(this.template);
            console.log(this.collection.models);
            $(this.el).append(this.template({
                recipies: this.collection.models
            }));
        }

    });
});
