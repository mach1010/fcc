function smallestCommons(arr) {
  arr = arr.sort();
  var rangeMin = arr[0],
      rangeMax = arr[1],
      index = [];
  
  function max(arr) { return Math.max.apply(Math, arr); }
  
  function isArrayEqual(arr) {
      var greatestInt = max(arr);
      for( var i in arr ) {
          if(arr[i] !== greatestInt) {
              return false;
          }
       }
       return true;
   }
  
  for( var i = rangeMin; i <= rangeMax; i++) {
      index.push(i);
  }
  
  while(!isArrayEqual(index)) {
      var currentMax = max(index);
      for( var j =0; j < index.length; j++) {
          if( index[j] < currentMax ) {
              index[j] += (rangeMin + j);
          }
      }
  }
  return index[0];
}


smallestCommons([1,5]);