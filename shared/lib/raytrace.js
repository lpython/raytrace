"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vector_1 = require("./vector");
const color_1 = require("./color");
class RayTracer {
    constructor() {
        this.maxDepth = 5;
    }
    intersections(ray, scene) {
        var closest = +Infinity;
        var closestInter = null;
        for (var i in scene.things) {
            var inter = scene.things[i].intersect(ray);
            if (inter != null && inter.dist < closest) {
                closestInter = inter;
                closest = inter.dist;
            }
        }
        return closestInter;
    }
    testRay(ray, scene) {
        var isect = this.intersections(ray, scene);
        if (isect != null) {
            return isect.dist;
        }
        else {
            return null;
        }
    }
    traceRay(ray, scene, depth) {
        var isect = this.intersections(ray, scene);
        if (isect === null) {
            return color_1.default.background;
        }
        else {
            return this.shade(isect, scene, depth);
        }
    }
    shade(isect, scene, depth) {
        var d = isect.ray.dir;
        var pos = vector_1.default.plus(vector_1.default.times(isect.dist, d), isect.ray.start);
        var normal = isect.thing.normal(pos);
        var reflectDir = vector_1.default.minus(d, vector_1.default.times(2, vector_1.default.times(vector_1.default.dot(normal, d), normal)));
        var naturalColor = color_1.default.plus(color_1.default.background, this.getNaturalColor(isect.thing, pos, normal, reflectDir, scene));
        var reflectedColor = (depth >= this.maxDepth) ? color_1.default.grey : this.getReflectionColor(isect.thing, pos, normal, reflectDir, scene, depth);
        return color_1.default.plus(naturalColor, reflectedColor);
    }
    getReflectionColor(thing, pos, normal, rd, scene, depth) {
        return color_1.default.scale(thing.surface.reflect(pos), this.traceRay({ start: pos, dir: rd }, scene, depth + 1));
    }
    getNaturalColor(thing, pos, norm, rd, scene) {
        var addLight = (col, light) => {
            var ldis = vector_1.default.minus(light.pos, pos);
            var livec = vector_1.default.norm(ldis);
            var neatIsect = this.testRay({ start: pos, dir: livec }, scene);
            var isInShadow = (neatIsect === null) ? false : (neatIsect <= vector_1.default.mag(ldis));
            if (isInShadow) {
                return col;
            }
            else {
                var illum = vector_1.default.dot(livec, norm);
                var lcolor = (illum > 0) ? color_1.default.scale(illum, light.color)
                    : color_1.default.defaultColor;
                var specular = vector_1.default.dot(livec, vector_1.default.norm(rd));
                var scolor = (specular > 0) ? color_1.default.scale(Math.pow(specular, thing.surface.roughness), light.color)
                    : color_1.default.defaultColor;
                return color_1.default.plus(col, color_1.default.plus(color_1.default.times(thing.surface.diffuse(pos), lcolor), color_1.default.times(thing.surface.specular(pos), scolor)));
            }
        };
        return scene.lights.reduce(addLight, color_1.default.defaultColor);
    }
    renderToImage(scene, image) {
        var height = image.height;
        var width = image.width;
        var getPoint = function (x, y, camera) {
            var recenterX = function (x) { return (x - (width / 2.0)) / 2.0 / width; };
            var recenterY = function (y) { return -(y - (height / 2.0)) / 2.0 / height; };
            return vector_1.default.norm(vector_1.default.plus(camera.forward, vector_1.default.plus(vector_1.default.times(recenterX(x), camera.right), vector_1.default.times(recenterY(y), camera.up))));
        };
        for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
                var color = this.traceRay({ start: scene.camera.pos, dir: getPoint(x, y, scene.camera) }, scene, 0);
                var c = color_1.default.toDrawingColor(color);
                image.data[((y * (width * 4)) + (x * 4))] = c.r;
                image.data[((y * (width * 4)) + (x * 4)) + 1] = c.g;
                image.data[((y * (width * 4)) + (x * 4)) + 2] = c.b;
                image.data[((y * (width * 4)) + (x * 4)) + 3] = 255;
            }
        }
    }
}
exports.default = RayTracer;
//# sourceMappingURL=raytrace.js.map