define(function (require) {
    'use strict';

    var $ = require('jquery'),
        Backbone = require('backbone');
    
    return Backbone.Router.extend({
        routes: {
            "create": "create"
        },

        create: function () {
            console.log("create");
        }
    });
});
