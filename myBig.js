function BI(number,base){

	//This is where the bigint number will go
	this.num;

	switch(typeof number){
		case 'number':
			this.num = int2bigInt(number,64);
		break;
		case 'string':
			this.num = str2bigInt(number,base,64);
		break;
	}
	return this;
}
BI.ONE = new BI(1);
BI.ZERO = new BI(0);
/*
*	This function is called whenever the big int is used as an integer
* e.g. var b = new BI(10)
*	b * 1 should return 10
*/
BI.prototype.valueOf = function(){
	return parseInt(bigInt2str(this.num,10),10)
}


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
