const _width = Symbol("width");
class Square {
  constructor(width0) {
    this[_width] = width0;
  }
  getWidth() {
    return this[_width];
  }
}

//closure
let Square = (function () {
  const _width = Symbol("width");

  return class {
    constructor(width0) {
      this[_width] = width0;
    }
    getWidth() {
      return this[_width];
    }
  };
})();
