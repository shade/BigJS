/*
*	BI.lshift <- The function used to bit shift left the big integer
*		@param x - the number of places to shift 
*
*
*/

BI.prototype.lshift = function(x,me){
	
	//If me is set, do the operation on the current Big Integer, else make a new one
	var b = me ? this : new BigInt(this);

}