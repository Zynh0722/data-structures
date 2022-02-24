var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var startIndex = 0;
  var numValues = 0;


  // Implement the methods below

  someInstance.size = function() {
    return numValues;
  };

  someInstance.enqueue = function(value) {
    storage[startIndex + someInstance.size()] = value;
    numValues++;
  };

  someInstance.dequeue = function() {
    var out;

    if (numValues > 0) {
      out = storage[startIndex];
      delete storage[startIndex];
      startIndex++;
      numValues--;
    } else {
      out = undefined;
    }

    return out;
  };

  return someInstance;
};
