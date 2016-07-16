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
      }
    }
  }

  return 0;
}


/*
*  BI.lessThan <- The function used to compare if num this is less than num
*    @param {BI | Number} num - the number you want to compare with
*
*/

BI.prototype.lessThan = function(num){

  // Make this a BigInteger if it's not
  if(!(num instanceof BI)){
    num = new BI(num);
  }

  var bS = this.size,nS = num.size;

  if(bS != nS){
    return bS < nS;
  }

  for(var i = bS;i--;){
    if(this.n[i] < num.s[i]){
      return true;
    }
  }

  return false;
}


/*
*  BI.greaterThan <- The function used to compare if num this is greater than num
*    @param {BI | Number} num - the number you want to compare with
*
*/

BI.prototype.greaterThan = function(num){

  // Make this a BigInteger if it's not
  if(!(num instanceof BI)){
    num = new BI(num);
  }

  var bS = this.size,nS = num.size;

  if(bS != nS){
    return bS > nS;
  }

  for(var i = bS;i--;){
    if(this.n[i] > num.s[i]){
      return true;
    }
  }

  return false;
}


/*
*  BI.equals <- The function used to compare if num this is equal to num
*    @param {BI | Number} num - the number you want to compare with
*
*/

BI.prototype.equals = function(num){

  // Make this a BigInteger if it's not
  if(!(num instanceof BI)){
    num = new BI(num);
  }

  var bS = this.size,nS = num.size;

  if(bS != nS){
    return false;
  }

  for(var i = bS;i--;){
    if(this.n[i] != num.s[i]){
      return false;
    }
  }

  return true;
}