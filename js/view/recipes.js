define(function (require) {
    'use strict';

    var $ = require('jquery'),
        Backbone = require('backbone'),
        _ = require('underscore'),
        recipesTemplate = require('text!template/recipes.html');

    var recipesView = {

        controller: undefined,
        
        el: '.ria-app',
        
        template: _.template(recipesTemplate),

        // Delegated events
        events: {
            'keyup #search': 'search'
        },

        // Needs at least a Backbone collection and collectionBinder.
        initialize: function (options) {
            if (_.isUndefined(options.controller))
                throw 'contoller must be defined';
            this.controller = options.controller;
        },

        render: function () {
            this.$el.html(this.template);
            
            // DOM elements
            var ctrl = this.controller;
            ctrl._collectionBinder.bind(
                ctrl._filteredColletion, this.$('tbody')
            );
            this.$search = this.$('#search');

            return this;
        },

        search: function () {    
            this.controller.filterBySearch(this.getSearchString());
        },

        getSearchString: function () {
            return this.$search.val().trim();
        }

    };

    return Backbone.View.extend(recipesView);
});
