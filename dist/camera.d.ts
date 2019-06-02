import Vector from './vector';
export default class Camera {
    pos: Vector;
    forward: Vector;
    right: Vector;
    up: Vector;
    constructor(pos: Vector, lookAt: Vector);
}
