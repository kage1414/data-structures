var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length += 1;
};

Queue.prototype.dequeue = function() {
  var dequeued = this.storage[0];
  for (var i = 1; i < this.length; i++) {
    this.storage[i - 1] = this.storage[i];
  }
  delete this.storage[this.length - 1];
  if (this.length > 0) {
    this.length -= 1;
  }
  return dequeued;
};

Queue.prototype.size = function() {
  return this.length;
};

var SomeQueue = new Queue();