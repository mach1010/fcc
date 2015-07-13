function where(collection, source) {
    var result = [];
    var sourceKey = Object.keys(source)[0];
  for(var i = 0; i < collection.length; i++ ) {
      if( collection[i][sourceKey] == source[sourceKey] ) {
          result.push(collection[i]);
      }
  }
  return result;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });