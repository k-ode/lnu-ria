define(function (require) {
    'use strict';
    
    var _ = require('underscore'),
        Backbone = require('backbone'),
        extensions,
        names;
    
    function filterCollection (collection, filterValue) {
        if (filterValue === '') {
            return collection.toJSON();
        }

        return collection.filter(function (data) {
            return _.some(_.values(data.toJSON()), function (value) {
                value = !isNan(value) ? value.toString() : value;
                return _.contains(value, filterValue);
            });
        });
    }

    extensions = {
        filterCollection: filterCollection
    };

    names = ['filterCollection'];
    
    // Extend underscore with custom functions
    _.mixin(extensions);

    // Extend Backbone proxy
    _.each(names, function (method) {
        Backbone.Collection.prototype[method] = function () {
            var args = Array.prototype.slice.call(arguments);
            args.unshift(this.models);
            return _[method].apply(_, args);
        };
    });
    
    return extensions;
});
