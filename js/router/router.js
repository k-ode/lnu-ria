define(function (require) {
    'use strict';

    var $ = require('jquery'),
        Backbone = require('backbone'),
        HomeView = require('view/home'),

        homeView = new HomeView();

    return Backbone.Router.extend({
        routes: {
            "": "home"
        },

        home: function () {
            homeView.render();
        }
    });
});
