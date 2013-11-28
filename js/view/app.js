define(function (require) {
    'use strict';

    var $ = require('jquery'),
        Backbone = require('backbone'),
        _ = require('underscore'),
        Recipes = require('collection/recipes'),
        when = require('when');

    return Backbone.View.extend({
        _collectionBinder: undefined,
        filteredCollection: null,
        recipesCollection: null,
        
        modelCreateCount: 3,

        el: 'body',

        // Delegated events
        events: {
            'click #createModel': 'createModel',
            'click #removeModel': 'removeModel',
            'click #resetCollection': 'resetCollection',
            'keyup #search': 'search'
        },

        initialize: function () {
            _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods

            // Elements
            this.$search = this.$('#search');

            // Throttle updates to keep UI responsive
            this.filterBySearch = _.throttle(function (searchString) {
                var newFilteredCollection = this.filteredCollection.filterCollection(searchString);
                this.filteredCollection.reset(this.recipesCollection.models);
                this.filteredCollection.reset(newFilteredCollection);
            }, 1000);

            // Collection
            this.recipesCollection = this.collection;
            this.filteredCollection = new Recipes(this.collection.models);
        },

        render: function (collectionBinder) {
            this._collectionBinder = collectionBinder;
            this._collectionBinder.bind(this.filteredCollection, this.$('tbody'));
        },

        search: function () {
            var searchString = this.getSearchString();
            
            this.filterBySearch(searchString);
        },

        getSearchString: function () {
            return this.$search.val().trim();
        },

        createModel: function () {
            this.modelCreateCount++;
            var model = {
                id: this.modelCreateCount,
                name: 'recept ' + this.modelCreateCount, 
                category: 'yoyo', 
                instructions: 'instruction four'
            };
            
            this.filteredCollection.add(model);
            this.recipesCollection.create(model);
        },

        removeModel: function () {
            if(this.filteredCollection.length > 0){
                this.filteredCollection.remove(this.filteredCollection.at(this.filteredCollection.length - 1));
                this.recipesCollection.remove(this.recipesCollection.at(this.recipesCollection.length - 1));
            }
        },

        resetCollection: function () {
            this.filteredCollection.reset(this.recipesCollection.models);
        },

        close: function () {
            this._collectionBinder.unbind();
        }

    });
});
