/* */ 
var toObject = require("./toObject");
function baseGet(object, path, pathKey) {
  if (object == null) {
    return ;
  }
  if (pathKey !== undefined && pathKey in toObject(object)) {
    path = [pathKey];
  }
  var index = -1,
      length = path.length;
  while (object != null && ++index < length) {
    var result = object = object[path[index]];
  }
  return result;
}
module.exports = baseGet;
