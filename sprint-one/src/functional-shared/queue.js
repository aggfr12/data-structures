var makeQueue = function(){
  var queue = {};
  queue.storage = {};
  queue.counterE = 0;
  queue.counterD = 0;
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.counterE] = value;
  this.counterE ++;
}

queueMethods.dequeue = function() {
  if(this.counterD >= this.counterE) {
    return 0;
  } else {

    var tempVar = this.storage[this.counterD];
    delete this.storage[this.counterD];
    this.counterD ++;
    return tempVar;
  }
}

queueMethods.size = function() {
  return this.counterE - this.counterD;
}
