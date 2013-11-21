define(function (require) {
    'use strict';

    var recipies = [
        {
            id: 1,
            name: 'recept1',
            instructions: 'instruction one',
            category: 'soppa'
        },
        {
            id: 2,
            name: 'recept2',
            instructions: 'instruction two',
            category: 'hey'
        },
        {
            id: 3,
            name: 'recept3',
            instructions: 'instruction three',
            category: 'yo'
        }
    ];

    var $ = require('jquery'),
        Backbone = require('backbone'),
        HomeView = require('view/home'),
        RecipiesCollection = require('collection/recipies'),

        recipiesCollection = new RecipiesCollection(recipies),
        homeView = new HomeView({
            collection: recipiesCollection
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
