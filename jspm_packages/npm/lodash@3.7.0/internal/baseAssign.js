/* */ 
var baseCopy = require("./baseCopy"),
    getSymbols = require("./getSymbols"),
    isNative = require("../lang/isNative"),
    keys = require("../object/keys");
var preventExtensions = isNative(Object.preventExtensions = Object.preventExtensions) && preventExtensions;
var nativeAssign = (function() {
  var object = {'1': 0},
      func = preventExtensions && isNative(func = Object.assign) && func;
  try {
    func(preventExtensions(object), 'xo');
  } catch (e) {}
  return !object[1] && func;
}());
var baseAssign = nativeAssign || function(object, source) {
  return source == null ? object : baseCopy(source, getSymbols(source), baseCopy(source, keys(source), object));
};
module.exports = baseAssign;
