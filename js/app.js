define(function (require) {
    var Recipes = require('collection/recipes'),
        Store = require('backboneLocalStorage'),
        Router = require('router/router');
    
    return {
        run: function () {
            var collection = new Recipes({
                store: new Store("RIA.Recipes"),
            });
            
            collection.load().then(
                function success (recipes) {
                    var router = new Router({
                        recipes: recipes
                    });
                    Backbone.history.start();
                }
            );
        }
    };
});
