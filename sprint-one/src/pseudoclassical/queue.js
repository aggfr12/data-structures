var Queue = function() {
  this.storage = {};
  this.counterE = 0;
  this.counterD = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.counterE] = value;
  this.counterE ++;
}

Queue.prototype.dequeue = function() {
  if(this.counterD >= this.counterE) {
    return 0;
  } else {
    var tempVar = this.storage[this.counterD];
    delete this.storage[this.counterD];
    this.counterD ++;
    return tempVar;
  }
}

Queue.prototype.size = function() {
  return this.counterE - this.counterD;
}

var queueInit = new Queue();
