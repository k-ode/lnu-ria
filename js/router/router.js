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
        homeView = new HomeView();

    var viewCreator = function (model) { return new HomeView({model: model}); };

    var elManagerFactory = new Backbone.CollectionBinder.ViewManagerFactory(viewCreator);

    var collectionBinder = new Backbone.CollectionBinder(elManagerFactory);

    collectionBinder.bind(recipesCollection, $('tbody'));

    return Backbone.Router.extend({
        routes: {
            "": "home"
        },

        home: function () {
            homeView.render();
        }
    });
});
