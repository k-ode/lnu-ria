define(function (require) {
    'use strict';

    var Backbone = require('backbone');

    return Backbone.Model.extend({
        defaults: {
            id: 1,
            name: '',
            instructions: '',
            category: ''
        }
    });
});
