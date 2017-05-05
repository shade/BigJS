const BYTE_MASKS = [
  0b0
  0b1
  0b11
  0b111
  0b1111
  0b11111
  0b111111
  0b1111111
  0b11111111
]


var Util = {}

// Remove prepending zeros
Util.clean = (num) => {
  for(var i = num.length;  i--;) {
    if (num[i]) break
    num.pop()
  }
}


/**
 * Converts a Stringified number to a BigInt
 * @param  {String} num  - The stringified number
 * @param  {Number} base - The base, Enum(2,16)
 * @return {BigInt}
 */
Util.fromString = (num, base) => {
  var ans = []
  var pattern = null

  // Grab a pattern based on the base.
  switch (base) {
    case 2:
      pattern = /[01]{1,32}/g
      break
    case 16:
      pattern = /[0-9A-Fa-f]{1,8}/g
      break
    default:
      throw "INVALID BASE ERROR"
      break
  }
  
  // Push each matched segment as a parsed number, into the ans.
  var temp = num.match(pattern)
  for (var i = temp.length; i--;) {
    ans.unshift(parseInt(temp[i],base))
  }

  return ans
}


/**
 * Converts a BigInt object to a string
 * @param  {BigInt} num  - The BigInt number we're converting
 * @param  {Number} base - The base we're converting to. Enum(2,16,32)
 * @return {String}
 */
Util.toString = (num, base) => {
  var ChunkSize = Math.log2(base)
  var ChunkMask = BYTE_MASKS[ChunkSize]
  var NumChunks = 32 / ChunkSize

  var str = ""

  // Use toString on each section of bits.
  for (var i = 0, ii = num.length; i < ii; i++) {
    var curNum = num[i]

    // Go through and append each chunk of the current BI byte.
    for (var s = 0; s < NumChunks; s++) {
      var chunk = (num >> (ChunkSize * s)) & ChunkMask
      str += chunk.toString(base)
    }
  }
}

module.exports = Util