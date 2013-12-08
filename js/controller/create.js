define(function (require) {
    var Backbone = require('backbone'),
        createTemplate = require('text!template/create.html');

    return Backbone.View.extend({

        el: '#riaApp',
        
        template: _.template(createTemplate),

        initialize: function (options) {
            this.render();
        },

        render: function () {
            this.$el.html(this.template);

            return this;
        }
    });
}); 
