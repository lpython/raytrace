export default class Vector {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number);
    static times(k: number, v: Vector): Vector;
    static minus(v1: Vector, v2: Vector): Vector;
    static plus(v1: Vector, v2: Vector): Vector;
    static dot(v1: Vector, v2: Vector): number;
    static mag(v: Vector): number;
    static norm(v: Vector): Vector;
    static cross(v1: Vector, v2: Vector): Vector;
}
