define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        menuTemplate = require('text!template/menu.html');

    return Backbone.View.extend({

        el: '.main-menu',
        
        template: _.template(menuTemplate),

        events: {
            'click a': 'highlightMenuItem'
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template);
            $('a[href="/' + window.location.hash + '"]').addClass('active');
        },

        highlightMenuItem: function (ev) {
            $('.active').removeClass('active');
            $(ev.currentTarget).addClass('active');
        }
    });
});
