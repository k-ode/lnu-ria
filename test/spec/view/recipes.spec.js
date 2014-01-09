/*jshint expr: true*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        $ = require('jquery'),
        _ = require('underscore'),
        chai = require('chai'),
        sinon = require('sinon'),
        RecipesView = require('../../../js/view/recipes'),
        expect = chai.expect;

    describe("view.recipes", function () {
        
        describe("the initialize function", function () {
            var recipesTemplate = require('text!recipesTemplate'),
                initialize = RecipesView.prototype.initialize,
                context = {
                    render: sinon.stub().returns(context),
                    search: sinon.stub().returns(context),
                    getSearchString: sinon.stub().returns('searching')
                };

            // Should load template?
            // Read up on some stuff

            initialize.call(context, { 
                controller: null,
                template: recipesTemplate
            });

            it("should set controller", function () {
                
            });

            it("should throw error if no controller is supplied", function () {
                
            });

            it("should set template", function () {
                
            });
        });
    });
});
