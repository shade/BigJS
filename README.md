#BigIntJS


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
