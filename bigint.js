/*
* TYPES OF OPERATIONS WANTED
*
* -- ARITHMETIC
*   - ADD
*   - SUBTRACT
*   - MULTIPLY
*   - DIVIDE
*   - MODULUS
*   - POW
*   - SQUARE
*   - MODPOW
*
* -- COMPARISON
*   - COMPARE (done)
*   - LESS THAN
*   - GREATER THAN
*   - EQUALS
*
* -- BITWISE
*   - NOT (done)
*   - OR (done)
*   - XOR (done)
*   - AND (done)
*   - LEFT_SHIFT (done)
*   - RIGHT_SHIFT (almost done)
*
* -- PRIME
*   - PROBABLE PRIME
*   - MILLER-RABIN
*   - TRUE PRIME
*/


// Each chunk in the big integer is 15 bits long. 
var CHUNK_SIZE = 15;
// Mask is like 000111 if there is a 3 bit chunk size
var AND_MASK = (Math.pow(2,CHUNK_SIZE) - 1);
// The inverse is just the opposite of the above mask
var INV_AND_MASK = AND_MASK << CHUNK_SIZE;


function BI(num,base){
  if(num instanceof BI){
    // Copy the big int
    this.n = num.n.slice(0);
    this.lB = num.lB;
    return this;
  }

  this.n = [];
  this.lB = 0;
  
  var b = "";

  switch(typeof num){
    case 'string':
	    var arr = num.split(''),_b;
    	while((_b = arr.shift())){
	    	b += parseInt(num,base).toString(2);	
    	}
    break;
    case 'number':
    	b = num.toString(2);
    break;
  }


  for(var i = 0,ii = b.length;i < ii;i+=8){
  	this.n.push(parseInt(b.substr(i,CHUNK_SIZE),2));
  }

  this.lB = CHUNK_SIZE - this.n[this.n.length - 1].toString(2).length;

  return this;
}