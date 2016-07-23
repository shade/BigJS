describe('Construction And Digesting', function(){
	describe("Digesting", function(){
		describe("valueOf",function(){
			it("Should have the same value as the first one",function(){
				var number = ~~(Math.random() * 100000);
				var big = new BI(number);
				((big) * 1).should.equal(number);
			});
		});
		describe("toString",function(){
			it("Should have the same value as the native version", function(){
					var number = ~~(Math.random() * 100000);
					var big = new BI(number);
					big.toString(16).toUpperCase().should.equal(number.toString(16).toUpperCase());
			});
		});
	});
});
