

var Arithmetic = {}

Arithmetic.add = (x, y) => {
  var x_l, y_l

  x_l = x.length
  y_l = y.length

  // Append extra zeros to each array based on length difference
  if (x_l > y_l) {
    for (var i = (x_l - y_l); i--;)
      y.push(0)
  } else if(x_l < y_l) {
    for (var i = (y_l - x_l); i--;)
      x.push(0)
  }

  // Create a copy of x for our result
  var res = x.slice(0)
  var carry = 0

  // Do the addition
  for (var i = 0, ii = res.length; i < ii; i++) {
    
    // Update the value.
    res[i] += (y[i] + carry)

    // Update the carry
    if (MAX_INTEGER < (y[i] + x[i] + carry)) {
      carry = (res[i] - MAX_INTEGER)
      res[i] -= carry
    } else {
      carry = 0
    }
  }
}

