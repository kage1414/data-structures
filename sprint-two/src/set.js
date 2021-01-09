var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = true;
};
// Constant Time

setPrototype.contains = function(item) {
  return this._storage.hasOwnProperty(item);
};
// Constant Time
setPrototype.remove = function(item) {
  delete this._storage[item];
};
// Constant Time

/*
 * Complexity: What is the time complexity of the above functions?
 */
