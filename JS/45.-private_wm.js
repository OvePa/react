class Square {
  constructor(width) {
    this._width = width;
  }
  get area() {
    return this._width * this._width;
  }
}

//Write your Code here

class Square1 {
  constructor(width = new WeakMap()) {
    let _width = width;
  }

  get area() {
    return _width * _width;
  }
}

let Square = (function () {
  let _width = new WeakMap();
  class Square {
    constructor(width) {
      _width.set(this, width);
    }
    get area() {
      let width = _width.get(this);
      return width * width;
    }
  }
  return Square;
})();
