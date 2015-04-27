/* */ 
var isIndex = require("./isIndex");
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function basePullAt(array, indexes) {
  var length = indexes.length;
  while (length--) {
    var index = parseFloat(indexes[length]);
    if (index != previous && isIndex(index)) {
      var previous = index;
      splice.call(array, index, 1);
    }
  }
  return array;
}
module.exports = basePullAt;
