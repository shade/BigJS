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
  });
});
