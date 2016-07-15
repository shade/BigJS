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
* -- BITWISE
*   - NOT
*   - OR
*   - XOR
*   - AND
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
  }
  switch(typeof num){
    case 'string':

    break;
    case 'number':

    break;
  }

}