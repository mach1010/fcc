function pairwise(arr, arg) {
    if(arr.length < 1) { return 0; }
    var result = [];
    for(var i = 0; i < arr.length; i++) {
        for(var j = i + 1; j < arr.length; j++) {
            if(result.indexOf(j) < 0 &&
               result.indexOf(i) < 0 &&
               arr[j] == Math.abs(arg - arr[i])) {
                   result.push(i);
                   result.push(j);
            }    
        }
    }
    return result.reduce(function(tot, val) { return tot + val; });
}

pairwise([1,4,2,3,0,5], 7);