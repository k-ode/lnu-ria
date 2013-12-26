define(function (require) {
    'use strict';

    var $ = require('jquery'),
        Backbone = require('backbone'),
        MenuView = require('view/menu'),
        AppController = require('controller/app'),
        CreateController = require('controller/create');

    var router = {
        appController: undefined,
        createController: undefined,
        
        routes: {
            "": "app",
            "create": "create"
        },

        initialize: function () {
            new MenuView();
        },
        
        app: function () {
            if (!appController)
                this.appController = new AppController();
            else
                this.appController.render();
        },

        create: function () {
            if (!createController)
                this.createController = new CreateController();
            else
                this.createController.render();
        }
        
    };
    
    return Backbone.Router.extend(router);
});
