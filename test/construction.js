describe('Construction And Digesting', function(){
	describe('Decimal', function(){
		describe('One Chunk', function(){

			var num = ~~(Math.random());
			it('should be the same as the first chunk', function(){
				var a = new BI(num);
				num.should.equal(a.n[0]);
			});
			it('should digest to the same', function(){
				var a = new BI(num);
				parseInt(a.digest(),2).should.equal(num);
			})

		});
		describe('Multiple Chunks', function(){
			//This is a big number
			var num = Math.pow(2,~~(Math.random()*5)+15);
			it('should digest to the same', function(){
				var a = new BI(num);
				console.log(a,num);
				parseInt(a.digest(),2).should.equal(num);
			})
		})
	})
})