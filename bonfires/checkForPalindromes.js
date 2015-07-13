function palindrome(str) {
  var parsedString = str.toLowerCase().replace(/\W/g, '');
  var reversedString = '';
  for( var i=parsedString.length-1; i>=0; i-- ) {
      reversedString += parsedString[i];
  }
  if( parsedString == reversedString ) {
      return true;
  } else {
      return false;
  }
}



palindrome("eye");