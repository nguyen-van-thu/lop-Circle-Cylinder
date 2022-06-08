import {Point2D} from "./Point2D";
import {Point3D} from "./Point3D";
let diem = new Point2D(3,5);
let diem3 = new Point3D(3,5,7);
console.log(`diem 1 la ${diem.getxy()}`);
console.log(`diem 2 la ${diem3.getxyz()}`);