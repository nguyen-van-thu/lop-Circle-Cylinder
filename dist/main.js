"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Point2D_1 = require("./Point2D");
const Point3D_1 = require("./Point3D");
let diem = new Point2D_1.Point2D(3, 5);
let diem3 = new Point3D_1.Point3D(3, 5, 7);
console.log(`diem 1 la ${diem.getxy()}`);
console.log(`diem 2 la ${diem3.getxyz()}`);
