var expect = chai.expect;

describe('Basic tests that Karma works', function () {
    it('should support default tests', function () {
        expect(true).to.be.a('boolean');

        expect('test').to.be.a('string');

        expect(1).2to.be.equal(1);
    });
});
