#BigJS
This is my big integer library, it is built on top of the big int library built by Leemon Baird.

I built it for my own interests in cryptography. It was built as Leemon's library polluted the global scope and had a somewhat scattered design. I especially love the implementations that were done for finding primes. Enjoy!
## Construction


## Constants
```javascript
BI.ONE == 0
BI.ZERO == 0
```
## Primes
#### prime(bits)
```javascript
BI.prime(2048) //Generates a 2048 bit true prime encapsulated in the BI object
```

## Operations
### Arithmetic
#### add(num, me)
```javascript
  var b = new BI(1997);
  b.add(19);
  // Returns a new big int object with a value of 2016
  b.add(19, true);
  // Returns the current big int object, b, with its value changed to 2016
```
#### subtract(num, me)
```javascript
  var b = new BI(2016);
  b.subtract(19);
  // Returns a new big int object with a value of 1997
  b.subtract(19, true);
  // Returns the current big int object, b, with its value changed to 1997
```
#### multiply(num, me)
```javascript
  var b = new BI(8);
  b.multiply(7);
  // Returns a new big int object with a value of 56
  b.multiply(7, true);
  // Returns the current big int object, b, with its value changed to 56
```

### Bitwise
