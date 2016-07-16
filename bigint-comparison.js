/*
*  BI.compare <- The function used to compare to BigIntegers
*    @param {BI | Number} num - the number you want to compare with
*
*/

BI.prototype.compare = function(num){

  // Make this a BigInteger if it's not
  if(!(num instanceof BI)){
    num = new BI(num);
  }

  // If they're inherently the same
  if(this.num.toString(2) == num.toString(2)){
    return 0;
  }

  if(this.size < num.size){
    return -1;
  }
  else if(this.size > num.size){
    return 1;
  }else{
    for(var i = this.size;i--;){
      if(this.n[i] > num.n[i]){
        return 1;
      }else if(this.n[i] < num.n[i]){
        return -1;
      }else{
        return 0;
      }
    }
  }
}