function factorialize(num) {
    var factorial = 1;
  for( var i=2; i<=num; i++ ) {
      factorial *= i;
  }
  return factorial;
}

factorialize(5);