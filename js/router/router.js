define(function (require) {
    'use strict';

    var $ = require('jquery'),
        Backbone = require('backbone'),
        AppView = require('view/app'),
        appView = new AppView();

    return Backbone.Router.extend({
        routes: {
            "": "app"
        },

        app: function () {
            appView.render();
        }
    });
});
