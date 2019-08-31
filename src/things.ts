import Vector from './vector';
import Intersection from './intersection';
import Surface from './surface';
import Ray from './ray';

export default interface Thing {
  intersect: (ray: Ray) => Intersection | null;
  normal: (pos: Vector) => Vector;
  surface: Surface;
}

export class Sphere implements Thing {
  public radius2: number;

  constructor(public center: Vector, radius: number, public surface: Surface) {
    this.radius2 = radius * radius;
  }
  normal(pos: Vector): Vector { return Vector.norm(Vector.minus(pos, this.center)); }
  intersect(ray: Ray): Intersection | null {
    var eo = Vector.minus(this.center, ray.start);
    var v = Vector.dot(eo, ray.dir);
    var dist = 0;
    if (v >= 0) {
      var disc = this.radius2 - (Vector.dot(eo, eo) - v * v);
      if (disc >= 0) {
        dist = v - Math.sqrt(disc);
      }
    }
    if (dist === 0) {
      return null;
    } else {
      return <Intersection>{ thing: this, ray: ray, dist: dist };
    }
  }
}

export class Plane implements Thing {
  public normal: (pos: Vector) => Vector;
  public intersect: (ray: Ray) => Intersection | null;
  constructor(norm: Vector, offset: number, public surface: Surface) {
    this.normal = function (pos: Vector) { return norm; }
    this.intersect = function (ray: Ray): Intersection | null {
      var denom = Vector.dot(norm, ray.dir);
      if (denom > 0) {
        return null;
      } else {
        var dist = (Vector.dot(norm, ray.start) + offset) / (-denom);
        return <Intersection>{ thing: this, ray: ray, dist: dist };
      }
    }
  }
}
