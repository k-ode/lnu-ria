define(function (require) {
    'use strict';

    var $ = require('jquery'),
        Backbone = require('backbone'),
        MenuView = require('view/menu'),
        AppController = require('controller/app'),
        CreateController = require('controller/create');

    var router = {
        
        routes: {
            "": "app",
            "create": "create"
        },

        initialize: function () {
            new MenuView();
        },
        
        app: function () {
            new AppController();
        },

        create: function () {
            new CreateController();
        }
        
    };

    return Backbone.Router.extend(router);
});
