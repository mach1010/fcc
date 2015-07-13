function replace(str, before, after) {
  function withCaps(before, after) {
      if(before[0] === before[0].toUpperCase()) {
          return after[0].toUpperCase() + after.slice(1);
      } else {
          return after;
      }
  }
  return str.replace(before, withCaps(before, after));
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");