function convert(num) {
 var ones = {'1': 'I', '2': 'II', '3': 'III', '4': 'IV', '5': 'V', '6': 'VI', '7': 'VII', '8': 'VIII', '9': 'IX'};
 var tens = {'1': 'X', '2': 'XX', '3': 'XXX', '4': 'XL', '5': 'L', '6': 'LX', '7': 'LXX', '8': 'LXXX', '9': 'XC'};
 var result ='';
 if( num >= 10 ) {
     var totalTens = 0;
     while( num >= 10 ) {
         totalTens += 1;
         num -= 10;
     }
     result += tens[totalTens];
 }
 return  num > 0 ? result += ones[num] : result;
}

convert(36);