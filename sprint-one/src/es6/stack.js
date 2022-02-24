class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  size() {
    var total = 0;

    for (let i in this.storage) {
      total++;
    }

    return total;
  }

  push(value) {
    this.storage[this.size()] = value;
  }

  pop() {
    var out = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];

    return out;
  }
}