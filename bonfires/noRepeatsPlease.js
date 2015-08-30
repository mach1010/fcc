function permAlone(str) {
    function permutations(word) {
        if (word.length <= 1) {
            return [word];
        }

        var perms = permutations(word.slice(1, word.length)),
        char = word[0],
        result = [];
        perms.forEach(function (perm) {
            for (var i = 0; i < perm.length + 1; i += 1) {
                result.push(perm.slice(0, i) + char + perm.slice(i, perm.length));
            }
        });
        return result;
    }
    
     return permutations(str).filter(function(perm) {
        for(var i=0; i<perm.length; i++) {
            if(perm[i] == perm[i+1]) return false;
        }
        return true;
    }).length;
}

permAlone('aab');