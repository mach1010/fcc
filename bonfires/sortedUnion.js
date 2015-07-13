function unite(arr1, arr2, arr3) {
  var merged = [];
  merged = merged.concat.apply(merged, arguments);
  function unique(value, index, array) {
      return array.indexOf(value) === index;
  }
  return merged.filter( unique );
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);