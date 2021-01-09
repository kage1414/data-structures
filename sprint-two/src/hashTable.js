

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
    // this._storage.set(index, arr);
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

limitedArray.set = function(index, value) {
  checkLimit(index);
  storage[index] = value;
};

// hashtable.remove('sherlock')


// var storage = [0];
// storage[0] = 'holmes'
// storage[0] = [['sherlock': 'holmes'], ['sam': 'holmes']]
// storage[1] = {}


// delete storage[0]['sherlock']

// date of birth | key | value
// 1/01/1990 | 'sherlock' | 'holmes'
// 1/01/1990 | 'sam' | 'holmes'

// hash key = 0 {'sherlock': 'holmes'}
// hash key = 0 {'sam': 'holmes'}

// function (key) { returns key[0]}
// limit = 2


/*
 * Complexity: What is the time complexity of the above functions?
 */


