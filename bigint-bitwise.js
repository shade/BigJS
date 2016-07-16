/*
*  BI.OR <- do a bitwise OR on the biginteger
*    @param num {BI | Number} - number to OR this with
*    @param me {Boolen} - do this on yourself, or a new BI
*
*/

BI.prototype.OR = function(num, me){

  // If me is set, do the operation on the current Big Integer, else make a new one
  var _bi = me ? this : new BigInt(this);

  // Make this a BigInteger if it's not
  if(!(num instanceof BI)){
    num = new BI(num);
  }

  var bS = _bi.size,nS = num.size;

  //Get the smallest array size
  var small = (nS > bS? bS : nS);
  for(var i = 0;i < small;i++){
    _bi.n[i] |= num.n[i];
  }

  return _bi;
}


/*
*  BI.AND <- do a bitwise AND on the biginteger
*    @param num {BI | Number} - number to AND this with
*    @param me {Boolen} - do this on yourself, or a new BI
*
*/

BI.prototype.AND = function(num, me){

  // If me is set, do the operation on the current Big Integer, else make a new one
  var _bi = me ? this : new BigInt(this);

  // Make this a BigInteger if it's not
  if(!(num instanceof BI)){
    num = new BI(num);
  }

  var bS = _bi.size,nS = num.size;

  //Get the smallest array size
  var small = (nS > bS? bS: nS);
  for(var i = 0;i < small;i++){
    _bi.n[i] &= num.n[i];
  }

  return _bi;
}


/*
*  BI.XOR <- do a bitwise XOR on the biginteger
*    @param num {BI | Number} - number to XOR this with
*    @param me {Boolen} - do this on yourself, or a new BI
*
*/

BI.prototype.XOR = function(num, me){

  // If me is set, do the operation on the current Big Integer, else make a new one
  var _bi = me ? this : new BigInt(this);

  // Make this a BigInteger if it's not
  if(!(num instanceof BI)){
    num = new BI(num);
  }

  var bS = _bi.size,nS = num.size;

  //Get the smallest array size
  var small = (nS > bS? bS : nS);
  for(var i = 0;i < small;i++){
    _bi.n[i] ^= num.n[i];
  }

  return _bi;
}


/*
*  BI.lshift <- The function used to bit shift left the big integer
*    @param x {Integer} - the number of places to shift 
*    @param me {Boolean} - whether or not the shift should happen to the current object or make a new one.
*
*/

BI.prototype.lshift = function(x, me){
  
  // If me is set, do the operation on the current Big Integer, else make a new one
  var _bi = me ? this : new BigInt(this);

  // How many chunks and how many shifts left
  var num = ~~(x / CHUNK_SIZE);
  var rem = x % CHUNK_SIZE;

  // Push all the 0 chunks
  for(var i = num;i--;){
    _bi.n.unshift(0);
  }

  //Set the new size
  _bi.size += num;

  // The carry number
  var _carry = 0;

  for(var i = num,ii = this.size - 1;i <= ii;i++){

    // Shift it
    _bi.n[i] <<= rem;
    // Add the carry
    _bi.n[i] |= rem;

    if(i == ii){
      if((_bi.lB + rem.toString(2).length) > CHUNK_SIZE){
        _bi.n.push(0);
        _bi.n[i + 1] = rem;
        _bi.lB = rem.toString(2).length;
      }else{
        _bi.lB += rem;
      }

      break;
    }
    // Create the new carry
    carry = _bi.n[i] >> CHUNK_SIZE;
  }

  return _bi; 
}


/*
*  BI.rshift <- The function used to bit shift right the big integer
*    @param x {Integer} - the number of places to shift 
*    @param me {Boolean} - whether or not the shift should happen to the current object or make a new one.
*
*/

BI.prototype.rshift = function(x, me){

  // If me is set, do the operation on the current Big Integer, else make a new one
  var _bi = me ? this : new BigInt(this);

  // How many chunks and how many shifts left
  var num = ~~(x / CHUNK_SIZE);
  var rem = x % CHUNK_SIZE;

  // Push out as many chunks as possible
  for(var i = num;i--;){
    _bi.n.shift();
  }

  //Resize
  _bi.size -= num;

  for(var i = this.size;i--;){
    // This is the last thing
    if(!i){
      var carry = _bi.n[i];
    }
    //Shift it 
    _bi.n[i] >>=
  }

  return _bi;
}