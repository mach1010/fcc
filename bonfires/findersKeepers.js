function find(arr, func) {
    var result;
  function testWrapper(val) {
      if(func(val) === true) { 
        result = val;
        return true;
      }
  }
  arr.sort(testWrapper);
  return result;
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });