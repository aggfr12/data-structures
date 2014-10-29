var makeStack = function(){
  var counter = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function(){
    if (counter === 0) {
      return 0;
    } else {
      counter--;
      var popValue = storage[counter];
      delete storage[counter];
      return popValue;
    }
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
