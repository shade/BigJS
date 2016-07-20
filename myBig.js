//First, take all the array prototype functions because 
function BI(){

}

BI.prototype.length = function(){
	return [].length.apply(this,arguments);
}
BI.prototype.constructor = function(){
	return [].constructor.apply(this,arguments);
}
BI.prototype.toString = function(){
	return [].toString.apply(this,arguments);
}
BI.prototype.toLocaleString = function(){
	return [].toLocaleString.apply(this,arguments);
}
BI.prototype.join = function(){
	return [].join.apply(this,arguments);
}
BI.prototype.pop = function(){
	return [].pop.apply(this,arguments);
}
BI.prototype.push = function(){
	return [].push.apply(this,arguments);
}
BI.prototype.reverse = function(){
	return [].reverse.apply(this,arguments);
}
BI.prototype.shift = function(){
	return [].shift.apply(this,arguments);
}
BI.prototype.unshift = function(){
	return [].unshift.apply(this,arguments);
}
BI.prototype.slice = function(){
	return [].slice.apply(this,arguments);
}
BI.prototype.splice = function(){
	return [].splice.apply(this,arguments);
}
BI.prototype.sort = function(){
	return [].sort.apply(this,arguments);
}
BI.prototype.filter = function(){
	return [].filter.apply(this,arguments);
}
BI.prototype.forEach = function(){
	return [].forEach.apply(this,arguments);
}
BI.prototype.some = function(){
	return [].some.apply(this,arguments);
}
BI.prototype.every = function(){
	return [].every.apply(this,arguments);
}
BI.prototype.map = function(){
	return [].map.apply(this,arguments);
}
BI.prototype.indexOf = function(){
	return [].indexOf.apply(this,arguments);
}
BI.prototype.lastIndexOf = function(){
	return [].lastIndexOf.apply(this,arguments);
}
BI.prototype.reduce = function(){
	return [].reduce.apply(this,arguments);
}
BI.prototype.reduceRight = function(){
	return [].reduceRight.apply(this,arguments);
}
BI.prototype.copyWithin = function(){
	return [].copyWithin.apply(this,arguments);
}
BI.prototype.find = function(){
	return [].find.apply(this,arguments);
}
BI.prototype.findIndex = function(){
	return [].findIndex.apply(this,arguments);
}
BI.prototype.fill = function(){
	return [].fill.apply(this,arguments);
}
BI.prototype.includes = function(){
	return [].includes.apply(this,arguments);
}
BI.prototype.entries = function(){
	return [].entries.apply(this,arguments);
}
BI.prototype.keys = function(){
	return [].keys.apply(this,arguments);
}
BI.prototype.concat = function(){
	return [].concat.apply(this,arguments);
}
BI.prototype.values = function(){
	return [].values.apply(this,arguments);
}