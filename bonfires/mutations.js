function mutation(arr) {
  var container = arr[0].toLowerCase().split('');
  var contains  = arr[1].toLowerCase().split('');
  var matches = [];
  
  for( var i = 0; i < contains.length; i++ ) {
      for( var j in container) {
          if(container[j] == contains[i]) {
              matches.push(contains[i]);
              break;
          }
      }
  }
  return matches.length == contains.length;
}

mutation(['hello', 'hey']);