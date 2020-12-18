var Queue = function() {
  var someInstance = {
    'head': 0,
    'tail': 0
  };

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.tail] = value;
    someInstance.tail += 1;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[someInstance.head];
    delete storage[someInstance.head];
    if (someInstance.head < someInstance.tail) {
      someInstance.head += 1;
    }
    return dequeued;
  };

  someInstance.size = function() {
    return someInstance.tail - someInstance.head;
  };

  return someInstance;
};
