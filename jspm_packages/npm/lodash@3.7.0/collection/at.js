/* */ 
var baseAt = require("../internal/baseAt"),
    baseFlatten = require("../internal/baseFlatten"),
    getLength = require("../internal/getLength"),
    isLength = require("../internal/isLength"),
    restParam = require("../function/restParam"),
    toIterable = require("../internal/toIterable");
var at = restParam(function(collection, props) {
  var length = collection ? getLength(collection) : 0;
  if (isLength(length)) {
    collection = toIterable(collection);
  }
  return baseAt(collection, baseFlatten(props));
});
module.exports = at;
