var makeQueue = function() {
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.countE = 0;
  queue.countD = 0;
  return queue;
}

var queueMethods = {};

queueMethods.enqueue = function (val) {
  this.storage[this.countE] = val;
  this.countE++;
}

queueMethods.dequeue = function () {
  if (this.countE === this.countD) {
    return 0;
  } else {
    var dqPop = this.storage[this.countD];
    delete this.storage[this.countD];
    this.countD++;
    return dqPop;
  }
}

queueMethods.size = function () {
  return this.countE - this.countD;
}
