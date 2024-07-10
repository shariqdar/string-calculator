const StringCalculator = require('./index.js').StringCalculator;
const expect = require('chai').expect;

describe('String Calculator', function() {
    it('1) Handle new lines between numbers', function(done){
        let c1 = new StringCalculator("1\n2,3");
        expect(c1.calculate()).to.equal(6);
        done();
    });

    it('2) Support different delimiters', function(done) {
        let c2 = new StringCalculator("//;\n1;2");
        expect(c2.calculate()).to.equal(3);
        done();
    });

    it('3) Negative Numbers', function(done) {
        let c3 = new StringCalculator("//;\n-1;-2");
        expect(c3.calculate.bind(c3, '//;\n-1;-2')).to.throw('negative numbers not allowed -1, -2');
        done();
    });
});