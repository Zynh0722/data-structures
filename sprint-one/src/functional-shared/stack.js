var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};

  newStack.storage = {};
  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {};

stackMethods.size = function() {
  var total = 0;

  for (let i in this.storage) {
    total++;
  }

  return total;
};

stackMethods.push = function(value) {
  this.storage[this.size()] = value;
};

stackMethods.pop = function() {
  var out = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];

  return out;
};
