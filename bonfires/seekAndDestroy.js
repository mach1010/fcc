function destroyer(arr) {
  function noMatch(value) { return value != this; }
  for( var i=1; i < arguments.length; i++) {
      console.log("arguments[i]: " + arguments[i]);
    arr = arr.filter(noMatch, arguments[i]);
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);