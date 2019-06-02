import Vector from './vector';
import Intersection from './intersection';
import Surface from './surface';
import Ray from './ray';
export default interface Thing {
    intersect: (ray: Ray) => Intersection | null;
    normal: (pos: Vector) => Vector;
    surface: Surface;
}
export declare class Sphere implements Thing {
    center: Vector;
    surface: Surface;
    radius2: number;
    constructor(center: Vector, radius: number, surface: Surface);
    normal(pos: Vector): Vector;
    intersect(ray: Ray): Intersection | null;
}
export declare class Plane implements Thing {
    surface: Surface;
    normal: (pos: Vector) => Vector;
    intersect: (ray: Ray) => Intersection | null;
    constructor(norm: Vector, offset: number, surface: Surface);
}
