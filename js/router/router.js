define(function (require) {
    'use strict';

    var $ = require('jquery'),
        Backbone = require('backbone'),
        AppController = require('controller/app'),
        CreateController = require('controller/create'),
        MenuView = require('view/menu');

    new MenuView();

    return Backbone.Router.extend({
        routes: {
            "": "app",
            "create": "create"
        },

        initialize: function () {
        },
        
        app: function () {
            new AppController();
        },

        create: function () {
            new CreateController();
        }
    });
});
