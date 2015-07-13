function convert(str) {
  var entities = {'&': '&amp;', "'": '&apos;', '"': '&quot;', '<': '&lt;', '>': '&gt;'};
  function getEnt(ent) { return entities[ent]; }
  return str.replace(/([&'"<>])/g, getEnt);
}

convert('Dolce & Gabbana');