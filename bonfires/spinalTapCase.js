function spinalCase(str) {
  var result = str.split(/[-_ ]|(?=[A-Z])/g);
  return result.join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap');