"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vector_1 = require("./vector");
class Sphere {
    constructor(center, radius, surface) {
        this.center = center;
        this.surface = surface;
        this.radius2 = radius * radius;
    }
    normal(pos) { return vector_1.default.norm(vector_1.default.minus(pos, this.center)); }
    intersect(ray) {
        var eo = vector_1.default.minus(this.center, ray.start);
        var v = vector_1.default.dot(eo, ray.dir);
        var dist = 0;
        if (v >= 0) {
            var disc = this.radius2 - (vector_1.default.dot(eo, eo) - v * v);
            if (disc >= 0) {
                dist = v - Math.sqrt(disc);
            }
        }
        if (dist === 0) {
            return null;
        }
        else {
            return { thing: this, ray: ray, dist: dist };
        }
    }
}
exports.Sphere = Sphere;
class Plane {
    constructor(norm, offset, surface) {
        this.surface = surface;
        this.normal = function (pos) { return norm; };
        this.intersect = function (ray) {
            var denom = vector_1.default.dot(norm, ray.dir);
            if (denom > 0) {
                return null;
            }
            else {
                var dist = (vector_1.default.dot(norm, ray.start) + offset) / (-denom);
                return { thing: this, ray: ray, dist: dist };
            }
        };
    }
}
exports.Plane = Plane;
//# sourceMappingURL=things.js.map