function repeat(str, num) {
    var repeated = '';
  while( num > 0 ) {
      repeated += str;
      num -= 1;
  }
  return repeated;
}

repeat('abc', 3);