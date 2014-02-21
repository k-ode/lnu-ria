describe('Basic dependency test', function () {
    
    beforeEach(function (done) {
        var self = this;
        require(['module/menu'], function (MenuModule) {
            self.MenuModule = MenuModule;
            done();
        });
    });

    it('should load menu dep', function () {
        expect(this.MenuModule).to.be.a('function');
        var menuIns = new this.MenuModule();
        expect(menuIns).to.be.instanceof(this.MenuModule);
    });
});
