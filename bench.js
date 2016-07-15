var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var a = ~~(Math.random() * 10000) 
// add tests 
suite.add('POW', function() {
	a*32
})
.add('SHIFT', function() {
	a<<5;
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
 