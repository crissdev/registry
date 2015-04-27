/* */ 
var getLength = require("../internal/getLength"),
    isArguments = require("./isArguments"),
    isArray = require("./isArray"),
    isFunction = require("./isFunction"),
    isLength = require("../internal/isLength"),
    isObjectLike = require("../internal/isObjectLike"),
    isString = require("./isString"),
    keys = require("../object/keys");
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  var length = getLength(value);
  if (isLength(length) && (isArray(value) || isString(value) || isArguments(value) || (isObjectLike(value) && isFunction(value.splice)))) {
    return !length;
  }
  return !keys(value).length;
}
module.exports = isEmpty;
