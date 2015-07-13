function translate(str) {
 var vowels = ['a', 'e', 'i', 'o', 'u'];
 if(vowels.indexOf(str[0]) !== -1) {
     return str + 'way';
 } else {
     var split = 0;
     while(vowels.indexOf(str[split]) === -1) {
         split += 1;
     }
     return str.slice(split) + str.slice(0, split) + 'ay';
 }
}

translate("consonant");