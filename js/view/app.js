define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    'use strict';

    var AppView = Backbone.View.extend({
        el: $('body'),

        initialize: function () {
            _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods

            this.render();
        },

        render: function () {
            $(this.el).append("<p>Hello World!</p>");
        }
    });

    return AppView;
});
