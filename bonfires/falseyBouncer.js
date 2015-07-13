function bouncer(arr) {
  return arr.filter( function(i) {
    return Boolean(i) !== false;
  });
}

bouncer([7, 'ate', '', false, 9]); 