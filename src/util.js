
var Util = {}

Util.toString = (base) => {
  switch (base) {
    case 2: return _binary(num)
    case 64: return _base64(num)
  }
}



function _binary (num) {
  var str = ""

  for(var i = 0;i < ) {
    if (num[i]) {
      str += num[i].toString(2)
    }
  }

  return str
}


function _base64 (num) {
  var str = ""
}