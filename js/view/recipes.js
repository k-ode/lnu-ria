define(function (require) {
    'use strict';

    var $ = require('jquery'),
        Backbone = require('backbone'),
        _ = require('underscore'),
        recipesTemplate = require('text!recipesTemplate');

    var recipesView = {

        controller: undefined,
        
        el: '.ria-app',

        // Delegated events
        events: {
            'keyup #search': 'search'
        },

        initialize: function (options) {
            if (_.isUndefined(options.controller))
                throw 'controller must be defined';
            this.controller = options.controller;
            this.template = options.template || _.template(recipesTemplate);
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
