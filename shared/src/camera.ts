import Vector from './vector';


export default class Camera {
  public forward: Vector;
  public right: Vector;
  public up: Vector;

  constructor(public pos: Vector, lookAt: Vector) {
    var down = new Vector(0.0, -1.0, 0.0);
    this.forward = Vector.norm(Vector.minus(lookAt, this.pos));
    this.right = Vector.times(1.5, Vector.norm(Vector.cross(this.forward, down)));
    this.up = Vector.times(1.5, Vector.norm(Vector.cross(this.forward, this.right)));
  }
}