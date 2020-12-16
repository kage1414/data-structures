var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {'length': 0};

  // Implement the methods below
  someInstance.push = function(value) {
    if (storage.length === 0) {
      someInstance[0] = value;
    } else {
      for (var i = storage.length; i > 0; i--) {
        someInstance[i] = someInstance[i - 1];
      }
    }
    storage.length += 1;
  };

  someInstance.pop = function() {
    var popped = someInstance[0];

    for (var i = 0; i < storage.length; i++) {
      someInstance[i] = someInstance[i + 1];
    }

    return popped;

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
