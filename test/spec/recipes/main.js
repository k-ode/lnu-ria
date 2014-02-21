/*jshint expr: true*/

describe('Recipes dependency test', function () {
    
    beforeEach(function (done) {
        var self = this;
        require([
            'jquery',
            'module/recipes',
            'module/recipes/collection',
            'module/recipes/recipes-view',
            'controller'
        ], function ($, RecipesModule, Collection, RecipesView, Controller) {
            self.$ = $;

            self.RecipesModule = RecipesModule;
            self.RecipesView = RecipesView;
            self.Controller = Controller;
            self.Collection = Collection;

            self.recipesIns = new RecipesModule();
            done();
        });
    });

    it('should load recipes module', function () {
        expect(this.RecipesModule).to.be.a('function');
        expect(this.recipesIns).to.be.an.instanceof(this.Controller);
    });

    it('should have showList public API', function () {
        expect(this.recipesIns).to.be.a('object');

        expect(this.recipesIns.showList).to.be.a('function');
    });

    it('should fetch collection each time', function () {
        expect(this.Collection).to.be.a('function');
        sinon.spy(this.Collection.prototype, 'fetch');

        expect(this.Collection.prototype.fetch.callCount).to.be.equal(0);

        var container = this.$('<div />');
        this.recipesIns.showList(container);

        expect(this.Collection.prototype.fetch.callCount).to.be.equal(1);

        expect(this.recipesIns.collection).to.be.an.instanceof(this.Collection);

        this.Collection.prototype.fetch.restore();
    });

    it('should create collection view', function () {
        expect(this.RecipesView).to.be.a('function');
        sinon.spy(this.RecipesView.prototype, 'render');

        expect(this.RecipesView.prototype.render.callCount).to.be.equal(0);

        var container = this.$('<div />');
        this.recipesIns.showList(container);

        expect(this.recipesIns.collectionView).to.be.an.instanceof(this.RecipesView);
        
        expect(this.recipesIns.collectionView.$el).to.be.equal(container);
        
        expect(this.recipesIns.collectionView.collection).to.be.instanceof(
            this.Collection
        );
        
        this.RecipesView.prototype.render.restore();
    });

    // it('should fetch data and render view', function() {
    //     sinon.spy(this.BooksView.prototype, 'render');
    //     var server = sinon.fakeServer.create();
    //     server.respondWith('recipes/',
    //                        '[{"id": 1, "name": "Recipe 1, "description": "Desc 1"},'+
    //                        '{"id": 2, "name": "Recipe 2", "description": "Desc 2"}]');

    //     var container = this.$('<div />');
    //     expect(this.BooksView.prototype.render.callCount).to.be.equal(0);
    //     this.booksIns.showList(container);
        
    //     expect(this.BooksView.prototype.render.callCount).to.be.equal(0);

    //     server.respond();

    //     expect(this.BooksView.prototype.render.callCount).to.be.equal(1);
    //     expect(this.booksIns.collection.length).to.be.equal(2);

    //     server.restore();
    //     this.BooksView.prototype.render.restore();
    // });
});
