define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            "*actions": "defaultRoute"
        }
    });

    return AppRouter;
});
