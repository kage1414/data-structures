var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.length = 0;

  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {

    for (var i = this.length - 1; i >= 0; i--) {
      this.storage[i + 1] = this.storage[i];
    }

    this.storage[0] = value;
    this.length += 1;
  },
  pop: function() {
    var popped = this.storage[0];
    for (var i = 0; i < this.length; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[length - 1];
    if (this.length > 0) {
      this.length -= 1;
    }
    return popped;
  },
  size: function() {
    return this.length;
  }
};


