/*
* BI.mod - this performs a modulus on the current big int
*   @param num {BI | Number}
*   @param me
*/
BI.prototype.mod = function(num, me){
  var _this = (me ? this : new BI(this));

  if(num instanceof BI){
    _this.num = mod(_this.num,num.num);
  }else{
    _this.num = int2bigInt(modInt(_this.num,num),64);
  }

  return _this;
}
