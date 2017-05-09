/** Copyright (C) 2017 Joe Thomas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var Logic = {}


/**
 * Accepts a BigInteger, returns true if zero valued, otherwise returns false.
 * @param  {BigInt} x - The big integer we're checking
 * @return {Boolean}    !x
 */
Logic.not = (x) => {
  for (var i = x.length; i--;) {
    if(x[i]) return false
  }
  return true
}

/**
 * Accept 2 BigIntegers, returns if they're equal. Cleans inputs too
 * @param  {BigInt} x
 * @param  {BigInt} y
 * @return {Boolean}   x == y
 */
Logic.eq = (x,y) => {
  Util.clean(x)
  Util.clean(y)

  var x_l = x.length
  var y_l = y.length

  if (x_l != y_l) return false

  for (var i = x_l; i--;) {
    if (x[i] != y[i]) return false
  }

  return true
}

/**
 * Returns true if x is greater than y
 * @param  {BigInt} x
 * @param  {BigInt} y
 * @return {Boolean}    x > y
 */
Logic.gt = (x,y) => {
  Util.clean(x)
  Util.clean(y)

  var x_l = x.length
  var y_l = y.length

  if (x_l > y_l) return true

  for(var i = x_l;i--;) {
    if(x[i] != y[i]) return (x[i] > y[i])
  }

  return false
}

/**
 * Returns true if x is less than y
 * @param  {BigInt} x
 * @param  {BigInt} y
 * @return {Boolean}    x < y
 */
Logic.lt = (x,y) => {
  Util.clean(x)
  Util.clean(y)

  var x_l = x.length
  var y_l = y.length

  if (x_l > y_l) return true

  for(var i = x_l;i--;) {
    if(x[i] != y[i]) return (x[i] < y[i])
  }

  return false
}

