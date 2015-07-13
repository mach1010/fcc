function drop(arr, func) {
    var dup = arr.slice();
  for( var i = 0; i < dup.length; i++) {
      if(!func(dup[i])) {
          arr.shift();
      }
  }
  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });