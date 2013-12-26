define(function (require) {
    'use strict';

    var $ = require('jquery'),
        Backbone = require('backbone'),
        _ = require('underscore'),
        recipesTemplate = require('text!template/recipes.html');

    var recipesView = {

        _collectionBinder: undefined,
        _filteredCollection: undefined,
        _recipesCollection: undefined,

        el: '.ria-app',
        
        template: _.template(recipesTemplate),

        // Delegated events
        events: {
            'keyup #search': 'search'
        },

        // Needs at least a Backbone collection and collectionBinder.
        initialize: function (options) {
            _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods

            if (_.isUndefined(options.collectionBinder)) 
                throw 'collectionBinder must be defined';
            if (_.isUndefined(options.collection))
                throw 'collection must be defined';

            var collectionBinder = options.collectionBinder,
                collection = options.collection;
               
            // DOM elements
            this.$search = this.$('#search');

            // Keep a copy of original collection to filter on
            this._recipesCollection = collection;
            this._filteredColletion = collection.clone();

            // Collection binder
            this._collectionBinder = collectionBinder;
        },

        render: function () {
            this._collectionBinder.bind(this._filteredColletion, this.$('tbody'));
            
            return this;
        },

        search: function () {
            var searchString = this.getSearchString();
            
            this.filterBySearch(searchString);
        },

        getSearchString: function () {
            return this.$search.val().trim();
        },

        // Throttle updates to keep UI responsive
        filterBySearch: _.throttle(function (searchString) {
            this._filteredColletion.reset(this._recipesCollection.models);
            var newFilteredCollection = this._filteredColletion.filterCollection(searchString);
            this._filteredColletion.reset(newFilteredCollection);
        }, 1000),

        close: function () {
            this._collectionBinder.unbind();
        }

    };

    return Backbone.View.extend(recipesView);
});
