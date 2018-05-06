
var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    var nameArr = firstAndLast.split(" "), family = nameArr.length - 1;
    this.setFirstName = function(first) {
      nameArr.splice(0, 1, first);
    };
    this.setLastName = function(last) {
      nameArr.splice(family, 1, last);
    };
    this.setFullName = function(firstAndLast) {
      nameArr = firstAndLast.split(" ");
    };
    this.getFirstName = function() {
      return nameArr[0];
    };
    this.getLastName = function() {
      return nameArr[family];
    }
    this.getFullName = function() {
      return nameArr.join(" ");
    }
};

var bob = new Person('Bob Ross');
bob.getFullName();
