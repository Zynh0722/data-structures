var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);

  newQueue.storage = {};
  newQueue.startIndex = 0;
  newQueue.numValues = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.size = function () {
  return this.numValues;
};

queueMethods.enqueue = function (value) {
  this.storage[this.startIndex + this.size()] = value;
  this.numValues++;
};

queueMethods.dequeue = function () {
  var out;

  if (this.numValues > 0) {
    out = this.storage[this.startIndex];
    delete this.storage[this.startIndex];
    this.numValues--;
    this.startIndex++;
  }


  return out;
};
