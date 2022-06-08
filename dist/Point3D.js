"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point3D = void 0;
const Point2D_1 = require("./Point2D");
class Point3D extends Point2D_1.Point2D {
    constructor(x, y, z) {
        super(x, y);
        this._z = z;
    }
    get z() {
        return this._z;
    }
    set z(value) {
        this._z = value;
    }
    getxyz() {
        return `x:${this._x} y :${this._y} z : ${this._z}`;
    }
    setxy(x, y) {
        super.setxy(x, y);
    }
}
exports.Point3D = Point3D;
