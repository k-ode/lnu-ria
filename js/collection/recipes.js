define(function (require) {
   'use strict'; 

    var Backbone = require('backbone'),
        Recipe = require('model/recipe'),
        when = require('when');

    return Backbone.Collection.extend({
        model: Recipe,

        initialize: function (options) {
            this.localStorage = options.store;
        },

        load: function () {
            var me = this;
            
            var deferred = when.defer();
            this.fetch({
                success: function () {
                    console.log("fetched!");
                    deferred.resolve(me);
                }
            });
            
            return deferred.promise;
        }
    });
});
