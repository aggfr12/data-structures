var makeQueue = function(){
  var counterEnq = 0;
  var counterDeq = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[counterEnq] = value;
    counterEnq ++;
  };

  someInstance.dequeue = function(){
    if(counterDeq !== counterEnq) {
      var deq = storage[counterDeq];
      delete storage[counterDeq];
      counterDeq ++;
      return deq;
    } else {
      return 0;
    }
  };

  someInstance.size = function(){
    return counterEnq - counterDeq;
  };

  return someInstance;
};
