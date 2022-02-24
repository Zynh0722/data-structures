var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.startIndex = 0;
  this.numValues = 0;
};

Queue.prototype.size = function () {
  return this.numValues;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.startIndex + this.size()] = value;
  this.numValues++;
};

Queue.prototype.dequeue = function () {
  var out;

  if (this.numValues > 0) {
    out = this.storage[this.startIndex];
    delete this.storage[this.startIndex];
    this.numValues--;
    this.startIndex++;
  }

  return out;
};


