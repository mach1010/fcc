function sumAll(arr) {
  arr = arr.sort(function(a, b) { return a - b; });
  var result = 0;
  for( var i = arr[0]; i <= arr[1]; i++ ) {
      result += i;
  }
  return result;
}

sumAll([1, 4]);