// I may have misunderstood the instructions on this.
// The code works but I had to re-use a parameter
// argument as a var. Surely this is an anti-pattern.
// Additionally, I would have put these methods
// in the prototype object, but for some reason
// one of the tests counted the object's keys. 
// Hence, this outcome. 

var Person = function(firstAndLast) {
    obj = Object.create(Person.prototype);
    
    obj.getFirstName = function() {
        return firstAndLast.split(' ')[0];
    };
    obj.getLastName = function() {
        return firstAndLast.split(' ')[1];
    };
    obj.getFullName = function() {
        return firstAndLast;
    };
    obj.setFirstName = function(first) {
        arr = firstAndLast.split(' ');
        arr[0] = first;
        firstAndLast = arr.join(' ');
    };
    obj.setLastName = function(last) {
        arr = firstAndLast.split(' ');
        arr[1] = last;
        firstAndLast = arr.join(' ');
    };
    obj.setFullName = function(fullName) {
        firstAndLast = fullName;
    };
    return obj;
};

var bob = new Person('Bob Ross');
bob.getFullName();