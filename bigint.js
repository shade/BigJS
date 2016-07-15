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

  this.n = [];
  this.size = 0;

  // The bit size in the last chunk
  this.lB = 0;

  switch(typeof number){
    case 'string':

    break;
    case 'number':
      while(number){
        this.n.push((number & INV_AND_MASK));
        number >>= CHUNK_SIZE;
        this.size++;
      }

    break;
    case 'undefined':
      return this;
    break;
  }

  return this;
}


BI.prototype.lt = function(num){
  var tS = this.size;
  var nS = num.size;
  if(tS == nS){
    return this.n[tS - 1] < num.n[nS - 1];
  }else{
    return tS < nS;
  }
}

BI.prototype.gt = function(num){
  var tS = this.size;
  var nS = num.size;
  if(tS == nS){
    return this.n[tS - 1] > num.n[nS - 1];
  }else{
    return tS > nS;
  }
}

BI.prototype.eq = function(num){
  var tS = this.size;
  var nS = num.size;
  if(tS == nS){
    return this.n.join('') == num.n.join('');
  }else{
    return false;
  }
}


BI.prototype.add = function(num){
  var carry = 0;
  var ii = (this.lt(num)? this.size : num.size);
  for(var i = 0;i < ii;i++){
    this.n[i] += (num.n[i] + carry);
    carry = num[i] >> CHUNK_SIZE;
    this.n[i] &= AND_MASK; 
  }

  return this;
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

  this.size += chunks;

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

  this.size -= chunks;

  //We start from 0 because everything below has been shifted out
  for(var i = 0,ii = this.size - 1;i < ii;i++){
    if(i == ii){

    }
    this.n[i];
  }


  return this;
}


//Performs a bitwise OR on 2 big integers
BI.prototype.OR = function(num){

  // We only need to OR the smallest number of chunks
  var ii = (BI.lt(num)? this.size : num.size); 

  for(var i = 0;i < ii;i++){
    this.n[i] |= num.n[i];
  }

  return this;
}

//Performs a bitwise AND on 2 big integers
BI.prototype.AND = function(num){

  // We only need to OR the smallest number of chunks
  var ii = (BI.lt(num)? this.size : num.size); 

  for(var i = 0;i < ii;i++){
    this.n[i] &= num.n[i];
  }

  return this;
}

//Performs a bitwise XOR on 2 big integers
BI.prototype.XOR = function(num){

  // We only need to OR the smallest number of chunks
  var ii = (this.lt(num)? this.size : num.size); 

  for(var i = 0;i < ii;i++){
    this.n[i] ^= num.n[i];
  }

  return this;
}

BI.prototype.NOT = function() {
  //Flip all the bits
  for(var i = 0,ii = this.size-1;i <= ii;i++){
    //If we flip all the bits in the last column we get a new number
    if(i == ii){
      this.n[i] = (~this.n[i] << (CHUNK_SIZE - this.lB)) & AND_MASK;
      break;
    }

    //We only need the last bits
    this.n[i] = ~this.n[i] & INV_AND_MASK;

  }
  return this;
}

BI.prototype.digest = function(){
  //The digest string
  var dString = "";

  //Append all the chunks
  for(var i = 0;i < this.size;i++){
    var num = this.n[i].toString(2);
    dString = ("0".repeat(CHUNK_SIZE).substr(num.length) + num) + dString;
  }

  return dString;
}

//Performs a bitwise AND on 2 big integers
BI.prototype.valueOf = function(){
  
}

BI.prototype.toString = function(base){

}