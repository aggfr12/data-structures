var Stack = function() {
  this.storage = {};
  this.counter = 0;
};

Stack.prototype.pop = function () {
  if (this.counter === 0) {
    return 0;
  } else {
    this.counter--;
    var popVal = this.storage[this.counter];
    delete this.storage[this.counter];
    return popVal;
  }
}

Stack.prototype.push = function (value) {
  this.storage[this.counter] = value;
  this.counter++;
}

Stack.prototype.size = function() {
  return this.counter;
}

var theNewStack = new Stack();

