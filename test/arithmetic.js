describe("Arithmetic", function(){
  describe("Small Numbers", function(){
    describe("Addition", function(){
      it("Should work with a big int", function(){
        var a = new BI(10);
        var b = new BI(2);
        (a.add(b) * 1).should.equal(12);
      });
      it("Should work with a number", function(){
        var a = new BI(10);
        (a.add(2) * 1).should.equal(12);
      });
      it("Should return a new big int", function(){
        var a = new BI(12);
        var b = a.add(24);
        (a * 1).should.equal(12);
      });
      it("Should only change the original big int", function(){
        var a = new BI(12);
        a.add(24, true);
        (a * 1).should.equal(36);
      });
    });
    describe("Subtraction", function(){
      it("Should work with a big int", function(){
        var a = new BI(10);
        var b = new BI(2);
        (a.subtract(b) * 1).should.equal(8);
      });
      it("Should work with a number", function(){
        var a = new BI(10);
        (a.subtract(2) * 1).should.equal(8);
      });
      it("Should return a new big int", function(){
        var a = new BI(12);
        var b = a.subtract(2);
        (a * 1).should.equal(12);
      });
      it("Should only change the original big int", function(){
        var a = new BI(12);
        a.subtract(1, true);
        (a * 1).should.equal(11);
      });
    });
    describe("Multiplication", function(){
      it("Should work with a big int", function(){
        var a = new BI(10);
        var b = new BI(2);
        (a.times(b) * 1).should.equal(20);
      });
      it("Should work with a number", function(){
        var a = new BI(10);
        (a.times(2) * 1).should.equal(20);
      });
      it("Should return a new big int", function(){
        var a = new BI(12);
        var b = a.times(2);
        (a * 1).should.equal(12);
      });
      it("Should only change the original big int", function(){
        var a = new BI(12);
        a.times(10, true);
        (a * 1).should.equal(120);
      });
    });
  });
  describe("Small Numbers", function(){
    describe("Addition", function(){
      it("Should work with a big int", function(){
        var a = new BI(10);
        var b = new BI(2);
        (a.add(b) * 1).should.equal(12);
      });
      it("Should work with a number", function(){
        var a = new BI(10);
        (a.add(2) * 1).should.equal(12);
      });
      it("Should return a new big int", function(){
        var a = new BI(12);
        var b = a.add(24);
        (a * 1).should.equal(12);
      });
      it("Should only change the original big int", function(){
        var a = new BI(12);
        a.add(24, true);
        (a * 1).should.equal(36);
      });
    });
    describe("Subtraction", function(){
      it("Should work with a big int", function(){
        var a = new BI(10);
        var b = new BI(2);
        (a.subtract(b) * 1).should.equal(8);
      });
      it("Should work with a number", function(){
        var a = new BI(10);
        (a.subtract(2) * 1).should.equal(8);
      });
      it("Should return a new big int", function(){
        var a = new BI(12);
        var b = a.subtract(2);
        (a * 1).should.equal(12);
      });
      it("Should only change the original big int", function(){
        var a = new BI(12);
        a.subtract(1, true);
        (a * 1).should.equal(11);
      });
    });
    describe("Multiplication", function(){
      it("Should work with a big int", function(){
        var a = new BI(10);
        var b = new BI(2);
        (a.times(b) * 1).should.equal(20);
      });
      it("Should work with a number", function(){
        var a = new BI(10);
        (a.times(2) * 1).should.equal(20);
      });
      it("Should return a new big int", function(){
        var a = new BI(12);
        var b = a.times(2);
        (a * 1).should.equal(12);
      });
      it("Should only change the original big int", function(){
        var a = new BI(12);
        a.times(10, true);
        (a * 1).should.equal(120);
      });
    });
  });
});


describe("Crypto Arithmetic", function(){
  describe("Small Numbers", function(){
    describe("Modulus", function(){
      it("Should work with a big int", function(){
        var a = new BI(10);
        var b = new BI(2);
        (a.mod(b) * 1).should.equal(10 % 2);
      });
      it("Should work with a number", function(){
        var a = new BI(10);
        (a.mod(2) * 1).should.equal(10 % 2);
      });
      it("Should return a new big int", function(){
        var a = new BI(12);
        var b = a.mod(2);
        (a * 1).should.equal(12);
      });
      it("Should only change the original big int", function(){
        var a = new BI(12);
        a.mod(10, true);
        (a * 1).should.equal(12 % 10);
      });
    });
  });

});
