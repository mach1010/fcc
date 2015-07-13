function steamroller(arr) {
  var result = [];
  function flatten(arr) {
      for( var i = 0; i < arr.length; i++ ) {
          Array.isArray(arr[i]) ? flatten(arr[i]) : result.push(arr[i]);
      }
  }
  flatten(arr);
  return result;
}

steamroller([1, [2], [3, [[4]]]]);