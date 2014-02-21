/*jshint expr: true*/

describe('Extensions test', function () {
    beforeEach(function (done) {
        var self = this;
        require([
            'underscore',
            'module/recipes/collection',
            'util/extensions'
        ], function (_, Collection, extensions) {
            self._ = _;

            self.Collection = Collection;
            self.extensions = extensions;

            var recipes = [
                {
                    id: 1,
                    name: 'recept1',
                    instructions: 'instructionone',
                    category: 'soppa'
                },
                {
                    id: 2,
                    name: 'recept2',
                    instructions: 'instruction_two',
                    category: 'hey'
                },
                {
                    id: 3,
                    name: 'recept3',
                    instructions: 'instruction three',
                    category: 'yo'
                }
            ];
            self.collectionIns = new Backbone.Collection(recipes); 

            done();
        });
    });

    it("should be defined on underscore and Collection objects", function () {
        expect(this.extensions.filterCollection).to.be.a('function');
        expect(this._.filterCollection).to.be.a('function');
        expect(this.collectionIns.filterCollection).to.be.a('function');
    });
    
    it("should filter collection", function () {      
        expect(this.collectionIns.filterCollection('yo')).to.have.length(1);
        expect(this.collectionIns.filterCollection('yo')[0].get('name')).to.have.string('recept3');
    });

    it(("should return all models with empty string as arg"), function () {
        expect(this.collectionIns.filterCollection('')).to.have.length(3);
    });  
});
