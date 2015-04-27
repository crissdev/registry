/* */ 
var baseEach = require("./baseEach"),
    getLength = require("./getLength"),
    isLength = require("./isLength");
function baseMap(collection, iteratee) {
  var index = -1,
      length = getLength(collection),
      result = isLength(length) ? Array(length) : [];
  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}
module.exports = baseMap;
