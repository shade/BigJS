describe("Arithmetic", function(){
	describe("Addition", function(){
		describe("One Chunk", function(){
			it("should be equals", function(){
				var n1 = Math.pow(2,~~(Math.random()*5)+3) - 1,
					n2 = Math.pow(2,~~(Math.random()*5)+3) - 1;

				var b1 = new BI(n1),
					b2 = new BI(n2);

				(n1+n2).should.equal(parseInt(b1.add(b2).digest(),2));
			});
		})
		describe("Multiple Chunks", function(){
			it("should be 4", function(){
				var n1 = Math.pow(2,~~(Math.random()*5)+20) - 1,
					n2 = Math.pow(2,~~(Math.random()*5)+20) - 1;

				var b1 = new BI(n1),
					b2 = new BI(n2);

				(n1+n2).should.equal(parseInt(b1.add(b2).digest(),2));

			});
		})
	})
	describe("Subtraction", function(){
		describe("One Chunk", function(){
			it("should be equals", function(){
				var n1 = Math.pow(2,~~(Math.random()*5)+3) - 1,
					n2 = Math.pow(2,~~(Math.random()*5)+3) - 1;

				var b1 = new BI(n1),
					b2 = new BI(n2);

				(n1-n2).should.equal(parseInt(b1.subtract(b2).digest(),2));
			});
		})
		describe("Multiple Chunks", function(){
			it("should be 4", function(){
				var n1 = Math.pow(2,~~(Math.random()*5)+20) - 1,
					n2 = Math.pow(2,~~(Math.random()*5)+20) - 1;

				var b1 = new BI(n1),
					b2 = new BI(n2);

				(n1-n2).should.equal(parseInt(b1.subtract(b2).digest(),2));

			});
		})
	})
})