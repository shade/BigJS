/*
* Joseph's Super Fast Big Int Library
* Each array element is 50bits long
* If the number is over 1125899906842624 make a new element
*
*
*/

//This is the number of bits in a chunk
var CHUNK_SIZE = 8;
//We want the and mask to look like 11110000
var AND_MASK = (Math.pow(2,CHUNK_SIZE) - 1) << CHUNK_SIZE;
var INV_AND_MASK = ~AND_MASK;

function BI(number,base){
  base = base || 10;

  this.n = [1];
  this.size = 1;

  // The bit size in the last chunk
  this.lB = 0;

  switch(typeof number){
    case 'string':

    break;
    case 'number':

    break;
    case 'undefined':
      return this;
    break;
  }

  return this;
}



BI.prototype.add = function(num){
  var carry = 0;

}

BI.prototype.ls = function(k){
  var c = new BI();

  // The number of new chunks needed to be added
  var chunks = ~~(k / CHUNK_SIZE);
  // The remaining shift length needed to be done
  var rem = (k - (chunks * CHUNK_SIZE));
  // Shift in the chunks
  for(var i = 0;i < chunks;i++){
    this.n.unshift(0);
  }

  var carry = 0, nCarry = 0;
  //Shift in everything else

  for(var i = chunks,ii = this.size - 1;i <= ii;i++){

    // Shift in the remainder
    this.n[i] <<= rem;
    // Add the carry
    this.n[i] |= carry;

    if(i == ii){
      if((this.lB + rem) > CHUNK_SIZE){
        this.lB = (this.lB + rem) - CHUNK_SIZE;
        this.n.push(0);
        this.n[i + 1] = (this.n[i] & AND_MASK) >> CHUNK_SIZE;
      }else{
        this.lB += rem;
      }
      break;
    }

    //And out the overflow bits, and shift them into the normal place
    carry = (this.n[i] & AND_MASK) >> CHUNK_SIZE;
  }

  return this;
}

BI.prototype.rs = function(k){

  // Calculate the number of chunks to disappear
  var chunks = ~~(k / CHUNK_SIZE);
  // Remaining shift size
  var rem = (k - (chunks * CHUNK_SIZE));
  //Shift out the chunks
  for(var i = 0;i < chunks;i++){
    this.n.shift();
  }

  //We start from 0 because everything below has been shifted out
  for(var i = 0,ii = this.size;i <ii;i++){
    if(i == ii){

    }
    this.n[i];
  }


  return this;
}


//Performs a bitwise OR on 2 big integers
BI.prototype.OR = function(num){

  if(BI.lt(num)){
    
  }

  return this;
}

BI.prototype.valueOf = function(){
  
}

BI.prototype.toString = function(base){

}