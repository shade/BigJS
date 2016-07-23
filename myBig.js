function BI(){
	//This is where the bigint number will go
	this.num = [];
	return this;
}
BI.ONE = new BI(1);
BI.ZERO = new BI(0);


/*
*	BI.add - this function adds the current big int with another
*		@param num {Number | BI} - the number you want to add to
*		@param me {Boolean} - set to true if you want the addition to happen on the current object, else make a new obj
*/
BI.prototype.add = function(num, me){
	var _this = (me ? this : new BI(this));

	if(num instanceof BI){
		_this.num = add(_this.num, num.num);
	}else{
		_this.num = addInt(_this.num, num);
	}

	return _this;
}


/*
* BI.subtract - this function subtracts the current big int with another
* 	@param num {Number | BI} - the number you want to subtract from
*		@oaram me {Boolean}
*/
BI.prototype.subtract = function(num, me){
	var _this = (me ? this : new BI(this));

	//Subtraction is the same as adding the negative
	if(num instanceof BI){
		_this.num = sub(_this.num, num.num);
	}else{
		_this.num = addInt(_this.num, -num);
	}

	return _this;
}


/*
* BI.multiply - this function multiplies the current big int with another
* 	@param num {Number | BI} - the number you want to multiply with
*		@oaram me {Boolean}
*/
BI.prototype.multiply = function(num, ne){
	var _this = (me ? this : new BI(this));

	if(num instanceof BI){
		_this.num = mult(_this.num, num.num);
	}else{
		//this function automatically modifies the array
		multInt_(_this.num,num);
	}

	return _this;
}
