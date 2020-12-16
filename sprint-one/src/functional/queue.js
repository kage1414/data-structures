var Queue = function() {
  var someInstance = { 'length': 0};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.length] = value;
    someInstance.length += 1;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[0];
    if (someInstance.length > 0) {
      for (var i = 0; i < someInstance.length; i++) {
        storage[i] = storage[i + 1];
      }
      delete storage[someInstance.length];
      someInstance.length -= 1;
    }
    return dequeued;
  };

  someInstance.size = function() {
    return someInstance.length;
  };

  return someInstance;
};
