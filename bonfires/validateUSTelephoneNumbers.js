function telephoneCheck(str) {
  var digits = str.match( /^[\d\(].*\d$/ )  ? 
    str.replace(/\W/g, '') : '';
  if( digits.length === 10 ||
      digits.length === 11 && digits[0] === '1') {
          return true;
      } else {
          return false;
      }
}



telephoneCheck("555-555-5555");