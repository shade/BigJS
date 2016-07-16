var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var a,b;
function gen(){	
	a = ~~(Math.random() * 10000)
	b = ~~(Math.random() * 10000)
}

// add tests 
suite.add('comp', function() {
	gen();
	(a>b?a:b)
})
.add('min', function() {
	gen();
	Math.min(a,b);
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
 