

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  // do something with the value 'v'
  if (!this._storage.get(index)) {
    var obj = {};
    obj[k] = v;
    this._storage.set(index, obj);
  } else {
    var obj = this._storage.get(index);
    obj[k] = v;
    this._storage.set(index, obj);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var obj = this._storage.get(index);
  return obj[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each( function(val, key, storageArray) {
    console.log([k, val, key, storageArray]);
    // if there are no collisions in that hashed index

    // if there are collisions (more than 1 key in the obj)
    if (val[key]) {
      delete val[key];
    }
  }
  );
};

limitedArray.set = function(index, value) {
  checkLimit(index);
  storage[index] = value;
};

// hashtable.remove('sherlock')


// var storage = [0];
// storage[0] = 'holmes'
// storage[0] = {'sherlock': 'holmes', 'sam': 'holmes'}
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


