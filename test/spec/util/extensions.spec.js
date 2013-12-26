/*jshint expr: true*/

define(function(require) {
    'use strict';

    var Backbone = require('backbone'),
        _ = require('underscore'),
        chai = require('chai'),
        extensions = '../../../js/util/extensions',
        expect = chai.expect;
    
    describe("util.extensions", function () {
        var recipies, col;

        recipies = [
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
        col = new Backbone.Collection(recipies);

        describe("filterCollection", function () {
            it("should be defined on extensions object", function () {
                expect(extensions.filterCollection).to.exist;
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

            it(("should return all models with empty string as arg"), function () {
                expect(col.filterCollection('')).to.have.length(3);
                expect(_.filterCollection(col, '')).to.have.length(3);
            });
        });
    });
});
