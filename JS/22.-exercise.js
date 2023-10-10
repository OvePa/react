// class form
class AbstractUser {
  constructor() {
    if (new.target === AbstractUser) {
      throw new Error("ABstract class.");
    }
    this.accessMatrix = {};
  }
  hasAccess(page) {
    return this.accessMatrix[page];
  }
}

class SuperUser extends AbstractUser {
  hasAccess(page) {
    return true;
  }
}

let su = new SuperUser();
//let au = new AbstractUser();
// ^ Throws the new error

// prototypal form
let AbstractUser2 = function () {
  if (new.target === AbstractUser2) {
    throw new Error("Abstract class.");
  }
  this.accessMatrix = {};
};

AbstractUser2.prototype.hasAccess = function (page) {
  return this.accessMatrix[page];
};

let SuperUser2 = function () {
  AbstractUser2.call(this);
};

SuperUser2.prototype = Object.create(AbstractUser2.prototype);
SuperUser2.prototype.constructor = SuperUser2;
SuperUser2.prototype.hasAccess = function (page) {
  return true;
};
//let su = new SuperUser();
//let au = new AbstractUser();
// The above two lines of code will give an error: Uncaught Error: Abstract class cannot be instantiated.(...)
