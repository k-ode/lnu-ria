/*jshint expr: true*/

describe("util.extensions", function () {
    var me = this,
        recipies, col;

    require([
        'underscore',
        'backbone',
        'util.extensions'
    ], function(_, Backbone, extensions) {
        me.extensions = extensions;
    });

    recipies = [
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
    col = new Backbone.Collection(recipies);

    describe("filterCollection", function () {
        it("should be defined on extensions object", function () {
            expect(me.extensions.filterCollection).to.exist;
        });
        
        it("should be defined on underscore and Collection objects", function () {
            expect(_.filterCollection).to.exist;
            expect(col.filterCollection).to.exist;
        });
        
        it("should filter collection", function () {
            expect(_.filterCollection(col, 'yo')).to.have.length(1);
            expect(_.filterCollection(col, 'yo')[0].get('name')).to.have.string('recept3');
            
            expect(col.filterCollection('yo')).to.have.length(1);
            expect(col.filterCollection('yo')[0].get('name')).to.have.string('recept3');
        });
    });
});
