function sym(args) {
  var argArrays = [].slice.apply(arguments);
  return argArrays.map(function(arr) {
      return arr.filter(function(val, index) {
          return arr.indexOf(val) == index;
      });
 }).reduce(function(result, current) {
      var tempResult = [];
      for(var i = 0; i < result.length; i++) {
          if(current.indexOf(result[i]) < 0) {
              tempResult.push(result[i]);
          } else {
              current.splice(current.indexOf(result[i]), 1);
          }
      }
      return tempResult.concat(current);
  });
 }

sym([1, 2, 3], [5, 2, 1, 4]);

