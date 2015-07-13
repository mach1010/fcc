function findLongestWord(str) {
    var wordArray = str.toLowerCase().split(/\s/);
    var longestWord = wordArray[0].length;
    for( i=1; i<wordArray.length; i++ ) {
        var currentWord = wordArray[i].length;
        if( currentWord > longestWord ) {
            longestWord = currentWord;
        }
    }
  return longestWord;
}

findLongestWord('The quick brown fox jumped over the lazy dog');