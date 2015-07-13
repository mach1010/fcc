function titleCase(str) {
  var parsedArray = str.toLowerCase().match(/(\S+|\s)/g);
  var titleCased = '';
  for( var i=0; i<parsedArray.length; i++ ) {
      titleCased += parsedArray[i][0].toUpperCase() + parsedArray[i].slice(1);
  }
  return titleCased;
}

titleCase("I'm a little tea pot");