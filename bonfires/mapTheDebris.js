function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var result = arr.map( function(obj) {
      newObject = {};
      newObject.name = obj.name;
      newObject.orbitalPeriod = Math.round(2*Math.PI*Math.sqrt(
         Math.pow((obj.avgAlt + earthRadius), 3)/GM));
     return newObject;
  });
  return result;
}

orbitalPeriod([{name : "sputkin", avgAlt : 35873.5553}]);