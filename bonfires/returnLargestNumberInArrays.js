function largestOfFour(arr) {
  var largestArray = [];
  for( var i=0; i<arr.length; i++ ) {
      var currentArray = arr[i];
      var largestValue = currentArray[0];
      for( var j in currentArray ) {
          if( largestValue < currentArray[j] ) {
              largestValue = currentArray[j];
          }
      }
      largestArray.push(largestValue);
  }
  return largestArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);