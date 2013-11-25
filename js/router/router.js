define(function (require) {
    'use strict';

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

    var $ = require('jquery'),
        Backbone = require('backbone'),
        HomeView = require('view/home'),
        RecipiesCollection = require('collection/recipies'),

        recipesCollection = new RecipiesCollection(recipies),
        filteredCollection = new RecipiesCollection(recipies),
        homeView = new HomeView();

    var viewCreator = function (model) { return new HomeView({model: model}); };

    var elManagerFactory = new Backbone.CollectionBinder.ViewManagerFactory(viewCreator);

    var collectionBinder = new Backbone.CollectionBinder(elManagerFactory);

    collectionBinder.bind(filteredCollection, $('tbody'));

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

    return Backbone.Router.extend({
        routes: {
            "": "home"
        },

        home: function () {
            homeView.render();
        }
    });
});
