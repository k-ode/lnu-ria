define(function (require) {
   'use strict'; 

    var Backbone = require('backbone'),
        Recipe = require('model/recipe'),
        when = require('when');

    var collectionRecipes = {

        model: Recipe,

        initialize: function (options) {
            this.localStorage = options.store;
        },

        load: function () {
            var me = this;
            
            var deferred = when.defer();
            me.fetch({
                success: function () {
                    console.log("fetched!");
                    deferred.resolve(me);
                }
            });
            
            return deferred.promise;
        }
        
    };

    return Backbone.Collection.extend(collectionRecipes);
});
