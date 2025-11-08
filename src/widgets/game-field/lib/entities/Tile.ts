let tileCounter = 0;

export class Tile {
  readonly id: string;

  readonly color: string;

  private _y: number;

  private _x: number;

  private _z: number;

  constructor(color: string, y: number, x: number, z: number) {
    this.id = `${tileCounter++}`;
    this.color = color;
    this._y = y;
    this._x = x;
    this._z = z;
  }

  set y(value: number) {
    this._y = value;
  }

  set x(value: number) {
    this._x = value;
  }

  set z(value: number) {
    this._x = value;
  }

  get y() {
    return this._y;
  }

  get x() {
    return this._x;
  }

  get z() {
    return this._z;
  }
}
