function sumFibs(num) {
    var current = 0, next = 1, fibs = [];
    
    while(current <= num) {
        fibs.push(current);
        current = next;
        next = current + fibs[fibs.length-1];
    }
  return fibs.reduce(function(tot, value) {
      return value % 2 > 0 ? tot += value : tot;
  });
}

sumFibs(4);