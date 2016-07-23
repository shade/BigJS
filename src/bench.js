var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var a,b;
function gen(){	
	a = [~~(Math.random() * 1),~~(Math.random() * 1),~~(Math.random() * 1),~~(Math.random() * 1),~~(Math.random() * 1),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000)];
	b = [~~(Math.random() * 1),~~(Math.random() * 1),~~(Math.random() * 1),~~(Math.random() * 1),~~(Math.random() * 1),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000),~~(Math.random() * 10000)];
}

// add tests 
suite.add('toString', function() {
	gen();
	a.join('') == b.join('');
})
.add('for', function() {
	gen();
	for(var i = a.length;i--;){
		if(a != b){
			return false;
		}
	}
	return true;
})
// add listeners 
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async 
.run({ 'async': true });
 