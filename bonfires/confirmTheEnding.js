function end(str, target) {
  var stringEnding = str.substr(-target.length);
  return (stringEnding == target ? true : false);
}

end('Bastian', 'n');