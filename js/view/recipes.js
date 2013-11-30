define(function (require) {
    'use strict';

    var $ = require('jquery'),
        Backbone = require('backbone'),
        _ = require('underscore');

    return Backbone.View.extend({
        _collectionBinder: undefined,
        _filteredCollection: undefined,
        _recipesCollection: undefined,

        modelCreateCount: 3,

        el: 'body',

        // Delegated events
        events: {
            'click #createModel': 'createModel',
            'click #removeModel': 'removeModel',
            'click #resetCollection': 'resetCollection',
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

        createModel: function () {
            this.modelCreateCount++;
            var model = {
                id: this.modelCreateCount,
                name: 'recept ' + this.modelCreateCount, 
                category: 'yoyo', 
                instructions: 'instruction four'
            };
            
            this._filteredColletion.add(model);
            this._recipesCollection.create(model);
        },

        removeModel: function () {
            if(this._filteredColletion.length > 0){
                this._filteredColletion.remove(this._filteredColletion.at(this._filteredColletion.length - 1));
                this._recipesCollection.remove(this._recipesCollection.at(this._recipesCollection.length - 1));
            }
        },

        resetCollection: function () {
            this._filteredColletion.reset(this._recipesCollection.models);
        },

        close: function () {
            this._collectionBinder.unbind();
        }

    });
});
