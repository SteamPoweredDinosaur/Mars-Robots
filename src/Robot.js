const orientationOrder = ["N", "E", "S", "W"]

class Robot {
  constructor({position, orientation}){
    this.position = position;
    // Represent orientation as an int internally but allow classes using to pass a string representation e.g.

    this.orientation = orientationOrder.indexOf(orientation);

    if(this.orientation === -1) {
      throw Error(`Passed ${this.orientation} for orientation but this value is unknown must be one of ${orientationOrder}`)
    }
  }

  moveRight() {
    this.orientation++

    if(this.orientation >= orientationOrder.length) {
      this.orientation = 0;
    }
  }

  moveLeft() {
    this.orientation--;

    if(this.orientation < 0) {
      this.orientation = orientationOrder.length - 1;
    }
  }

  getOrientation() {
    return orientationOrder[this.orientation]
  }
}

module.exports = Robot;