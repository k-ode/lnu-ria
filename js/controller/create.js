define(function (require) {
    'use strict';
    
    var Backbone = require('backbone'),
        createTemplate = require('text!template/create.html');

    var createController = {

        el: '.ria-app',
        
        template: _.template(createTemplate),

        initialize: function (options) {
            this.render();
        },

        render: function () {
            this.$el.html(this.template);

            return this;
        }
        
    };

    return Backbone.View.extend(createController);
}); 
