describe("Prime", function(){
  describe("Probable", function(){
    it("Should have the same number of bits", function(){
      var bits = ~~(Math.random() * 1024);
      BI.prime(bits, true).toString(2).should.have.property('length').approximately(bits,10);
    });
  });
  describe("True", function(){
    it("Should have the same number of bits", function(){
      var bits = ~~(Math.random() * 1024);
      BI.prime(bits).toString(2).should.have.property('length').approximately(bits,10);
    });
  });
  describe("Miller Rabin", function(){

  });
});
