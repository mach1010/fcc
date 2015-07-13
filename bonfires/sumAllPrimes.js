function sumPrimes(num) {
  var primes = [];
  function isPrime(n) {
    if( n === 1 || n === 2 || n === 3 || n === 5 ) {return true;}
    if( n % 2 === 0 ) {return false;}
    if( n % 3 === 0 ) {return false;}
    if( n % 5 === 0 ) {return false;}
    
    var square_root = Math.sqrt(n);
    if( n % square_root === 0 ) {return false;}
    
    for( var i = 3; i < square_root; i+= 2) {
        if( n % i === 0 ) {return false;}
    }
    return true;
  }
  
  for( var i = 2; i <= num; i++) {
      if( isPrime(i) ) {
          primes.push(i);
      }
  }
  function reduceAdd(tot, val) { return tot += val; }
  return primes.reduce(reduceAdd);
}

sumPrimes(10);