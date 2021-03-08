/**
 * Drag direction helper
 */
class Direction {
  constructor(startCoord, direction) {
    if (!Direction.DIR_SETTINGS.hasOwnProperty(direction)) {
      throw new Error("Unknown direction provided.");
    }
    this.direction = Direction.DIR_SETTINGS[direction];

    this._startCoord = startCoord;
    this.lastCoord = startCoord;
    this.DIR_POSITIVE = this.direction.dirPositive;
    this.DIR_NEGATIVE = this.direction.dirNegative;
  }

  static get DIR_VERTICAL() {
    return "vertical";
  }

  static get DIR_HORIZONTAL() {
    return "horizontal";
  }

  static get DIR_SETTINGS() {
    return {
      [Direction.DIR_VERTICAL]: {
        dirPositive: "down",
        dirNegative: "up",
      },

      [Direction.DIR_HORIZONTAL]: {
        dirPositive: "right",
        dirNegative: "left",
      },
    };
  }

  set curDir(currentDirection) {
    this._curDir = currentDirection;
  }

  set lastCoord(coordinate) {
    this._lastCoord = coordinate;
  }

  get startCoord() {
    return this._startCoord;
  }

  get curDir() {
    return this._curDir;
  }

  get lastCoord() {
    return this._lastCoord;
  }

  setCurDir(coordinate) {
    if (coordinate !== this.lastCoord) {
      this.curDir =
        coordinate > this.lastCoord ? this.DIR_POSITIVE : this.DIR_NEGATIVE;
      this.lastCoord = coordinate;
    }

    return this;
  }

  isDirPositive() {
    return this.curDir === this.DIR_POSITIVE;
  }

  isDirPositiveFromStart() {
    return this.lastCoord > this.startCoord;
  }

  distTravelled() {
    return Math.abs(this.startCoord - this.lastCoord);
  }
}

export { Direction as DragDirection };
