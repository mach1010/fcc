function pair(str) {
 var dnaPairs = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'};
 var strand = str.split('');
 var result = [];
 for( var i in str ) {
     var pr = [];
     pr.push(str[i]);
     pr.push(dnaPairs[str[i]]);
     result.push(pr);
 }
 return result;
}

pair("GCG");