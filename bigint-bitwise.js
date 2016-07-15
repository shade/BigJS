/*
*  BI.lshift <- The function used to bit shift left the big integer
*    @param x {Integer} - the number of places to shift 
*    @param me {Boolean} - whether or not the shift should happen to the current object or make a new one.
*
*/

BI.prototype.lshift = function(x,me){
  
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

  
}