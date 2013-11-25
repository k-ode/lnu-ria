define(function (require) {
    'use strict';

    var $ = require('jquery'),
        Backbone = require('backbone'),
        _ = require('underscore'),
        RecipesCollection = require('collection/recipes'),
        RecipesView = require('view/recipes');
    
    return Backbone.View.extend({
        _collectionBinder: undefined,

        el: 'body',

        viewCreator: function (model) { return new RecipesView({model: model}); },
        
        initialize: function () {
            _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
            var elManagerFactory = new Backbone.CollectionBinder.ViewManagerFactory(this.viewCreator);
            this._collectionBinder = new Backbone.CollectionBinder(elManagerFactory);
        },

        render: function () {            
            var recipies = [
                {
                    name: 'recept1',
                    instructions: 'instruction one',
                    category: 'soppa'
                },
                {
                    name: 'recept2',
                    instructions: 'instruction two',
                    category: 'hey'
                },
                {
                    name: 'recept3',
                    instructions: 'instruction three',
                    category: 'yo'
                }
            ];

            var recipesCollection = new RecipesCollection(recipies);
            var filteredCollection = new RecipesCollection(recipies);

            this._collectionBinder.bind(filteredCollection, this.$('tbody'));
            
            var modelCreateCount = 3;
            $('#createModel').on('click', function(){
                modelCreateCount++;
                filteredCollection.add({name: 'recept ' + modelCreateCount, category: 'yoyo', instructions: 'instruction four'});
                recipesCollection.add({name: 'recept ' + modelCreateCount, category: 'yoyo', instructions: 'instruction four'});
            });

            $('#removeModel').on('click', function(){
                if(filteredCollection.length > 0){
                    filteredCollection.remove(filteredCollection.at(filteredCollection.length - 1));
                    recipesCollection.remove(recipesCollection.at(recipesCollection.length - 1));
                }
            });

            $('#resetCollection').on('click', function(){
                filteredCollection.reset(recipesCollection.models);
            });

            $('#filter').on('keyup', function(e) {
                var filterValue = $(e.currentTarget).val();
                filteredCollection.reset(recipesCollection.models);
                filteredCollection.reset(filteredCollection.filterCollection(filterValue));
            });
            
            return this;
        },

        close: function () {
            this._collectionBinder.unbind();
        }

    });
});
