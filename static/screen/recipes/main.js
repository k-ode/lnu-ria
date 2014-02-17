define(function(require) {
    'use strict';

    var Controller = require('controller'),
        Mem = require('mem'),
        View = require('./view'),
        $ = require('jquery'),

        // Modules used in this screen
        RecipesModule = require('module/recipes'),
        MenuModule = require('module/menu');

    var RecipesScreenController = Controller.extend({
        routes: {
            '': 'index',
            'recipes': 'index',
            'recipes/:id': 'recipeDetails'
        },

        onBeforeRoute: function () {
            this.menuModule = Mem.set('menu', MenuModule);
            this.recipesModule = Mem.set('recipes', RecipesModule);

            Mem.manage();
            
            if (this.container) return;

            // Init main module container
            this.container = new View({el: '#wrap'});
            this.container.render();

            // Init menu
            var menu = this.container.getMenuContainer();
            this.menuModule.showMenu(menu, 'recipes');

            // Init recipes
            var recipes = this.container.getRecipesContainer();
            this.recipesModule.showList(recipes);
        },

        index: function () {
            this.container.clearDetails();
        },

        recipeDetails: function (id) {
            var details = this.container.getDetailsContainer();
            this.recipesModule.showRecipes(details, id);
        },

        remove: function () {
            console.log('Recipes controller cleanup -> go to another controller');
            this.container = null;
        }
    });

    new RecipesScreenController({router: true});
});
