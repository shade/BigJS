describe("Prime", function(){
  describe("Probable", function(){
    it("Should have the same number of bits", function(){
      BI.prime(512,true).toString(2).should.have.length(1024);
    });
  });
  describe("True", function(){
    it("Should have the same number of bits", function(){
      BI.prime(512).toString(2).should.have.length(1024);
    });
  });
  describe("Miller Rabin", function(){

  });
});
