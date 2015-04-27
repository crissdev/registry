/* */ 
var baseEach = require("../internal/baseEach"),
    getLength = require("../internal/getLength"),
    invokePath = require("../internal/invokePath"),
    isKey = require("../internal/isKey"),
    isLength = require("../internal/isLength"),
    restParam = require("../function/restParam");
var invoke = restParam(function(collection, path, args) {
  var index = -1,
      isFunc = typeof path == 'function',
      isProp = isKey(path),
      length = getLength(collection),
      result = isLength(length) ? Array(length) : [];
  baseEach(collection, function(value) {
    var func = isFunc ? path : (isProp && value != null && value[path]);
    result[++index] = func ? func.apply(value, args) : invokePath(value, path, args);
  });
  return result;
});
module.exports = invoke;
