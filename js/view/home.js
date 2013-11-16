define(function ($, _, Backbone) {
    'use strict';

    var $ = require('jquery'),
        Backbone = require('backbone'),
        _ = require('underscore');

    return Backbone.View.extend({
        el: $('body'),

        initialize: function () {
            _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
        },

        render: function () {
            $(this.el).append("<p>Hello World!</p>");
        }
    });
});
