

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  // do something with the value 'v'
  if (!this._storage.get(index)) {
    var arr = [];
    arr.push([k, v]);
    this._storage.set(index, arr);
  } else {
    var arr = this._storage.get(index);
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][0] === k) {
        arr[i][1] = v;
        var overwritten = true;
        break;
      }
    }

    if (!overwritten) {
      arr.push([k, v]);
    }

    this._storage.set(index, arr);
  }
};
// Constant Time

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(index);
  if (arr === undefined) {
    return undefined;
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] === k) {
      return arr[i][1];
    }
  }
};
// Constant Time

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(index);
  if (arr.length === 1) {
    this._storage.set(index, undefined);
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][0] === k) {
        arr.splice(i, 1);
      }
    }
    this._storage.set(index, arr);
  }
};
// Constant Time


/*
 * Complexity: What is the time complexity of the above functions?
 */