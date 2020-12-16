var Stack = function() {
  var someInstance = {'length': 0};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    if (someInstance.length === 0) {
      someInstance[0] = value;
    } else {
      for (var i = someInstance.length; i > 0; i--) {
        someInstance[i] = someInstance[i - 1];
      }
      someInstance[0] = value;
    }
    someInstance.length += 1;
  };

  someInstance.pop = function() {
    var popped = someInstance[0];

    for (var i = 0; i < someInstance.length; i++) {
      someInstance[i] = someInstance[i + 1];
    }

    delete someInstance[someInstance.length];

    someInstance.length -= 1;
    return popped;

  };

  someInstance.size = function() {
    var count = 0;
    for (var i = 0; i < someInstance.length; i++) {
      count += 1;
    }
    return count;
  };

  return someInstance;
};
