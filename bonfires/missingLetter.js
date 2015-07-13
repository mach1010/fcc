function fearNotLetter(str) {
  var startInt = str.charCodeAt(0);
  for( var i = 1; i < str.length; i++ ) {
    var currentInt = str.charCodeAt(i);
    if(currentInt > startInt + i) {
      return String.fromCharCode(startInt + i);
    }
  }
}

fearNotLetter('abce');