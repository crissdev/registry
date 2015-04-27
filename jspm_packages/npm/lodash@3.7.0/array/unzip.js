/* */ 
(function(process) {
  var arrayMap = require("../internal/arrayMap"),
      arrayMax = require("../internal/arrayMax"),
      baseProperty = require("../internal/baseProperty"),
      getLength = require("../internal/getLength");
  function unzip(array) {
    var index = -1,
        length = (array && array.length && arrayMax(arrayMap(array, getLength))) >>> 0,
        result = Array(length);
    while (++index < length) {
      result[index] = arrayMap(array, baseProperty(index));
    }
    return result;
  }
  module.exports = unzip;
})(require("process"));
