"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const raytrace_1 = require("./raytrace");
const camera_1 = require("./camera");
exports.Camera = camera_1.default;
const vector_1 = require("./vector");
exports.Vector = vector_1.default;
const scene_1 = require("./scene");
exports.defaultScene = scene_1.defaultScene;
exports.scene2 = scene_1.scene2;
exports.emptyScene = scene_1.emptyScene;
const Surfaces = require("./surface");
exports.Surfaces = Surfaces;
const things_1 = require("./things");
exports.Sphere = things_1.Sphere;
exports.Plane = things_1.Plane;
exports.default = raytrace_1.default;
//# sourceMappingURL=index.js.map