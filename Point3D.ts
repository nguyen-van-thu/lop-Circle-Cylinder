import {Point2D} from "./Point2D";


export class Point3D extends Point2D {
    private _z : number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this._z = z;
    }

    get z(): number {
        return this._z;
    }

    set z(value: number) {
        this._z = value;
    }
    getxyz() : any {
        return `x:${this._x} y :${this._y} z : ${this._z}`
    }
    setxy(x: number, y: number) : void {
        super.setxy(x, y);
    }
}