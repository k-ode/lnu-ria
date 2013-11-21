define(function (requre) {

    var _ = require('underscore');
    
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
    };
    
    return {
        filterCollection: filterCollection
    }
});
