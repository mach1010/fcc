function chunk(arr, size) {
  var multiArr = [];
  while( arr.length > 0 ) {
      var subArray = [];
      for( var i = size; i > 0; i-- ) {
        if( arr.length !== 0 ) {
            subArray.push(arr.shift());
        }
      }
      multiArr.push(subArray);          
  }
  return multiArr;
}

chunk(['a', 'b', 'c', 'd'], 2);