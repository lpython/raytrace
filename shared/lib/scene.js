"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vector_1 = require("./vector");
const color_1 = require("./color");
const things_1 = require("./things");
const camera_1 = require("./camera");
const Surfaces = require("./surface");
function defaultScene() {
    return {
        things: [
            new things_1.Plane(new vector_1.default(0.0, 1.0, 0.0), 0.0, Surfaces.checkerboard),
            new things_1.Sphere(new vector_1.default(0.0, 1.0, -0.25), 1.0, Surfaces.shiny),
            new things_1.Sphere(new vector_1.default(-1.0, 0.5, 1.5), 0.5, Surfaces.shiny)
        ],
        lights: [
            { pos: new vector_1.default(-2.0, 2.5, 0.0), color: new color_1.default(0.49, 0.07, 0.07) },
            { pos: new vector_1.default(1.5, 2.5, 1.5), color: new color_1.default(0.07, 0.07, 0.49) },
            { pos: new vector_1.default(1.5, 2.5, -1.5), color: new color_1.default(0.07, 0.49, 0.071) },
            { pos: new vector_1.default(0.0, 3.5, 0.0), color: new color_1.default(0.21, 0.21, 0.35) }
        ],
        camera: new camera_1.default(new vector_1.default(3.0, 2.0, 4.0), new vector_1.default(-1.0, 0.5, 0.0))
    };
}
exports.defaultScene = defaultScene;
function scene2() {
    return {
        things: [
            new things_1.Plane(new vector_1.default(0.0, 1.0, 0.0), 0.0, Surfaces.checkerboard),
            new things_1.Sphere(new vector_1.default(0.0, 1.0, -0.25), 1.0, Surfaces.shiny),
            new things_1.Sphere(new vector_1.default(-1.0, 0.5, 1.5), 0.5, Surfaces.shiny),
            new things_1.Sphere(new vector_1.default(-5.5, 2.0, -3.5), 1.25, Surfaces.checkerboard)
        ],
        lights: [
            { pos: new vector_1.default(-2.0, 2.5, 0.0), color: new color_1.default(0.49, 0.07, 0.07) },
            { pos: new vector_1.default(1.5, 2.5, 1.5), color: new color_1.default(0.07, 0.07, 0.49) },
            { pos: new vector_1.default(1.5, 2.5, -1.5), color: new color_1.default(0.07, 0.49, 0.071) },
            { pos: new vector_1.default(0.0, 3.5, 0.0), color: new color_1.default(0.21, 0.21, 0.35) }
        ],
        camera: new camera_1.default(new vector_1.default(3.0, 2.0, 4.0), new vector_1.default(-1.0, 0.5, 0.0))
    };
}
exports.scene2 = scene2;
function emptyScene() {
    return {
        things: [],
        lights: [],
        camera: new camera_1.default(new vector_1.default(3.0, 2.0, 4.0), new vector_1.default(-1.0, 0.5, 0.0))
    };
}
exports.emptyScene = emptyScene;
//# sourceMappingURL=scene.js.map