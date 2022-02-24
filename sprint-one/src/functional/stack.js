var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.pop = function() {
    var out = storage[someInstance.size() - 1];
    delete storage[someInstance.size() - 1];
    return out;
  };

  someInstance.size = function() {
    var total = 0;

    for (let i in storage) {
      total++;
    }

    return total;
  };

  return someInstance;
};
