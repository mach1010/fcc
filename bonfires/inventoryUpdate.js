function inventory(arr1, arr2) {
    var result = arr2;
    
    function itemExists(item) {
        for(var i = 0; i < result.length; i++) {
            if(item[1] == result[i][1]) return i;
        }
        return -1;
    }
    
    for(var i = 0; i < arr1.length; i++) {
        var index = itemExists(arr1[i]);
        if(index >= 0) {
            result[index][0] += arr1[i][0];
        } else {
            result.push(arr1[i]);
        }
    }
    
    return result.sort(function(a, b) {
        return a[1] >  b[1];
    });
}

// Example inventory lists
var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
];

var newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];

inventory(curInv, newInv);