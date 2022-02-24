class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.startIndex = 0;
    this.numValues = 0;
  }

  size() {
    return this.numValues;
  }

  enqueue(value) {
    this.storage[this.startIndex + this.size()] = value;
    this.numValues++;
  }

  dequeue() {
    var out;

    if (this.numValues > 0) {
      out = this.storage[this.startIndex];
      delete this.storage[this.startIndex];
      this.numValues--;
      this.startIndex++;
    }

    return out;
  }

}
