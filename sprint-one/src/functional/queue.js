var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = { 'length': 0 };

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (storage.length > 0) {
      for (var i = storage.length - 1; i >= 0; i--) {
        someInstance[i + 1] = someInstance[i];
      }
    }
    someInstance[0] = value;
    storage.length += 1;
  };

  someInstance.dequeue = function() {
    var dequeued = someInstance[storage.length - 1];
    delete someInstance[storage.length];
    storage.length -= 1;
    return dequeued;
  };

  someInstance.size = function() {
    var count = 0;

    for (var i = 0; i < storage.length; i++) {
      count += 1;
    }
    return count;
  };

  return someInstance;
};
