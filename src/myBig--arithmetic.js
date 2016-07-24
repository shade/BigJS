/*
* BI.mod - this performs a modulus on the current big int
*   @param num {BI | Number}
*   @param me {Boolean}
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


/*
* BI.pow - this performs an exponentiation using the current number as a base
* this^num % mod
*   @param num {BI | Number}
*   @param mod {BI | Number}
*   @param me {Boolean}
*/
BI.prototype.modpow = function(num, mod, me){
  var _this = (me ? this : new BI(this));

  //There are no integer functions, so this must be converted
  num = (num instanceof BI ? num : new BI(num));
  mod = (mod instanceof BI ? mod : new BI(mod));

  _this.num = powMod(_this.num, num.num, mod.num);
  
  return _this;
}