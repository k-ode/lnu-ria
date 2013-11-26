define(function (require) {
    'use strict';

    var $ = require('jquery'),
        Backbone = require('backbone'),
        AppView = require('view/app'),
        Recipes = require('collection/recipes'),
        when = require('when'),
        appView = new AppView();

    // TODO: Consider refactor of loading data
    function loadRecipes() {
        var deferred = when.defer();
        appView.recipesCollection = new Recipes();
        appView.recipesCollection.fetch({
            success: function () {
                console.log("fetched!");
                deferred.resolve();
            }
        });

        return deferred.promise;
    }

    // Load categories here etc.
    
    function loadData() {
        var deferreds = [];
        
        deferreds.push(loadRecipes());

        return when.all(deferreds);
    }

    return Backbone.Router.extend({
        routes: {
            "": "app"
        },

        app: function () {
            loadData().then(
                function success () {
                    console.log("got data!");
                    appView.render();
                }
            );
        }
    });
});
