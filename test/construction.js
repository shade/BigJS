describe('Construction And Digesting', function(){
	describe("Decimal",function(){
		it("Should have the same value as the first one",function(){
			var number = ~~(Math.random() * 100000);
			var big = new BI(number);
			((big) * 1).should.equal(number);
		});
	})
})
