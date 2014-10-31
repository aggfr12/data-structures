var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var inputObj = {k: v};
  var newObj = {};

  this._storage.each(function(item, key, collection) {
      if(key === i) {
        // console.log(item);
        if(typeof item === "undefined") {
          // console.log(inputObj);
          newObj = inputObj;
        } else {
          console.log(_.extend(item, inputObj));
          newObj = _.extend(item, inputObj);
        }
      }
  });

  console.log(newObj);
  this._storage.set(i, newObj)
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
