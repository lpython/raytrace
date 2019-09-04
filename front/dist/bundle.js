/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../sceneXML/lib/bundle.js":
/*!*********************************!*\
  !*** ../sceneXML/lib/bundle.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../shared/lib/camera.js":
/*!*******************************!*\
  !*** ../shared/lib/camera.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const vector_1 = __webpack_require__(/*! ./vector */ "../shared/lib/vector.js");
class Camera {
    constructor(pos, lookAt) {
        this.pos = pos;
        var down = new vector_1.default(0.0, -1.0, 0.0);
        this.forward = vector_1.default.norm(vector_1.default.minus(lookAt, this.pos));
        this.right = vector_1.default.times(1.5, vector_1.default.norm(vector_1.default.cross(this.forward, down)));
        this.up = vector_1.default.times(1.5, vector_1.default.norm(vector_1.default.cross(this.forward, this.right)));
    }
}
exports.default = Camera;
//# sourceMappingURL=camera.js.map

/***/ }),

/***/ "../shared/lib/color.js":
/*!******************************!*\
  !*** ../shared/lib/color.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    static scale(k, v) { return new Color(k * v.r, k * v.g, k * v.b); }
    static plus(v1, v2) { return new Color(v1.r + v2.r, v1.g + v2.g, v1.b + v2.b); }
    static times(v1, v2) { return new Color(v1.r * v2.r, v1.g * v2.g, v1.b * v2.b); }
    static toDrawingColor(c) {
        var legalize = (d) => d > 1 ? 1 : d;
        return {
            r: Math.floor(legalize(c.r) * 255),
            g: Math.floor(legalize(c.g) * 255),
            b: Math.floor(legalize(c.b) * 255)
        };
    }
}
exports.default = Color;
Color.white = new Color(1.0, 1.0, 1.0);
Color.grey = new Color(0.5, 0.5, 0.5);
Color.black = new Color(0.0, 0.0, 0.0);
Color.background = Color.black;
Color.defaultColor = Color.black;
//# sourceMappingURL=color.js.map

/***/ }),

/***/ "../shared/lib/index.js":
/*!******************************!*\
  !*** ../shared/lib/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const raytrace_1 = __webpack_require__(/*! ./raytrace */ "../shared/lib/raytrace.js");
const vector_1 = __webpack_require__(/*! ./vector */ "../shared/lib/vector.js");
exports.Vector = vector_1.default;
const camera_1 = __webpack_require__(/*! ./camera */ "../shared/lib/camera.js");
exports.Camera = camera_1.default;
const color_1 = __webpack_require__(/*! ./color */ "../shared/lib/color.js");
exports.Color = color_1.default;
const Surfaces = __webpack_require__(/*! ./surface */ "../shared/lib/surface.js");
exports.Surfaces = Surfaces;
const things_1 = __webpack_require__(/*! ./things */ "../shared/lib/things.js");
exports.Sphere = things_1.Sphere;
exports.Plane = things_1.Plane;
const scene_1 = __webpack_require__(/*! ./scene */ "../shared/lib/scene.js");
exports.defaultScene = scene_1.defaultScene;
exports.scene2 = scene_1.scene2;
exports.emptyScene = scene_1.emptyScene;
exports.default = raytrace_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../shared/lib/raytrace.js":
/*!*********************************!*\
  !*** ../shared/lib/raytrace.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const vector_1 = __webpack_require__(/*! ./vector */ "../shared/lib/vector.js");
const color_1 = __webpack_require__(/*! ./color */ "../shared/lib/color.js");
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

/***/ }),

/***/ "../shared/lib/scene.js":
/*!******************************!*\
  !*** ../shared/lib/scene.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const vector_1 = __webpack_require__(/*! ./vector */ "../shared/lib/vector.js");
const color_1 = __webpack_require__(/*! ./color */ "../shared/lib/color.js");
const things_1 = __webpack_require__(/*! ./things */ "../shared/lib/things.js");
const camera_1 = __webpack_require__(/*! ./camera */ "../shared/lib/camera.js");
const Surfaces = __webpack_require__(/*! ./surface */ "../shared/lib/surface.js");
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

/***/ }),

/***/ "../shared/lib/surface.js":
/*!********************************!*\
  !*** ../shared/lib/surface.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = __webpack_require__(/*! ./color */ "../shared/lib/color.js");
exports.shiny = {
    diffuse: function (pos) { return color_1.default.white; },
    specular: function (pos) { return color_1.default.grey; },
    reflect: function (pos) { return 0.7; },
    roughness: 250
};
exports.checkerboard = {
    diffuse: function (pos) {
        if ((Math.floor(pos.z) + Math.floor(pos.x)) % 2 !== 0) {
            return color_1.default.white;
        }
        else {
            return color_1.default.black;
        }
    },
    specular: function (pos) { return color_1.default.white; },
    reflect: function (pos) {
        if ((Math.floor(pos.z) + Math.floor(pos.x)) % 2 !== 0) {
            return 0.1;
        }
        else {
            return 0.7;
        }
    },
    roughness: 150
};
//# sourceMappingURL=surface.js.map

/***/ }),

/***/ "../shared/lib/things.js":
/*!*******************************!*\
  !*** ../shared/lib/things.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const vector_1 = __webpack_require__(/*! ./vector */ "../shared/lib/vector.js");
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

/***/ }),

/***/ "../shared/lib/vector.js":
/*!*******************************!*\
  !*** ../shared/lib/vector.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Vector {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static times(k, v) { return new Vector(k * v.x, k * v.y, k * v.z); }
    static minus(v1, v2) { return new Vector(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z); }
    static plus(v1, v2) { return new Vector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z); }
    static dot(v1, v2) { return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z; }
    static mag(v) { return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z); }
    static norm(v) {
        var mag = Vector.mag(v);
        var div = (mag === 0) ? Infinity : 1.0 / mag;
        return Vector.times(div, v);
    }
    static cross(v1, v2) {
        return new Vector(v1.y * v2.z - v1.z * v2.y, v1.z * v2.x - v1.x * v2.z, v1.x * v2.y - v1.y * v2.x);
    }
}
exports.default = Vector;
//# sourceMappingURL=vector.js.map

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sceneXML_1 = __importStar(__webpack_require__(/*! ./sceneXML */ "./src/sceneXML.ts"));
exports.Parse = sceneXML_1.default;
exports.basicSceneXML = sceneXML_1.basicSceneXML;


/***/ }),

/***/ "./src/sceneXML.ts":
/*!*************************!*\
  !*** ./src/sceneXML.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const raytrace_1 = __webpack_require__(/*! @python36/raytrace */ "../shared/lib/index.js");
// Throws error on invalid xml
function ParseXMLToScene(xmlInput) {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlInput, 'application/xml');
    console.log('xml', xml);
    const parserErrorNode = xml.getElementsByTagName('parsererror');
    if (parserErrorNode.length != 0) {
        throw new SyntaxError();
    }
    const objects = [];
    const lights = [];
    let camera = new raytrace_1.Camera(new raytrace_1.Vector(3.0, 2.0, 4.0), new raytrace_1.Vector(-1.0, 0.5, 0.0));
    //Level 1
    const sceneNode = xml.getElementsByTagName('scene')[0];
    // console.log(sceneNode);
    //Level 2
    const cameraNode = sceneNode.getElementsByTagName('camera')[0];
    const objectsNode = sceneNode.getElementsByTagName('objects')[0];
    const lightsNode = sceneNode.getElementsByTagName('lights')[0];
    //Level 3
    const planeNodes = objectsNode.getElementsByTagName('plane');
    const sphereNodes = objectsNode.getElementsByTagName('sphere');
    const lightNodes = lightsNode.getElementsByTagName('light');
    // xml nodes to typescript objects
    for (let p of planeNodes) {
        const requiredAttributes = ['pos', 'offset', 'surface'];
        if (requiredAttributes.every(a => p.hasAttribute(a))) {
            const posAtt = p.getAttribute('pos');
            const offsetAtt = p.getAttribute('offset');
            const surfaceAtt = p.getAttribute('surface');
            const numbers = posAtt.split(',').slice(0, 3).map(s => parseFloat(s));
            const vec = new raytrace_1.Vector(numbers[0], numbers[1], numbers[2]);
            const offset = parseFloat(offsetAtt);
            let surface = raytrace_1.Surfaces.checkerboard;
            if (surfaceAtt === 'shiny') {
                surface = raytrace_1.Surfaces.shiny;
            }
            // console.log('vec:', vec);
            // console.log('numbers:', numbers);
            // console.log('offset:', offset);
            // console.log('surface:', surface);
            objects.push(new raytrace_1.Plane(vec, offset, surface));
        }
    }
    for (let s of sphereNodes) {
        const requiredAttributes = ['pos', 'size', 'surface'];
        if (requiredAttributes.every(a => s.hasAttribute(a))) {
            const posAtt = s.getAttribute('pos');
            const sizeAtt = s.getAttribute('size');
            const surfaceAtt = s.getAttribute('surface');
            console.log({ posAtt, sizeAtt, surfaceAtt });
            const numbers = posAtt.split(',').slice(0, 3).map(s => parseFloat(s));
            const vec = new raytrace_1.Vector(numbers[0], numbers[1], numbers[2]);
            const size = parseFloat(sizeAtt);
            let surface = raytrace_1.Surfaces.checkerboard;
            if (surfaceAtt === 'shiny') {
                surface = raytrace_1.Surfaces.shiny;
            }
            // console.log('vec:', vec);
            // console.log('numbers:', numbers);
            // console.log('size:', size);
            // console.log('surface:', surface);
            objects.push(new raytrace_1.Sphere(vec, size, surface));
        }
    }
    for (let l of lightNodes) {
        const requiredAttributes = ['pos', 'color'];
        if (requiredAttributes.every(a => l.hasAttribute(a))) {
            const posAtt = l.getAttribute('pos');
            const colorAtt = l.getAttribute('color');
            console.log({ posAtt, colorAtt });
            const numbers = posAtt.split(',').slice(0, 3).map(s => parseFloat(s));
            const vec = new raytrace_1.Vector(numbers[0], numbers[1], numbers[2]);
            const color = colorAtt.split(',').slice(0, 3).map(s => parseFloat(s));
            // console.log('vec:', vec);
            // console.log('numbers:', numbers);
            // console.log('color:', color);
            lights.push({ pos: vec, color: new raytrace_1.Color(color[0], color[1], color[2]) });
        }
    }
    (function parseLight(cameraNode) {
        console.log(cameraNode);
        const requiredAttributes = ['pos', 'lookAt'];
        if (requiredAttributes.every(a => cameraNode.hasAttribute(a))) {
            const posAtt = cameraNode.getAttribute('pos');
            const lookAtAtt = cameraNode.getAttribute('lookAt');
            console.log({ posAtt, lookAtAtt });
            let numbers = posAtt.split(',').slice(0, 3).map(s => parseFloat(s));
            const pos = new raytrace_1.Vector(numbers[0], numbers[1], numbers[2]);
            numbers = lookAtAtt.split(',').slice(0, 3).map(s => parseFloat(s));
            const lookAt = new raytrace_1.Vector(numbers[0], numbers[1], numbers[2]);
            // console.log({ pos, lookAt })
            camera = new raytrace_1.Camera(pos, lookAt);
        }
    })(cameraNode);
    console.log(objects);
    console.log(lights);
    const scene = {
        things: objects,
        lights: lights,
        camera
    };
    console.log('parsed scene : ', scene);
    return scene;
}
exports.default = ParseXMLToScene;
exports.basicSceneXML = 
// export function DefaultXML(): string {
//  return 
`
<scene>
  <camera pos="3.0, 2.0, 4.0" lookAt="-1.0, 0.5, 0.0" />
  <objects>
    <plane pos="0.0,1.0,0.0" offset="0.0" surface="checkerboard" />
    <sphere pos="0.0,1.0,-0.25" size="1.0" surface="shiny"/>
    <sphere pos="-1.0,0.5,1.5" size="0.5" surface="shiny"/>
    <sphere pos="-5.5,2.0,-3.5" size="1.25" surface="checkerboard"/>
  </objects>
  <lights>
    <light pos="-2.0, 2.5, 0.0" color="0.49, 0.07, 0.07" /> 
    <light pos="1.5, 2.5, 1.5" color="0.07, 0.07, 0.49" /> 
    <light pos="1.5, 2.5, -1.5" color="0.07, 0.49, 0.071" /> 
    <light pos="0.0, 3.5, 0.0" color="0.21, 0.21, 0.35" /> 
  </lights>
</scene>
  `.trim();
//}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NoYXJlZC9saWIvY2FtZXJhLmpzIiwid2VicGFjazovLy8uLi9zaGFyZWQvbGliL2NvbG9yLmpzIiwid2VicGFjazovLy8uLi9zaGFyZWQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9zaGFyZWQvbGliL3JheXRyYWNlLmpzIiwid2VicGFjazovLy8uLi9zaGFyZWQvbGliL3NjZW5lLmpzIiwid2VicGFjazovLy8uLi9zaGFyZWQvbGliL3N1cmZhY2UuanMiLCJ3ZWJwYWNrOi8vLy4uL3NoYXJlZC9saWIvdGhpbmdzLmpzIiwid2VicGFjazovLy8uLi9zaGFyZWQvbGliL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lWE1MLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7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QUUsQ0FBQztBQUNYLEdBQUciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCB2ZWN0b3JfMSA9IHJlcXVpcmUoXCIuL3ZlY3RvclwiKTtcclxuY2xhc3MgQ2FtZXJhIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcywgbG9va0F0KSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICAgICAgdmFyIGRvd24gPSBuZXcgdmVjdG9yXzEuZGVmYXVsdCgwLjAsIC0xLjAsIDAuMCk7XHJcbiAgICAgICAgdGhpcy5mb3J3YXJkID0gdmVjdG9yXzEuZGVmYXVsdC5ub3JtKHZlY3Rvcl8xLmRlZmF1bHQubWludXMobG9va0F0LCB0aGlzLnBvcykpO1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSB2ZWN0b3JfMS5kZWZhdWx0LnRpbWVzKDEuNSwgdmVjdG9yXzEuZGVmYXVsdC5ub3JtKHZlY3Rvcl8xLmRlZmF1bHQuY3Jvc3ModGhpcy5mb3J3YXJkLCBkb3duKSkpO1xyXG4gICAgICAgIHRoaXMudXAgPSB2ZWN0b3JfMS5kZWZhdWx0LnRpbWVzKDEuNSwgdmVjdG9yXzEuZGVmYXVsdC5ub3JtKHZlY3Rvcl8xLmRlZmF1bHQuY3Jvc3ModGhpcy5mb3J3YXJkLCB0aGlzLnJpZ2h0KSkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENhbWVyYTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FtZXJhLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIENvbG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHIsIGcsIGIpIHtcclxuICAgICAgICB0aGlzLnIgPSByO1xyXG4gICAgICAgIHRoaXMuZyA9IGc7XHJcbiAgICAgICAgdGhpcy5iID0gYjtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzY2FsZShrLCB2KSB7IHJldHVybiBuZXcgQ29sb3IoayAqIHYuciwgayAqIHYuZywgayAqIHYuYik7IH1cclxuICAgIHN0YXRpYyBwbHVzKHYxLCB2MikgeyByZXR1cm4gbmV3IENvbG9yKHYxLnIgKyB2Mi5yLCB2MS5nICsgdjIuZywgdjEuYiArIHYyLmIpOyB9XHJcbiAgICBzdGF0aWMgdGltZXModjEsIHYyKSB7IHJldHVybiBuZXcgQ29sb3IodjEuciAqIHYyLnIsIHYxLmcgKiB2Mi5nLCB2MS5iICogdjIuYik7IH1cclxuICAgIHN0YXRpYyB0b0RyYXdpbmdDb2xvcihjKSB7XHJcbiAgICAgICAgdmFyIGxlZ2FsaXplID0gKGQpID0+IGQgPiAxID8gMSA6IGQ7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcjogTWF0aC5mbG9vcihsZWdhbGl6ZShjLnIpICogMjU1KSxcclxuICAgICAgICAgICAgZzogTWF0aC5mbG9vcihsZWdhbGl6ZShjLmcpICogMjU1KSxcclxuICAgICAgICAgICAgYjogTWF0aC5mbG9vcihsZWdhbGl6ZShjLmIpICogMjU1KVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gQ29sb3I7XHJcbkNvbG9yLndoaXRlID0gbmV3IENvbG9yKDEuMCwgMS4wLCAxLjApO1xyXG5Db2xvci5ncmV5ID0gbmV3IENvbG9yKDAuNSwgMC41LCAwLjUpO1xyXG5Db2xvci5ibGFjayA9IG5ldyBDb2xvcigwLjAsIDAuMCwgMC4wKTtcclxuQ29sb3IuYmFja2dyb3VuZCA9IENvbG9yLmJsYWNrO1xyXG5Db2xvci5kZWZhdWx0Q29sb3IgPSBDb2xvci5ibGFjaztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29sb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcmF5dHJhY2VfMSA9IHJlcXVpcmUoXCIuL3JheXRyYWNlXCIpO1xyXG5jb25zdCB2ZWN0b3JfMSA9IHJlcXVpcmUoXCIuL3ZlY3RvclwiKTtcclxuZXhwb3J0cy5WZWN0b3IgPSB2ZWN0b3JfMS5kZWZhdWx0O1xyXG5jb25zdCBjYW1lcmFfMSA9IHJlcXVpcmUoXCIuL2NhbWVyYVwiKTtcclxuZXhwb3J0cy5DYW1lcmEgPSBjYW1lcmFfMS5kZWZhdWx0O1xyXG5jb25zdCBjb2xvcl8xID0gcmVxdWlyZShcIi4vY29sb3JcIik7XHJcbmV4cG9ydHMuQ29sb3IgPSBjb2xvcl8xLmRlZmF1bHQ7XHJcbmNvbnN0IFN1cmZhY2VzID0gcmVxdWlyZShcIi4vc3VyZmFjZVwiKTtcclxuZXhwb3J0cy5TdXJmYWNlcyA9IFN1cmZhY2VzO1xyXG5jb25zdCB0aGluZ3NfMSA9IHJlcXVpcmUoXCIuL3RoaW5nc1wiKTtcclxuZXhwb3J0cy5TcGhlcmUgPSB0aGluZ3NfMS5TcGhlcmU7XHJcbmV4cG9ydHMuUGxhbmUgPSB0aGluZ3NfMS5QbGFuZTtcclxuY29uc3Qgc2NlbmVfMSA9IHJlcXVpcmUoXCIuL3NjZW5lXCIpO1xyXG5leHBvcnRzLmRlZmF1bHRTY2VuZSA9IHNjZW5lXzEuZGVmYXVsdFNjZW5lO1xyXG5leHBvcnRzLnNjZW5lMiA9IHNjZW5lXzEuc2NlbmUyO1xyXG5leHBvcnRzLmVtcHR5U2NlbmUgPSBzY2VuZV8xLmVtcHR5U2NlbmU7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHJheXRyYWNlXzEuZGVmYXVsdDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdmVjdG9yXzEgPSByZXF1aXJlKFwiLi92ZWN0b3JcIik7XHJcbmNvbnN0IGNvbG9yXzEgPSByZXF1aXJlKFwiLi9jb2xvclwiKTtcclxuY2xhc3MgUmF5VHJhY2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubWF4RGVwdGggPSA1O1xyXG4gICAgfVxyXG4gICAgaW50ZXJzZWN0aW9ucyhyYXksIHNjZW5lKSB7XHJcbiAgICAgICAgdmFyIGNsb3Nlc3QgPSArSW5maW5pdHk7XHJcbiAgICAgICAgdmFyIGNsb3Nlc3RJbnRlciA9IG51bGw7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBzY2VuZS50aGluZ3MpIHtcclxuICAgICAgICAgICAgdmFyIGludGVyID0gc2NlbmUudGhpbmdzW2ldLmludGVyc2VjdChyYXkpO1xyXG4gICAgICAgICAgICBpZiAoaW50ZXIgIT0gbnVsbCAmJiBpbnRlci5kaXN0IDwgY2xvc2VzdCkge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VzdEludGVyID0gaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjbG9zZXN0ID0gaW50ZXIuZGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2xvc2VzdEludGVyO1xyXG4gICAgfVxyXG4gICAgdGVzdFJheShyYXksIHNjZW5lKSB7XHJcbiAgICAgICAgdmFyIGlzZWN0ID0gdGhpcy5pbnRlcnNlY3Rpb25zKHJheSwgc2NlbmUpO1xyXG4gICAgICAgIGlmIChpc2VjdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc2VjdC5kaXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdHJhY2VSYXkocmF5LCBzY2VuZSwgZGVwdGgpIHtcclxuICAgICAgICB2YXIgaXNlY3QgPSB0aGlzLmludGVyc2VjdGlvbnMocmF5LCBzY2VuZSk7XHJcbiAgICAgICAgaWYgKGlzZWN0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvcl8xLmRlZmF1bHQuYmFja2dyb3VuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNoYWRlKGlzZWN0LCBzY2VuZSwgZGVwdGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNoYWRlKGlzZWN0LCBzY2VuZSwgZGVwdGgpIHtcclxuICAgICAgICB2YXIgZCA9IGlzZWN0LnJheS5kaXI7XHJcbiAgICAgICAgdmFyIHBvcyA9IHZlY3Rvcl8xLmRlZmF1bHQucGx1cyh2ZWN0b3JfMS5kZWZhdWx0LnRpbWVzKGlzZWN0LmRpc3QsIGQpLCBpc2VjdC5yYXkuc3RhcnQpO1xyXG4gICAgICAgIHZhciBub3JtYWwgPSBpc2VjdC50aGluZy5ub3JtYWwocG9zKTtcclxuICAgICAgICB2YXIgcmVmbGVjdERpciA9IHZlY3Rvcl8xLmRlZmF1bHQubWludXMoZCwgdmVjdG9yXzEuZGVmYXVsdC50aW1lcygyLCB2ZWN0b3JfMS5kZWZhdWx0LnRpbWVzKHZlY3Rvcl8xLmRlZmF1bHQuZG90KG5vcm1hbCwgZCksIG5vcm1hbCkpKTtcclxuICAgICAgICB2YXIgbmF0dXJhbENvbG9yID0gY29sb3JfMS5kZWZhdWx0LnBsdXMoY29sb3JfMS5kZWZhdWx0LmJhY2tncm91bmQsIHRoaXMuZ2V0TmF0dXJhbENvbG9yKGlzZWN0LnRoaW5nLCBwb3MsIG5vcm1hbCwgcmVmbGVjdERpciwgc2NlbmUpKTtcclxuICAgICAgICB2YXIgcmVmbGVjdGVkQ29sb3IgPSAoZGVwdGggPj0gdGhpcy5tYXhEZXB0aCkgPyBjb2xvcl8xLmRlZmF1bHQuZ3JleSA6IHRoaXMuZ2V0UmVmbGVjdGlvbkNvbG9yKGlzZWN0LnRoaW5nLCBwb3MsIG5vcm1hbCwgcmVmbGVjdERpciwgc2NlbmUsIGRlcHRoKTtcclxuICAgICAgICByZXR1cm4gY29sb3JfMS5kZWZhdWx0LnBsdXMobmF0dXJhbENvbG9yLCByZWZsZWN0ZWRDb2xvcik7XHJcbiAgICB9XHJcbiAgICBnZXRSZWZsZWN0aW9uQ29sb3IodGhpbmcsIHBvcywgbm9ybWFsLCByZCwgc2NlbmUsIGRlcHRoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yXzEuZGVmYXVsdC5zY2FsZSh0aGluZy5zdXJmYWNlLnJlZmxlY3QocG9zKSwgdGhpcy50cmFjZVJheSh7IHN0YXJ0OiBwb3MsIGRpcjogcmQgfSwgc2NlbmUsIGRlcHRoICsgMSkpO1xyXG4gICAgfVxyXG4gICAgZ2V0TmF0dXJhbENvbG9yKHRoaW5nLCBwb3MsIG5vcm0sIHJkLCBzY2VuZSkge1xyXG4gICAgICAgIHZhciBhZGRMaWdodCA9IChjb2wsIGxpZ2h0KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBsZGlzID0gdmVjdG9yXzEuZGVmYXVsdC5taW51cyhsaWdodC5wb3MsIHBvcyk7XHJcbiAgICAgICAgICAgIHZhciBsaXZlYyA9IHZlY3Rvcl8xLmRlZmF1bHQubm9ybShsZGlzKTtcclxuICAgICAgICAgICAgdmFyIG5lYXRJc2VjdCA9IHRoaXMudGVzdFJheSh7IHN0YXJ0OiBwb3MsIGRpcjogbGl2ZWMgfSwgc2NlbmUpO1xyXG4gICAgICAgICAgICB2YXIgaXNJblNoYWRvdyA9IChuZWF0SXNlY3QgPT09IG51bGwpID8gZmFsc2UgOiAobmVhdElzZWN0IDw9IHZlY3Rvcl8xLmRlZmF1bHQubWFnKGxkaXMpKTtcclxuICAgICAgICAgICAgaWYgKGlzSW5TaGFkb3cpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb2w7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWxsdW0gPSB2ZWN0b3JfMS5kZWZhdWx0LmRvdChsaXZlYywgbm9ybSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGNvbG9yID0gKGlsbHVtID4gMCkgPyBjb2xvcl8xLmRlZmF1bHQuc2NhbGUoaWxsdW0sIGxpZ2h0LmNvbG9yKVxyXG4gICAgICAgICAgICAgICAgICAgIDogY29sb3JfMS5kZWZhdWx0LmRlZmF1bHRDb2xvcjtcclxuICAgICAgICAgICAgICAgIHZhciBzcGVjdWxhciA9IHZlY3Rvcl8xLmRlZmF1bHQuZG90KGxpdmVjLCB2ZWN0b3JfMS5kZWZhdWx0Lm5vcm0ocmQpKTtcclxuICAgICAgICAgICAgICAgIHZhciBzY29sb3IgPSAoc3BlY3VsYXIgPiAwKSA/IGNvbG9yXzEuZGVmYXVsdC5zY2FsZShNYXRoLnBvdyhzcGVjdWxhciwgdGhpbmcuc3VyZmFjZS5yb3VnaG5lc3MpLCBsaWdodC5jb2xvcilcclxuICAgICAgICAgICAgICAgICAgICA6IGNvbG9yXzEuZGVmYXVsdC5kZWZhdWx0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sb3JfMS5kZWZhdWx0LnBsdXMoY29sLCBjb2xvcl8xLmRlZmF1bHQucGx1cyhjb2xvcl8xLmRlZmF1bHQudGltZXModGhpbmcuc3VyZmFjZS5kaWZmdXNlKHBvcyksIGxjb2xvciksIGNvbG9yXzEuZGVmYXVsdC50aW1lcyh0aGluZy5zdXJmYWNlLnNwZWN1bGFyKHBvcyksIHNjb2xvcikpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHNjZW5lLmxpZ2h0cy5yZWR1Y2UoYWRkTGlnaHQsIGNvbG9yXzEuZGVmYXVsdC5kZWZhdWx0Q29sb3IpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyVG9JbWFnZShzY2VuZSwgaW1hZ2UpIHtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgICAgIHZhciB3aWR0aCA9IGltYWdlLndpZHRoO1xyXG4gICAgICAgIHZhciBnZXRQb2ludCA9IGZ1bmN0aW9uICh4LCB5LCBjYW1lcmEpIHtcclxuICAgICAgICAgICAgdmFyIHJlY2VudGVyWCA9IGZ1bmN0aW9uICh4KSB7IHJldHVybiAoeCAtICh3aWR0aCAvIDIuMCkpIC8gMi4wIC8gd2lkdGg7IH07XHJcbiAgICAgICAgICAgIHZhciByZWNlbnRlclkgPSBmdW5jdGlvbiAoeSkgeyByZXR1cm4gLSh5IC0gKGhlaWdodCAvIDIuMCkpIC8gMi4wIC8gaGVpZ2h0OyB9O1xyXG4gICAgICAgICAgICByZXR1cm4gdmVjdG9yXzEuZGVmYXVsdC5ub3JtKHZlY3Rvcl8xLmRlZmF1bHQucGx1cyhjYW1lcmEuZm9yd2FyZCwgdmVjdG9yXzEuZGVmYXVsdC5wbHVzKHZlY3Rvcl8xLmRlZmF1bHQudGltZXMocmVjZW50ZXJYKHgpLCBjYW1lcmEucmlnaHQpLCB2ZWN0b3JfMS5kZWZhdWx0LnRpbWVzKHJlY2VudGVyWSh5KSwgY2FtZXJhLnVwKSkpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29sb3IgPSB0aGlzLnRyYWNlUmF5KHsgc3RhcnQ6IHNjZW5lLmNhbWVyYS5wb3MsIGRpcjogZ2V0UG9pbnQoeCwgeSwgc2NlbmUuY2FtZXJhKSB9LCBzY2VuZSwgMCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYyA9IGNvbG9yXzEuZGVmYXVsdC50b0RyYXdpbmdDb2xvcihjb2xvcik7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5kYXRhWygoeSAqICh3aWR0aCAqIDQpKSArICh4ICogNCkpXSA9IGMucjtcclxuICAgICAgICAgICAgICAgIGltYWdlLmRhdGFbKCh5ICogKHdpZHRoICogNCkpICsgKHggKiA0KSkgKyAxXSA9IGMuZztcclxuICAgICAgICAgICAgICAgIGltYWdlLmRhdGFbKCh5ICogKHdpZHRoICogNCkpICsgKHggKiA0KSkgKyAyXSA9IGMuYjtcclxuICAgICAgICAgICAgICAgIGltYWdlLmRhdGFbKCh5ICogKHdpZHRoICogNCkpICsgKHggKiA0KSkgKyAzXSA9IDI1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBSYXlUcmFjZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJheXRyYWNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHZlY3Rvcl8xID0gcmVxdWlyZShcIi4vdmVjdG9yXCIpO1xyXG5jb25zdCBjb2xvcl8xID0gcmVxdWlyZShcIi4vY29sb3JcIik7XHJcbmNvbnN0IHRoaW5nc18xID0gcmVxdWlyZShcIi4vdGhpbmdzXCIpO1xyXG5jb25zdCBjYW1lcmFfMSA9IHJlcXVpcmUoXCIuL2NhbWVyYVwiKTtcclxuY29uc3QgU3VyZmFjZXMgPSByZXF1aXJlKFwiLi9zdXJmYWNlXCIpO1xyXG5mdW5jdGlvbiBkZWZhdWx0U2NlbmUoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRoaW5nczogW1xyXG4gICAgICAgICAgICBuZXcgdGhpbmdzXzEuUGxhbmUobmV3IHZlY3Rvcl8xLmRlZmF1bHQoMC4wLCAxLjAsIDAuMCksIDAuMCwgU3VyZmFjZXMuY2hlY2tlcmJvYXJkKSxcclxuICAgICAgICAgICAgbmV3IHRoaW5nc18xLlNwaGVyZShuZXcgdmVjdG9yXzEuZGVmYXVsdCgwLjAsIDEuMCwgLTAuMjUpLCAxLjAsIFN1cmZhY2VzLnNoaW55KSxcclxuICAgICAgICAgICAgbmV3IHRoaW5nc18xLlNwaGVyZShuZXcgdmVjdG9yXzEuZGVmYXVsdCgtMS4wLCAwLjUsIDEuNSksIDAuNSwgU3VyZmFjZXMuc2hpbnkpXHJcbiAgICAgICAgXSxcclxuICAgICAgICBsaWdodHM6IFtcclxuICAgICAgICAgICAgeyBwb3M6IG5ldyB2ZWN0b3JfMS5kZWZhdWx0KC0yLjAsIDIuNSwgMC4wKSwgY29sb3I6IG5ldyBjb2xvcl8xLmRlZmF1bHQoMC40OSwgMC4wNywgMC4wNykgfSxcclxuICAgICAgICAgICAgeyBwb3M6IG5ldyB2ZWN0b3JfMS5kZWZhdWx0KDEuNSwgMi41LCAxLjUpLCBjb2xvcjogbmV3IGNvbG9yXzEuZGVmYXVsdCgwLjA3LCAwLjA3LCAwLjQ5KSB9LFxyXG4gICAgICAgICAgICB7IHBvczogbmV3IHZlY3Rvcl8xLmRlZmF1bHQoMS41LCAyLjUsIC0xLjUpLCBjb2xvcjogbmV3IGNvbG9yXzEuZGVmYXVsdCgwLjA3LCAwLjQ5LCAwLjA3MSkgfSxcclxuICAgICAgICAgICAgeyBwb3M6IG5ldyB2ZWN0b3JfMS5kZWZhdWx0KDAuMCwgMy41LCAwLjApLCBjb2xvcjogbmV3IGNvbG9yXzEuZGVmYXVsdCgwLjIxLCAwLjIxLCAwLjM1KSB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBjYW1lcmE6IG5ldyBjYW1lcmFfMS5kZWZhdWx0KG5ldyB2ZWN0b3JfMS5kZWZhdWx0KDMuMCwgMi4wLCA0LjApLCBuZXcgdmVjdG9yXzEuZGVmYXVsdCgtMS4wLCAwLjUsIDAuMCkpXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZGVmYXVsdFNjZW5lID0gZGVmYXVsdFNjZW5lO1xyXG5mdW5jdGlvbiBzY2VuZTIoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRoaW5nczogW1xyXG4gICAgICAgICAgICBuZXcgdGhpbmdzXzEuUGxhbmUobmV3IHZlY3Rvcl8xLmRlZmF1bHQoMC4wLCAxLjAsIDAuMCksIDAuMCwgU3VyZmFjZXMuY2hlY2tlcmJvYXJkKSxcclxuICAgICAgICAgICAgbmV3IHRoaW5nc18xLlNwaGVyZShuZXcgdmVjdG9yXzEuZGVmYXVsdCgwLjAsIDEuMCwgLTAuMjUpLCAxLjAsIFN1cmZhY2VzLnNoaW55KSxcclxuICAgICAgICAgICAgbmV3IHRoaW5nc18xLlNwaGVyZShuZXcgdmVjdG9yXzEuZGVmYXVsdCgtMS4wLCAwLjUsIDEuNSksIDAuNSwgU3VyZmFjZXMuc2hpbnkpLFxyXG4gICAgICAgICAgICBuZXcgdGhpbmdzXzEuU3BoZXJlKG5ldyB2ZWN0b3JfMS5kZWZhdWx0KC01LjUsIDIuMCwgLTMuNSksIDEuMjUsIFN1cmZhY2VzLmNoZWNrZXJib2FyZClcclxuICAgICAgICBdLFxyXG4gICAgICAgIGxpZ2h0czogW1xyXG4gICAgICAgICAgICB7IHBvczogbmV3IHZlY3Rvcl8xLmRlZmF1bHQoLTIuMCwgMi41LCAwLjApLCBjb2xvcjogbmV3IGNvbG9yXzEuZGVmYXVsdCgwLjQ5LCAwLjA3LCAwLjA3KSB9LFxyXG4gICAgICAgICAgICB7IHBvczogbmV3IHZlY3Rvcl8xLmRlZmF1bHQoMS41LCAyLjUsIDEuNSksIGNvbG9yOiBuZXcgY29sb3JfMS5kZWZhdWx0KDAuMDcsIDAuMDcsIDAuNDkpIH0sXHJcbiAgICAgICAgICAgIHsgcG9zOiBuZXcgdmVjdG9yXzEuZGVmYXVsdCgxLjUsIDIuNSwgLTEuNSksIGNvbG9yOiBuZXcgY29sb3JfMS5kZWZhdWx0KDAuMDcsIDAuNDksIDAuMDcxKSB9LFxyXG4gICAgICAgICAgICB7IHBvczogbmV3IHZlY3Rvcl8xLmRlZmF1bHQoMC4wLCAzLjUsIDAuMCksIGNvbG9yOiBuZXcgY29sb3JfMS5kZWZhdWx0KDAuMjEsIDAuMjEsIDAuMzUpIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGNhbWVyYTogbmV3IGNhbWVyYV8xLmRlZmF1bHQobmV3IHZlY3Rvcl8xLmRlZmF1bHQoMy4wLCAyLjAsIDQuMCksIG5ldyB2ZWN0b3JfMS5kZWZhdWx0KC0xLjAsIDAuNSwgMC4wKSlcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5zY2VuZTIgPSBzY2VuZTI7XHJcbmZ1bmN0aW9uIGVtcHR5U2NlbmUoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRoaW5nczogW10sXHJcbiAgICAgICAgbGlnaHRzOiBbXSxcclxuICAgICAgICBjYW1lcmE6IG5ldyBjYW1lcmFfMS5kZWZhdWx0KG5ldyB2ZWN0b3JfMS5kZWZhdWx0KDMuMCwgMi4wLCA0LjApLCBuZXcgdmVjdG9yXzEuZGVmYXVsdCgtMS4wLCAwLjUsIDAuMCkpXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZW1wdHlTY2VuZSA9IGVtcHR5U2NlbmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjZW5lLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNvbG9yXzEgPSByZXF1aXJlKFwiLi9jb2xvclwiKTtcclxuZXhwb3J0cy5zaGlueSA9IHtcclxuICAgIGRpZmZ1c2U6IGZ1bmN0aW9uIChwb3MpIHsgcmV0dXJuIGNvbG9yXzEuZGVmYXVsdC53aGl0ZTsgfSxcclxuICAgIHNwZWN1bGFyOiBmdW5jdGlvbiAocG9zKSB7IHJldHVybiBjb2xvcl8xLmRlZmF1bHQuZ3JleTsgfSxcclxuICAgIHJlZmxlY3Q6IGZ1bmN0aW9uIChwb3MpIHsgcmV0dXJuIDAuNzsgfSxcclxuICAgIHJvdWdobmVzczogMjUwXHJcbn07XHJcbmV4cG9ydHMuY2hlY2tlcmJvYXJkID0ge1xyXG4gICAgZGlmZnVzZTogZnVuY3Rpb24gKHBvcykge1xyXG4gICAgICAgIGlmICgoTWF0aC5mbG9vcihwb3MueikgKyBNYXRoLmZsb29yKHBvcy54KSkgJSAyICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvcl8xLmRlZmF1bHQud2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sb3JfMS5kZWZhdWx0LmJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzcGVjdWxhcjogZnVuY3Rpb24gKHBvcykgeyByZXR1cm4gY29sb3JfMS5kZWZhdWx0LndoaXRlOyB9LFxyXG4gICAgcmVmbGVjdDogZnVuY3Rpb24gKHBvcykge1xyXG4gICAgICAgIGlmICgoTWF0aC5mbG9vcihwb3MueikgKyBNYXRoLmZsb29yKHBvcy54KSkgJSAyICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwLjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMC43O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByb3VnaG5lc3M6IDE1MFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdXJmYWNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHZlY3Rvcl8xID0gcmVxdWlyZShcIi4vdmVjdG9yXCIpO1xyXG5jbGFzcyBTcGhlcmUge1xyXG4gICAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMsIHN1cmZhY2UpIHtcclxuICAgICAgICB0aGlzLmNlbnRlciA9IGNlbnRlcjtcclxuICAgICAgICB0aGlzLnN1cmZhY2UgPSBzdXJmYWNlO1xyXG4gICAgICAgIHRoaXMucmFkaXVzMiA9IHJhZGl1cyAqIHJhZGl1cztcclxuICAgIH1cclxuICAgIG5vcm1hbChwb3MpIHsgcmV0dXJuIHZlY3Rvcl8xLmRlZmF1bHQubm9ybSh2ZWN0b3JfMS5kZWZhdWx0Lm1pbnVzKHBvcywgdGhpcy5jZW50ZXIpKTsgfVxyXG4gICAgaW50ZXJzZWN0KHJheSkge1xyXG4gICAgICAgIHZhciBlbyA9IHZlY3Rvcl8xLmRlZmF1bHQubWludXModGhpcy5jZW50ZXIsIHJheS5zdGFydCk7XHJcbiAgICAgICAgdmFyIHYgPSB2ZWN0b3JfMS5kZWZhdWx0LmRvdChlbywgcmF5LmRpcik7XHJcbiAgICAgICAgdmFyIGRpc3QgPSAwO1xyXG4gICAgICAgIGlmICh2ID49IDApIHtcclxuICAgICAgICAgICAgdmFyIGRpc2MgPSB0aGlzLnJhZGl1czIgLSAodmVjdG9yXzEuZGVmYXVsdC5kb3QoZW8sIGVvKSAtIHYgKiB2KTtcclxuICAgICAgICAgICAgaWYgKGRpc2MgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgZGlzdCA9IHYgLSBNYXRoLnNxcnQoZGlzYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRpc3QgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4geyB0aGluZzogdGhpcywgcmF5OiByYXksIGRpc3Q6IGRpc3QgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TcGhlcmUgPSBTcGhlcmU7XHJcbmNsYXNzIFBsYW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKG5vcm0sIG9mZnNldCwgc3VyZmFjZSkge1xyXG4gICAgICAgIHRoaXMuc3VyZmFjZSA9IHN1cmZhY2U7XHJcbiAgICAgICAgdGhpcy5ub3JtYWwgPSBmdW5jdGlvbiAocG9zKSB7IHJldHVybiBub3JtOyB9O1xyXG4gICAgICAgIHRoaXMuaW50ZXJzZWN0ID0gZnVuY3Rpb24gKHJheSkge1xyXG4gICAgICAgICAgICB2YXIgZGVub20gPSB2ZWN0b3JfMS5kZWZhdWx0LmRvdChub3JtLCByYXkuZGlyKTtcclxuICAgICAgICAgICAgaWYgKGRlbm9tID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGlzdCA9ICh2ZWN0b3JfMS5kZWZhdWx0LmRvdChub3JtLCByYXkuc3RhcnQpICsgb2Zmc2V0KSAvICgtZGVub20pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdGhpbmc6IHRoaXMsIHJheTogcmF5LCBkaXN0OiBkaXN0IH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUGxhbmUgPSBQbGFuZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGhpbmdzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIFZlY3RvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB6KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMueiA9IHo7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgdGltZXMoaywgdikgeyByZXR1cm4gbmV3IFZlY3RvcihrICogdi54LCBrICogdi55LCBrICogdi56KTsgfVxyXG4gICAgc3RhdGljIG1pbnVzKHYxLCB2MikgeyByZXR1cm4gbmV3IFZlY3Rvcih2MS54IC0gdjIueCwgdjEueSAtIHYyLnksIHYxLnogLSB2Mi56KTsgfVxyXG4gICAgc3RhdGljIHBsdXModjEsIHYyKSB7IHJldHVybiBuZXcgVmVjdG9yKHYxLnggKyB2Mi54LCB2MS55ICsgdjIueSwgdjEueiArIHYyLnopOyB9XHJcbiAgICBzdGF0aWMgZG90KHYxLCB2MikgeyByZXR1cm4gdjEueCAqIHYyLnggKyB2MS55ICogdjIueSArIHYxLnogKiB2Mi56OyB9XHJcbiAgICBzdGF0aWMgbWFnKHYpIHsgcmV0dXJuIE1hdGguc3FydCh2LnggKiB2LnggKyB2LnkgKiB2LnkgKyB2LnogKiB2LnopOyB9XHJcbiAgICBzdGF0aWMgbm9ybSh2KSB7XHJcbiAgICAgICAgdmFyIG1hZyA9IFZlY3Rvci5tYWcodik7XHJcbiAgICAgICAgdmFyIGRpdiA9IChtYWcgPT09IDApID8gSW5maW5pdHkgOiAxLjAgLyBtYWc7XHJcbiAgICAgICAgcmV0dXJuIFZlY3Rvci50aW1lcyhkaXYsIHYpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNyb3NzKHYxLCB2Mikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHYxLnkgKiB2Mi56IC0gdjEueiAqIHYyLnksIHYxLnogKiB2Mi54IC0gdjEueCAqIHYyLnosIHYxLnggKiB2Mi55IC0gdjEueSAqIHYyLngpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFZlY3RvcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmVjdG9yLmpzLm1hcCIsImltcG9ydCBQYXJzZSwgeyBiYXNpY1NjZW5lWE1MIH0gZnJvbSAnLi9zY2VuZVhNTCc7XHJcblxyXG5leHBvcnQgeyBcclxuICBQYXJzZSwgYmFzaWNTY2VuZVhNTCxcclxufTtcclxuIiwiXG5pbXBvcnQge1xuICBWZWN0b3IsXG4gIExpZ2h0LCBcbiAgQ29sb3IsIFxuICBDYW1lcmEsXG4gIFNjZW5lLCBkZWZhdWx0U2NlbmUsIHNjZW5lMiwgZW1wdHlTY2VuZSxcbiAgU3VyZmFjZXMsXG4gIFRoaW5nLCBTcGhlcmUsIFBsYW5lXG59IGZyb20gJ0BweXRob24zNi9yYXl0cmFjZSc7XG5cblxuLy8gVGhyb3dzIGVycm9yIG9uIGludmFsaWQgeG1sXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXJzZVhNTFRvU2NlbmUoeG1sSW5wdXQ6IHN0cmluZyk6IFNjZW5lIHtcbiAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICBjb25zdCB4bWwgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHhtbElucHV0LCAnYXBwbGljYXRpb24veG1sJyk7XG4gIGNvbnNvbGUubG9nKCd4bWwnLCB4bWwpO1xuICBjb25zdCBwYXJzZXJFcnJvck5vZGUgPSB4bWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3BhcnNlcmVycm9yJyk7XG4gIGlmIChwYXJzZXJFcnJvck5vZGUubGVuZ3RoICE9IDApIHtcbiAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoKTtcbiAgfVxuXG4gIGNvbnN0IG9iamVjdHM6IFRoaW5nW10gPSBbXTtcbiAgY29uc3QgbGlnaHRzOiBMaWdodFtdID0gW107XG4gIGxldCBjYW1lcmEgPSBuZXcgQ2FtZXJhKG5ldyBWZWN0b3IoMy4wLCAyLjAsIDQuMCksIG5ldyBWZWN0b3IoLTEuMCwgMC41LCAwLjApKTtcblxuICAvL0xldmVsIDFcbiAgY29uc3Qgc2NlbmVOb2RlID0geG1sLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY2VuZScpWzBdO1xuICAvLyBjb25zb2xlLmxvZyhzY2VuZU5vZGUpO1xuICAvL0xldmVsIDJcbiAgY29uc3QgY2FtZXJhTm9kZSA9IHNjZW5lTm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2FtZXJhJylbMF07XG4gIGNvbnN0IG9iamVjdHNOb2RlID0gc2NlbmVOb2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdvYmplY3RzJylbMF07XG4gIGNvbnN0IGxpZ2h0c05vZGUgPSBzY2VuZU5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpZ2h0cycpWzBdO1xuICAvL0xldmVsIDNcbiAgY29uc3QgcGxhbmVOb2RlcyA9IG9iamVjdHNOb2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdwbGFuZScpO1xuICBjb25zdCBzcGhlcmVOb2RlcyA9IG9iamVjdHNOb2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzcGhlcmUnKTtcbiAgY29uc3QgbGlnaHROb2RlcyA9IGxpZ2h0c05vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpZ2h0Jyk7XG5cbiAgLy8geG1sIG5vZGVzIHRvIHR5cGVzY3JpcHQgb2JqZWN0c1xuXG4gIGZvciAobGV0IHAgb2YgPGFueT5wbGFuZU5vZGVzKSB7XG4gICAgY29uc3QgcmVxdWlyZWRBdHRyaWJ1dGVzID0gWydwb3MnLCAnb2Zmc2V0JywgJ3N1cmZhY2UnXTtcbiAgICBpZiAocmVxdWlyZWRBdHRyaWJ1dGVzLmV2ZXJ5KGEgPT4gcC5oYXNBdHRyaWJ1dGUoYSkpKSB7XG4gICAgICBjb25zdCBwb3NBdHQgPSA8c3RyaW5nPnAuZ2V0QXR0cmlidXRlKCdwb3MnKTtcbiAgICAgIGNvbnN0IG9mZnNldEF0dCA9IDxzdHJpbmc+cC5nZXRBdHRyaWJ1dGUoJ29mZnNldCcpO1xuICAgICAgY29uc3Qgc3VyZmFjZUF0dCA9IDxzdHJpbmc+cC5nZXRBdHRyaWJ1dGUoJ3N1cmZhY2UnKTtcblxuICAgICAgY29uc3QgbnVtYmVycyA9IHBvc0F0dC5zcGxpdCgnLCcpLnNsaWNlKDAsIDMpLm1hcChzID0+IHBhcnNlRmxvYXQocykpO1xuICAgICAgY29uc3QgdmVjID0gbmV3IFZlY3RvcihudW1iZXJzWzBdLCBudW1iZXJzWzFdLCBudW1iZXJzWzJdKTtcbiAgICAgIGNvbnN0IG9mZnNldCA9IHBhcnNlRmxvYXQob2Zmc2V0QXR0KTtcbiAgICAgIGxldCBzdXJmYWNlID0gU3VyZmFjZXMuY2hlY2tlcmJvYXJkO1xuICAgICAgaWYgKHN1cmZhY2VBdHQgPT09ICdzaGlueScpIHtcbiAgICAgICAgc3VyZmFjZSA9IFN1cmZhY2VzLnNoaW55O1xuICAgICAgfVxuXG4gICAgICAvLyBjb25zb2xlLmxvZygndmVjOicsIHZlYyk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnbnVtYmVyczonLCBudW1iZXJzKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdvZmZzZXQ6Jywgb2Zmc2V0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdXJmYWNlOicsIHN1cmZhY2UpO1xuXG4gICAgICBvYmplY3RzLnB1c2gobmV3IFBsYW5lKHZlYywgb2Zmc2V0LCBzdXJmYWNlKSk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgcyBvZiA8YW55PnNwaGVyZU5vZGVzKSB7XG4gICAgY29uc3QgcmVxdWlyZWRBdHRyaWJ1dGVzID0gWydwb3MnLCAnc2l6ZScsICdzdXJmYWNlJ107XG4gICAgaWYgKHJlcXVpcmVkQXR0cmlidXRlcy5ldmVyeShhID0+IHMuaGFzQXR0cmlidXRlKGEpKSkge1xuICAgICAgY29uc3QgcG9zQXR0ID0gPHN0cmluZz5zLmdldEF0dHJpYnV0ZSgncG9zJyk7XG4gICAgICBjb25zdCBzaXplQXR0ID0gPHN0cmluZz5zLmdldEF0dHJpYnV0ZSgnc2l6ZScpO1xuICAgICAgY29uc3Qgc3VyZmFjZUF0dCA9IDxzdHJpbmc+cy5nZXRBdHRyaWJ1dGUoJ3N1cmZhY2UnKTtcbiAgICAgIGNvbnNvbGUubG9nKHsgcG9zQXR0LCBzaXplQXR0LCBzdXJmYWNlQXR0IH0pO1xuICAgICAgY29uc3QgbnVtYmVycyA9IHBvc0F0dC5zcGxpdCgnLCcpLnNsaWNlKDAsIDMpLm1hcChzID0+IHBhcnNlRmxvYXQocykpO1xuICAgICAgY29uc3QgdmVjID0gbmV3IFZlY3RvcihudW1iZXJzWzBdLCBudW1iZXJzWzFdLCBudW1iZXJzWzJdKTtcbiAgICAgIGNvbnN0IHNpemUgPSBwYXJzZUZsb2F0KHNpemVBdHQpO1xuICAgICAgbGV0IHN1cmZhY2UgPSBTdXJmYWNlcy5jaGVja2VyYm9hcmQ7XG4gICAgICBpZiAoc3VyZmFjZUF0dCA9PT0gJ3NoaW55Jykge1xuICAgICAgICBzdXJmYWNlID0gU3VyZmFjZXMuc2hpbnk7XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKCd2ZWM6JywgdmVjKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdudW1iZXJzOicsIG51bWJlcnMpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3NpemU6Jywgc2l6ZSk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3VyZmFjZTonLCBzdXJmYWNlKTtcblxuICAgICAgb2JqZWN0cy5wdXNoKG5ldyBTcGhlcmUodmVjLCBzaXplLCBzdXJmYWNlKSk7XG4gICAgfVxuICB9XG5cblxuICBmb3IgKGxldCBsIG9mIDxhbnk+bGlnaHROb2Rlcykge1xuICAgIGNvbnN0IHJlcXVpcmVkQXR0cmlidXRlcyA9IFsncG9zJywgJ2NvbG9yJ107XG4gICAgaWYgKHJlcXVpcmVkQXR0cmlidXRlcy5ldmVyeShhID0+IGwuaGFzQXR0cmlidXRlKGEpKSkge1xuICAgICAgY29uc3QgcG9zQXR0ID0gPHN0cmluZz5sLmdldEF0dHJpYnV0ZSgncG9zJyk7XG4gICAgICBjb25zdCBjb2xvckF0dCA9IDxzdHJpbmc+bC5nZXRBdHRyaWJ1dGUoJ2NvbG9yJyk7XG4gICAgICBjb25zb2xlLmxvZyh7IHBvc0F0dCwgY29sb3JBdHQgfSk7XG4gICAgICBjb25zdCBudW1iZXJzID0gcG9zQXR0LnNwbGl0KCcsJykuc2xpY2UoMCwgMykubWFwKHMgPT4gcGFyc2VGbG9hdChzKSk7XG4gICAgICBjb25zdCB2ZWMgPSBuZXcgVmVjdG9yKG51bWJlcnNbMF0sIG51bWJlcnNbMV0sIG51bWJlcnNbMl0pO1xuICAgICAgY29uc3QgY29sb3IgPSBjb2xvckF0dC5zcGxpdCgnLCcpLnNsaWNlKDAsIDMpLm1hcChzID0+IHBhcnNlRmxvYXQocykpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZygndmVjOicsIHZlYyk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnbnVtYmVyczonLCBudW1iZXJzKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjb2xvcjonLCBjb2xvcik7XG5cbiAgICAgIGxpZ2h0cy5wdXNoKHsgcG9zOiB2ZWMsIGNvbG9yOiBuZXcgQ29sb3IoY29sb3JbMF0sIGNvbG9yWzFdLCBjb2xvclsyXSkgfSk7XG4gICAgfVxuICB9XG5cbiAgKGZ1bmN0aW9uIHBhcnNlTGlnaHQoY2FtZXJhTm9kZTogRWxlbWVudCkge1xuICAgIGNvbnNvbGUubG9nKGNhbWVyYU5vZGUpO1xuICAgIGNvbnN0IHJlcXVpcmVkQXR0cmlidXRlcyA9IFsncG9zJywgJ2xvb2tBdCddO1xuICAgIGlmIChyZXF1aXJlZEF0dHJpYnV0ZXMuZXZlcnkoYSA9PiBjYW1lcmFOb2RlLmhhc0F0dHJpYnV0ZShhKSkpIHtcbiAgICAgIGNvbnN0IHBvc0F0dCA9IDxzdHJpbmc+Y2FtZXJhTm9kZS5nZXRBdHRyaWJ1dGUoJ3BvcycpO1xuICAgICAgY29uc3QgbG9va0F0QXR0ID0gPHN0cmluZz5jYW1lcmFOb2RlLmdldEF0dHJpYnV0ZSgnbG9va0F0Jyk7XG4gICAgICBjb25zb2xlLmxvZyh7IHBvc0F0dCwgbG9va0F0QXR0IH0pO1xuICAgICAgbGV0IG51bWJlcnMgPSBwb3NBdHQuc3BsaXQoJywnKS5zbGljZSgwLCAzKS5tYXAocyA9PiBwYXJzZUZsb2F0KHMpKTtcbiAgICAgIGNvbnN0IHBvcyA9IG5ldyBWZWN0b3IobnVtYmVyc1swXSwgbnVtYmVyc1sxXSwgbnVtYmVyc1syXSk7XG4gICAgICBudW1iZXJzID0gbG9va0F0QXR0LnNwbGl0KCcsJykuc2xpY2UoMCwgMykubWFwKHMgPT4gcGFyc2VGbG9hdChzKSk7XG4gICAgICBjb25zdCBsb29rQXQgPSBuZXcgVmVjdG9yKG51bWJlcnNbMF0sIG51bWJlcnNbMV0sIG51bWJlcnNbMl0pO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyh7IHBvcywgbG9va0F0IH0pXG5cbiAgICAgIGNhbWVyYSA9IG5ldyBDYW1lcmEocG9zLCBsb29rQXQpO1xuICAgIH1cbiAgfSkoY2FtZXJhTm9kZSk7XG5cbiAgY29uc29sZS5sb2cob2JqZWN0cyk7XG4gIGNvbnNvbGUubG9nKGxpZ2h0cyk7XG5cbiAgY29uc3Qgc2NlbmUgPSB7XG4gICAgdGhpbmdzOiBvYmplY3RzLFxuICAgIGxpZ2h0czogbGlnaHRzLFxuICAgIGNhbWVyYVxuICB9O1xuXG4gIGNvbnNvbGUubG9nKCdwYXJzZWQgc2NlbmUgOiAnLCBzY2VuZSk7XG4gIHJldHVybiBzY2VuZTtcbn1cblxuZXhwb3J0IGNvbnN0IGJhc2ljU2NlbmVYTUw6IHN0cmluZyA9IFxuLy8gZXhwb3J0IGZ1bmN0aW9uIERlZmF1bHRYTUwoKTogc3RyaW5nIHtcbi8vICByZXR1cm4gXG4gIGBcbjxzY2VuZT5cbiAgPGNhbWVyYSBwb3M9XCIzLjAsIDIuMCwgNC4wXCIgbG9va0F0PVwiLTEuMCwgMC41LCAwLjBcIiAvPlxuICA8b2JqZWN0cz5cbiAgICA8cGxhbmUgcG9zPVwiMC4wLDEuMCwwLjBcIiBvZmZzZXQ9XCIwLjBcIiBzdXJmYWNlPVwiY2hlY2tlcmJvYXJkXCIgLz5cbiAgICA8c3BoZXJlIHBvcz1cIjAuMCwxLjAsLTAuMjVcIiBzaXplPVwiMS4wXCIgc3VyZmFjZT1cInNoaW55XCIvPlxuICAgIDxzcGhlcmUgcG9zPVwiLTEuMCwwLjUsMS41XCIgc2l6ZT1cIjAuNVwiIHN1cmZhY2U9XCJzaGlueVwiLz5cbiAgICA8c3BoZXJlIHBvcz1cIi01LjUsMi4wLC0zLjVcIiBzaXplPVwiMS4yNVwiIHN1cmZhY2U9XCJjaGVja2VyYm9hcmRcIi8+XG4gIDwvb2JqZWN0cz5cbiAgPGxpZ2h0cz5cbiAgICA8bGlnaHQgcG9zPVwiLTIuMCwgMi41LCAwLjBcIiBjb2xvcj1cIjAuNDksIDAuMDcsIDAuMDdcIiAvPiBcbiAgICA8bGlnaHQgcG9zPVwiMS41LCAyLjUsIDEuNVwiIGNvbG9yPVwiMC4wNywgMC4wNywgMC40OVwiIC8+IFxuICAgIDxsaWdodCBwb3M9XCIxLjUsIDIuNSwgLTEuNVwiIGNvbG9yPVwiMC4wNywgMC40OSwgMC4wNzFcIiAvPiBcbiAgICA8bGlnaHQgcG9zPVwiMC4wLCAzLjUsIDAuMFwiIGNvbG9yPVwiMC4yMSwgMC4yMSwgMC4zNVwiIC8+IFxuICA8L2xpZ2h0cz5cbjwvc2NlbmU+XG4gIGAudHJpbSgpO1xuLy99XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),

/***/ "./node_modules/@python36/raytrace/lib/camera.js":
/*!*******************************************************!*\
  !*** ./node_modules/@python36/raytrace/lib/camera.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const vector_1 = __webpack_require__(/*! ./vector */ "./node_modules/@python36/raytrace/lib/vector.js");
class Camera {
    constructor(pos, lookAt) {
        this.pos = pos;
        var down = new vector_1.default(0.0, -1.0, 0.0);
        this.forward = vector_1.default.norm(vector_1.default.minus(lookAt, this.pos));
        this.right = vector_1.default.times(1.5, vector_1.default.norm(vector_1.default.cross(this.forward, down)));
        this.up = vector_1.default.times(1.5, vector_1.default.norm(vector_1.default.cross(this.forward, this.right)));
    }
}
exports.default = Camera;
//# sourceMappingURL=camera.js.map

/***/ }),

/***/ "./node_modules/@python36/raytrace/lib/color.js":
/*!******************************************************!*\
  !*** ./node_modules/@python36/raytrace/lib/color.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    static scale(k, v) { return new Color(k * v.r, k * v.g, k * v.b); }
    static plus(v1, v2) { return new Color(v1.r + v2.r, v1.g + v2.g, v1.b + v2.b); }
    static times(v1, v2) { return new Color(v1.r * v2.r, v1.g * v2.g, v1.b * v2.b); }
    static toDrawingColor(c) {
        var legalize = (d) => d > 1 ? 1 : d;
        return {
            r: Math.floor(legalize(c.r) * 255),
            g: Math.floor(legalize(c.g) * 255),
            b: Math.floor(legalize(c.b) * 255)
        };
    }
}
exports.default = Color;
Color.white = new Color(1.0, 1.0, 1.0);
Color.grey = new Color(0.5, 0.5, 0.5);
Color.black = new Color(0.0, 0.0, 0.0);
Color.background = Color.black;
Color.defaultColor = Color.black;
//# sourceMappingURL=color.js.map

/***/ }),

/***/ "./node_modules/@python36/raytrace/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@python36/raytrace/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const raytrace_1 = __webpack_require__(/*! ./raytrace */ "./node_modules/@python36/raytrace/lib/raytrace.js");
const camera_1 = __webpack_require__(/*! ./camera */ "./node_modules/@python36/raytrace/lib/camera.js");
exports.Camera = camera_1.default;
const vector_1 = __webpack_require__(/*! ./vector */ "./node_modules/@python36/raytrace/lib/vector.js");
exports.Vector = vector_1.default;
const scene_1 = __webpack_require__(/*! ./scene */ "./node_modules/@python36/raytrace/lib/scene.js");
exports.defaultScene = scene_1.defaultScene;
exports.scene2 = scene_1.scene2;
exports.emptyScene = scene_1.emptyScene;
const Surfaces = __webpack_require__(/*! ./surface */ "./node_modules/@python36/raytrace/lib/surface.js");
exports.Surfaces = Surfaces;
const things_1 = __webpack_require__(/*! ./things */ "./node_modules/@python36/raytrace/lib/things.js");
exports.Sphere = things_1.Sphere;
exports.Plane = things_1.Plane;
exports.default = raytrace_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@python36/raytrace/lib/raytrace.js":
/*!*********************************************************!*\
  !*** ./node_modules/@python36/raytrace/lib/raytrace.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const vector_1 = __webpack_require__(/*! ./vector */ "./node_modules/@python36/raytrace/lib/vector.js");
const color_1 = __webpack_require__(/*! ./color */ "./node_modules/@python36/raytrace/lib/color.js");
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

/***/ }),

/***/ "./node_modules/@python36/raytrace/lib/scene.js":
/*!******************************************************!*\
  !*** ./node_modules/@python36/raytrace/lib/scene.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const vector_1 = __webpack_require__(/*! ./vector */ "./node_modules/@python36/raytrace/lib/vector.js");
const color_1 = __webpack_require__(/*! ./color */ "./node_modules/@python36/raytrace/lib/color.js");
const things_1 = __webpack_require__(/*! ./things */ "./node_modules/@python36/raytrace/lib/things.js");
const camera_1 = __webpack_require__(/*! ./camera */ "./node_modules/@python36/raytrace/lib/camera.js");
const Surfaces = __webpack_require__(/*! ./surface */ "./node_modules/@python36/raytrace/lib/surface.js");
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

/***/ }),

/***/ "./node_modules/@python36/raytrace/lib/surface.js":
/*!********************************************************!*\
  !*** ./node_modules/@python36/raytrace/lib/surface.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = __webpack_require__(/*! ./color */ "./node_modules/@python36/raytrace/lib/color.js");
exports.shiny = {
    diffuse: function (pos) { return color_1.default.white; },
    specular: function (pos) { return color_1.default.grey; },
    reflect: function (pos) { return 0.7; },
    roughness: 250
};
exports.checkerboard = {
    diffuse: function (pos) {
        if ((Math.floor(pos.z) + Math.floor(pos.x)) % 2 !== 0) {
            return color_1.default.white;
        }
        else {
            return color_1.default.black;
        }
    },
    specular: function (pos) { return color_1.default.white; },
    reflect: function (pos) {
        if ((Math.floor(pos.z) + Math.floor(pos.x)) % 2 !== 0) {
            return 0.1;
        }
        else {
            return 0.7;
        }
    },
    roughness: 150
};
//# sourceMappingURL=surface.js.map

/***/ }),

/***/ "./node_modules/@python36/raytrace/lib/things.js":
/*!*******************************************************!*\
  !*** ./node_modules/@python36/raytrace/lib/things.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const vector_1 = __webpack_require__(/*! ./vector */ "./node_modules/@python36/raytrace/lib/vector.js");
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

/***/ }),

/***/ "./node_modules/@python36/raytrace/lib/vector.js":
/*!*******************************************************!*\
  !*** ./node_modules/@python36/raytrace/lib/vector.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Vector {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static times(k, v) { return new Vector(k * v.x, k * v.y, k * v.z); }
    static minus(v1, v2) { return new Vector(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z); }
    static plus(v1, v2) { return new Vector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z); }
    static dot(v1, v2) { return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z; }
    static mag(v) { return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z); }
    static norm(v) {
        var mag = Vector.mag(v);
        var div = (mag === 0) ? Infinity : 1.0 / mag;
        return Vector.times(div, v);
    }
    static cross(v1, v2) {
        return new Vector(v1.y * v2.z - v1.z * v2.y, v1.z * v2.x - v1.x * v2.z, v1.x * v2.y - v1.y * v2.x);
    }
}
exports.default = Vector;
//# sourceMappingURL=vector.js.map

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _python36_raytrace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @python36/raytrace */ "./node_modules/@python36/raytrace/lib/index.js");
/* harmony import */ var _python36_raytrace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_python36_raytrace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _python36_sceneXML__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @python36/sceneXML */ "../sceneXML/lib/bundle.js");
/* harmony import */ var _python36_sceneXML__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_python36_sceneXML__WEBPACK_IMPORTED_MODULE_1__);


//Scene input was attempt to provide textarea with live raytrace updates on user input.
//Due to Types lost on compile, alternative solution needed.
function onLoad() {
    const canv = document.querySelector("#ray-canvas");
    const sceneInput = document.querySelector('#ray-input');
    const sceneSelector = document.querySelector('#ray-scene');
    const resSelector = document.querySelector('#ray-res');
    const processorSelector = document.querySelector('#ray-processor');
    const elapsedButton = document.querySelector('#ray-elapsed');
    const renderButton = document.querySelector('#ray-render');
    const rayTracer = new _python36_raytrace__WEBPACK_IMPORTED_MODULE_0___default.a();
    sceneInput.value = _python36_sceneXML__WEBPACK_IMPORTED_MODULE_1__["basicSceneXML"];
    let ctxMaybe = canv.getContext("2d");
    if (ctxMaybe == null) {
        return;
    }
    let ctx = ctxMaybe;
    // UI varibles, change due to user events
    let size;
    let img;
    let scene = Object(_python36_raytrace__WEBPACK_IMPORTED_MODULE_0__["defaultScene"])();
    let renewRaytrace = () => {
        const start = performance.now();
        rayTracer.renderToImage(scene, img);
        const end = performance.now();
        outputElapsedTime(end - start);
    };
    let outputElapsedTime = (n) => {
        elapsedButton.textContent = 'Elapsed : ' + (n / 1000.0).toFixed(2).toString() + 's';
        ['btn-primary', 'btn-success', 'btn-warning', 'btn-danger']
            .forEach(className => { elapsedButton.classList.remove(className); });
        if (n > 2000) {
            elapsedButton.classList.add('btn-danger');
        }
        else if (n > 500) {
            elapsedButton.classList.add('btn-warning');
        }
        else {
            elapsedButton.classList.add('btn-success');
        }
    };
    const resizeCanvas = () => ctx.canvas.height = ctx.canvas.width;
    const resizeTextarea = () => sceneInput.style.height = ctx.canvas.clientHeight.toString() + 'px';
    let changeRenderSize = () => {
        size = parseInt(resSelector.value);
        img = ctx.createImageData(size, size);
    };
    let outputRenderImage = () => {
        createImageBitmap(img, 0, 0, size, size)
            .then(imageBitmap => ctx.drawImage(imageBitmap, 0, 0, canv.width, canv.height));
    };
    window.addEventListener('resize', () => {
        resizeCanvas();
        resizeTextarea();
        outputRenderImage();
    });
    sceneSelector.addEventListener('change', () => {
        // scene = [emptyScene, defaultScene, scene2][parseInt(sceneSelector.value)](); 
        scene = Object(_python36_raytrace__WEBPACK_IMPORTED_MODULE_0__["defaultScene"])();
        renewRaytrace();
        outputRenderImage();
    });
    resSelector.addEventListener('change', () => {
        changeRenderSize();
        renewRaytrace();
        outputRenderImage();
    });
    processorSelector.addEventListener('change', () => {
        processorSelector.value;
    });
    renderButton.addEventListener('click', () => {
        console.log('selector value:', processorSelector.value);
        let processor = processors[processorSelector.value];
        if (processor) {
            processor();
        }
        else {
            console.log('Invalid processor select value.');
        }
    });
    changeRenderSize();
    renewRaytrace();
    resizeCanvas();
    resizeTextarea();
    outputRenderImage();
    const processors = {
        'golang-back': () => {
            let xml = sceneInput.value;
            fetch("http://localhost:5600/gen_xml.png?" + "xml-scene=" + encodeURI(xml), {
                "headers": {
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "accept-language": "en-US,en;q=0.9",
                },
                "referrerPolicy": "no-referrer-when-downgrade",
                "body": null,
                "method": "GET",
                "mode": "cors"
            })
                .then(res => res.blob())
                .then(blob => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result);
                    reader.onerror = reject;
                    reader.readAsDataURL(blob);
                });
            })
                .then(v => {
                let i = document.createElement('img');
                i.src = v;
                console.log(i.src);
                document.body.appendChild(i);
            })
                .catch(err => {
                console.log({ err });
            });
        },
        'typescript-back': () => {
            let xml = sceneInput.value;
            fetch("http://localhost:1234/gen.bmp?" + "xml-scene=" + encodeURI(xml), {
                "headers": {
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "accept-language": "en-US,en;q=0.9",
                },
                "referrerPolicy": "no-referrer-when-downgrade",
                "body": null,
                "method": "GET",
                "mode": "cors"
            })
                .then(res => res.blob())
                .then(blob => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result);
                    reader.onerror = reject;
                    reader.readAsDataURL(blob);
                });
            })
                .then(v => {
                let i = document.createElement('img');
                i.src = v;
                console.log(i.src);
                document.body.appendChild(i);
            })
                .catch(err => {
                console.log({ err });
            });
        },
        'typescript-front': () => {
            console.log('typescript-front');
            let result;
            try {
                result = Object(_python36_sceneXML__WEBPACK_IMPORTED_MODULE_1__["Parse"])(sceneInput.value);
            }
            catch (error) {
                console.error('Error during XML parsing:', error);
            }
            if (result) {
                scene = result;
                renewRaytrace();
            }
            else {
                scene = Object(_python36_raytrace__WEBPACK_IMPORTED_MODULE_0__["emptyScene"])();
                renewRaytrace();
                ['btn-primary', 'btn-success', 'btn-warning', 'btn-danger']
                    .forEach(className => { elapsedButton.classList.remove(className); });
                elapsedButton.classList.add('btn-danger');
                elapsedButton.textContent = 'Invalid XML';
            }
            outputRenderImage();
        }
    };
}
window.addEventListener('load', onLoad);
const gobackPostString = `
res=512&xml-scene=%3Cscene%3E%0D%0A++%3Ccamera+pos%3D%223.0%2C+2.0%2C+4.0%22+lookAt%3D%22-1.0%2C+0.5%2C+0.0%22+%2F%3E%0D%0A++%3Cobjects%3E%0D%0A++++%3Cplane+normal%3D%220.0%2C1.0%2C0.0%22+offset%3D%220.0%22+surface%3D%22checkerboard%22+%2F%3E%0D%0A++++%3Csphere+pos%3D%220.0%2C1.0%2C-0.25%22+size%3D%221.0%22+surface%3D%22shiny%22%2F%3E%0D%0A++++%3Csphere+pos%3D%22-1.0%2C0.5%2C1.5%22+size%3D%220.5%22+surface%3D%22shiny%22%2F%3E%0D%0A++++%3Csphere+pos%3D%22-5.5%2C2.0%2C-3.5%22+size%3D%221.25%22+surface%3D%22checkerboard%22%2F%3E%0D%0A++%3C%2Fobjects%3E%0D%0A++%3Clights%3E%0D%0A++++%3Clight+pos%3D%22-2.0%2C+2.5%2C+0.0%22+color%3D%220.49%2C+0.07%2C+0.07%22+%2F%3E+%0D%0A++++%3Clight+pos%3D%221.5%2C+2.5%2C+1.5%22+color%3D%220.07%2C+0.07%2C+0.49%22+%2F%3E+%0D%0A++++%3Clight+pos%3D%221.5%2C+2.5%2C+-1.5%22+color%3D%220.07%2C+0.49%2C+0.071%22+%2F%3E+%0D%0A++++%3Clight+pos%3D%220.0%2C+3.5%2C+0.0%22+color%3D%220.21%2C+0.21%2C+0.35%22+%2F%3E+%0D%0A++%3C%2Flights%3E%0D%0A%3C%2Fscene%3E
`.trim();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFNBQVMsRUFBRSxFQUFTLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRixPQUFPLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTFELHVGQUF1RjtBQUN2Riw0REFBNEQ7QUFDNUQsU0FBUyxNQUFNO0lBQ2IsTUFBTSxJQUFJLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEUsTUFBTSxVQUFVLEdBQXdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFN0UsTUFBTSxhQUFhLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUUsTUFBTSxXQUFXLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUUsTUFBTSxpQkFBaUIsR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRXRGLE1BQU0sYUFBYSxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sWUFBWSxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRTdFLE1BQU0sU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7SUFFbEMsVUFBVSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7SUFFakMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7UUFBRSxPQUFPO0tBQUU7SUFFakMsSUFBSSxHQUFHLEdBQTZCLFFBQVEsQ0FBQztJQUU3Qyx5Q0FBeUM7SUFDekMsSUFBSSxJQUFZLENBQUM7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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NjZW5lWE1ML2xpYi9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BweXRob24zNi9yYXl0cmFjZS9saWIvY2FtZXJhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcHl0aG9uMzYvcmF5dHJhY2UvbGliL2NvbG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcHl0aG9uMzYvcmF5dHJhY2UvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcHl0aG9uMzYvcmF5dHJhY2UvbGliL3JheXRyYWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcHl0aG9uMzYvcmF5dHJhY2UvbGliL3NjZW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcHl0aG9uMzYvcmF5dHJhY2UvbGliL3N1cmZhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BweXRob24zNi9yYXl0cmFjZS9saWIvdGhpbmdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcHl0aG9uMzYvcmF5dHJhY2UvbGliL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFD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QUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxnQ0FBZ0M7QUFDL0csaURBQWlEO0FBQ2pELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDZCQUE2QixNQUFNO0FBQ25DLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsZ0NBQWdDO0FBQy9HLGlEQUFpRDtBQUNqRCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSw2QkFBNkIsTUFBTTtBQUNuQyxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdFQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxRUFBVTtBQUNsQztBQUNBO0FBQ0EsMkNBQTJDLDJDQUEyQyxFQUFFO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMmpRIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC50c1wiKTtcbiIsIi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuLi9zaGFyZWQvbGliL2NhbWVyYS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuLi9zaGFyZWQvbGliL2NhbWVyYS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHZlY3Rvcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi92ZWN0b3IgKi8gXCIuLi9zaGFyZWQvbGliL3ZlY3Rvci5qc1wiKTtcclxuY2xhc3MgQ2FtZXJhIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcywgbG9va0F0KSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICAgICAgdmFyIGRvd24gPSBuZXcgdmVjdG9yXzEuZGVmYXVsdCgwLjAsIC0xLjAsIDAuMCk7XHJcbiAgICAgICAgdGhpcy5mb3J3YXJkID0gdmVjdG9yXzEuZGVmYXVsdC5ub3JtKHZlY3Rvcl8xLmRlZmF1bHQubWludXMobG9va0F0LCB0aGlzLnBvcykpO1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSB2ZWN0b3JfMS5kZWZhdWx0LnRpbWVzKDEuNSwgdmVjdG9yXzEuZGVmYXVsdC5ub3JtKHZlY3Rvcl8xLmRlZmF1bHQuY3Jvc3ModGhpcy5mb3J3YXJkLCBkb3duKSkpO1xyXG4gICAgICAgIHRoaXMudXAgPSB2ZWN0b3JfMS5kZWZhdWx0LnRpbWVzKDEuNSwgdmVjdG9yXzEuZGVmYXVsdC5ub3JtKHZlY3Rvcl8xLmRlZmF1bHQuY3Jvc3ModGhpcy5mb3J3YXJkLCB0aGlzLnJpZ2h0KSkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENhbWVyYTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FtZXJhLmpzLm1hcFxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi9zaGFyZWQvbGliL2NvbG9yLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi4vc2hhcmVkL2xpYi9jb2xvci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgQ29sb3Ige1xyXG4gICAgY29uc3RydWN0b3IociwgZywgYikge1xyXG4gICAgICAgIHRoaXMuciA9IHI7XHJcbiAgICAgICAgdGhpcy5nID0gZztcclxuICAgICAgICB0aGlzLmIgPSBiO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNjYWxlKGssIHYpIHsgcmV0dXJuIG5ldyBDb2xvcihrICogdi5yLCBrICogdi5nLCBrICogdi5iKTsgfVxyXG4gICAgc3RhdGljIHBsdXModjEsIHYyKSB7IHJldHVybiBuZXcgQ29sb3IodjEuciArIHYyLnIsIHYxLmcgKyB2Mi5nLCB2MS5iICsgdjIuYik7IH1cclxuICAgIHN0YXRpYyB0aW1lcyh2MSwgdjIpIHsgcmV0dXJuIG5ldyBDb2xvcih2MS5yICogdjIuciwgdjEuZyAqIHYyLmcsIHYxLmIgKiB2Mi5iKTsgfVxyXG4gICAgc3RhdGljIHRvRHJhd2luZ0NvbG9yKGMpIHtcclxuICAgICAgICB2YXIgbGVnYWxpemUgPSAoZCkgPT4gZCA+IDEgPyAxIDogZDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByOiBNYXRoLmZsb29yKGxlZ2FsaXplKGMucikgKiAyNTUpLFxyXG4gICAgICAgICAgICBnOiBNYXRoLmZsb29yKGxlZ2FsaXplKGMuZykgKiAyNTUpLFxyXG4gICAgICAgICAgICBiOiBNYXRoLmZsb29yKGxlZ2FsaXplKGMuYikgKiAyNTUpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBDb2xvcjtcclxuQ29sb3Iud2hpdGUgPSBuZXcgQ29sb3IoMS4wLCAxLjAsIDEuMCk7XHJcbkNvbG9yLmdyZXkgPSBuZXcgQ29sb3IoMC41LCAwLjUsIDAuNSk7XHJcbkNvbG9yLmJsYWNrID0gbmV3IENvbG9yKDAuMCwgMC4wLCAwLjApO1xyXG5Db2xvci5iYWNrZ3JvdW5kID0gQ29sb3IuYmxhY2s7XHJcbkNvbG9yLmRlZmF1bHRDb2xvciA9IENvbG9yLmJsYWNrO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb2xvci5qcy5tYXBcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vc2hhcmVkL2xpYi9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4uL3NoYXJlZC9saWIvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHJheXRyYWNlXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3JheXRyYWNlICovIFwiLi4vc2hhcmVkL2xpYi9yYXl0cmFjZS5qc1wiKTtcclxuY29uc3QgdmVjdG9yXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3ZlY3RvciAqLyBcIi4uL3NoYXJlZC9saWIvdmVjdG9yLmpzXCIpO1xyXG5leHBvcnRzLlZlY3RvciA9IHZlY3Rvcl8xLmRlZmF1bHQ7XHJcbmNvbnN0IGNhbWVyYV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jYW1lcmEgKi8gXCIuLi9zaGFyZWQvbGliL2NhbWVyYS5qc1wiKTtcclxuZXhwb3J0cy5DYW1lcmEgPSBjYW1lcmFfMS5kZWZhdWx0O1xyXG5jb25zdCBjb2xvcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jb2xvciAqLyBcIi4uL3NoYXJlZC9saWIvY29sb3IuanNcIik7XHJcbmV4cG9ydHMuQ29sb3IgPSBjb2xvcl8xLmRlZmF1bHQ7XHJcbmNvbnN0IFN1cmZhY2VzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9zdXJmYWNlICovIFwiLi4vc2hhcmVkL2xpYi9zdXJmYWNlLmpzXCIpO1xyXG5leHBvcnRzLlN1cmZhY2VzID0gU3VyZmFjZXM7XHJcbmNvbnN0IHRoaW5nc18xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi90aGluZ3MgKi8gXCIuLi9zaGFyZWQvbGliL3RoaW5ncy5qc1wiKTtcclxuZXhwb3J0cy5TcGhlcmUgPSB0aGluZ3NfMS5TcGhlcmU7XHJcbmV4cG9ydHMuUGxhbmUgPSB0aGluZ3NfMS5QbGFuZTtcclxuY29uc3Qgc2NlbmVfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc2NlbmUgKi8gXCIuLi9zaGFyZWQvbGliL3NjZW5lLmpzXCIpO1xyXG5leHBvcnRzLmRlZmF1bHRTY2VuZSA9IHNjZW5lXzEuZGVmYXVsdFNjZW5lO1xyXG5leHBvcnRzLnNjZW5lMiA9IHNjZW5lXzEuc2NlbmUyO1xyXG5leHBvcnRzLmVtcHR5U2NlbmUgPSBzY2VuZV8xLmVtcHR5U2NlbmU7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHJheXRyYWNlXzEuZGVmYXVsdDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uL3NoYXJlZC9saWIvcmF5dHJhY2UuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuLi9zaGFyZWQvbGliL3JheXRyYWNlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCB2ZWN0b3JfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdmVjdG9yICovIFwiLi4vc2hhcmVkL2xpYi92ZWN0b3IuanNcIik7XHJcbmNvbnN0IGNvbG9yXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NvbG9yICovIFwiLi4vc2hhcmVkL2xpYi9jb2xvci5qc1wiKTtcclxuY2xhc3MgUmF5VHJhY2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubWF4RGVwdGggPSA1O1xyXG4gICAgfVxyXG4gICAgaW50ZXJzZWN0aW9ucyhyYXksIHNjZW5lKSB7XHJcbiAgICAgICAgdmFyIGNsb3Nlc3QgPSArSW5maW5pdHk7XHJcbiAgICAgICAgdmFyIGNsb3Nlc3RJbnRlciA9IG51bGw7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBzY2VuZS50aGluZ3MpIHtcclxuICAgICAgICAgICAgdmFyIGludGVyID0gc2NlbmUudGhpbmdzW2ldLmludGVyc2VjdChyYXkpO1xyXG4gICAgICAgICAgICBpZiAoaW50ZXIgIT0gbnVsbCAmJiBpbnRlci5kaXN0IDwgY2xvc2VzdCkge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VzdEludGVyID0gaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjbG9zZXN0ID0gaW50ZXIuZGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2xvc2VzdEludGVyO1xyXG4gICAgfVxyXG4gICAgdGVzdFJheShyYXksIHNjZW5lKSB7XHJcbiAgICAgICAgdmFyIGlzZWN0ID0gdGhpcy5pbnRlcnNlY3Rpb25zKHJheSwgc2NlbmUpO1xyXG4gICAgICAgIGlmIChpc2VjdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc2VjdC5kaXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdHJhY2VSYXkocmF5LCBzY2VuZSwgZGVwdGgpIHtcclxuICAgICAgICB2YXIgaXNlY3QgPSB0aGlzLmludGVyc2VjdGlvbnMocmF5LCBzY2VuZSk7XHJcbiAgICAgICAgaWYgKGlzZWN0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvcl8xLmRlZmF1bHQuYmFja2dyb3VuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNoYWRlKGlzZWN0LCBzY2VuZSwgZGVwdGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNoYWRlKGlzZWN0LCBzY2VuZSwgZGVwdGgpIHtcclxuICAgICAgICB2YXIgZCA9IGlzZWN0LnJheS5kaXI7XHJcbiAgICAgICAgdmFyIHBvcyA9IHZlY3Rvcl8xLmRlZmF1bHQucGx1cyh2ZWN0b3JfMS5kZWZhdWx0LnRpbWVzKGlzZWN0LmRpc3QsIGQpLCBpc2VjdC5yYXkuc3RhcnQpO1xyXG4gICAgICAgIHZhciBub3JtYWwgPSBpc2VjdC50aGluZy5ub3JtYWwocG9zKTtcclxuICAgICAgICB2YXIgcmVmbGVjdERpciA9IHZlY3Rvcl8xLmRlZmF1bHQubWludXMoZCwgdmVjdG9yXzEuZGVmYXVsdC50aW1lcygyLCB2ZWN0b3JfMS5kZWZhdWx0LnRpbWVzKHZlY3Rvcl8xLmRlZmF1bHQuZG90KG5vcm1hbCwgZCksIG5vcm1hbCkpKTtcclxuICAgICAgICB2YXIgbmF0dXJhbENvbG9yID0gY29sb3JfMS5kZWZhdWx0LnBsdXMoY29sb3JfMS5kZWZhdWx0LmJhY2tncm91bmQsIHRoaXMuZ2V0TmF0dXJhbENvbG9yKGlzZWN0LnRoaW5nLCBwb3MsIG5vcm1hbCwgcmVmbGVjdERpciwgc2NlbmUpKTtcclxuICAgICAgICB2YXIgcmVmbGVjdGVkQ29sb3IgPSAoZGVwdGggPj0gdGhpcy5tYXhEZXB0aCkgPyBjb2xvcl8xLmRlZmF1bHQuZ3JleSA6IHRoaXMuZ2V0UmVmbGVjdGlvbkNvbG9yKGlzZWN0LnRoaW5nLCBwb3MsIG5vcm1hbCwgcmVmbGVjdERpciwgc2NlbmUsIGRlcHRoKTtcclxuICAgICAgICByZXR1cm4gY29sb3JfMS5kZWZhdWx0LnBsdXMobmF0dXJhbENvbG9yLCByZWZsZWN0ZWRDb2xvcik7XHJcbiAgICB9XHJcbiAgICBnZXRSZWZsZWN0aW9uQ29sb3IodGhpbmcsIHBvcywgbm9ybWFsLCByZCwgc2NlbmUsIGRlcHRoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yXzEuZGVmYXVsdC5zY2FsZSh0aGluZy5zdXJmYWNlLnJlZmxlY3QocG9zKSwgdGhpcy50cmFjZVJheSh7IHN0YXJ0OiBwb3MsIGRpcjogcmQgfSwgc2NlbmUsIGRlcHRoICsgMSkpO1xyXG4gICAgfVxyXG4gICAgZ2V0TmF0dXJhbENvbG9yKHRoaW5nLCBwb3MsIG5vcm0sIHJkLCBzY2VuZSkge1xyXG4gICAgICAgIHZhciBhZGRMaWdodCA9IChjb2wsIGxpZ2h0KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBsZGlzID0gdmVjdG9yXzEuZGVmYXVsdC5taW51cyhsaWdodC5wb3MsIHBvcyk7XHJcbiAgICAgICAgICAgIHZhciBsaXZlYyA9IHZlY3Rvcl8xLmRlZmF1bHQubm9ybShsZGlzKTtcclxuICAgICAgICAgICAgdmFyIG5lYXRJc2VjdCA9IHRoaXMudGVzdFJheSh7IHN0YXJ0OiBwb3MsIGRpcjogbGl2ZWMgfSwgc2NlbmUpO1xyXG4gICAgICAgICAgICB2YXIgaXNJblNoYWRvdyA9IChuZWF0SXNlY3QgPT09IG51bGwpID8gZmFsc2UgOiAobmVhdElzZWN0IDw9IHZlY3Rvcl8xLmRlZmF1bHQubWFnKGxkaXMpKTtcclxuICAgICAgICAgICAgaWYgKGlzSW5TaGFkb3cpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb2w7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWxsdW0gPSB2ZWN0b3JfMS5kZWZhdWx0LmRvdChsaXZlYywgbm9ybSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGNvbG9yID0gKGlsbHVtID4gMCkgPyBjb2xvcl8xLmRlZmF1bHQuc2NhbGUoaWxsdW0sIGxpZ2h0LmNvbG9yKVxyXG4gICAgICAgICAgICAgICAgICAgIDogY29sb3JfMS5kZWZhdWx0LmRlZmF1bHRDb2xvcjtcclxuICAgICAgICAgICAgICAgIHZhciBzcGVjdWxhciA9IHZlY3Rvcl8xLmRlZmF1bHQuZG90KGxpdmVjLCB2ZWN0b3JfMS5kZWZhdWx0Lm5vcm0ocmQpKTtcclxuICAgICAgICAgICAgICAgIHZhciBzY29sb3IgPSAoc3BlY3VsYXIgPiAwKSA/IGNvbG9yXzEuZGVmYXVsdC5zY2FsZShNYXRoLnBvdyhzcGVjdWxhciwgdGhpbmcuc3VyZmFjZS5yb3VnaG5lc3MpLCBsaWdodC5jb2xvcilcclxuICAgICAgICAgICAgICAgICAgICA6IGNvbG9yXzEuZGVmYXVsdC5kZWZhdWx0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sb3JfMS5kZWZhdWx0LnBsdXMoY29sLCBjb2xvcl8xLmRlZmF1bHQucGx1cyhjb2xvcl8xLmRlZmF1bHQudGltZXModGhpbmcuc3VyZmFjZS5kaWZmdXNlKHBvcyksIGxjb2xvciksIGNvbG9yXzEuZGVmYXVsdC50aW1lcyh0aGluZy5zdXJmYWNlLnNwZWN1bGFyKHBvcyksIHNjb2xvcikpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHNjZW5lLmxpZ2h0cy5yZWR1Y2UoYWRkTGlnaHQsIGNvbG9yXzEuZGVmYXVsdC5kZWZhdWx0Q29sb3IpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyVG9JbWFnZShzY2VuZSwgaW1hZ2UpIHtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgICAgIHZhciB3aWR0aCA9IGltYWdlLndpZHRoO1xyXG4gICAgICAgIHZhciBnZXRQb2ludCA9IGZ1bmN0aW9uICh4LCB5LCBjYW1lcmEpIHtcclxuICAgICAgICAgICAgdmFyIHJlY2VudGVyWCA9IGZ1bmN0aW9uICh4KSB7IHJldHVybiAoeCAtICh3aWR0aCAvIDIuMCkpIC8gMi4wIC8gd2lkdGg7IH07XHJcbiAgICAgICAgICAgIHZhciByZWNlbnRlclkgPSBmdW5jdGlvbiAoeSkgeyByZXR1cm4gLSh5IC0gKGhlaWdodCAvIDIuMCkpIC8gMi4wIC8gaGVpZ2h0OyB9O1xyXG4gICAgICAgICAgICByZXR1cm4gdmVjdG9yXzEuZGVmYXVsdC5ub3JtKHZlY3Rvcl8xLmRlZmF1bHQucGx1cyhjYW1lcmEuZm9yd2FyZCwgdmVjdG9yXzEuZGVmYXVsdC5wbHVzKHZlY3Rvcl8xLmRlZmF1bHQudGltZXMocmVjZW50ZXJYKHgpLCBjYW1lcmEucmlnaHQpLCB2ZWN0b3JfMS5kZWZhdWx0LnRpbWVzKHJlY2VudGVyWSh5KSwgY2FtZXJhLnVwKSkpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29sb3IgPSB0aGlzLnRyYWNlUmF5KHsgc3RhcnQ6IHNjZW5lLmNhbWVyYS5wb3MsIGRpcjogZ2V0UG9pbnQoeCwgeSwgc2NlbmUuY2FtZXJhKSB9LCBzY2VuZSwgMCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYyA9IGNvbG9yXzEuZGVmYXVsdC50b0RyYXdpbmdDb2xvcihjb2xvcik7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5kYXRhWygoeSAqICh3aWR0aCAqIDQpKSArICh4ICogNCkpXSA9IGMucjtcclxuICAgICAgICAgICAgICAgIGltYWdlLmRhdGFbKCh5ICogKHdpZHRoICogNCkpICsgKHggKiA0KSkgKyAxXSA9IGMuZztcclxuICAgICAgICAgICAgICAgIGltYWdlLmRhdGFbKCh5ICogKHdpZHRoICogNCkpICsgKHggKiA0KSkgKyAyXSA9IGMuYjtcclxuICAgICAgICAgICAgICAgIGltYWdlLmRhdGFbKCh5ICogKHdpZHRoICogNCkpICsgKHggKiA0KSkgKyAzXSA9IDI1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBSYXlUcmFjZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJheXRyYWNlLmpzLm1hcFxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi9zaGFyZWQvbGliL3NjZW5lLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi4vc2hhcmVkL2xpYi9zY2VuZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdmVjdG9yXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3ZlY3RvciAqLyBcIi4uL3NoYXJlZC9saWIvdmVjdG9yLmpzXCIpO1xyXG5jb25zdCBjb2xvcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jb2xvciAqLyBcIi4uL3NoYXJlZC9saWIvY29sb3IuanNcIik7XHJcbmNvbnN0IHRoaW5nc18xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi90aGluZ3MgKi8gXCIuLi9zaGFyZWQvbGliL3RoaW5ncy5qc1wiKTtcclxuY29uc3QgY2FtZXJhXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NhbWVyYSAqLyBcIi4uL3NoYXJlZC9saWIvY2FtZXJhLmpzXCIpO1xyXG5jb25zdCBTdXJmYWNlcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc3VyZmFjZSAqLyBcIi4uL3NoYXJlZC9saWIvc3VyZmFjZS5qc1wiKTtcclxuZnVuY3Rpb24gZGVmYXVsdFNjZW5lKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aGluZ3M6IFtcclxuICAgICAgICAgICAgbmV3IHRoaW5nc18xLlBsYW5lKG5ldyB2ZWN0b3JfMS5kZWZhdWx0KDAuMCwgMS4wLCAwLjApLCAwLjAsIFN1cmZhY2VzLmNoZWNrZXJib2FyZCksXHJcbiAgICAgICAgICAgIG5ldyB0aGluZ3NfMS5TcGhlcmUobmV3IHZlY3Rvcl8xLmRlZmF1bHQoMC4wLCAxLjAsIC0wLjI1KSwgMS4wLCBTdXJmYWNlcy5zaGlueSksXHJcbiAgICAgICAgICAgIG5ldyB0aGluZ3NfMS5TcGhlcmUobmV3IHZlY3Rvcl8xLmRlZmF1bHQoLTEuMCwgMC41LCAxLjUpLCAwLjUsIFN1cmZhY2VzLnNoaW55KVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGlnaHRzOiBbXHJcbiAgICAgICAgICAgIHsgcG9zOiBuZXcgdmVjdG9yXzEuZGVmYXVsdCgtMi4wLCAyLjUsIDAuMCksIGNvbG9yOiBuZXcgY29sb3JfMS5kZWZhdWx0KDAuNDksIDAuMDcsIDAuMDcpIH0sXHJcbiAgICAgICAgICAgIHsgcG9zOiBuZXcgdmVjdG9yXzEuZGVmYXVsdCgxLjUsIDIuNSwgMS41KSwgY29sb3I6IG5ldyBjb2xvcl8xLmRlZmF1bHQoMC4wNywgMC4wNywgMC40OSkgfSxcclxuICAgICAgICAgICAgeyBwb3M6IG5ldyB2ZWN0b3JfMS5kZWZhdWx0KDEuNSwgMi41LCAtMS41KSwgY29sb3I6IG5ldyBjb2xvcl8xLmRlZmF1bHQoMC4wNywgMC40OSwgMC4wNzEpIH0sXHJcbiAgICAgICAgICAgIHsgcG9zOiBuZXcgdmVjdG9yXzEuZGVmYXVsdCgwLjAsIDMuNSwgMC4wKSwgY29sb3I6IG5ldyBjb2xvcl8xLmRlZmF1bHQoMC4yMSwgMC4yMSwgMC4zNSkgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY2FtZXJhOiBuZXcgY2FtZXJhXzEuZGVmYXVsdChuZXcgdmVjdG9yXzEuZGVmYXVsdCgzLjAsIDIuMCwgNC4wKSwgbmV3IHZlY3Rvcl8xLmRlZmF1bHQoLTEuMCwgMC41LCAwLjApKVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmRlZmF1bHRTY2VuZSA9IGRlZmF1bHRTY2VuZTtcclxuZnVuY3Rpb24gc2NlbmUyKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aGluZ3M6IFtcclxuICAgICAgICAgICAgbmV3IHRoaW5nc18xLlBsYW5lKG5ldyB2ZWN0b3JfMS5kZWZhdWx0KDAuMCwgMS4wLCAwLjApLCAwLjAsIFN1cmZhY2VzLmNoZWNrZXJib2FyZCksXHJcbiAgICAgICAgICAgIG5ldyB0aGluZ3NfMS5TcGhlcmUobmV3IHZlY3Rvcl8xLmRlZmF1bHQoMC4wLCAxLjAsIC0wLjI1KSwgMS4wLCBTdXJmYWNlcy5zaGlueSksXHJcbiAgICAgICAgICAgIG5ldyB0aGluZ3NfMS5TcGhlcmUobmV3IHZlY3Rvcl8xLmRlZmF1bHQoLTEuMCwgMC41LCAxLjUpLCAwLjUsIFN1cmZhY2VzLnNoaW55KSxcclxuICAgICAgICAgICAgbmV3IHRoaW5nc18xLlNwaGVyZShuZXcgdmVjdG9yXzEuZGVmYXVsdCgtNS41LCAyLjAsIC0zLjUpLCAxLjI1LCBTdXJmYWNlcy5jaGVja2VyYm9hcmQpXHJcbiAgICAgICAgXSxcclxuICAgICAgICBsaWdodHM6IFtcclxuICAgICAgICAgICAgeyBwb3M6IG5ldyB2ZWN0b3JfMS5kZWZhdWx0KC0yLjAsIDIuNSwgMC4wKSwgY29sb3I6IG5ldyBjb2xvcl8xLmRlZmF1bHQoMC40OSwgMC4wNywgMC4wNykgfSxcclxuICAgICAgICAgICAgeyBwb3M6IG5ldyB2ZWN0b3JfMS5kZWZhdWx0KDEuNSwgMi41LCAxLjUpLCBjb2xvcjogbmV3IGNvbG9yXzEuZGVmYXVsdCgwLjA3LCAwLjA3LCAwLjQ5KSB9LFxyXG4gICAgICAgICAgICB7IHBvczogbmV3IHZlY3Rvcl8xLmRlZmF1bHQoMS41LCAyLjUsIC0xLjUpLCBjb2xvcjogbmV3IGNvbG9yXzEuZGVmYXVsdCgwLjA3LCAwLjQ5LCAwLjA3MSkgfSxcclxuICAgICAgICAgICAgeyBwb3M6IG5ldyB2ZWN0b3JfMS5kZWZhdWx0KDAuMCwgMy41LCAwLjApLCBjb2xvcjogbmV3IGNvbG9yXzEuZGVmYXVsdCgwLjIxLCAwLjIxLCAwLjM1KSB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBjYW1lcmE6IG5ldyBjYW1lcmFfMS5kZWZhdWx0KG5ldyB2ZWN0b3JfMS5kZWZhdWx0KDMuMCwgMi4wLCA0LjApLCBuZXcgdmVjdG9yXzEuZGVmYXVsdCgtMS4wLCAwLjUsIDAuMCkpXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuc2NlbmUyID0gc2NlbmUyO1xyXG5mdW5jdGlvbiBlbXB0eVNjZW5lKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aGluZ3M6IFtdLFxyXG4gICAgICAgIGxpZ2h0czogW10sXHJcbiAgICAgICAgY2FtZXJhOiBuZXcgY2FtZXJhXzEuZGVmYXVsdChuZXcgdmVjdG9yXzEuZGVmYXVsdCgzLjAsIDIuMCwgNC4wKSwgbmV3IHZlY3Rvcl8xLmRlZmF1bHQoLTEuMCwgMC41LCAwLjApKVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmVtcHR5U2NlbmUgPSBlbXB0eVNjZW5lO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2VuZS5qcy5tYXBcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vc2hhcmVkL2xpYi9zdXJmYWNlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuLi9zaGFyZWQvbGliL3N1cmZhY2UuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY29sb3JfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY29sb3IgKi8gXCIuLi9zaGFyZWQvbGliL2NvbG9yLmpzXCIpO1xyXG5leHBvcnRzLnNoaW55ID0ge1xyXG4gICAgZGlmZnVzZTogZnVuY3Rpb24gKHBvcykgeyByZXR1cm4gY29sb3JfMS5kZWZhdWx0LndoaXRlOyB9LFxyXG4gICAgc3BlY3VsYXI6IGZ1bmN0aW9uIChwb3MpIHsgcmV0dXJuIGNvbG9yXzEuZGVmYXVsdC5ncmV5OyB9LFxyXG4gICAgcmVmbGVjdDogZnVuY3Rpb24gKHBvcykgeyByZXR1cm4gMC43OyB9LFxyXG4gICAgcm91Z2huZXNzOiAyNTBcclxufTtcclxuZXhwb3J0cy5jaGVja2VyYm9hcmQgPSB7XHJcbiAgICBkaWZmdXNlOiBmdW5jdGlvbiAocG9zKSB7XHJcbiAgICAgICAgaWYgKChNYXRoLmZsb29yKHBvcy56KSArIE1hdGguZmxvb3IocG9zLngpKSAlIDIgIT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yXzEuZGVmYXVsdC53aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvcl8xLmRlZmF1bHQuYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNwZWN1bGFyOiBmdW5jdGlvbiAocG9zKSB7IHJldHVybiBjb2xvcl8xLmRlZmF1bHQud2hpdGU7IH0sXHJcbiAgICByZWZsZWN0OiBmdW5jdGlvbiAocG9zKSB7XHJcbiAgICAgICAgaWYgKChNYXRoLmZsb29yKHBvcy56KSArIE1hdGguZmxvb3IocG9zLngpKSAlIDIgIT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDAuMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwLjc7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJvdWdobmVzczogMTUwXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1cmZhY2UuanMubWFwXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uL3NoYXJlZC9saWIvdGhpbmdzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4uL3NoYXJlZC9saWIvdGhpbmdzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdmVjdG9yXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3ZlY3RvciAqLyBcIi4uL3NoYXJlZC9saWIvdmVjdG9yLmpzXCIpO1xyXG5jbGFzcyBTcGhlcmUge1xyXG4gICAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMsIHN1cmZhY2UpIHtcclxuICAgICAgICB0aGlzLmNlbnRlciA9IGNlbnRlcjtcclxuICAgICAgICB0aGlzLnN1cmZhY2UgPSBzdXJmYWNlO1xyXG4gICAgICAgIHRoaXMucmFkaXVzMiA9IHJhZGl1cyAqIHJhZGl1cztcclxuICAgIH1cclxuICAgIG5vcm1hbChwb3MpIHsgcmV0dXJuIHZlY3Rvcl8xLmRlZmF1bHQubm9ybSh2ZWN0b3JfMS5kZWZhdWx0Lm1pbnVzKHBvcywgdGhpcy5jZW50ZXIpKTsgfVxyXG4gICAgaW50ZXJzZWN0KHJheSkge1xyXG4gICAgICAgIHZhciBlbyA9IHZlY3Rvcl8xLmRlZmF1bHQubWludXModGhpcy5jZW50ZXIsIHJheS5zdGFydCk7XHJcbiAgICAgICAgdmFyIHYgPSB2ZWN0b3JfMS5kZWZhdWx0LmRvdChlbywgcmF5LmRpcik7XHJcbiAgICAgICAgdmFyIGRpc3QgPSAwO1xyXG4gICAgICAgIGlmICh2ID49IDApIHtcclxuICAgICAgICAgICAgdmFyIGRpc2MgPSB0aGlzLnJhZGl1czIgLSAodmVjdG9yXzEuZGVmYXVsdC5kb3QoZW8sIGVvKSAtIHYgKiB2KTtcclxuICAgICAgICAgICAgaWYgKGRpc2MgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgZGlzdCA9IHYgLSBNYXRoLnNxcnQoZGlzYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRpc3QgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4geyB0aGluZzogdGhpcywgcmF5OiByYXksIGRpc3Q6IGRpc3QgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TcGhlcmUgPSBTcGhlcmU7XHJcbmNsYXNzIFBsYW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKG5vcm0sIG9mZnNldCwgc3VyZmFjZSkge1xyXG4gICAgICAgIHRoaXMuc3VyZmFjZSA9IHN1cmZhY2U7XHJcbiAgICAgICAgdGhpcy5ub3JtYWwgPSBmdW5jdGlvbiAocG9zKSB7IHJldHVybiBub3JtOyB9O1xyXG4gICAgICAgIHRoaXMuaW50ZXJzZWN0ID0gZnVuY3Rpb24gKHJheSkge1xyXG4gICAgICAgICAgICB2YXIgZGVub20gPSB2ZWN0b3JfMS5kZWZhdWx0LmRvdChub3JtLCByYXkuZGlyKTtcclxuICAgICAgICAgICAgaWYgKGRlbm9tID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGlzdCA9ICh2ZWN0b3JfMS5kZWZhdWx0LmRvdChub3JtLCByYXkuc3RhcnQpICsgb2Zmc2V0KSAvICgtZGVub20pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdGhpbmc6IHRoaXMsIHJheTogcmF5LCBkaXN0OiBkaXN0IH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUGxhbmUgPSBQbGFuZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGhpbmdzLmpzLm1hcFxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi9zaGFyZWQvbGliL3ZlY3Rvci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuLi9zaGFyZWQvbGliL3ZlY3Rvci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIFZlY3RvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB6KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMueiA9IHo7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgdGltZXMoaywgdikgeyByZXR1cm4gbmV3IFZlY3RvcihrICogdi54LCBrICogdi55LCBrICogdi56KTsgfVxyXG4gICAgc3RhdGljIG1pbnVzKHYxLCB2MikgeyByZXR1cm4gbmV3IFZlY3Rvcih2MS54IC0gdjIueCwgdjEueSAtIHYyLnksIHYxLnogLSB2Mi56KTsgfVxyXG4gICAgc3RhdGljIHBsdXModjEsIHYyKSB7IHJldHVybiBuZXcgVmVjdG9yKHYxLnggKyB2Mi54LCB2MS55ICsgdjIueSwgdjEueiArIHYyLnopOyB9XHJcbiAgICBzdGF0aWMgZG90KHYxLCB2MikgeyByZXR1cm4gdjEueCAqIHYyLnggKyB2MS55ICogdjIueSArIHYxLnogKiB2Mi56OyB9XHJcbiAgICBzdGF0aWMgbWFnKHYpIHsgcmV0dXJuIE1hdGguc3FydCh2LnggKiB2LnggKyB2LnkgKiB2LnkgKyB2LnogKiB2LnopOyB9XHJcbiAgICBzdGF0aWMgbm9ybSh2KSB7XHJcbiAgICAgICAgdmFyIG1hZyA9IFZlY3Rvci5tYWcodik7XHJcbiAgICAgICAgdmFyIGRpdiA9IChtYWcgPT09IDApID8gSW5maW5pdHkgOiAxLjAgLyBtYWc7XHJcbiAgICAgICAgcmV0dXJuIFZlY3Rvci50aW1lcyhkaXYsIHYpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNyb3NzKHYxLCB2Mikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHYxLnkgKiB2Mi56IC0gdjEueiAqIHYyLnksIHYxLnogKiB2Mi54IC0gdjEueCAqIHYyLnosIHYxLnggKiB2Mi55IC0gdjEueSAqIHYyLngpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFZlY3RvcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmVjdG9yLmpzLm1hcFxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9pbmRleC50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9pbmRleC50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc2NlbmVYTUxfMSA9IF9faW1wb3J0U3RhcihfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3NjZW5lWE1MICovIFwiLi9zcmMvc2NlbmVYTUwudHNcIikpO1xyXG5leHBvcnRzLlBhcnNlID0gc2NlbmVYTUxfMS5kZWZhdWx0O1xyXG5leHBvcnRzLmJhc2ljU2NlbmVYTUwgPSBzY2VuZVhNTF8xLmJhc2ljU2NlbmVYTUw7XHJcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9zY2VuZVhNTC50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9zY2VuZVhNTC50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHJheXRyYWNlXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAcHl0aG9uMzYvcmF5dHJhY2UgKi8gXCIuLi9zaGFyZWQvbGliL2luZGV4LmpzXCIpO1xyXG4vLyBUaHJvd3MgZXJyb3Igb24gaW52YWxpZCB4bWxcclxuZnVuY3Rpb24gUGFyc2VYTUxUb1NjZW5lKHhtbElucHV0KSB7XHJcbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcbiAgICBjb25zdCB4bWwgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHhtbElucHV0LCAnYXBwbGljYXRpb24veG1sJyk7XHJcbiAgICBjb25zb2xlLmxvZygneG1sJywgeG1sKTtcclxuICAgIGNvbnN0IHBhcnNlckVycm9yTm9kZSA9IHhtbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgncGFyc2VyZXJyb3InKTtcclxuICAgIGlmIChwYXJzZXJFcnJvck5vZGUubGVuZ3RoICE9IDApIHtcclxuICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG9iamVjdHMgPSBbXTtcclxuICAgIGNvbnN0IGxpZ2h0cyA9IFtdO1xyXG4gICAgbGV0IGNhbWVyYSA9IG5ldyByYXl0cmFjZV8xLkNhbWVyYShuZXcgcmF5dHJhY2VfMS5WZWN0b3IoMy4wLCAyLjAsIDQuMCksIG5ldyByYXl0cmFjZV8xLlZlY3RvcigtMS4wLCAwLjUsIDAuMCkpO1xyXG4gICAgLy9MZXZlbCAxXHJcbiAgICBjb25zdCBzY2VuZU5vZGUgPSB4bWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjZW5lJylbMF07XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzY2VuZU5vZGUpO1xyXG4gICAgLy9MZXZlbCAyXHJcbiAgICBjb25zdCBjYW1lcmFOb2RlID0gc2NlbmVOb2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjYW1lcmEnKVswXTtcclxuICAgIGNvbnN0IG9iamVjdHNOb2RlID0gc2NlbmVOb2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdvYmplY3RzJylbMF07XHJcbiAgICBjb25zdCBsaWdodHNOb2RlID0gc2NlbmVOb2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaWdodHMnKVswXTtcclxuICAgIC8vTGV2ZWwgM1xyXG4gICAgY29uc3QgcGxhbmVOb2RlcyA9IG9iamVjdHNOb2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdwbGFuZScpO1xyXG4gICAgY29uc3Qgc3BoZXJlTm9kZXMgPSBvYmplY3RzTm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc3BoZXJlJyk7XHJcbiAgICBjb25zdCBsaWdodE5vZGVzID0gbGlnaHRzTm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGlnaHQnKTtcclxuICAgIC8vIHhtbCBub2RlcyB0byB0eXBlc2NyaXB0IG9iamVjdHNcclxuICAgIGZvciAobGV0IHAgb2YgcGxhbmVOb2Rlcykge1xyXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkQXR0cmlidXRlcyA9IFsncG9zJywgJ29mZnNldCcsICdzdXJmYWNlJ107XHJcbiAgICAgICAgaWYgKHJlcXVpcmVkQXR0cmlidXRlcy5ldmVyeShhID0+IHAuaGFzQXR0cmlidXRlKGEpKSkge1xyXG4gICAgICAgICAgICBjb25zdCBwb3NBdHQgPSBwLmdldEF0dHJpYnV0ZSgncG9zJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldEF0dCA9IHAuZ2V0QXR0cmlidXRlKCdvZmZzZXQnKTtcclxuICAgICAgICAgICAgY29uc3Qgc3VyZmFjZUF0dCA9IHAuZ2V0QXR0cmlidXRlKCdzdXJmYWNlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG51bWJlcnMgPSBwb3NBdHQuc3BsaXQoJywnKS5zbGljZSgwLCAzKS5tYXAocyA9PiBwYXJzZUZsb2F0KHMpKTtcclxuICAgICAgICAgICAgY29uc3QgdmVjID0gbmV3IHJheXRyYWNlXzEuVmVjdG9yKG51bWJlcnNbMF0sIG51bWJlcnNbMV0sIG51bWJlcnNbMl0pO1xyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBwYXJzZUZsb2F0KG9mZnNldEF0dCk7XHJcbiAgICAgICAgICAgIGxldCBzdXJmYWNlID0gcmF5dHJhY2VfMS5TdXJmYWNlcy5jaGVja2VyYm9hcmQ7XHJcbiAgICAgICAgICAgIGlmIChzdXJmYWNlQXR0ID09PSAnc2hpbnknKSB7XHJcbiAgICAgICAgICAgICAgICBzdXJmYWNlID0gcmF5dHJhY2VfMS5TdXJmYWNlcy5zaGlueTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndmVjOicsIHZlYyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdudW1iZXJzOicsIG51bWJlcnMpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnb2Zmc2V0OicsIG9mZnNldCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzdXJmYWNlOicsIHN1cmZhY2UpO1xyXG4gICAgICAgICAgICBvYmplY3RzLnB1c2gobmV3IHJheXRyYWNlXzEuUGxhbmUodmVjLCBvZmZzZXQsIHN1cmZhY2UpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBzIG9mIHNwaGVyZU5vZGVzKSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWlyZWRBdHRyaWJ1dGVzID0gWydwb3MnLCAnc2l6ZScsICdzdXJmYWNlJ107XHJcbiAgICAgICAgaWYgKHJlcXVpcmVkQXR0cmlidXRlcy5ldmVyeShhID0+IHMuaGFzQXR0cmlidXRlKGEpKSkge1xyXG4gICAgICAgICAgICBjb25zdCBwb3NBdHQgPSBzLmdldEF0dHJpYnV0ZSgncG9zJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpemVBdHQgPSBzLmdldEF0dHJpYnV0ZSgnc2l6ZScpO1xyXG4gICAgICAgICAgICBjb25zdCBzdXJmYWNlQXR0ID0gcy5nZXRBdHRyaWJ1dGUoJ3N1cmZhY2UnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coeyBwb3NBdHQsIHNpemVBdHQsIHN1cmZhY2VBdHQgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG51bWJlcnMgPSBwb3NBdHQuc3BsaXQoJywnKS5zbGljZSgwLCAzKS5tYXAocyA9PiBwYXJzZUZsb2F0KHMpKTtcclxuICAgICAgICAgICAgY29uc3QgdmVjID0gbmV3IHJheXRyYWNlXzEuVmVjdG9yKG51bWJlcnNbMF0sIG51bWJlcnNbMV0sIG51bWJlcnNbMl0pO1xyXG4gICAgICAgICAgICBjb25zdCBzaXplID0gcGFyc2VGbG9hdChzaXplQXR0KTtcclxuICAgICAgICAgICAgbGV0IHN1cmZhY2UgPSByYXl0cmFjZV8xLlN1cmZhY2VzLmNoZWNrZXJib2FyZDtcclxuICAgICAgICAgICAgaWYgKHN1cmZhY2VBdHQgPT09ICdzaGlueScpIHtcclxuICAgICAgICAgICAgICAgIHN1cmZhY2UgPSByYXl0cmFjZV8xLlN1cmZhY2VzLnNoaW55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd2ZWM6JywgdmVjKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ251bWJlcnM6JywgbnVtYmVycyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzaXplOicsIHNpemUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc3VyZmFjZTonLCBzdXJmYWNlKTtcclxuICAgICAgICAgICAgb2JqZWN0cy5wdXNoKG5ldyByYXl0cmFjZV8xLlNwaGVyZSh2ZWMsIHNpemUsIHN1cmZhY2UpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBsIG9mIGxpZ2h0Tm9kZXMpIHtcclxuICAgICAgICBjb25zdCByZXF1aXJlZEF0dHJpYnV0ZXMgPSBbJ3BvcycsICdjb2xvciddO1xyXG4gICAgICAgIGlmIChyZXF1aXJlZEF0dHJpYnV0ZXMuZXZlcnkoYSA9PiBsLmhhc0F0dHJpYnV0ZShhKSkpIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zQXR0ID0gbC5nZXRBdHRyaWJ1dGUoJ3BvcycpO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvckF0dCA9IGwuZ2V0QXR0cmlidXRlKCdjb2xvcicpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7IHBvc0F0dCwgY29sb3JBdHQgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG51bWJlcnMgPSBwb3NBdHQuc3BsaXQoJywnKS5zbGljZSgwLCAzKS5tYXAocyA9PiBwYXJzZUZsb2F0KHMpKTtcclxuICAgICAgICAgICAgY29uc3QgdmVjID0gbmV3IHJheXRyYWNlXzEuVmVjdG9yKG51bWJlcnNbMF0sIG51bWJlcnNbMV0sIG51bWJlcnNbMl0pO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGNvbG9yQXR0LnNwbGl0KCcsJykuc2xpY2UoMCwgMykubWFwKHMgPT4gcGFyc2VGbG9hdChzKSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd2ZWM6JywgdmVjKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ251bWJlcnM6JywgbnVtYmVycyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb2xvcjonLCBjb2xvcik7XHJcbiAgICAgICAgICAgIGxpZ2h0cy5wdXNoKHsgcG9zOiB2ZWMsIGNvbG9yOiBuZXcgcmF5dHJhY2VfMS5Db2xvcihjb2xvclswXSwgY29sb3JbMV0sIGNvbG9yWzJdKSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAoZnVuY3Rpb24gcGFyc2VMaWdodChjYW1lcmFOb2RlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2FtZXJhTm9kZSk7XHJcbiAgICAgICAgY29uc3QgcmVxdWlyZWRBdHRyaWJ1dGVzID0gWydwb3MnLCAnbG9va0F0J107XHJcbiAgICAgICAgaWYgKHJlcXVpcmVkQXR0cmlidXRlcy5ldmVyeShhID0+IGNhbWVyYU5vZGUuaGFzQXR0cmlidXRlKGEpKSkge1xyXG4gICAgICAgICAgICBjb25zdCBwb3NBdHQgPSBjYW1lcmFOb2RlLmdldEF0dHJpYnV0ZSgncG9zJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvb2tBdEF0dCA9IGNhbWVyYU5vZGUuZ2V0QXR0cmlidXRlKCdsb29rQXQnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coeyBwb3NBdHQsIGxvb2tBdEF0dCB9KTtcclxuICAgICAgICAgICAgbGV0IG51bWJlcnMgPSBwb3NBdHQuc3BsaXQoJywnKS5zbGljZSgwLCAzKS5tYXAocyA9PiBwYXJzZUZsb2F0KHMpKTtcclxuICAgICAgICAgICAgY29uc3QgcG9zID0gbmV3IHJheXRyYWNlXzEuVmVjdG9yKG51bWJlcnNbMF0sIG51bWJlcnNbMV0sIG51bWJlcnNbMl0pO1xyXG4gICAgICAgICAgICBudW1iZXJzID0gbG9va0F0QXR0LnNwbGl0KCcsJykuc2xpY2UoMCwgMykubWFwKHMgPT4gcGFyc2VGbG9hdChzKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvb2tBdCA9IG5ldyByYXl0cmFjZV8xLlZlY3RvcihudW1iZXJzWzBdLCBudW1iZXJzWzFdLCBudW1iZXJzWzJdKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coeyBwb3MsIGxvb2tBdCB9KVxyXG4gICAgICAgICAgICBjYW1lcmEgPSBuZXcgcmF5dHJhY2VfMS5DYW1lcmEocG9zLCBsb29rQXQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pKGNhbWVyYU5vZGUpO1xyXG4gICAgY29uc29sZS5sb2cob2JqZWN0cyk7XHJcbiAgICBjb25zb2xlLmxvZyhsaWdodHMpO1xyXG4gICAgY29uc3Qgc2NlbmUgPSB7XHJcbiAgICAgICAgdGhpbmdzOiBvYmplY3RzLFxyXG4gICAgICAgIGxpZ2h0czogbGlnaHRzLFxyXG4gICAgICAgIGNhbWVyYVxyXG4gICAgfTtcclxuICAgIGNvbnNvbGUubG9nKCdwYXJzZWQgc2NlbmUgOiAnLCBzY2VuZSk7XHJcbiAgICByZXR1cm4gc2NlbmU7XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gUGFyc2VYTUxUb1NjZW5lO1xyXG5leHBvcnRzLmJhc2ljU2NlbmVYTUwgPSBcclxuLy8gZXhwb3J0IGZ1bmN0aW9uIERlZmF1bHRYTUwoKTogc3RyaW5nIHtcclxuLy8gIHJldHVybiBcclxuYFxuPHNjZW5lPlxuICA8Y2FtZXJhIHBvcz1cIjMuMCwgMi4wLCA0LjBcIiBsb29rQXQ9XCItMS4wLCAwLjUsIDAuMFwiIC8+XG4gIDxvYmplY3RzPlxuICAgIDxwbGFuZSBwb3M9XCIwLjAsMS4wLDAuMFwiIG9mZnNldD1cIjAuMFwiIHN1cmZhY2U9XCJjaGVja2VyYm9hcmRcIiAvPlxuICAgIDxzcGhlcmUgcG9zPVwiMC4wLDEuMCwtMC4yNVwiIHNpemU9XCIxLjBcIiBzdXJmYWNlPVwic2hpbnlcIi8+XG4gICAgPHNwaGVyZSBwb3M9XCItMS4wLDAuNSwxLjVcIiBzaXplPVwiMC41XCIgc3VyZmFjZT1cInNoaW55XCIvPlxuICAgIDxzcGhlcmUgcG9zPVwiLTUuNSwyLjAsLTMuNVwiIHNpemU9XCIxLjI1XCIgc3VyZmFjZT1cImNoZWNrZXJib2FyZFwiLz5cbiAgPC9vYmplY3RzPlxuICA8bGlnaHRzPlxuICAgIDxsaWdodCBwb3M9XCItMi4wLCAyLjUsIDAuMFwiIGNvbG9yPVwiMC40OSwgMC4wNywgMC4wN1wiIC8+IFxuICAgIDxsaWdodCBwb3M9XCIxLjUsIDIuNSwgMS41XCIgY29sb3I9XCIwLjA3LCAwLjA3LCAwLjQ5XCIgLz4gXG4gICAgPGxpZ2h0IHBvcz1cIjEuNSwgMi41LCAtMS41XCIgY29sb3I9XCIwLjA3LCAwLjQ5LCAwLjA3MVwiIC8+IFxuICAgIDxsaWdodCBwb3M9XCIwLjAsIDMuNSwgMC4wXCIgY29sb3I9XCIwLjIxLCAwLjIxLCAwLjM1XCIgLz4gXG4gIDwvbGlnaHRzPlxuPC9zY2VuZT5cbiAgYC50cmltKCk7XHJcbi8vfVxyXG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFpTENKM1pXSndZV05yT2k4dkx5NHVMM05vWVhKbFpDOXNhV0l2WTJGdFpYSmhMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMaTl6YUdGeVpXUXZiR2xpTDJOdmJHOXlMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMaTl6YUdGeVpXUXZiR2xpTDJsdVpHVjRMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMaTl6YUdGeVpXUXZiR2xpTDNKaGVYUnlZV05sTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TGk5emFHRnlaV1F2YkdsaUwzTmpaVzVsTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TGk5emFHRnlaV1F2YkdsaUwzTjFjbVpoWTJVdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dUwzTm9ZWEpsWkM5c2FXSXZkR2hwYm1kekxtcHpJaXdpZDJWaWNHRmphem92THk4dUxpOXphR0Z5WldRdmJHbGlMM1psWTNSdmNpNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12YVc1a1pYZ3VkSE1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDNOalpXNWxXRTFNTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1VVRkJRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUczdVVUZGUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3VVVGRFFUczdPMUZCUjBFN1VVRkRRVHM3VVVGRlFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxEQkRRVUV3UXl4blEwRkJaME03VVVGRE1VVTdVVUZEUVRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFTeDNSRUZCZDBRc2EwSkJRV3RDTzFGQlF6RkZPMUZCUTBFc2FVUkJRV2xFTEdOQlFXTTdVVUZETDBRN08xRkJSVUU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTEhsRFFVRjVReXhwUTBGQmFVTTdVVUZETVVVc1owaEJRV2RJTEcxQ1FVRnRRaXhGUVVGRk8xRkJRM0pKTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEVzTWtKQlFUSkNMREJDUVVFd1FpeEZRVUZGTzFGQlEzWkVMR2xEUVVGcFF5eGxRVUZsTzFGQlEyaEVPMUZCUTBFN1VVRkRRVHM3VVVGRlFUdFJRVU5CTEhORVFVRnpSQ3dyUkVGQkswUTdPMUZCUlhKSU8xRkJRMEU3T3p0UlFVZEJPMUZCUTBFN096czdPenM3T3pzN096czdRVU5zUm1FN1FVRkRZaXc0UTBGQk9FTXNZMEZCWXp0QlFVTTFSQ3hwUWtGQmFVSXNiVUpCUVU4c1EwRkJReXg1UTBGQlZUdEJRVU51UXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR3RET3pzN096czdPenM3T3pzN1FVTmlZVHRCUVVOaUxEaERRVUU0UXl4alFVRmpPMEZCUXpWRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMSGRDUVVGM1FpdzJRMEZCTmtNN1FVRkRja1VzZVVKQlFYbENMSGxFUVVGNVJEdEJRVU5zUml3d1FrRkJNRUlzZVVSQlFYbEVPMEZCUTI1R08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xET3pzN096czdPenM3T3pzN1FVTXhRbUU3UVVGRFlpdzRRMEZCT0VNc1kwRkJZenRCUVVNMVJDeHRRa0ZCYlVJc2JVSkJRVThzUTBGQlF5dzJRMEZCV1R0QlFVTjJReXhwUWtGQmFVSXNiVUpCUVU4c1EwRkJReXg1UTBGQlZUdEJRVU51UXp0QlFVTkJMR2xDUVVGcFFpeHRRa0ZCVHl4RFFVRkRMSGxEUVVGVk8wRkJRMjVETzBGQlEwRXNaMEpCUVdkQ0xHMUNRVUZQTEVOQlFVTXNkVU5CUVZNN1FVRkRha003UVVGRFFTeHBRa0ZCYVVJc2JVSkJRVThzUTBGQlF5d3lRMEZCVnp0QlFVTndRenRCUVVOQkxHbENRVUZwUWl4dFFrRkJUeXhEUVVGRExIbERRVUZWTzBGQlEyNURPMEZCUTBFN1FVRkRRU3huUWtGQlowSXNiVUpCUVU4c1EwRkJReXgxUTBGQlV6dEJRVU5xUXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHbERPenM3T3pzN096czdPenM3UVVOdVFtRTdRVUZEWWl3NFEwRkJPRU1zWTBGQll6dEJRVU0xUkN4cFFrRkJhVUlzYlVKQlFVOHNRMEZCUXl4NVEwRkJWVHRCUVVOdVF5eG5Ra0ZCWjBJc2JVSkJRVThzUTBGQlF5eDFRMEZCVXp0QlFVTnFRenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1owWkJRV2RHTEhOQ1FVRnpRanRCUVVOMFJ6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc01FTkJRVEJETEhsQ1FVRjVRanRCUVVOdVJUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNNRU5CUVRCRExEQkRRVUV3UXp0QlFVTndSaXd3UTBGQk1FTXNOa05CUVRaRE8wRkJRM1pHTzBGQlEwRTdRVUZEUVN4MVFrRkJkVUlzV1VGQldUdEJRVU51UXl3eVFrRkJNa0lzVjBGQlZ6dEJRVU4wUXl3eVEwRkJNa01zTmtSQlFUWkVPMEZCUTNoSE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYjBNN096czdPenM3T3pzN096dEJRelZHWVR0QlFVTmlMRGhEUVVFNFF5eGpRVUZqTzBGQlF6VkVMR2xDUVVGcFFpeHRRa0ZCVHl4RFFVRkRMSGxEUVVGVk8wRkJRMjVETEdkQ1FVRm5RaXh0UWtGQlR5eERRVUZETEhWRFFVRlRPMEZCUTJwRExHbENRVUZwUWl4dFFrRkJUeXhEUVVGRExIbERRVUZWTzBGQlEyNURMR2xDUVVGcFFpeHRRa0ZCVHl4RFFVRkRMSGxEUVVGVk8wRkJRMjVETEdsQ1FVRnBRaXh0UWtGQlR5eERRVUZETERKRFFVRlhPMEZCUTNCRE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hoUVVGaExEQkdRVUV3Ump0QlFVTjJSeXhoUVVGaExIbEdRVUY1Ump0QlFVTjBSeXhoUVVGaExESkdRVUV5Ump0QlFVTjRSeXhoUVVGaE8wRkJRMkk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR0ZCUVdFc01FWkJRVEJHTzBGQlEzWkhMR0ZCUVdFc2VVWkJRWGxHTzBGQlEzUkhMR0ZCUVdFc01rWkJRVEpHTzBGQlEzaEhMR0ZCUVdFN1FVRkRZanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdsRE96czdPenM3T3pzN096czdRVU5zUkdFN1FVRkRZaXc0UTBGQk9FTXNZMEZCWXp0QlFVTTFSQ3huUWtGQlowSXNiVUpCUVU4c1EwRkJReXgxUTBGQlV6dEJRVU5xUXp0QlFVTkJMRFpDUVVFMlFpdzRRa0ZCT0VJc1JVRkJSVHRCUVVNM1JDdzRRa0ZCT0VJc05rSkJRVFpDTEVWQlFVVTdRVUZETjBRc05rSkJRVFpDTEZsQlFWa3NSVUZCUlR0QlFVTXpRenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFRDdzRRa0ZCT0VJc09FSkJRVGhDTEVWQlFVVTdRVUZET1VRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQkxHMURPenM3T3pzN096czdPenM3UVVNM1FtRTdRVUZEWWl3NFEwRkJPRU1zWTBGQll6dEJRVU0xUkN4cFFrRkJhVUlzYlVKQlFVOHNRMEZCUXl4NVEwRkJWVHRCUVVOdVF6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hwUWtGQmFVSXNkMFZCUVhkRk8wRkJRM3BHTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h2UWtGQmIwSTdRVUZEY0VJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4elEwRkJjME1zWVVGQllUdEJRVU51UkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhkQ1FVRjNRanRCUVVONFFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2EwTTdPenM3T3pzN096czdPenRCUXpsRFlUdEJRVU5pTERoRFFVRTRReXhqUVVGak8wRkJRelZFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxIZENRVUYzUWl3NFEwRkJPRU03UVVGRGRFVXNNRUpCUVRCQ0xEQkVRVUV3UkR0QlFVTndSaXg1UWtGQmVVSXNNRVJCUVRCRU8wRkJRMjVHTEhkQ1FVRjNRaXhuUkVGQlowUTdRVUZEZUVVc2JVSkJRVzFDTEhGRVFVRnhSRHRCUVVONFJUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEd0RE96czdPenM3T3pzN096czdPenM3T3pzN096czdRVU4yUWtFc05FWkJRV3RFTzBGQlIyaEVMR2RDUVVoTExHdENRVUZMTEVOQlIwdzdRVUZCUlN4M1FrRklUeXgzUWtGQllTeERRVWRRT3pzN096czdPenM3T3pzN096czdRVU5HZEVJc01rWkJVVFJDTzBGQlJ6VkNMRGhDUVVFNFFqdEJRVU01UWl4VFFVRjNRaXhsUVVGbExFTkJRVU1zVVVGQlowSTdTVUZEZEVRc1RVRkJUU3hOUVVGTkxFZEJRVWNzU1VGQlNTeFRRVUZUTEVWQlFVVXNRMEZCUXp0SlFVTXZRaXhOUVVGTkxFZEJRVWNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNaVUZCWlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMGxCUTJoRkxFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRM2hDTEUxQlFVMHNaVUZCWlN4SFFVRkhMRWRCUVVjc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJRenRKUVVOb1JTeEpRVUZKTEdWQlFXVXNRMEZCUXl4TlFVRk5MRWxCUVVrc1EwRkJReXhGUVVGRk8xRkJReTlDTEUxQlFVMHNTVUZCU1N4WFFVRlhMRVZCUVVVc1EwRkJRenRMUVVONlFqdEpRVVZFTEUxQlFVMHNUMEZCVHl4SFFVRlpMRVZCUVVVc1EwRkJRenRKUVVNMVFpeE5RVUZOTEUxQlFVMHNSMEZCV1N4RlFVRkZMRU5CUVVNN1NVRkRNMElzU1VGQlNTeE5RVUZOTEVkQlFVY3NTVUZCU1N4cFFrRkJUU3hEUVVGRExFbEJRVWtzYVVKQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVsQlFVa3NhVUpCUVUwc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVVdlJTeFRRVUZUTzBsQlExUXNUVUZCVFN4VFFVRlRMRWRCUVVjc1IwRkJSeXhEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzWkVMREJDUVVFd1FqdEpRVU14UWl4VFFVRlRPMGxCUTFRc1RVRkJUU3hWUVVGVkxFZEJRVWNzVTBGQlV5eERRVUZETEc5Q1FVRnZRaXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXk5RUxFMUJRVTBzVjBGQlZ5eEhRVUZITEZOQlFWTXNRMEZCUXl4dlFrRkJiMElzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOcVJTeE5RVUZOTEZWQlFWVXNSMEZCUnl4VFFVRlRMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGREwwUXNVMEZCVXp0SlFVTlVMRTFCUVUwc1ZVRkJWU3hIUVVGSExGZEJRVmNzUTBGQlF5eHZRa0ZCYjBJc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dEpRVU0zUkN4TlFVRk5MRmRCUVZjc1IwRkJSeXhYUVVGWExFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03U1VGREwwUXNUVUZCVFN4VlFVRlZMRWRCUVVjc1ZVRkJWU3hEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8wbEJSVFZFTEd0RFFVRnJRenRKUVVWc1F5eExRVUZMTEVsQlFVa3NRMEZCUXl4SlFVRlRMRlZCUVZVc1JVRkJSVHRSUVVNM1FpeE5RVUZOTEd0Q1FVRnJRaXhIUVVGSExFTkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenRSUVVONFJDeEpRVUZKTEd0Q1FVRnJRaXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlR0WlFVTndSQ3hOUVVGTkxFMUJRVTBzUjBGQlZ5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJRemRETEUxQlFVMHNVMEZCVXl4SFFVRlhMRU5CUVVNc1EwRkJReXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdXVUZEYmtRc1RVRkJUU3hWUVVGVkxFZEJRVmNzUTBGQlF5eERRVUZETEZsQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRaUVVWeVJDeE5RVUZOTEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZEVVc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeHBRa0ZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETTBRc1RVRkJUU3hOUVVGTkxFZEJRVWNzVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMWxCUTNKRExFbEJRVWtzVDBGQlR5eEhRVUZITEcxQ1FVRlJMRU5CUVVNc1dVRkJXU3hEUVVGRE8xbEJRM0JETEVsQlFVa3NWVUZCVlN4TFFVRkxMRTlCUVU4c1JVRkJSVHRuUWtGRE1VSXNUMEZCVHl4SFFVRkhMRzFDUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETzJGQlF6RkNPMWxCUlVRc05FSkJRVFJDTzFsQlF6VkNMRzlEUVVGdlF6dFpRVU53UXl4clEwRkJhME03V1VGRGJFTXNiME5CUVc5RE8xbEJSWEJETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3huUWtGQlN5eERRVUZETEVkQlFVY3NSVUZCUlN4TlFVRk5MRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU12UXp0TFFVTkdPMGxCUlVRc1MwRkJTeXhKUVVGSkxFTkJRVU1zU1VGQlV5eFhRVUZYTEVWQlFVVTdVVUZET1VJc1RVRkJUU3hyUWtGQmEwSXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hOUVVGTkxFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdVVUZEZEVRc1NVRkJTU3hyUWtGQmEwSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3V1VGRGNFUXNUVUZCVFN4TlFVRk5MRWRCUVZjc1EwRkJReXhEUVVGRExGbEJRVmtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTTNReXhOUVVGTkxFOUJRVThzUjBGQlZ5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xbEJReTlETEUxQlFVMHNWVUZCVlN4SFFVRlhMRU5CUVVNc1EwRkJReXhaUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdXVUZEY2tRc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEUxQlFVMHNSVUZCUlN4UFFVRlBMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU0zUXl4TlFVRk5MRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRkRVVzVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4cFFrRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNMFFzVFVGQlRTeEpRVUZKTEVkQlFVY3NWVUZCVlN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xbEJRMnBETEVsQlFVa3NUMEZCVHl4SFFVRkhMRzFDUVVGUkxFTkJRVU1zV1VGQldTeERRVUZETzFsQlEzQkRMRWxCUVVrc1ZVRkJWU3hMUVVGTExFOUJRVThzUlVGQlJUdG5Ra0ZETVVJc1QwRkJUeXhIUVVGSExHMUNRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRPMkZCUXpGQ08xbEJSVVFzTkVKQlFUUkNPMWxCUXpWQ0xHOURRVUZ2UXp0WlFVTndReXc0UWtGQk9FSTdXVUZET1VJc2IwTkJRVzlETzFsQlJYQkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeHBRa0ZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hKUVVGSkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTTVRenRMUVVOR08wbEJSMFFzUzBGQlN5eEpRVUZKTEVOQlFVTXNTVUZCVXl4VlFVRlZMRVZCUVVVN1VVRkROMElzVFVGQlRTeHJRa0ZCYTBJc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTTFReXhKUVVGSkxHdENRVUZyUWl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUdFpRVU53UkN4TlFVRk5MRTFCUVUwc1IwRkJWeXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUXpkRExFMUJRVTBzVVVGQlVTeEhRVUZYTEVOQlFVTXNRMEZCUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03V1VGRGFrUXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFMUJRVTBzUlVGQlJTeFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTJ4RExFMUJRVTBzVDBGQlR5eEhRVUZITEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4wUlN4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxHbENRVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU16UkN4TlFVRk5MRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkZkRVVzTkVKQlFUUkNPMWxCUXpWQ0xHOURRVUZ2UXp0WlFVTndReXhuUTBGQlowTTdXVUZGYUVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1MwRkJTeXhGUVVGRkxFbEJRVWtzWjBKQlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTXpSVHRMUVVOR08wbEJSVVFzUTBGQlF5eFRRVUZUTEZWQlFWVXNRMEZCUXl4VlFVRnRRanRSUVVOMFF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8xRkJRM2hDTEUxQlFVMHNhMEpCUVd0Q0xFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkROME1zU1VGQlNTeHJRa0ZCYTBJc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdXVUZETjBRc1RVRkJUU3hOUVVGTkxFZEJRVmNzVlVGQlZTeERRVUZETEZsQlFWa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVOMFJDeE5RVUZOTEZOQlFWTXNSMEZCVnl4VlFVRlZMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFsQlF6VkVMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeE5RVUZOTEVWQlFVVXNVMEZCVXl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOdVF5eEpRVUZKTEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VVc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeHBRa0ZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETTBRc1QwRkJUeXhIUVVGSExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOdVJTeE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMR2xDUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVVNVJDd3JRa0ZCSzBJN1dVRkZMMElzVFVGQlRTeEhRVUZITEVsQlFVa3NhVUpCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdVMEZEYkVNN1NVRkRTQ3hEUVVGRExFTkJRVU1zUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0SlFVVm1MRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdTVUZEY2tJc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0SlFVVndRaXhOUVVGTkxFdEJRVXNzUjBGQlJ6dFJRVU5hTEUxQlFVMHNSVUZCUlN4UFFVRlBPMUZCUTJZc1RVRkJUU3hGUVVGRkxFMUJRVTA3VVVGRFpDeE5RVUZOTzB0QlExQXNRMEZCUXp0SlFVVkdMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGRFTXNUMEZCVHl4TFFVRkxMRU5CUVVNN1FVRkRaaXhEUVVGRE8wRkJNMGhFTEd0RFFUSklRenRCUVVWWkxIRkNRVUZoTzBGQlF6RkNMSGxEUVVGNVF6dEJRVU42UXl4WFFVRlhPMEZCUTFRN096czdPenM3T3pzN096czdPenM3UjBGblFrTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRCUVVOWUxFZEJRVWNpTENKbWFXeGxJam9pWW5WdVpHeGxMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUlGeDBMeThnVkdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MGRtRnlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTWdQU0I3ZlR0Y2JseHVJRngwTHk4Z1ZHaGxJSEpsY1hWcGNtVWdablZ1WTNScGIyNWNiaUJjZEdaMWJtTjBhVzl1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2JXOWtkV3hsU1dRcElIdGNibHh1SUZ4MFhIUXZMeUJEYUdWamF5QnBaaUJ0YjJSMWJHVWdhWE1nYVc0Z1kyRmphR1ZjYmlCY2RGeDBhV1lvYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBwSUh0Y2JpQmNkRngwWEhSeVpYUjFjbTRnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1Wlhod2IzSjBjenRjYmlCY2RGeDBmVnh1SUZ4MFhIUXZMeUJEY21WaGRHVWdZU0J1WlhjZ2JXOWtkV3hsSUNoaGJtUWdjSFYwSUdsMElHbHVkRzhnZEdobElHTmhZMmhsS1Z4dUlGeDBYSFIyWVhJZ2JXOWtkV3hsSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwZ1BTQjdYRzRnWEhSY2RGeDBhVG9nYlc5a2RXeGxTV1FzWEc0Z1hIUmNkRngwYkRvZ1ptRnNjMlVzWEc0Z1hIUmNkRngwWlhod2IzSjBjem9nZTMxY2JpQmNkRngwZlR0Y2JseHVJRngwWEhRdkx5QkZlR1ZqZFhSbElIUm9aU0J0YjJSMWJHVWdablZ1WTNScGIyNWNiaUJjZEZ4MGJXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVkyRnNiQ2h0YjJSMWJHVXVaWGh3YjNKMGN5d2diVzlrZFd4bExDQnRiMlIxYkdVdVpYaHdiM0owY3l3Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5azdYRzVjYmlCY2RGeDBMeThnUm14aFp5QjBhR1VnYlc5a2RXeGxJR0Z6SUd4dllXUmxaRnh1SUZ4MFhIUnRiMlIxYkdVdWJDQTlJSFJ5ZFdVN1hHNWNiaUJjZEZ4MEx5OGdVbVYwZFhKdUlIUm9aU0JsZUhCdmNuUnpJRzltSUhSb1pTQnRiMlIxYkdWY2JpQmNkRngwY21WMGRYSnVJRzF2WkhWc1pTNWxlSEJ2Y25Sek8xeHVJRngwZlZ4dVhHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bGN5QnZZbXBsWTNRZ0tGOWZkMlZpY0dGamExOXRiMlIxYkdWelgxOHBYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtMGdQU0J0YjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1aklEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaR1ZtYVc1bElHZGxkSFJsY2lCbWRXNWpkR2x2YmlCbWIzSWdhR0Z5Ylc5dWVTQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1RZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SekxDQnVZVzFsTENCblpYUjBaWElwSUh0Y2JpQmNkRngwYVdZb0lWOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieWhsZUhCdmNuUnpMQ0J1WVcxbEtTa2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCdVlXMWxMQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUdkbGREb2daMlYwZEdWeUlIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1gxOWxjMDF2WkhWc1pTQnZiaUJsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuSWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpLU0I3WEc0Z1hIUmNkR2xtS0hSNWNHVnZaaUJUZVcxaWIyd2dJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeWtnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQlRlVzFpYjJ3dWRHOVRkSEpwYm1kVVlXY3NJSHNnZG1Gc2RXVTZJQ2ROYjJSMWJHVW5JSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENBblgxOWxjMDF2WkhWc1pTY3NJSHNnZG1Gc2RXVTZJSFJ5ZFdVZ2ZTazdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmpjbVZoZEdVZ1lTQm1ZV3RsSUc1aGJXVnpjR0ZqWlNCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQXhPaUIyWVd4MVpTQnBjeUJoSUcxdlpIVnNaU0JwWkN3Z2NtVnhkV2x5WlNCcGRGeHVJRngwTHk4Z2JXOWtaU0FtSURJNklHMWxjbWRsSUdGc2JDQndjbTl3WlhKMGFXVnpJRzltSUhaaGJIVmxJR2x1ZEc4Z2RHaGxJRzV6WEc0Z1hIUXZMeUJ0YjJSbElDWWdORG9nY21WMGRYSnVJSFpoYkhWbElIZG9aVzRnWVd4eVpXRmtlU0J1Y3lCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQTRmREU2SUdKbGFHRjJaU0JzYVd0bElISmxjWFZwY21WY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1ZENBOUlHWjFibU4wYVc5dUtIWmhiSFZsTENCdGIyUmxLU0I3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUF4S1NCMllXeDFaU0E5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2RtRnNkV1VwTzF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnT0NrZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUZ4MFhIUnBaaWdvYlc5a1pTQW1JRFFwSUNZbUlIUjVjR1Z2WmlCMllXeDFaU0E5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkbUZzZFdVZ0ppWWdkbUZzZFdVdVgxOWxjMDF2WkhWc1pTa2djbVYwZFhKdUlIWmhiSFZsTzF4dUlGeDBYSFIyWVhJZ2JuTWdQU0JQWW1wbFkzUXVZM0psWVhSbEtHNTFiR3dwTzF4dUlGeDBYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5Jb2JuTXBPMXh1SUZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvYm5Nc0lDZGtaV1poZFd4MEp5d2dleUJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMQ0IyWVd4MVpUb2dkbUZzZFdVZ2ZTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQXlJQ1ltSUhSNWNHVnZaaUIyWVd4MVpTQWhQU0FuYzNSeWFXNW5KeWtnWm05eUtIWmhjaUJyWlhrZ2FXNGdkbUZzZFdVcElGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2h1Y3l3Z2EyVjVMQ0JtZFc1amRHbHZiaWhyWlhrcElIc2djbVYwZFhKdUlIWmhiSFZsVzJ0bGVWMDdJSDB1WW1sdVpDaHVkV3hzTENCclpYa3BLVHRjYmlCY2RGeDBjbVYwZFhKdUlHNXpPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaMlYwUkdWbVlYVnNkRVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm1iM0lnWTI5dGNHRjBhV0pwYkdsMGVTQjNhWFJvSUc1dmJpMW9ZWEp0YjI1NUlHMXZaSFZzWlhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YmlBOUlHWjFibU4wYVc5dUtHMXZaSFZzWlNrZ2UxeHVJRngwWEhSMllYSWdaMlYwZEdWeUlEMGdiVzlrZFd4bElDWW1JRzF2WkhWc1pTNWZYMlZ6VFc5a2RXeGxJRDljYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSRVpXWmhkV3gwS0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsV3lka1pXWmhkV3gwSjEwN0lIMGdPbHh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEUxdlpIVnNaVVY0Y0c5eWRITW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVTdJSDA3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNoblpYUjBaWElzSUNkaEp5d2daMlYwZEdWeUtUdGNiaUJjZEZ4MGNtVjBkWEp1SUdkbGRIUmxjanRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiRnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZJRDBnWm5WdVkzUnBiMjRvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2tnZXlCeVpYUjFjbTRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwT3lCOU8xeHVYRzRnWEhRdkx5QmZYM2RsWW5CaFkydGZjSFZpYkdsalgzQmhkR2hmWDF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUQwZ1hDSmNJanRjYmx4dVhHNGdYSFF2THlCTWIyRmtJR1Z1ZEhKNUlHMXZaSFZzWlNCaGJtUWdjbVYwZFhKdUlHVjRjRzl5ZEhOY2JpQmNkSEpsZEhWeWJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y3lBOUlGd2lMaTl6Y21NdmFXNWtaWGd1ZEhOY0lpazdYRzRpTENKY0luVnpaU0J6ZEhKcFkzUmNJanRjY2x4dVQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRndpWDE5bGMwMXZaSFZzWlZ3aUxDQjdJSFpoYkhWbE9pQjBjblZsSUgwcE8xeHlYRzVqYjI1emRDQjJaV04wYjNKZk1TQTlJSEpsY1hWcGNtVW9YQ0l1TDNabFkzUnZjbHdpS1R0Y2NseHVZMnhoYzNNZ1EyRnRaWEpoSUh0Y2NseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtIQnZjeXdnYkc5dmEwRjBLU0I3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YjNNZ1BTQndiM003WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJR1J2ZDI0Z1BTQnVaWGNnZG1WamRHOXlYekV1WkdWbVlYVnNkQ2d3TGpBc0lDMHhMakFzSURBdU1DazdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NW1iM0ozWVhKa0lEMGdkbVZqZEc5eVh6RXVaR1ZtWVhWc2RDNXViM0p0S0habFkzUnZjbDh4TG1SbFptRjFiSFF1YldsdWRYTW9iRzl2YTBGMExDQjBhR2x6TG5CdmN5a3BPMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjbWxuYUhRZ1BTQjJaV04wYjNKZk1TNWtaV1poZFd4MExuUnBiV1Z6S0RFdU5Td2dkbVZqZEc5eVh6RXVaR1ZtWVhWc2RDNXViM0p0S0habFkzUnZjbDh4TG1SbFptRjFiSFF1WTNKdmMzTW9kR2hwY3k1bWIzSjNZWEprTENCa2IzZHVLU2twTzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11ZFhBZ1BTQjJaV04wYjNKZk1TNWtaV1poZFd4MExuUnBiV1Z6S0RFdU5Td2dkbVZqZEc5eVh6RXVaR1ZtWVhWc2RDNXViM0p0S0habFkzUnZjbDh4TG1SbFptRjFiSFF1WTNKdmMzTW9kR2hwY3k1bWIzSjNZWEprTENCMGFHbHpMbkpwWjJoMEtTa3BPMXh5WEc0Z0lDQWdmVnh5WEc1OVhISmNibVY0Y0c5eWRITXVaR1ZtWVhWc2RDQTlJRU5oYldWeVlUdGNjbHh1THk4aklITnZkWEpqWlUxaGNIQnBibWRWVWt3OVkyRnRaWEpoTG1wekxtMWhjQ0lzSWx3aWRYTmxJSE4wY21samRGd2lPMXh5WEc1UFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dYQ0pmWDJWelRXOWtkV3hsWENJc0lIc2dkbUZzZFdVNklIUnlkV1VnZlNrN1hISmNibU5zWVhOeklFTnZiRzl5SUh0Y2NseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtISXNJR2NzSUdJcElIdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuSWdQU0J5TzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WnlBOUlHYzdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWlJRDBnWWp0Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUhOMFlYUnBZeUJ6WTJGc1pTaHJMQ0IyS1NCN0lISmxkSFZ5YmlCdVpYY2dRMjlzYjNJb2F5QXFJSFl1Y2l3Z2F5QXFJSFl1Wnl3Z2F5QXFJSFl1WWlrN0lIMWNjbHh1SUNBZ0lITjBZWFJwWXlCd2JIVnpLSFl4TENCMk1pa2dleUJ5WlhSMWNtNGdibVYzSUVOdmJHOXlLSFl4TG5JZ0t5QjJNaTV5TENCMk1TNW5JQ3NnZGpJdVp5d2dkakV1WWlBcklIWXlMbUlwT3lCOVhISmNiaUFnSUNCemRHRjBhV01nZEdsdFpYTW9kakVzSUhZeUtTQjdJSEpsZEhWeWJpQnVaWGNnUTI5c2IzSW9kakV1Y2lBcUlIWXlMbklzSUhZeExtY2dLaUIyTWk1bkxDQjJNUzVpSUNvZ2RqSXVZaWs3SUgxY2NseHVJQ0FnSUhOMFlYUnBZeUIwYjBSeVlYZHBibWREYjJ4dmNpaGpLU0I3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJR3hsWjJGc2FYcGxJRDBnS0dRcElEMCtJR1FnUGlBeElEOGdNU0E2SUdRN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2Nqb2dUV0YwYUM1bWJHOXZjaWhzWldkaGJHbDZaU2hqTG5JcElDb2dNalUxS1N4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWnpvZ1RXRjBhQzVtYkc5dmNpaHNaV2RoYkdsNlpTaGpMbWNwSUNvZ01qVTFLU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZam9nVFdGMGFDNW1iRzl2Y2loc1pXZGhiR2w2WlNoakxtSXBJQ29nTWpVMUtWeHlYRzRnSUNBZ0lDQWdJSDA3WEhKY2JpQWdJQ0I5WEhKY2JuMWNjbHh1Wlhod2IzSjBjeTVrWldaaGRXeDBJRDBnUTI5c2IzSTdYSEpjYmtOdmJHOXlMbmRvYVhSbElEMGdibVYzSUVOdmJHOXlLREV1TUN3Z01TNHdMQ0F4TGpBcE8xeHlYRzVEYjJ4dmNpNW5jbVY1SUQwZ2JtVjNJRU52Ykc5eUtEQXVOU3dnTUM0MUxDQXdMalVwTzF4eVhHNURiMnh2Y2k1aWJHRmpheUE5SUc1bGR5QkRiMnh2Y2lnd0xqQXNJREF1TUN3Z01DNHdLVHRjY2x4dVEyOXNiM0l1WW1GamEyZHliM1Z1WkNBOUlFTnZiRzl5TG1Kc1lXTnJPMXh5WEc1RGIyeHZjaTVrWldaaGRXeDBRMjlzYjNJZ1BTQkRiMnh2Y2k1aWJHRmphenRjY2x4dUx5OGpJSE52ZFhKalpVMWhjSEJwYm1kVlVrdzlZMjlzYjNJdWFuTXViV0Z3SWl3aVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEhKY2JrOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0JjSWw5ZlpYTk5iMlIxYkdWY0lpd2dleUIyWVd4MVpUb2dkSEoxWlNCOUtUdGNjbHh1WTI5dWMzUWdjbUY1ZEhKaFkyVmZNU0E5SUhKbGNYVnBjbVVvWENJdUwzSmhlWFJ5WVdObFhDSXBPMXh5WEc1amIyNXpkQ0IyWldOMGIzSmZNU0E5SUhKbGNYVnBjbVVvWENJdUwzWmxZM1J2Y2x3aUtUdGNjbHh1Wlhod2IzSjBjeTVXWldOMGIzSWdQU0IyWldOMGIzSmZNUzVrWldaaGRXeDBPMXh5WEc1amIyNXpkQ0JqWVcxbGNtRmZNU0E5SUhKbGNYVnBjbVVvWENJdUwyTmhiV1Z5WVZ3aUtUdGNjbHh1Wlhod2IzSjBjeTVEWVcxbGNtRWdQU0JqWVcxbGNtRmZNUzVrWldaaGRXeDBPMXh5WEc1amIyNXpkQ0JqYjJ4dmNsOHhJRDBnY21WeGRXbHlaU2hjSWk0dlkyOXNiM0pjSWlrN1hISmNibVY0Y0c5eWRITXVRMjlzYjNJZ1BTQmpiMnh2Y2w4eExtUmxabUYxYkhRN1hISmNibU52Ym5OMElGTjFjbVpoWTJWeklEMGdjbVZ4ZFdseVpTaGNJaTR2YzNWeVptRmpaVndpS1R0Y2NseHVaWGh3YjNKMGN5NVRkWEptWVdObGN5QTlJRk4xY21aaFkyVnpPMXh5WEc1amIyNXpkQ0IwYUdsdVozTmZNU0E5SUhKbGNYVnBjbVVvWENJdUwzUm9hVzVuYzF3aUtUdGNjbHh1Wlhod2IzSjBjeTVUY0dobGNtVWdQU0IwYUdsdVozTmZNUzVUY0dobGNtVTdYSEpjYm1WNGNHOXlkSE11VUd4aGJtVWdQU0IwYUdsdVozTmZNUzVRYkdGdVpUdGNjbHh1WTI5dWMzUWdjMk5sYm1WZk1TQTlJSEpsY1hWcGNtVW9YQ0l1TDNOalpXNWxYQ0lwTzF4eVhHNWxlSEJ2Y25SekxtUmxabUYxYkhSVFkyVnVaU0E5SUhOalpXNWxYekV1WkdWbVlYVnNkRk5qWlc1bE8xeHlYRzVsZUhCdmNuUnpMbk5qWlc1bE1pQTlJSE5qWlc1bFh6RXVjMk5sYm1VeU8xeHlYRzVsZUhCdmNuUnpMbVZ0Y0hSNVUyTmxibVVnUFNCelkyVnVaVjh4TG1WdGNIUjVVMk5sYm1VN1hISmNibVY0Y0c5eWRITXVaR1ZtWVhWc2RDQTlJSEpoZVhSeVlXTmxYekV1WkdWbVlYVnNkRHRjY2x4dUx5OGpJSE52ZFhKalpVMWhjSEJwYm1kVlVrdzlhVzVrWlhndWFuTXViV0Z3SWl3aVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEhKY2JrOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0JjSWw5ZlpYTk5iMlIxYkdWY0lpd2dleUIyWVd4MVpUb2dkSEoxWlNCOUtUdGNjbHh1WTI5dWMzUWdkbVZqZEc5eVh6RWdQU0J5WlhGMWFYSmxLRndpTGk5MlpXTjBiM0pjSWlrN1hISmNibU52Ym5OMElHTnZiRzl5WHpFZ1BTQnlaWEYxYVhKbEtGd2lMaTlqYjJ4dmNsd2lLVHRjY2x4dVkyeGhjM01nVW1GNVZISmhZMlZ5SUh0Y2NseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXViV0Y0UkdWd2RHZ2dQU0ExTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnYVc1MFpYSnpaV04wYVc5dWN5aHlZWGtzSUhOalpXNWxLU0I3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJR05zYjNObGMzUWdQU0FyU1c1bWFXNXBkSGs3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJR05zYjNObGMzUkpiblJsY2lBOUlHNTFiR3c3WEhKY2JpQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2FTQnBiaUJ6WTJWdVpTNTBhR2x1WjNNcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJR2x1ZEdWeUlEMGdjMk5sYm1VdWRHaHBibWR6VzJsZExtbHVkR1Z5YzJWamRDaHlZWGtwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2FXNTBaWElnSVQwZ2JuVnNiQ0FtSmlCcGJuUmxjaTVrYVhOMElEd2dZMnh2YzJWemRDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJ4dmMyVnpkRWx1ZEdWeUlEMGdhVzUwWlhJN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiRzl6WlhOMElEMGdhVzUwWlhJdVpHbHpkRHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyeHZjMlZ6ZEVsdWRHVnlPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdkR1Z6ZEZKaGVTaHlZWGtzSUhOalpXNWxLU0I3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJR2x6WldOMElEMGdkR2hwY3k1cGJuUmxjbk5sWTNScGIyNXpLSEpoZVN3Z2MyTmxibVVwTzF4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2hwYzJWamRDQWhQU0J1ZFd4c0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCcGMyVmpkQzVrYVhOME8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHNTFiR3c3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ2RISmhZMlZTWVhrb2NtRjVMQ0J6WTJWdVpTd2daR1Z3ZEdncElIdGNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ2FYTmxZM1FnUFNCMGFHbHpMbWx1ZEdWeWMyVmpkR2x2Ym5Nb2NtRjVMQ0J6WTJWdVpTazdYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tHbHpaV04wSUQwOVBTQnVkV3hzS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJqYjJ4dmNsOHhMbVJsWm1GMWJIUXVZbUZqYTJkeWIzVnVaRHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdaV3h6WlNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxuTm9ZV1JsS0dselpXTjBMQ0J6WTJWdVpTd2daR1Z3ZEdncE8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dUlDQWdJSE5vWVdSbEtHbHpaV04wTENCelkyVnVaU3dnWkdWd2RHZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCMllYSWdaQ0E5SUdselpXTjBMbkpoZVM1a2FYSTdYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlIQnZjeUE5SUhabFkzUnZjbDh4TG1SbFptRjFiSFF1Y0d4MWN5aDJaV04wYjNKZk1TNWtaV1poZFd4MExuUnBiV1Z6S0dselpXTjBMbVJwYzNRc0lHUXBMQ0JwYzJWamRDNXlZWGt1YzNSaGNuUXBPMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQnViM0p0WVd3Z1BTQnBjMlZqZEM1MGFHbHVaeTV1YjNKdFlXd29jRzl6S1R0Y2NseHVJQ0FnSUNBZ0lDQjJZWElnY21WbWJHVmpkRVJwY2lBOUlIWmxZM1J2Y2w4eExtUmxabUYxYkhRdWJXbHVkWE1vWkN3Z2RtVmpkRzl5WHpFdVpHVm1ZWFZzZEM1MGFXMWxjeWd5TENCMlpXTjBiM0pmTVM1a1pXWmhkV3gwTG5ScGJXVnpLSFpsWTNSdmNsOHhMbVJsWm1GMWJIUXVaRzkwS0c1dmNtMWhiQ3dnWkNrc0lHNXZjbTFoYkNrcEtUdGNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ2JtRjBkWEpoYkVOdmJHOXlJRDBnWTI5c2IzSmZNUzVrWldaaGRXeDBMbkJzZFhNb1kyOXNiM0pmTVM1a1pXWmhkV3gwTG1KaFkydG5jbTkxYm1Rc0lIUm9hWE11WjJWMFRtRjBkWEpoYkVOdmJHOXlLR2x6WldOMExuUm9hVzVuTENCd2IzTXNJRzV2Y20xaGJDd2djbVZtYkdWamRFUnBjaXdnYzJObGJtVXBLVHRjY2x4dUlDQWdJQ0FnSUNCMllYSWdjbVZtYkdWamRHVmtRMjlzYjNJZ1BTQW9aR1Z3ZEdnZ1BqMGdkR2hwY3k1dFlYaEVaWEIwYUNrZ1B5QmpiMnh2Y2w4eExtUmxabUYxYkhRdVozSmxlU0E2SUhSb2FYTXVaMlYwVW1WbWJHVmpkR2x2YmtOdmJHOXlLR2x6WldOMExuUm9hVzVuTENCd2IzTXNJRzV2Y20xaGJDd2djbVZtYkdWamRFUnBjaXdnYzJObGJtVXNJR1JsY0hSb0tUdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMjlzYjNKZk1TNWtaV1poZFd4MExuQnNkWE1vYm1GMGRYSmhiRU52Ykc5eUxDQnlaV1pzWldOMFpXUkRiMnh2Y2lrN1hISmNiaUFnSUNCOVhISmNiaUFnSUNCblpYUlNaV1pzWldOMGFXOXVRMjlzYjNJb2RHaHBibWNzSUhCdmN5d2dibTl5YldGc0xDQnlaQ3dnYzJObGJtVXNJR1JsY0hSb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR052Ykc5eVh6RXVaR1ZtWVhWc2RDNXpZMkZzWlNoMGFHbHVaeTV6ZFhKbVlXTmxMbkpsWm14bFkzUW9jRzl6S1N3Z2RHaHBjeTUwY21GalpWSmhlU2g3SUhOMFlYSjBPaUJ3YjNNc0lHUnBjam9nY21RZ2ZTd2djMk5sYm1Vc0lHUmxjSFJvSUNzZ01Ta3BPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdaMlYwVG1GMGRYSmhiRU52Ykc5eUtIUm9hVzVuTENCd2IzTXNJRzV2Y20wc0lISmtMQ0J6WTJWdVpTa2dlMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQmhaR1JNYVdkb2RDQTlJQ2hqYjJ3c0lHeHBaMmgwS1NBOVBpQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJzWkdseklEMGdkbVZqZEc5eVh6RXVaR1ZtWVhWc2RDNXRhVzUxY3loc2FXZG9kQzV3YjNNc0lIQnZjeWs3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCc2FYWmxZeUE5SUhabFkzUnZjbDh4TG1SbFptRjFiSFF1Ym05eWJTaHNaR2x6S1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHNWxZWFJKYzJWamRDQTlJSFJvYVhNdWRHVnpkRkpoZVNoN0lITjBZWEowT2lCd2IzTXNJR1JwY2pvZ2JHbDJaV01nZlN3Z2MyTmxibVVwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2FYTkpibE5vWVdSdmR5QTlJQ2h1WldGMFNYTmxZM1FnUFQwOUlHNTFiR3dwSUQ4Z1ptRnNjMlVnT2lBb2JtVmhkRWx6WldOMElEdzlJSFpsWTNSdmNsOHhMbVJsWm1GMWJIUXViV0ZuS0d4a2FYTXBLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dselNXNVRhR0ZrYjNjcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpiMnc3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaV3h6WlNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWElnYVd4c2RXMGdQU0IyWldOMGIzSmZNUzVrWldaaGRXeDBMbVJ2ZENoc2FYWmxZeXdnYm05eWJTazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2JHTnZiRzl5SUQwZ0tHbHNiSFZ0SUQ0Z01Da2dQeUJqYjJ4dmNsOHhMbVJsWm1GMWJIUXVjMk5oYkdVb2FXeHNkVzBzSUd4cFoyaDBMbU52Ykc5eUtWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSURvZ1kyOXNiM0pmTVM1a1pXWmhkV3gwTG1SbFptRjFiSFJEYjJ4dmNqdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCemNHVmpkV3hoY2lBOUlIWmxZM1J2Y2w4eExtUmxabUYxYkhRdVpHOTBLR3hwZG1WakxDQjJaV04wYjNKZk1TNWtaV1poZFd4MExtNXZjbTBvY21RcEtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCelkyOXNiM0lnUFNBb2MzQmxZM1ZzWVhJZ1BpQXdLU0EvSUdOdmJHOXlYekV1WkdWbVlYVnNkQzV6WTJGc1pTaE5ZWFJvTG5CdmR5aHpjR1ZqZFd4aGNpd2dkR2hwYm1jdWMzVnlabUZqWlM1eWIzVm5hRzVsYzNNcExDQnNhV2RvZEM1amIyeHZjaWxjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQTZJR052Ykc5eVh6RXVaR1ZtWVhWc2RDNWtaV1poZFd4MFEyOXNiM0k3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWTI5c2IzSmZNUzVrWldaaGRXeDBMbkJzZFhNb1kyOXNMQ0JqYjJ4dmNsOHhMbVJsWm1GMWJIUXVjR3gxY3loamIyeHZjbDh4TG1SbFptRjFiSFF1ZEdsdFpYTW9kR2hwYm1jdWMzVnlabUZqWlM1a2FXWm1kWE5sS0hCdmN5a3NJR3hqYjJ4dmNpa3NJR052Ykc5eVh6RXVaR1ZtWVhWc2RDNTBhVzFsY3loMGFHbHVaeTV6ZFhKbVlXTmxMbk53WldOMWJHRnlLSEJ2Y3lrc0lITmpiMnh2Y2lrcEtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJSDA3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhOalpXNWxMbXhwWjJoMGN5NXlaV1IxWTJVb1lXUmtUR2xuYUhRc0lHTnZiRzl5WHpFdVpHVm1ZWFZzZEM1a1pXWmhkV3gwUTI5c2IzSXBPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdjbVZ1WkdWeVZHOUpiV0ZuWlNoelkyVnVaU3dnYVcxaFoyVXBJSHRjY2x4dUlDQWdJQ0FnSUNCMllYSWdhR1ZwWjJoMElEMGdhVzFoWjJVdWFHVnBaMmgwTzF4eVhHNGdJQ0FnSUNBZ0lIWmhjaUIzYVdSMGFDQTlJR2x0WVdkbExuZHBaSFJvTzF4eVhHNGdJQ0FnSUNBZ0lIWmhjaUJuWlhSUWIybHVkQ0E5SUdaMWJtTjBhVzl1SUNoNExDQjVMQ0JqWVcxbGNtRXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhKbFkyVnVkR1Z5V0NBOUlHWjFibU4wYVc5dUlDaDRLU0I3SUhKbGRIVnliaUFvZUNBdElDaDNhV1IwYUNBdklESXVNQ2twSUM4Z01pNHdJQzhnZDJsa2RHZzdJSDA3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCeVpXTmxiblJsY2xrZ1BTQm1kVzVqZEdsdmJpQW9lU2tnZXlCeVpYUjFjbTRnTFNoNUlDMGdLR2hsYVdkb2RDQXZJREl1TUNrcElDOGdNaTR3SUM4Z2FHVnBaMmgwT3lCOU8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZG1WamRHOXlYekV1WkdWbVlYVnNkQzV1YjNKdEtIWmxZM1J2Y2w4eExtUmxabUYxYkhRdWNHeDFjeWhqWVcxbGNtRXVabTl5ZDJGeVpDd2dkbVZqZEc5eVh6RXVaR1ZtWVhWc2RDNXdiSFZ6S0habFkzUnZjbDh4TG1SbFptRjFiSFF1ZEdsdFpYTW9jbVZqWlc1MFpYSllLSGdwTENCallXMWxjbUV1Y21sbmFIUXBMQ0IyWldOMGIzSmZNUzVrWldaaGRXeDBMblJwYldWektISmxZMlZ1ZEdWeVdTaDVLU3dnWTJGdFpYSmhMblZ3S1NrcEtUdGNjbHh1SUNBZ0lDQWdJQ0I5TzF4eVhHNGdJQ0FnSUNBZ0lHWnZjaUFvZG1GeUlIa2dQU0F3T3lCNUlEd2dhR1ZwWjJoME95QjVLeXNwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWm05eUlDaDJZWElnZUNBOUlEQTdJSGdnUENCM2FXUjBhRHNnZUNzcktTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ1kyOXNiM0lnUFNCMGFHbHpMblJ5WVdObFVtRjVLSHNnYzNSaGNuUTZJSE5qWlc1bExtTmhiV1Z5WVM1d2IzTXNJR1JwY2pvZ1oyVjBVRzlwYm5Rb2VDd2dlU3dnYzJObGJtVXVZMkZ0WlhKaEtTQjlMQ0J6WTJWdVpTd2dNQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllYSWdZeUE5SUdOdmJHOXlYekV1WkdWbVlYVnNkQzUwYjBSeVlYZHBibWREYjJ4dmNpaGpiMnh2Y2lrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBiV0ZuWlM1a1lYUmhXeWdvZVNBcUlDaDNhV1IwYUNBcUlEUXBLU0FySUNoNElDb2dOQ2twWFNBOUlHTXVjanRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsdFlXZGxMbVJoZEdGYktDaDVJQ29nS0hkcFpIUm9JQ29nTkNrcElDc2dLSGdnS2lBMEtTa2dLeUF4WFNBOUlHTXVaenRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsdFlXZGxMbVJoZEdGYktDaDVJQ29nS0hkcFpIUm9JQ29nTkNrcElDc2dLSGdnS2lBMEtTa2dLeUF5WFNBOUlHTXVZanRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsdFlXZGxMbVJoZEdGYktDaDVJQ29nS0hkcFpIUm9JQ29nTkNrcElDc2dLSGdnS2lBMEtTa2dLeUF6WFNBOUlESTFOVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVmVnh5WEc1bGVIQnZjblJ6TG1SbFptRjFiSFFnUFNCU1lYbFVjbUZqWlhJN1hISmNiaTh2SXlCemIzVnlZMlZOWVhCd2FXNW5WVkpNUFhKaGVYUnlZV05sTG1wekxtMWhjQ0lzSWx3aWRYTmxJSE4wY21samRGd2lPMXh5WEc1UFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dYQ0pmWDJWelRXOWtkV3hsWENJc0lIc2dkbUZzZFdVNklIUnlkV1VnZlNrN1hISmNibU52Ym5OMElIWmxZM1J2Y2w4eElEMGdjbVZ4ZFdseVpTaGNJaTR2ZG1WamRHOXlYQ0lwTzF4eVhHNWpiMjV6ZENCamIyeHZjbDh4SUQwZ2NtVnhkV2x5WlNoY0lpNHZZMjlzYjNKY0lpazdYSEpjYm1OdmJuTjBJSFJvYVc1bmMxOHhJRDBnY21WeGRXbHlaU2hjSWk0dmRHaHBibWR6WENJcE8xeHlYRzVqYjI1emRDQmpZVzFsY21GZk1TQTlJSEpsY1hWcGNtVW9YQ0l1TDJOaGJXVnlZVndpS1R0Y2NseHVZMjl1YzNRZ1UzVnlabUZqWlhNZ1BTQnlaWEYxYVhKbEtGd2lMaTl6ZFhKbVlXTmxYQ0lwTzF4eVhHNW1kVzVqZEdsdmJpQmtaV1poZFd4MFUyTmxibVVvS1NCN1hISmNiaUFnSUNCeVpYUjFjbTRnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hVzVuY3pvZ1cxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCdVpYY2dkR2hwYm1kelh6RXVVR3hoYm1Vb2JtVjNJSFpsWTNSdmNsOHhMbVJsWm1GMWJIUW9NQzR3TENBeExqQXNJREF1TUNrc0lEQXVNQ3dnVTNWeVptRmpaWE11WTJobFkydGxjbUp2WVhKa0tTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2JtVjNJSFJvYVc1bmMxOHhMbE53YUdWeVpTaHVaWGNnZG1WamRHOXlYekV1WkdWbVlYVnNkQ2d3TGpBc0lERXVNQ3dnTFRBdU1qVXBMQ0F4TGpBc0lGTjFjbVpoWTJWekxuTm9hVzU1S1N4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYm1WM0lIUm9hVzVuYzE4eExsTndhR1Z5WlNodVpYY2dkbVZqZEc5eVh6RXVaR1ZtWVhWc2RDZ3RNUzR3TENBd0xqVXNJREV1TlNrc0lEQXVOU3dnVTNWeVptRmpaWE11YzJocGJua3BYSEpjYmlBZ0lDQWdJQ0FnWFN4Y2NseHVJQ0FnSUNBZ0lDQnNhV2RvZEhNNklGdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2V5QndiM002SUc1bGR5QjJaV04wYjNKZk1TNWtaV1poZFd4MEtDMHlMakFzSURJdU5Td2dNQzR3S1N3Z1kyOXNiM0k2SUc1bGR5QmpiMnh2Y2w4eExtUmxabUYxYkhRb01DNDBPU3dnTUM0d055d2dNQzR3TnlrZ2ZTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2V5QndiM002SUc1bGR5QjJaV04wYjNKZk1TNWtaV1poZFd4MEtERXVOU3dnTWk0MUxDQXhMalVwTENCamIyeHZjam9nYm1WM0lHTnZiRzl5WHpFdVpHVm1ZWFZzZENnd0xqQTNMQ0F3TGpBM0xDQXdMalE1S1NCOUxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCN0lIQnZjem9nYm1WM0lIWmxZM1J2Y2w4eExtUmxabUYxYkhRb01TNDFMQ0F5TGpVc0lDMHhMalVwTENCamIyeHZjam9nYm1WM0lHTnZiRzl5WHpFdVpHVm1ZWFZzZENnd0xqQTNMQ0F3TGpRNUxDQXdMakEzTVNrZ2ZTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2V5QndiM002SUc1bGR5QjJaV04wYjNKZk1TNWtaV1poZFd4MEtEQXVNQ3dnTXk0MUxDQXdMakFwTENCamIyeHZjam9nYm1WM0lHTnZiRzl5WHpFdVpHVm1ZWFZzZENnd0xqSXhMQ0F3TGpJeExDQXdMak0xS1NCOVhISmNiaUFnSUNBZ0lDQWdYU3hjY2x4dUlDQWdJQ0FnSUNCallXMWxjbUU2SUc1bGR5QmpZVzFsY21GZk1TNWtaV1poZFd4MEtHNWxkeUIyWldOMGIzSmZNUzVrWldaaGRXeDBLRE11TUN3Z01pNHdMQ0EwTGpBcExDQnVaWGNnZG1WamRHOXlYekV1WkdWbVlYVnNkQ2d0TVM0d0xDQXdMalVzSURBdU1Da3BYSEpjYmlBZ0lDQjlPMXh5WEc1OVhISmNibVY0Y0c5eWRITXVaR1ZtWVhWc2RGTmpaVzVsSUQwZ1pHVm1ZWFZzZEZOalpXNWxPMXh5WEc1bWRXNWpkR2x2YmlCelkyVnVaVElvS1NCN1hISmNiaUFnSUNCeVpYUjFjbTRnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hVzVuY3pvZ1cxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCdVpYY2dkR2hwYm1kelh6RXVVR3hoYm1Vb2JtVjNJSFpsWTNSdmNsOHhMbVJsWm1GMWJIUW9NQzR3TENBeExqQXNJREF1TUNrc0lEQXVNQ3dnVTNWeVptRmpaWE11WTJobFkydGxjbUp2WVhKa0tTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2JtVjNJSFJvYVc1bmMxOHhMbE53YUdWeVpTaHVaWGNnZG1WamRHOXlYekV1WkdWbVlYVnNkQ2d3TGpBc0lERXVNQ3dnTFRBdU1qVXBMQ0F4TGpBc0lGTjFjbVpoWTJWekxuTm9hVzU1S1N4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYm1WM0lIUm9hVzVuYzE4eExsTndhR1Z5WlNodVpYY2dkbVZqZEc5eVh6RXVaR1ZtWVhWc2RDZ3RNUzR3TENBd0xqVXNJREV1TlNrc0lEQXVOU3dnVTNWeVptRmpaWE11YzJocGJua3BMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnVaWGNnZEdocGJtZHpYekV1VTNCb1pYSmxLRzVsZHlCMlpXTjBiM0pmTVM1a1pXWmhkV3gwS0MwMUxqVXNJREl1TUN3Z0xUTXVOU2tzSURFdU1qVXNJRk4xY21aaFkyVnpMbU5vWldOclpYSmliMkZ5WkNsY2NseHVJQ0FnSUNBZ0lDQmRMRnh5WEc0Z0lDQWdJQ0FnSUd4cFoyaDBjem9nVzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I3SUhCdmN6b2dibVYzSUhabFkzUnZjbDh4TG1SbFptRjFiSFFvTFRJdU1Dd2dNaTQxTENBd0xqQXBMQ0JqYjJ4dmNqb2dibVYzSUdOdmJHOXlYekV1WkdWbVlYVnNkQ2d3TGpRNUxDQXdMakEzTENBd0xqQTNLU0I5TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I3SUhCdmN6b2dibVYzSUhabFkzUnZjbDh4TG1SbFptRjFiSFFvTVM0MUxDQXlMalVzSURFdU5Ta3NJR052Ykc5eU9pQnVaWGNnWTI5c2IzSmZNUzVrWldaaGRXeDBLREF1TURjc0lEQXVNRGNzSURBdU5Ea3BJSDBzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSHNnY0c5ek9pQnVaWGNnZG1WamRHOXlYekV1WkdWbVlYVnNkQ2d4TGpVc0lESXVOU3dnTFRFdU5Ta3NJR052Ykc5eU9pQnVaWGNnWTI5c2IzSmZNUzVrWldaaGRXeDBLREF1TURjc0lEQXVORGtzSURBdU1EY3hLU0I5TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I3SUhCdmN6b2dibVYzSUhabFkzUnZjbDh4TG1SbFptRjFiSFFvTUM0d0xDQXpMalVzSURBdU1Da3NJR052Ykc5eU9pQnVaWGNnWTI5c2IzSmZNUzVrWldaaGRXeDBLREF1TWpFc0lEQXVNakVzSURBdU16VXBJSDFjY2x4dUlDQWdJQ0FnSUNCZExGeHlYRzRnSUNBZ0lDQWdJR05oYldWeVlUb2dibVYzSUdOaGJXVnlZVjh4TG1SbFptRjFiSFFvYm1WM0lIWmxZM1J2Y2w4eExtUmxabUYxYkhRb015NHdMQ0F5TGpBc0lEUXVNQ2tzSUc1bGR5QjJaV04wYjNKZk1TNWtaV1poZFd4MEtDMHhMakFzSURBdU5Td2dNQzR3S1NsY2NseHVJQ0FnSUgwN1hISmNibjFjY2x4dVpYaHdiM0owY3k1elkyVnVaVElnUFNCelkyVnVaVEk3WEhKY2JtWjFibU4wYVc5dUlHVnRjSFI1VTJObGJtVW9LU0I3WEhKY2JpQWdJQ0J5WlhSMWNtNGdlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FXNW5jem9nVzEwc1hISmNiaUFnSUNBZ0lDQWdiR2xuYUhSek9pQmJYU3hjY2x4dUlDQWdJQ0FnSUNCallXMWxjbUU2SUc1bGR5QmpZVzFsY21GZk1TNWtaV1poZFd4MEtHNWxkeUIyWldOMGIzSmZNUzVrWldaaGRXeDBLRE11TUN3Z01pNHdMQ0EwTGpBcExDQnVaWGNnZG1WamRHOXlYekV1WkdWbVlYVnNkQ2d0TVM0d0xDQXdMalVzSURBdU1Da3BYSEpjYmlBZ0lDQjlPMXh5WEc1OVhISmNibVY0Y0c5eWRITXVaVzF3ZEhsVFkyVnVaU0E5SUdWdGNIUjVVMk5sYm1VN1hISmNiaTh2SXlCemIzVnlZMlZOWVhCd2FXNW5WVkpNUFhOalpXNWxMbXB6TG0xaGNDSXNJbHdpZFhObElITjBjbWxqZEZ3aU8xeHlYRzVQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z1hDSmZYMlZ6VFc5a2RXeGxYQ0lzSUhzZ2RtRnNkV1U2SUhSeWRXVWdmU2s3WEhKY2JtTnZibk4wSUdOdmJHOXlYekVnUFNCeVpYRjFhWEpsS0Z3aUxpOWpiMnh2Y2x3aUtUdGNjbHh1Wlhod2IzSjBjeTV6YUdsdWVTQTlJSHRjY2x4dUlDQWdJR1JwWm1aMWMyVTZJR1oxYm1OMGFXOXVJQ2h3YjNNcElIc2djbVYwZFhKdUlHTnZiRzl5WHpFdVpHVm1ZWFZzZEM1M2FHbDBaVHNnZlN4Y2NseHVJQ0FnSUhOd1pXTjFiR0Z5T2lCbWRXNWpkR2x2YmlBb2NHOXpLU0I3SUhKbGRIVnliaUJqYjJ4dmNsOHhMbVJsWm1GMWJIUXVaM0psZVRzZ2ZTeGNjbHh1SUNBZ0lISmxabXhsWTNRNklHWjFibU4wYVc5dUlDaHdiM01wSUhzZ2NtVjBkWEp1SURBdU56c2dmU3hjY2x4dUlDQWdJSEp2ZFdkb2JtVnpjem9nTWpVd1hISmNibjA3WEhKY2JtVjRjRzl5ZEhNdVkyaGxZMnRsY21KdllYSmtJRDBnZTF4eVhHNGdJQ0FnWkdsbVpuVnpaVG9nWm5WdVkzUnBiMjRnS0hCdmN5a2dlMXh5WEc0Z0lDQWdJQ0FnSUdsbUlDZ29UV0YwYUM1bWJHOXZjaWh3YjNNdWVpa2dLeUJOWVhSb0xtWnNiMjl5S0hCdmN5NTRLU2tnSlNBeUlDRTlQU0F3S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJqYjJ4dmNsOHhMbVJsWm1GMWJIUXVkMmhwZEdVN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyOXNiM0pmTVM1a1pXWmhkV3gwTG1Kc1lXTnJPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgwc1hISmNiaUFnSUNCemNHVmpkV3hoY2pvZ1puVnVZM1JwYjI0Z0tIQnZjeWtnZXlCeVpYUjFjbTRnWTI5c2IzSmZNUzVrWldaaGRXeDBMbmRvYVhSbE95QjlMRnh5WEc0Z0lDQWdjbVZtYkdWamREb2dablZ1WTNScGIyNGdLSEJ2Y3lrZ2UxeHlYRzRnSUNBZ0lDQWdJR2xtSUNnb1RXRjBhQzVtYkc5dmNpaHdiM011ZWlrZ0t5Qk5ZWFJvTG1ac2IyOXlLSEJ2Y3k1NEtTa2dKU0F5SUNFOVBTQXdLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQXdMakU3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnTUM0M08xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDBzWEhKY2JpQWdJQ0J5YjNWbmFHNWxjM002SURFMU1GeHlYRzU5TzF4eVhHNHZMeU1nYzI5MWNtTmxUV0Z3Y0dsdVoxVlNURDF6ZFhKbVlXTmxMbXB6TG0xaGNDSXNJbHdpZFhObElITjBjbWxqZEZ3aU8xeHlYRzVQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z1hDSmZYMlZ6VFc5a2RXeGxYQ0lzSUhzZ2RtRnNkV1U2SUhSeWRXVWdmU2s3WEhKY2JtTnZibk4wSUhabFkzUnZjbDh4SUQwZ2NtVnhkV2x5WlNoY0lpNHZkbVZqZEc5eVhDSXBPMXh5WEc1amJHRnpjeUJUY0dobGNtVWdlMXh5WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvWTJWdWRHVnlMQ0J5WVdScGRYTXNJSE4xY21aaFkyVXBJSHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbU5sYm5SbGNpQTlJR05sYm5SbGNqdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuTjFjbVpoWTJVZ1BTQnpkWEptWVdObE8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWNtRmthWFZ6TWlBOUlISmhaR2wxY3lBcUlISmhaR2wxY3p0Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUc1dmNtMWhiQ2h3YjNNcElIc2djbVYwZFhKdUlIWmxZM1J2Y2w4eExtUmxabUYxYkhRdWJtOXliU2gyWldOMGIzSmZNUzVrWldaaGRXeDBMbTFwYm5WektIQnZjeXdnZEdocGN5NWpaVzUwWlhJcEtUc2dmVnh5WEc0Z0lDQWdhVzUwWlhKelpXTjBLSEpoZVNrZ2UxeHlYRzRnSUNBZ0lDQWdJSFpoY2lCbGJ5QTlJSFpsWTNSdmNsOHhMbVJsWm1GMWJIUXViV2x1ZFhNb2RHaHBjeTVqWlc1MFpYSXNJSEpoZVM1emRHRnlkQ2s3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJSFlnUFNCMlpXTjBiM0pmTVM1a1pXWmhkV3gwTG1SdmRDaGxieXdnY21GNUxtUnBjaWs3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJR1JwYzNRZ1BTQXdPMXh5WEc0Z0lDQWdJQ0FnSUdsbUlDaDJJRDQ5SURBcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJR1JwYzJNZ1BTQjBhR2x6TG5KaFpHbDFjeklnTFNBb2RtVmpkRzl5WHpFdVpHVm1ZWFZzZEM1a2IzUW9aVzhzSUdWdktTQXRJSFlnS2lCMktUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR1JwYzJNZ1BqMGdNQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHbHpkQ0E5SUhZZ0xTQk5ZWFJvTG5OeGNuUW9aR2x6WXlrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tHUnBjM1FnUFQwOUlEQXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHNTFiR3c3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZXlCMGFHbHVaem9nZEdocGN5d2djbUY1T2lCeVlYa3NJR1JwYzNRNklHUnBjM1FnZlR0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHVaWGh3YjNKMGN5NVRjR2hsY21VZ1BTQlRjR2hsY21VN1hISmNibU5zWVhOeklGQnNZVzVsSUh0Y2NseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtHNXZjbTBzSUc5bVpuTmxkQ3dnYzNWeVptRmpaU2tnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzNWeVptRmpaU0E5SUhOMWNtWmhZMlU3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV1YjNKdFlXd2dQU0JtZFc1amRHbHZiaUFvY0c5ektTQjdJSEpsZEhWeWJpQnViM0p0T3lCOU8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWFXNTBaWEp6WldOMElEMGdablZ1WTNScGIyNGdLSEpoZVNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdaR1Z1YjIwZ1BTQjJaV04wYjNKZk1TNWtaV1poZFd4MExtUnZkQ2h1YjNKdExDQnlZWGt1WkdseUtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR1JsYm05dElENGdNQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUc1MWJHdzdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllYSWdaR2x6ZENBOUlDaDJaV04wYjNKZk1TNWtaV1poZFd4MExtUnZkQ2h1YjNKdExDQnlZWGt1YzNSaGNuUXBJQ3NnYjJabWMyVjBLU0F2SUNndFpHVnViMjBwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhzZ2RHaHBibWM2SUhSb2FYTXNJSEpoZVRvZ2NtRjVMQ0JrYVhOME9pQmthWE4wSUgwN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQjlPMXh5WEc0Z0lDQWdmVnh5WEc1OVhISmNibVY0Y0c5eWRITXVVR3hoYm1VZ1BTQlFiR0Z1WlR0Y2NseHVMeThqSUhOdmRYSmpaVTFoY0hCcGJtZFZVa3c5ZEdocGJtZHpMbXB6TG0xaGNDSXNJbHdpZFhObElITjBjbWxqZEZ3aU8xeHlYRzVQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z1hDSmZYMlZ6VFc5a2RXeGxYQ0lzSUhzZ2RtRnNkV1U2SUhSeWRXVWdmU2s3WEhKY2JtTnNZWE56SUZabFkzUnZjaUI3WEhKY2JpQWdJQ0JqYjI1emRISjFZM1J2Y2loNExDQjVMQ0I2S1NCN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1NElEMGdlRHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbmtnUFNCNU8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWVpQTlJSG83WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0J6ZEdGMGFXTWdkR2x0WlhNb2F5d2dkaWtnZXlCeVpYUjFjbTRnYm1WM0lGWmxZM1J2Y2locklDb2dkaTU0TENCcklDb2dkaTU1TENCcklDb2dkaTU2S1RzZ2ZWeHlYRzRnSUNBZ2MzUmhkR2xqSUcxcGJuVnpLSFl4TENCMk1pa2dleUJ5WlhSMWNtNGdibVYzSUZabFkzUnZjaWgyTVM1NElDMGdkakl1ZUN3Z2RqRXVlU0F0SUhZeUxua3NJSFl4TG5vZ0xTQjJNaTU2S1RzZ2ZWeHlYRzRnSUNBZ2MzUmhkR2xqSUhCc2RYTW9kakVzSUhZeUtTQjdJSEpsZEhWeWJpQnVaWGNnVm1WamRHOXlLSFl4TG5nZ0t5QjJNaTU0TENCMk1TNTVJQ3NnZGpJdWVTd2dkakV1ZWlBcklIWXlMbm9wT3lCOVhISmNiaUFnSUNCemRHRjBhV01nWkc5MEtIWXhMQ0IyTWlrZ2V5QnlaWFIxY200Z2RqRXVlQ0FxSUhZeUxuZ2dLeUIyTVM1NUlDb2dkakl1ZVNBcklIWXhMbm9nS2lCMk1pNTZPeUI5WEhKY2JpQWdJQ0J6ZEdGMGFXTWdiV0ZuS0hZcElIc2djbVYwZFhKdUlFMWhkR2d1YzNGeWRDaDJMbmdnS2lCMkxuZ2dLeUIyTG5rZ0tpQjJMbmtnS3lCMkxub2dLaUIyTG5vcE95QjlYSEpjYmlBZ0lDQnpkR0YwYVdNZ2JtOXliU2gyS1NCN1hISmNiaUFnSUNBZ0lDQWdkbUZ5SUcxaFp5QTlJRlpsWTNSdmNpNXRZV2NvZGlrN1hISmNiaUFnSUNBZ0lDQWdkbUZ5SUdScGRpQTlJQ2h0WVdjZ1BUMDlJREFwSUQ4Z1NXNW1hVzVwZEhrZ09pQXhMakFnTHlCdFlXYzdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRlpsWTNSdmNpNTBhVzFsY3loa2FYWXNJSFlwTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnYzNSaGRHbGpJR055YjNOektIWXhMQ0IyTWlrZ2UxeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnVaWGNnVm1WamRHOXlLSFl4TG5rZ0tpQjJNaTU2SUMwZ2RqRXVlaUFxSUhZeUxua3NJSFl4TG5vZ0tpQjJNaTU0SUMwZ2RqRXVlQ0FxSUhZeUxub3NJSFl4TG5nZ0tpQjJNaTU1SUMwZ2RqRXVlU0FxSUhZeUxuZ3BPMXh5WEc0Z0lDQWdmVnh5WEc1OVhISmNibVY0Y0c5eWRITXVaR1ZtWVhWc2RDQTlJRlpsWTNSdmNqdGNjbHh1THk4aklITnZkWEpqWlUxaGNIQnBibWRWVWt3OWRtVmpkRzl5TG1wekxtMWhjQ0lzSW1sdGNHOXlkQ0JRWVhKelpTd2dleUJpWVhOcFkxTmpaVzVsV0UxTUlIMGdabkp2YlNBbkxpOXpZMlZ1WlZoTlRDYzdYSEpjYmx4eVhHNWxlSEJ2Y25RZ2V5QmNjbHh1SUNCUVlYSnpaU3dnWW1GemFXTlRZMlZ1WlZoTlRDeGNjbHh1ZlR0Y2NseHVJaXdpWEc1cGJYQnZjblFnZTF4dUlDQldaV04wYjNJc1hHNGdJRXhwWjJoMExDQmNiaUFnUTI5c2IzSXNJRnh1SUNCRFlXMWxjbUVzWEc0Z0lGTmpaVzVsTENCa1pXWmhkV3gwVTJObGJtVXNJSE5qWlc1bE1pd2daVzF3ZEhsVFkyVnVaU3hjYmlBZ1UzVnlabUZqWlhNc1hHNGdJRlJvYVc1bkxDQlRjR2hsY21Vc0lGQnNZVzVsWEc1OUlHWnliMjBnSjBCd2VYUm9iMjR6Tmk5eVlYbDBjbUZqWlNjN1hHNWNibHh1THk4Z1ZHaHliM2R6SUdWeWNtOXlJRzl1SUdsdWRtRnNhV1FnZUcxc1hHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCUVlYSnpaVmhOVEZSdlUyTmxibVVvZUcxc1NXNXdkWFE2SUhOMGNtbHVaeWs2SUZOalpXNWxJSHRjYmlBZ1kyOXVjM1FnY0dGeWMyVnlJRDBnYm1WM0lFUlBUVkJoY25ObGNpZ3BPMXh1SUNCamIyNXpkQ0I0Yld3Z1BTQndZWEp6WlhJdWNHRnljMlZHY205dFUzUnlhVzVuS0hodGJFbHVjSFYwTENBbllYQndiR2xqWVhScGIyNHZlRzFzSnlrN1hHNGdJR052Ym5OdmJHVXViRzluS0NkNGJXd25MQ0I0Yld3cE8xeHVJQ0JqYjI1emRDQndZWEp6WlhKRmNuSnZjazV2WkdVZ1BTQjRiV3d1WjJWMFJXeGxiV1Z1ZEhOQ2VWUmhaMDVoYldVb0ozQmhjbk5sY21WeWNtOXlKeWs3WEc0Z0lHbG1JQ2h3WVhKelpYSkZjbkp2Y2s1dlpHVXViR1Z1WjNSb0lDRTlJREFwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnVTNsdWRHRjRSWEp5YjNJb0tUdGNiaUFnZlZ4dVhHNGdJR052Ym5OMElHOWlhbVZqZEhNNklGUm9hVzVuVzEwZ1BTQmJYVHRjYmlBZ1kyOXVjM1FnYkdsbmFIUnpPaUJNYVdkb2RGdGRJRDBnVzEwN1hHNGdJR3hsZENCallXMWxjbUVnUFNCdVpYY2dRMkZ0WlhKaEtHNWxkeUJXWldOMGIzSW9NeTR3TENBeUxqQXNJRFF1TUNrc0lHNWxkeUJXWldOMGIzSW9MVEV1TUN3Z01DNDFMQ0F3TGpBcEtUdGNibHh1SUNBdkwweGxkbVZzSURGY2JpQWdZMjl1YzNRZ2MyTmxibVZPYjJSbElEMGdlRzFzTG1kbGRFVnNaVzFsYm5SelFubFVZV2RPWVcxbEtDZHpZMlZ1WlNjcFd6QmRPMXh1SUNBdkx5QmpiMjV6YjJ4bExteHZaeWh6WTJWdVpVNXZaR1VwTzF4dUlDQXZMMHhsZG1Wc0lESmNiaUFnWTI5dWMzUWdZMkZ0WlhKaFRtOWtaU0E5SUhOalpXNWxUbTlrWlM1blpYUkZiR1Z0Wlc1MGMwSjVWR0ZuVG1GdFpTZ25ZMkZ0WlhKaEp5bGJNRjA3WEc0Z0lHTnZibk4wSUc5aWFtVmpkSE5PYjJSbElEMGdjMk5sYm1WT2IyUmxMbWRsZEVWc1pXMWxiblJ6UW5sVVlXZE9ZVzFsS0NkdlltcGxZM1J6SnlsYk1GMDdYRzRnSUdOdmJuTjBJR3hwWjJoMGMwNXZaR1VnUFNCelkyVnVaVTV2WkdVdVoyVjBSV3hsYldWdWRITkNlVlJoWjA1aGJXVW9KMnhwWjJoMGN5Y3BXekJkTzF4dUlDQXZMMHhsZG1Wc0lETmNiaUFnWTI5dWMzUWdjR3hoYm1WT2IyUmxjeUE5SUc5aWFtVmpkSE5PYjJSbExtZGxkRVZzWlcxbGJuUnpRbmxVWVdkT1lXMWxLQ2R3YkdGdVpTY3BPMXh1SUNCamIyNXpkQ0J6Y0dobGNtVk9iMlJsY3lBOUlHOWlhbVZqZEhOT2IyUmxMbWRsZEVWc1pXMWxiblJ6UW5sVVlXZE9ZVzFsS0NkemNHaGxjbVVuS1R0Y2JpQWdZMjl1YzNRZ2JHbG5hSFJPYjJSbGN5QTlJR3hwWjJoMGMwNXZaR1V1WjJWMFJXeGxiV1Z1ZEhOQ2VWUmhaMDVoYldVb0oyeHBaMmgwSnlrN1hHNWNiaUFnTHk4Z2VHMXNJRzV2WkdWeklIUnZJSFI1Y0dWelkzSnBjSFFnYjJKcVpXTjBjMXh1WEc0Z0lHWnZjaUFvYkdWMElIQWdiMllnUEdGdWVUNXdiR0Z1WlU1dlpHVnpLU0I3WEc0Z0lDQWdZMjl1YzNRZ2NtVnhkV2x5WldSQmRIUnlhV0oxZEdWeklEMGdXeWR3YjNNbkxDQW5iMlptYzJWMEp5d2dKM04xY21aaFkyVW5YVHRjYmlBZ0lDQnBaaUFvY21WeGRXbHlaV1JCZEhSeWFXSjFkR1Z6TG1WMlpYSjVLR0VnUFQ0Z2NDNW9ZWE5CZEhSeWFXSjFkR1VvWVNrcEtTQjdYRzRnSUNBZ0lDQmpiMjV6ZENCd2IzTkJkSFFnUFNBOGMzUnlhVzVuUG5BdVoyVjBRWFIwY21saWRYUmxLQ2R3YjNNbktUdGNiaUFnSUNBZ0lHTnZibk4wSUc5bVpuTmxkRUYwZENBOUlEeHpkSEpwYm1jK2NDNW5aWFJCZEhSeWFXSjFkR1VvSjI5bVpuTmxkQ2NwTzF4dUlDQWdJQ0FnWTI5dWMzUWdjM1Z5Wm1GalpVRjBkQ0E5SUR4emRISnBibWMrY0M1blpYUkJkSFJ5YVdKMWRHVW9KM04xY21aaFkyVW5LVHRjYmx4dUlDQWdJQ0FnWTI5dWMzUWdiblZ0WW1WeWN5QTlJSEJ2YzBGMGRDNXpjR3hwZENnbkxDY3BMbk5zYVdObEtEQXNJRE1wTG0xaGNDaHpJRDArSUhCaGNuTmxSbXh2WVhRb2N5a3BPMXh1SUNBZ0lDQWdZMjl1YzNRZ2RtVmpJRDBnYm1WM0lGWmxZM1J2Y2lodWRXMWlaWEp6V3pCZExDQnVkVzFpWlhKeld6RmRMQ0J1ZFcxaVpYSnpXekpkS1R0Y2JpQWdJQ0FnSUdOdmJuTjBJRzltWm5ObGRDQTlJSEJoY25ObFJteHZZWFFvYjJabWMyVjBRWFIwS1R0Y2JpQWdJQ0FnSUd4bGRDQnpkWEptWVdObElEMGdVM1Z5Wm1GalpYTXVZMmhsWTJ0bGNtSnZZWEprTzF4dUlDQWdJQ0FnYVdZZ0tITjFjbVpoWTJWQmRIUWdQVDA5SUNkemFHbHVlU2NwSUh0Y2JpQWdJQ0FnSUNBZ2MzVnlabUZqWlNBOUlGTjFjbVpoWTJWekxuTm9hVzU1TzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBdkx5QmpiMjV6YjJ4bExteHZaeWduZG1Wak9pY3NJSFpsWXlrN1hHNGdJQ0FnSUNBdkx5QmpiMjV6YjJ4bExteHZaeWduYm5WdFltVnljem9uTENCdWRXMWlaWEp6S1R0Y2JpQWdJQ0FnSUM4dklHTnZibk52YkdVdWJHOW5LQ2R2Wm1aelpYUTZKeXdnYjJabWMyVjBLVHRjYmlBZ0lDQWdJQzh2SUdOdmJuTnZiR1V1Ykc5bktDZHpkWEptWVdObE9pY3NJSE4xY21aaFkyVXBPMXh1WEc0Z0lDQWdJQ0J2WW1wbFkzUnpMbkIxYzJnb2JtVjNJRkJzWVc1bEtIWmxZeXdnYjJabWMyVjBMQ0J6ZFhKbVlXTmxLU2s3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnWm05eUlDaHNaWFFnY3lCdlppQThZVzU1UG5Od2FHVnlaVTV2WkdWektTQjdYRzRnSUNBZ1kyOXVjM1FnY21WeGRXbHlaV1JCZEhSeWFXSjFkR1Z6SUQwZ1d5ZHdiM01uTENBbmMybDZaU2NzSUNkemRYSm1ZV05sSjEwN1hHNGdJQ0FnYVdZZ0tISmxjWFZwY21Wa1FYUjBjbWxpZFhSbGN5NWxkbVZ5ZVNoaElEMCtJSE11YUdGelFYUjBjbWxpZFhSbEtHRXBLU2tnZTF4dUlDQWdJQ0FnWTI5dWMzUWdjRzl6UVhSMElEMGdQSE4wY21sdVp6NXpMbWRsZEVGMGRISnBZblYwWlNnbmNHOXpKeWs3WEc0Z0lDQWdJQ0JqYjI1emRDQnphWHBsUVhSMElEMGdQSE4wY21sdVp6NXpMbWRsZEVGMGRISnBZblYwWlNnbmMybDZaU2NwTzF4dUlDQWdJQ0FnWTI5dWMzUWdjM1Z5Wm1GalpVRjBkQ0E5SUR4emRISnBibWMrY3k1blpYUkJkSFJ5YVdKMWRHVW9KM04xY21aaFkyVW5LVHRjYmlBZ0lDQWdJR052Ym5OdmJHVXViRzluS0hzZ2NHOXpRWFIwTENCemFYcGxRWFIwTENCemRYSm1ZV05sUVhSMElIMHBPMXh1SUNBZ0lDQWdZMjl1YzNRZ2JuVnRZbVZ5Y3lBOUlIQnZjMEYwZEM1emNHeHBkQ2duTENjcExuTnNhV05sS0RBc0lETXBMbTFoY0NoeklEMCtJSEJoY25ObFJteHZZWFFvY3lrcE8xeHVJQ0FnSUNBZ1kyOXVjM1FnZG1WaklEMGdibVYzSUZabFkzUnZjaWh1ZFcxaVpYSnpXekJkTENCdWRXMWlaWEp6V3pGZExDQnVkVzFpWlhKeld6SmRLVHRjYmlBZ0lDQWdJR052Ym5OMElITnBlbVVnUFNCd1lYSnpaVVpzYjJGMEtITnBlbVZCZEhRcE8xeHVJQ0FnSUNBZ2JHVjBJSE4xY21aaFkyVWdQU0JUZFhKbVlXTmxjeTVqYUdWamEyVnlZbTloY21RN1hHNGdJQ0FnSUNCcFppQW9jM1Z5Wm1GalpVRjBkQ0E5UFQwZ0ozTm9hVzU1SnlrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEptWVdObElEMGdVM1Z5Wm1GalpYTXVjMmhwYm5rN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDOHZJR052Ym5OdmJHVXViRzluS0NkMlpXTTZKeXdnZG1WaktUdGNiaUFnSUNBZ0lDOHZJR052Ym5OdmJHVXViRzluS0NkdWRXMWlaWEp6T2ljc0lHNTFiV0psY25NcE8xeHVJQ0FnSUNBZ0x5OGdZMjl1YzI5c1pTNXNiMmNvSjNOcGVtVTZKeXdnYzJsNlpTazdYRzRnSUNBZ0lDQXZMeUJqYjI1emIyeGxMbXh2WnlnbmMzVnlabUZqWlRvbkxDQnpkWEptWVdObEtUdGNibHh1SUNBZ0lDQWdiMkpxWldOMGN5NXdkWE5vS0c1bGR5QlRjR2hsY21Vb2RtVmpMQ0J6YVhwbExDQnpkWEptWVdObEtTazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JseHVJQ0JtYjNJZ0tHeGxkQ0JzSUc5bUlEeGhibmsrYkdsbmFIUk9iMlJsY3lrZ2UxeHVJQ0FnSUdOdmJuTjBJSEpsY1hWcGNtVmtRWFIwY21saWRYUmxjeUE5SUZzbmNHOXpKeXdnSjJOdmJHOXlKMTA3WEc0Z0lDQWdhV1lnS0hKbGNYVnBjbVZrUVhSMGNtbGlkWFJsY3k1bGRtVnllU2hoSUQwK0lHd3VhR0Z6UVhSMGNtbGlkWFJsS0dFcEtTa2dlMXh1SUNBZ0lDQWdZMjl1YzNRZ2NHOXpRWFIwSUQwZ1BITjBjbWx1Wno1c0xtZGxkRUYwZEhKcFluVjBaU2duY0c5ekp5azdYRzRnSUNBZ0lDQmpiMjV6ZENCamIyeHZja0YwZENBOUlEeHpkSEpwYm1jK2JDNW5aWFJCZEhSeWFXSjFkR1VvSjJOdmJHOXlKeWs3WEc0Z0lDQWdJQ0JqYjI1emIyeGxMbXh2WnloN0lIQnZjMEYwZEN3Z1kyOXNiM0pCZEhRZ2ZTazdYRzRnSUNBZ0lDQmpiMjV6ZENCdWRXMWlaWEp6SUQwZ2NHOXpRWFIwTG5Od2JHbDBLQ2NzSnlrdWMyeHBZMlVvTUN3Z015a3ViV0Z3S0hNZ1BUNGdjR0Z5YzJWR2JHOWhkQ2h6S1NrN1hHNGdJQ0FnSUNCamIyNXpkQ0IyWldNZ1BTQnVaWGNnVm1WamRHOXlLRzUxYldKbGNuTmJNRjBzSUc1MWJXSmxjbk5iTVYwc0lHNTFiV0psY25OYk1sMHBPMXh1SUNBZ0lDQWdZMjl1YzNRZ1kyOXNiM0lnUFNCamIyeHZja0YwZEM1emNHeHBkQ2duTENjcExuTnNhV05sS0RBc0lETXBMbTFoY0NoeklEMCtJSEJoY25ObFJteHZZWFFvY3lrcE8xeHVYRzRnSUNBZ0lDQXZMeUJqYjI1emIyeGxMbXh2WnlnbmRtVmpPaWNzSUhabFl5azdYRzRnSUNBZ0lDQXZMeUJqYjI1emIyeGxMbXh2WnlnbmJuVnRZbVZ5Y3pvbkxDQnVkVzFpWlhKektUdGNiaUFnSUNBZ0lDOHZJR052Ym5OdmJHVXViRzluS0NkamIyeHZjam9uTENCamIyeHZjaWs3WEc1Y2JpQWdJQ0FnSUd4cFoyaDBjeTV3ZFhOb0tIc2djRzl6T2lCMlpXTXNJR052Ykc5eU9pQnVaWGNnUTI5c2IzSW9ZMjlzYjNKYk1GMHNJR052Ykc5eVd6RmRMQ0JqYjJ4dmNsc3lYU2tnZlNrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ0tHWjFibU4wYVc5dUlIQmhjbk5sVEdsbmFIUW9ZMkZ0WlhKaFRtOWtaVG9nUld4bGJXVnVkQ2tnZTF4dUlDQWdJR052Ym5OdmJHVXViRzluS0dOaGJXVnlZVTV2WkdVcE8xeHVJQ0FnSUdOdmJuTjBJSEpsY1hWcGNtVmtRWFIwY21saWRYUmxjeUE5SUZzbmNHOXpKeXdnSjJ4dmIydEJkQ2RkTzF4dUlDQWdJR2xtSUNoeVpYRjFhWEpsWkVGMGRISnBZblYwWlhNdVpYWmxjbmtvWVNBOVBpQmpZVzFsY21GT2IyUmxMbWhoYzBGMGRISnBZblYwWlNoaEtTa3BJSHRjYmlBZ0lDQWdJR052Ym5OMElIQnZjMEYwZENBOUlEeHpkSEpwYm1jK1kyRnRaWEpoVG05a1pTNW5aWFJCZEhSeWFXSjFkR1VvSjNCdmN5Y3BPMXh1SUNBZ0lDQWdZMjl1YzNRZ2JHOXZhMEYwUVhSMElEMGdQSE4wY21sdVp6NWpZVzFsY21GT2IyUmxMbWRsZEVGMGRISnBZblYwWlNnbmJHOXZhMEYwSnlrN1hHNGdJQ0FnSUNCamIyNXpiMnhsTG14dlp5aDdJSEJ2YzBGMGRDd2diRzl2YTBGMFFYUjBJSDBwTzF4dUlDQWdJQ0FnYkdWMElHNTFiV0psY25NZ1BTQndiM05CZEhRdWMzQnNhWFFvSnl3bktTNXpiR2xqWlNnd0xDQXpLUzV0WVhBb2N5QTlQaUJ3WVhKelpVWnNiMkYwS0hNcEtUdGNiaUFnSUNBZ0lHTnZibk4wSUhCdmN5QTlJRzVsZHlCV1pXTjBiM0lvYm5WdFltVnljMXN3WFN3Z2JuVnRZbVZ5YzFzeFhTd2diblZ0WW1WeWMxc3lYU2s3WEc0Z0lDQWdJQ0J1ZFcxaVpYSnpJRDBnYkc5dmEwRjBRWFIwTG5Od2JHbDBLQ2NzSnlrdWMyeHBZMlVvTUN3Z015a3ViV0Z3S0hNZ1BUNGdjR0Z5YzJWR2JHOWhkQ2h6S1NrN1hHNGdJQ0FnSUNCamIyNXpkQ0JzYjI5clFYUWdQU0J1WlhjZ1ZtVmpkRzl5S0c1MWJXSmxjbk5iTUYwc0lHNTFiV0psY25OYk1WMHNJRzUxYldKbGNuTmJNbDBwTzF4dVhHNGdJQ0FnSUNBdkx5QmpiMjV6YjJ4bExteHZaeWg3SUhCdmN5d2diRzl2YTBGMElIMHBYRzVjYmlBZ0lDQWdJR05oYldWeVlTQTlJRzVsZHlCRFlXMWxjbUVvY0c5ekxDQnNiMjlyUVhRcE8xeHVJQ0FnSUgxY2JpQWdmU2tvWTJGdFpYSmhUbTlrWlNrN1hHNWNiaUFnWTI5dWMyOXNaUzVzYjJjb2IySnFaV04wY3lrN1hHNGdJR052Ym5OdmJHVXViRzluS0d4cFoyaDBjeWs3WEc1Y2JpQWdZMjl1YzNRZ2MyTmxibVVnUFNCN1hHNGdJQ0FnZEdocGJtZHpPaUJ2WW1wbFkzUnpMRnh1SUNBZ0lHeHBaMmgwY3pvZ2JHbG5hSFJ6TEZ4dUlDQWdJR05oYldWeVlWeHVJQ0I5TzF4dVhHNGdJR052Ym5OdmJHVXViRzluS0Nkd1lYSnpaV1FnYzJObGJtVWdPaUFuTENCelkyVnVaU2s3WEc0Z0lISmxkSFZ5YmlCelkyVnVaVHRjYm4xY2JseHVaWGh3YjNKMElHTnZibk4wSUdKaGMybGpVMk5sYm1WWVRVdzZJSE4wY21sdVp5QTlJRnh1THk4Z1pYaHdiM0owSUdaMWJtTjBhVzl1SUVSbFptRjFiSFJZVFV3b0tUb2djM1J5YVc1bklIdGNiaTh2SUNCeVpYUjFjbTRnWEc0Z0lHQmNianh6WTJWdVpUNWNiaUFnUEdOaGJXVnlZU0J3YjNNOVhDSXpMakFzSURJdU1Dd2dOQzR3WENJZ2JHOXZhMEYwUFZ3aUxURXVNQ3dnTUM0MUxDQXdMakJjSWlBdlBseHVJQ0E4YjJKcVpXTjBjejVjYmlBZ0lDQThjR3hoYm1VZ2NHOXpQVndpTUM0d0xERXVNQ3d3TGpCY0lpQnZabVp6WlhROVhDSXdMakJjSWlCemRYSm1ZV05sUFZ3aVkyaGxZMnRsY21KdllYSmtYQ0lnTHo1Y2JpQWdJQ0E4YzNCb1pYSmxJSEJ2Y3oxY0lqQXVNQ3d4TGpBc0xUQXVNalZjSWlCemFYcGxQVndpTVM0d1hDSWdjM1Z5Wm1GalpUMWNJbk5vYVc1NVhDSXZQbHh1SUNBZ0lEeHpjR2hsY21VZ2NHOXpQVndpTFRFdU1Dd3dMalVzTVM0MVhDSWdjMmw2WlQxY0lqQXVOVndpSUhOMWNtWmhZMlU5WENKemFHbHVlVndpTHo1Y2JpQWdJQ0E4YzNCb1pYSmxJSEJ2Y3oxY0lpMDFMalVzTWk0d0xDMHpMalZjSWlCemFYcGxQVndpTVM0eU5Wd2lJSE4xY21aaFkyVTlYQ0pqYUdWamEyVnlZbTloY21SY0lpOCtYRzRnSUR3dmIySnFaV04wY3o1Y2JpQWdQR3hwWjJoMGN6NWNiaUFnSUNBOGJHbG5hSFFnY0c5elBWd2lMVEl1TUN3Z01pNDFMQ0F3TGpCY0lpQmpiMnh2Y2oxY0lqQXVORGtzSURBdU1EY3NJREF1TURkY0lpQXZQaUJjYmlBZ0lDQThiR2xuYUhRZ2NHOXpQVndpTVM0MUxDQXlMalVzSURFdU5Wd2lJR052Ykc5eVBWd2lNQzR3Tnl3Z01DNHdOeXdnTUM0ME9Wd2lJQzgrSUZ4dUlDQWdJRHhzYVdkb2RDQndiM005WENJeExqVXNJREl1TlN3Z0xURXVOVndpSUdOdmJHOXlQVndpTUM0d055d2dNQzQwT1N3Z01DNHdOekZjSWlBdlBpQmNiaUFnSUNBOGJHbG5hSFFnY0c5elBWd2lNQzR3TENBekxqVXNJREF1TUZ3aUlHTnZiRzl5UFZ3aU1DNHlNU3dnTUM0eU1Td2dNQzR6TlZ3aUlDOCtJRnh1SUNBOEwyeHBaMmgwY3o1Y2Jqd3ZjMk5sYm1VK1hHNGdJR0F1ZEhKcGJTZ3BPMXh1THk5OVhHNWNiaUpkTENKemIzVnlZMlZTYjI5MElqb2lJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdmVjdG9yXzEgPSByZXF1aXJlKFwiLi92ZWN0b3JcIik7XHJcbmNsYXNzIENhbWVyYSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3MsIGxvb2tBdCkge1xyXG4gICAgICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgICAgIHZhciBkb3duID0gbmV3IHZlY3Rvcl8xLmRlZmF1bHQoMC4wLCAtMS4wLCAwLjApO1xyXG4gICAgICAgIHRoaXMuZm9yd2FyZCA9IHZlY3Rvcl8xLmRlZmF1bHQubm9ybSh2ZWN0b3JfMS5kZWZhdWx0Lm1pbnVzKGxvb2tBdCwgdGhpcy5wb3MpKTtcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gdmVjdG9yXzEuZGVmYXVsdC50aW1lcygxLjUsIHZlY3Rvcl8xLmRlZmF1bHQubm9ybSh2ZWN0b3JfMS5kZWZhdWx0LmNyb3NzKHRoaXMuZm9yd2FyZCwgZG93bikpKTtcclxuICAgICAgICB0aGlzLnVwID0gdmVjdG9yXzEuZGVmYXVsdC50aW1lcygxLjUsIHZlY3Rvcl8xLmRlZmF1bHQubm9ybSh2ZWN0b3JfMS5kZWZhdWx0LmNyb3NzKHRoaXMuZm9yd2FyZCwgdGhpcy5yaWdodCkpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBDYW1lcmE7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNhbWVyYS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBDb2xvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihyLCBnLCBiKSB7XHJcbiAgICAgICAgdGhpcy5yID0gcjtcclxuICAgICAgICB0aGlzLmcgPSBnO1xyXG4gICAgICAgIHRoaXMuYiA9IGI7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2NhbGUoaywgdikgeyByZXR1cm4gbmV3IENvbG9yKGsgKiB2LnIsIGsgKiB2LmcsIGsgKiB2LmIpOyB9XHJcbiAgICBzdGF0aWMgcGx1cyh2MSwgdjIpIHsgcmV0dXJuIG5ldyBDb2xvcih2MS5yICsgdjIuciwgdjEuZyArIHYyLmcsIHYxLmIgKyB2Mi5iKTsgfVxyXG4gICAgc3RhdGljIHRpbWVzKHYxLCB2MikgeyByZXR1cm4gbmV3IENvbG9yKHYxLnIgKiB2Mi5yLCB2MS5nICogdjIuZywgdjEuYiAqIHYyLmIpOyB9XHJcbiAgICBzdGF0aWMgdG9EcmF3aW5nQ29sb3IoYykge1xyXG4gICAgICAgIHZhciBsZWdhbGl6ZSA9IChkKSA9PiBkID4gMSA/IDEgOiBkO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHI6IE1hdGguZmxvb3IobGVnYWxpemUoYy5yKSAqIDI1NSksXHJcbiAgICAgICAgICAgIGc6IE1hdGguZmxvb3IobGVnYWxpemUoYy5nKSAqIDI1NSksXHJcbiAgICAgICAgICAgIGI6IE1hdGguZmxvb3IobGVnYWxpemUoYy5iKSAqIDI1NSlcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENvbG9yO1xyXG5Db2xvci53aGl0ZSA9IG5ldyBDb2xvcigxLjAsIDEuMCwgMS4wKTtcclxuQ29sb3IuZ3JleSA9IG5ldyBDb2xvcigwLjUsIDAuNSwgMC41KTtcclxuQ29sb3IuYmxhY2sgPSBuZXcgQ29sb3IoMC4wLCAwLjAsIDAuMCk7XHJcbkNvbG9yLmJhY2tncm91bmQgPSBDb2xvci5ibGFjaztcclxuQ29sb3IuZGVmYXVsdENvbG9yID0gQ29sb3IuYmxhY2s7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbG9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHJheXRyYWNlXzEgPSByZXF1aXJlKFwiLi9yYXl0cmFjZVwiKTtcclxuY29uc3QgY2FtZXJhXzEgPSByZXF1aXJlKFwiLi9jYW1lcmFcIik7XHJcbmV4cG9ydHMuQ2FtZXJhID0gY2FtZXJhXzEuZGVmYXVsdDtcclxuY29uc3QgdmVjdG9yXzEgPSByZXF1aXJlKFwiLi92ZWN0b3JcIik7XHJcbmV4cG9ydHMuVmVjdG9yID0gdmVjdG9yXzEuZGVmYXVsdDtcclxuY29uc3Qgc2NlbmVfMSA9IHJlcXVpcmUoXCIuL3NjZW5lXCIpO1xyXG5leHBvcnRzLmRlZmF1bHRTY2VuZSA9IHNjZW5lXzEuZGVmYXVsdFNjZW5lO1xyXG5leHBvcnRzLnNjZW5lMiA9IHNjZW5lXzEuc2NlbmUyO1xyXG5leHBvcnRzLmVtcHR5U2NlbmUgPSBzY2VuZV8xLmVtcHR5U2NlbmU7XHJcbmNvbnN0IFN1cmZhY2VzID0gcmVxdWlyZShcIi4vc3VyZmFjZVwiKTtcclxuZXhwb3J0cy5TdXJmYWNlcyA9IFN1cmZhY2VzO1xyXG5jb25zdCB0aGluZ3NfMSA9IHJlcXVpcmUoXCIuL3RoaW5nc1wiKTtcclxuZXhwb3J0cy5TcGhlcmUgPSB0aGluZ3NfMS5TcGhlcmU7XHJcbmV4cG9ydHMuUGxhbmUgPSB0aGluZ3NfMS5QbGFuZTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcmF5dHJhY2VfMS5kZWZhdWx0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCB2ZWN0b3JfMSA9IHJlcXVpcmUoXCIuL3ZlY3RvclwiKTtcclxuY29uc3QgY29sb3JfMSA9IHJlcXVpcmUoXCIuL2NvbG9yXCIpO1xyXG5jbGFzcyBSYXlUcmFjZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tYXhEZXB0aCA9IDU7XHJcbiAgICB9XHJcbiAgICBpbnRlcnNlY3Rpb25zKHJheSwgc2NlbmUpIHtcclxuICAgICAgICB2YXIgY2xvc2VzdCA9ICtJbmZpbml0eTtcclxuICAgICAgICB2YXIgY2xvc2VzdEludGVyID0gbnVsbDtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHNjZW5lLnRoaW5ncykge1xyXG4gICAgICAgICAgICB2YXIgaW50ZXIgPSBzY2VuZS50aGluZ3NbaV0uaW50ZXJzZWN0KHJheSk7XHJcbiAgICAgICAgICAgIGlmIChpbnRlciAhPSBudWxsICYmIGludGVyLmRpc3QgPCBjbG9zZXN0KSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZXN0SW50ZXIgPSBpbnRlcjtcclxuICAgICAgICAgICAgICAgIGNsb3Nlc3QgPSBpbnRlci5kaXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjbG9zZXN0SW50ZXI7XHJcbiAgICB9XHJcbiAgICB0ZXN0UmF5KHJheSwgc2NlbmUpIHtcclxuICAgICAgICB2YXIgaXNlY3QgPSB0aGlzLmludGVyc2VjdGlvbnMocmF5LCBzY2VuZSk7XHJcbiAgICAgICAgaWYgKGlzZWN0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzZWN0LmRpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0cmFjZVJheShyYXksIHNjZW5lLCBkZXB0aCkge1xyXG4gICAgICAgIHZhciBpc2VjdCA9IHRoaXMuaW50ZXJzZWN0aW9ucyhyYXksIHNjZW5lKTtcclxuICAgICAgICBpZiAoaXNlY3QgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yXzEuZGVmYXVsdC5iYWNrZ3JvdW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hhZGUoaXNlY3QsIHNjZW5lLCBkZXB0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hhZGUoaXNlY3QsIHNjZW5lLCBkZXB0aCkge1xyXG4gICAgICAgIHZhciBkID0gaXNlY3QucmF5LmRpcjtcclxuICAgICAgICB2YXIgcG9zID0gdmVjdG9yXzEuZGVmYXVsdC5wbHVzKHZlY3Rvcl8xLmRlZmF1bHQudGltZXMoaXNlY3QuZGlzdCwgZCksIGlzZWN0LnJheS5zdGFydCk7XHJcbiAgICAgICAgdmFyIG5vcm1hbCA9IGlzZWN0LnRoaW5nLm5vcm1hbChwb3MpO1xyXG4gICAgICAgIHZhciByZWZsZWN0RGlyID0gdmVjdG9yXzEuZGVmYXVsdC5taW51cyhkLCB2ZWN0b3JfMS5kZWZhdWx0LnRpbWVzKDIsIHZlY3Rvcl8xLmRlZmF1bHQudGltZXModmVjdG9yXzEuZGVmYXVsdC5kb3Qobm9ybWFsLCBkKSwgbm9ybWFsKSkpO1xyXG4gICAgICAgIHZhciBuYXR1cmFsQ29sb3IgPSBjb2xvcl8xLmRlZmF1bHQucGx1cyhjb2xvcl8xLmRlZmF1bHQuYmFja2dyb3VuZCwgdGhpcy5nZXROYXR1cmFsQ29sb3IoaXNlY3QudGhpbmcsIHBvcywgbm9ybWFsLCByZWZsZWN0RGlyLCBzY2VuZSkpO1xyXG4gICAgICAgIHZhciByZWZsZWN0ZWRDb2xvciA9IChkZXB0aCA+PSB0aGlzLm1heERlcHRoKSA/IGNvbG9yXzEuZGVmYXVsdC5ncmV5IDogdGhpcy5nZXRSZWZsZWN0aW9uQ29sb3IoaXNlY3QudGhpbmcsIHBvcywgbm9ybWFsLCByZWZsZWN0RGlyLCBzY2VuZSwgZGVwdGgpO1xyXG4gICAgICAgIHJldHVybiBjb2xvcl8xLmRlZmF1bHQucGx1cyhuYXR1cmFsQ29sb3IsIHJlZmxlY3RlZENvbG9yKTtcclxuICAgIH1cclxuICAgIGdldFJlZmxlY3Rpb25Db2xvcih0aGluZywgcG9zLCBub3JtYWwsIHJkLCBzY2VuZSwgZGVwdGgpIHtcclxuICAgICAgICByZXR1cm4gY29sb3JfMS5kZWZhdWx0LnNjYWxlKHRoaW5nLnN1cmZhY2UucmVmbGVjdChwb3MpLCB0aGlzLnRyYWNlUmF5KHsgc3RhcnQ6IHBvcywgZGlyOiByZCB9LCBzY2VuZSwgZGVwdGggKyAxKSk7XHJcbiAgICB9XHJcbiAgICBnZXROYXR1cmFsQ29sb3IodGhpbmcsIHBvcywgbm9ybSwgcmQsIHNjZW5lKSB7XHJcbiAgICAgICAgdmFyIGFkZExpZ2h0ID0gKGNvbCwgbGlnaHQpID0+IHtcclxuICAgICAgICAgICAgdmFyIGxkaXMgPSB2ZWN0b3JfMS5kZWZhdWx0Lm1pbnVzKGxpZ2h0LnBvcywgcG9zKTtcclxuICAgICAgICAgICAgdmFyIGxpdmVjID0gdmVjdG9yXzEuZGVmYXVsdC5ub3JtKGxkaXMpO1xyXG4gICAgICAgICAgICB2YXIgbmVhdElzZWN0ID0gdGhpcy50ZXN0UmF5KHsgc3RhcnQ6IHBvcywgZGlyOiBsaXZlYyB9LCBzY2VuZSk7XHJcbiAgICAgICAgICAgIHZhciBpc0luU2hhZG93ID0gKG5lYXRJc2VjdCA9PT0gbnVsbCkgPyBmYWxzZSA6IChuZWF0SXNlY3QgPD0gdmVjdG9yXzEuZGVmYXVsdC5tYWcobGRpcykpO1xyXG4gICAgICAgICAgICBpZiAoaXNJblNoYWRvdykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbGx1bSA9IHZlY3Rvcl8xLmRlZmF1bHQuZG90KGxpdmVjLCBub3JtKTtcclxuICAgICAgICAgICAgICAgIHZhciBsY29sb3IgPSAoaWxsdW0gPiAwKSA/IGNvbG9yXzEuZGVmYXVsdC5zY2FsZShpbGx1bSwgbGlnaHQuY29sb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBjb2xvcl8xLmRlZmF1bHQuZGVmYXVsdENvbG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNwZWN1bGFyID0gdmVjdG9yXzEuZGVmYXVsdC5kb3QobGl2ZWMsIHZlY3Rvcl8xLmRlZmF1bHQubm9ybShyZCkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjb2xvciA9IChzcGVjdWxhciA+IDApID8gY29sb3JfMS5kZWZhdWx0LnNjYWxlKE1hdGgucG93KHNwZWN1bGFyLCB0aGluZy5zdXJmYWNlLnJvdWdobmVzcyksIGxpZ2h0LmNvbG9yKVxyXG4gICAgICAgICAgICAgICAgICAgIDogY29sb3JfMS5kZWZhdWx0LmRlZmF1bHRDb2xvcjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvcl8xLmRlZmF1bHQucGx1cyhjb2wsIGNvbG9yXzEuZGVmYXVsdC5wbHVzKGNvbG9yXzEuZGVmYXVsdC50aW1lcyh0aGluZy5zdXJmYWNlLmRpZmZ1c2UocG9zKSwgbGNvbG9yKSwgY29sb3JfMS5kZWZhdWx0LnRpbWVzKHRoaW5nLnN1cmZhY2Uuc3BlY3VsYXIocG9zKSwgc2NvbG9yKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gc2NlbmUubGlnaHRzLnJlZHVjZShhZGRMaWdodCwgY29sb3JfMS5kZWZhdWx0LmRlZmF1bHRDb2xvcik7XHJcbiAgICB9XHJcbiAgICByZW5kZXJUb0ltYWdlKHNjZW5lLCBpbWFnZSkge1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gaW1hZ2Uud2lkdGg7XHJcbiAgICAgICAgdmFyIGdldFBvaW50ID0gZnVuY3Rpb24gKHgsIHksIGNhbWVyYSkge1xyXG4gICAgICAgICAgICB2YXIgcmVjZW50ZXJYID0gZnVuY3Rpb24gKHgpIHsgcmV0dXJuICh4IC0gKHdpZHRoIC8gMi4wKSkgLyAyLjAgLyB3aWR0aDsgfTtcclxuICAgICAgICAgICAgdmFyIHJlY2VudGVyWSA9IGZ1bmN0aW9uICh5KSB7IHJldHVybiAtKHkgLSAoaGVpZ2h0IC8gMi4wKSkgLyAyLjAgLyBoZWlnaHQ7IH07XHJcbiAgICAgICAgICAgIHJldHVybiB2ZWN0b3JfMS5kZWZhdWx0Lm5vcm0odmVjdG9yXzEuZGVmYXVsdC5wbHVzKGNhbWVyYS5mb3J3YXJkLCB2ZWN0b3JfMS5kZWZhdWx0LnBsdXModmVjdG9yXzEuZGVmYXVsdC50aW1lcyhyZWNlbnRlclgoeCksIGNhbWVyYS5yaWdodCksIHZlY3Rvcl8xLmRlZmF1bHQudGltZXMocmVjZW50ZXJZKHkpLCBjYW1lcmEudXApKSkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb2xvciA9IHRoaXMudHJhY2VSYXkoeyBzdGFydDogc2NlbmUuY2FtZXJhLnBvcywgZGlyOiBnZXRQb2ludCh4LCB5LCBzY2VuZS5jYW1lcmEpIH0sIHNjZW5lLCAwKTtcclxuICAgICAgICAgICAgICAgIHZhciBjID0gY29sb3JfMS5kZWZhdWx0LnRvRHJhd2luZ0NvbG9yKGNvbG9yKTtcclxuICAgICAgICAgICAgICAgIGltYWdlLmRhdGFbKCh5ICogKHdpZHRoICogNCkpICsgKHggKiA0KSldID0gYy5yO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UuZGF0YVsoKHkgKiAod2lkdGggKiA0KSkgKyAoeCAqIDQpKSArIDFdID0gYy5nO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UuZGF0YVsoKHkgKiAod2lkdGggKiA0KSkgKyAoeCAqIDQpKSArIDJdID0gYy5iO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UuZGF0YVsoKHkgKiAod2lkdGggKiA0KSkgKyAoeCAqIDQpKSArIDNdID0gMjU1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFJheVRyYWNlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmF5dHJhY2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdmVjdG9yXzEgPSByZXF1aXJlKFwiLi92ZWN0b3JcIik7XHJcbmNvbnN0IGNvbG9yXzEgPSByZXF1aXJlKFwiLi9jb2xvclwiKTtcclxuY29uc3QgdGhpbmdzXzEgPSByZXF1aXJlKFwiLi90aGluZ3NcIik7XHJcbmNvbnN0IGNhbWVyYV8xID0gcmVxdWlyZShcIi4vY2FtZXJhXCIpO1xyXG5jb25zdCBTdXJmYWNlcyA9IHJlcXVpcmUoXCIuL3N1cmZhY2VcIik7XHJcbmZ1bmN0aW9uIGRlZmF1bHRTY2VuZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGhpbmdzOiBbXHJcbiAgICAgICAgICAgIG5ldyB0aGluZ3NfMS5QbGFuZShuZXcgdmVjdG9yXzEuZGVmYXVsdCgwLjAsIDEuMCwgMC4wKSwgMC4wLCBTdXJmYWNlcy5jaGVja2VyYm9hcmQpLFxyXG4gICAgICAgICAgICBuZXcgdGhpbmdzXzEuU3BoZXJlKG5ldyB2ZWN0b3JfMS5kZWZhdWx0KDAuMCwgMS4wLCAtMC4yNSksIDEuMCwgU3VyZmFjZXMuc2hpbnkpLFxyXG4gICAgICAgICAgICBuZXcgdGhpbmdzXzEuU3BoZXJlKG5ldyB2ZWN0b3JfMS5kZWZhdWx0KC0xLjAsIDAuNSwgMS41KSwgMC41LCBTdXJmYWNlcy5zaGlueSlcclxuICAgICAgICBdLFxyXG4gICAgICAgIGxpZ2h0czogW1xyXG4gICAgICAgICAgICB7IHBvczogbmV3IHZlY3Rvcl8xLmRlZmF1bHQoLTIuMCwgMi41LCAwLjApLCBjb2xvcjogbmV3IGNvbG9yXzEuZGVmYXVsdCgwLjQ5LCAwLjA3LCAwLjA3KSB9LFxyXG4gICAgICAgICAgICB7IHBvczogbmV3IHZlY3Rvcl8xLmRlZmF1bHQoMS41LCAyLjUsIDEuNSksIGNvbG9yOiBuZXcgY29sb3JfMS5kZWZhdWx0KDAuMDcsIDAuMDcsIDAuNDkpIH0sXHJcbiAgICAgICAgICAgIHsgcG9zOiBuZXcgdmVjdG9yXzEuZGVmYXVsdCgxLjUsIDIuNSwgLTEuNSksIGNvbG9yOiBuZXcgY29sb3JfMS5kZWZhdWx0KDAuMDcsIDAuNDksIDAuMDcxKSB9LFxyXG4gICAgICAgICAgICB7IHBvczogbmV3IHZlY3Rvcl8xLmRlZmF1bHQoMC4wLCAzLjUsIDAuMCksIGNvbG9yOiBuZXcgY29sb3JfMS5kZWZhdWx0KDAuMjEsIDAuMjEsIDAuMzUpIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGNhbWVyYTogbmV3IGNhbWVyYV8xLmRlZmF1bHQobmV3IHZlY3Rvcl8xLmRlZmF1bHQoMy4wLCAyLjAsIDQuMCksIG5ldyB2ZWN0b3JfMS5kZWZhdWx0KC0xLjAsIDAuNSwgMC4wKSlcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0U2NlbmUgPSBkZWZhdWx0U2NlbmU7XHJcbmZ1bmN0aW9uIHNjZW5lMigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGhpbmdzOiBbXHJcbiAgICAgICAgICAgIG5ldyB0aGluZ3NfMS5QbGFuZShuZXcgdmVjdG9yXzEuZGVmYXVsdCgwLjAsIDEuMCwgMC4wKSwgMC4wLCBTdXJmYWNlcy5jaGVja2VyYm9hcmQpLFxyXG4gICAgICAgICAgICBuZXcgdGhpbmdzXzEuU3BoZXJlKG5ldyB2ZWN0b3JfMS5kZWZhdWx0KDAuMCwgMS4wLCAtMC4yNSksIDEuMCwgU3VyZmFjZXMuc2hpbnkpLFxyXG4gICAgICAgICAgICBuZXcgdGhpbmdzXzEuU3BoZXJlKG5ldyB2ZWN0b3JfMS5kZWZhdWx0KC0xLjAsIDAuNSwgMS41KSwgMC41LCBTdXJmYWNlcy5zaGlueSksXHJcbiAgICAgICAgICAgIG5ldyB0aGluZ3NfMS5TcGhlcmUobmV3IHZlY3Rvcl8xLmRlZmF1bHQoLTUuNSwgMi4wLCAtMy41KSwgMS4yNSwgU3VyZmFjZXMuY2hlY2tlcmJvYXJkKVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGlnaHRzOiBbXHJcbiAgICAgICAgICAgIHsgcG9zOiBuZXcgdmVjdG9yXzEuZGVmYXVsdCgtMi4wLCAyLjUsIDAuMCksIGNvbG9yOiBuZXcgY29sb3JfMS5kZWZhdWx0KDAuNDksIDAuMDcsIDAuMDcpIH0sXHJcbiAgICAgICAgICAgIHsgcG9zOiBuZXcgdmVjdG9yXzEuZGVmYXVsdCgxLjUsIDIuNSwgMS41KSwgY29sb3I6IG5ldyBjb2xvcl8xLmRlZmF1bHQoMC4wNywgMC4wNywgMC40OSkgfSxcclxuICAgICAgICAgICAgeyBwb3M6IG5ldyB2ZWN0b3JfMS5kZWZhdWx0KDEuNSwgMi41LCAtMS41KSwgY29sb3I6IG5ldyBjb2xvcl8xLmRlZmF1bHQoMC4wNywgMC40OSwgMC4wNzEpIH0sXHJcbiAgICAgICAgICAgIHsgcG9zOiBuZXcgdmVjdG9yXzEuZGVmYXVsdCgwLjAsIDMuNSwgMC4wKSwgY29sb3I6IG5ldyBjb2xvcl8xLmRlZmF1bHQoMC4yMSwgMC4yMSwgMC4zNSkgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY2FtZXJhOiBuZXcgY2FtZXJhXzEuZGVmYXVsdChuZXcgdmVjdG9yXzEuZGVmYXVsdCgzLjAsIDIuMCwgNC4wKSwgbmV3IHZlY3Rvcl8xLmRlZmF1bHQoLTEuMCwgMC41LCAwLjApKVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnNjZW5lMiA9IHNjZW5lMjtcclxuZnVuY3Rpb24gZW1wdHlTY2VuZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGhpbmdzOiBbXSxcclxuICAgICAgICBsaWdodHM6IFtdLFxyXG4gICAgICAgIGNhbWVyYTogbmV3IGNhbWVyYV8xLmRlZmF1bHQobmV3IHZlY3Rvcl8xLmRlZmF1bHQoMy4wLCAyLjAsIDQuMCksIG5ldyB2ZWN0b3JfMS5kZWZhdWx0KC0xLjAsIDAuNSwgMC4wKSlcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5lbXB0eVNjZW5lID0gZW1wdHlTY2VuZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NlbmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY29sb3JfMSA9IHJlcXVpcmUoXCIuL2NvbG9yXCIpO1xyXG5leHBvcnRzLnNoaW55ID0ge1xyXG4gICAgZGlmZnVzZTogZnVuY3Rpb24gKHBvcykgeyByZXR1cm4gY29sb3JfMS5kZWZhdWx0LndoaXRlOyB9LFxyXG4gICAgc3BlY3VsYXI6IGZ1bmN0aW9uIChwb3MpIHsgcmV0dXJuIGNvbG9yXzEuZGVmYXVsdC5ncmV5OyB9LFxyXG4gICAgcmVmbGVjdDogZnVuY3Rpb24gKHBvcykgeyByZXR1cm4gMC43OyB9LFxyXG4gICAgcm91Z2huZXNzOiAyNTBcclxufTtcclxuZXhwb3J0cy5jaGVja2VyYm9hcmQgPSB7XHJcbiAgICBkaWZmdXNlOiBmdW5jdGlvbiAocG9zKSB7XHJcbiAgICAgICAgaWYgKChNYXRoLmZsb29yKHBvcy56KSArIE1hdGguZmxvb3IocG9zLngpKSAlIDIgIT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yXzEuZGVmYXVsdC53aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvcl8xLmRlZmF1bHQuYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNwZWN1bGFyOiBmdW5jdGlvbiAocG9zKSB7IHJldHVybiBjb2xvcl8xLmRlZmF1bHQud2hpdGU7IH0sXHJcbiAgICByZWZsZWN0OiBmdW5jdGlvbiAocG9zKSB7XHJcbiAgICAgICAgaWYgKChNYXRoLmZsb29yKHBvcy56KSArIE1hdGguZmxvb3IocG9zLngpKSAlIDIgIT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDAuMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwLjc7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJvdWdobmVzczogMTUwXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1cmZhY2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdmVjdG9yXzEgPSByZXF1aXJlKFwiLi92ZWN0b3JcIik7XHJcbmNsYXNzIFNwaGVyZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cywgc3VyZmFjZSkge1xyXG4gICAgICAgIHRoaXMuY2VudGVyID0gY2VudGVyO1xyXG4gICAgICAgIHRoaXMuc3VyZmFjZSA9IHN1cmZhY2U7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMyID0gcmFkaXVzICogcmFkaXVzO1xyXG4gICAgfVxyXG4gICAgbm9ybWFsKHBvcykgeyByZXR1cm4gdmVjdG9yXzEuZGVmYXVsdC5ub3JtKHZlY3Rvcl8xLmRlZmF1bHQubWludXMocG9zLCB0aGlzLmNlbnRlcikpOyB9XHJcbiAgICBpbnRlcnNlY3QocmF5KSB7XHJcbiAgICAgICAgdmFyIGVvID0gdmVjdG9yXzEuZGVmYXVsdC5taW51cyh0aGlzLmNlbnRlciwgcmF5LnN0YXJ0KTtcclxuICAgICAgICB2YXIgdiA9IHZlY3Rvcl8xLmRlZmF1bHQuZG90KGVvLCByYXkuZGlyKTtcclxuICAgICAgICB2YXIgZGlzdCA9IDA7XHJcbiAgICAgICAgaWYgKHYgPj0gMCkge1xyXG4gICAgICAgICAgICB2YXIgZGlzYyA9IHRoaXMucmFkaXVzMiAtICh2ZWN0b3JfMS5kZWZhdWx0LmRvdChlbywgZW8pIC0gdiAqIHYpO1xyXG4gICAgICAgICAgICBpZiAoZGlzYyA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBkaXN0ID0gdiAtIE1hdGguc3FydChkaXNjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGlzdCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHRoaW5nOiB0aGlzLCByYXk6IHJheSwgZGlzdDogZGlzdCB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLlNwaGVyZSA9IFNwaGVyZTtcclxuY2xhc3MgUGxhbmUge1xyXG4gICAgY29uc3RydWN0b3Iobm9ybSwgb2Zmc2V0LCBzdXJmYWNlKSB7XHJcbiAgICAgICAgdGhpcy5zdXJmYWNlID0gc3VyZmFjZTtcclxuICAgICAgICB0aGlzLm5vcm1hbCA9IGZ1bmN0aW9uIChwb3MpIHsgcmV0dXJuIG5vcm07IH07XHJcbiAgICAgICAgdGhpcy5pbnRlcnNlY3QgPSBmdW5jdGlvbiAocmF5KSB7XHJcbiAgICAgICAgICAgIHZhciBkZW5vbSA9IHZlY3Rvcl8xLmRlZmF1bHQuZG90KG5vcm0sIHJheS5kaXIpO1xyXG4gICAgICAgICAgICBpZiAoZGVub20gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBkaXN0ID0gKHZlY3Rvcl8xLmRlZmF1bHQuZG90KG5vcm0sIHJheS5zdGFydCkgKyBvZmZzZXQpIC8gKC1kZW5vbSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0aGluZzogdGhpcywgcmF5OiByYXksIGRpc3Q6IGRpc3QgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5QbGFuZSA9IFBsYW5lO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD10aGluZ3MuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgVmVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHopIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy56ID0gejtcclxuICAgIH1cclxuICAgIHN0YXRpYyB0aW1lcyhrLCB2KSB7IHJldHVybiBuZXcgVmVjdG9yKGsgKiB2LngsIGsgKiB2LnksIGsgKiB2LnopOyB9XHJcbiAgICBzdGF0aWMgbWludXModjEsIHYyKSB7IHJldHVybiBuZXcgVmVjdG9yKHYxLnggLSB2Mi54LCB2MS55IC0gdjIueSwgdjEueiAtIHYyLnopOyB9XHJcbiAgICBzdGF0aWMgcGx1cyh2MSwgdjIpIHsgcmV0dXJuIG5ldyBWZWN0b3IodjEueCArIHYyLngsIHYxLnkgKyB2Mi55LCB2MS56ICsgdjIueik7IH1cclxuICAgIHN0YXRpYyBkb3QodjEsIHYyKSB7IHJldHVybiB2MS54ICogdjIueCArIHYxLnkgKiB2Mi55ICsgdjEueiAqIHYyLno7IH1cclxuICAgIHN0YXRpYyBtYWcodikgeyByZXR1cm4gTWF0aC5zcXJ0KHYueCAqIHYueCArIHYueSAqIHYueSArIHYueiAqIHYueik7IH1cclxuICAgIHN0YXRpYyBub3JtKHYpIHtcclxuICAgICAgICB2YXIgbWFnID0gVmVjdG9yLm1hZyh2KTtcclxuICAgICAgICB2YXIgZGl2ID0gKG1hZyA9PT0gMCkgPyBJbmZpbml0eSA6IDEuMCAvIG1hZztcclxuICAgICAgICByZXR1cm4gVmVjdG9yLnRpbWVzKGRpdiwgdik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY3Jvc3ModjEsIHYyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodjEueSAqIHYyLnogLSB2MS56ICogdjIueSwgdjEueiAqIHYyLnggLSB2MS54ICogdjIueiwgdjEueCAqIHYyLnkgLSB2MS55ICogdjIueCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gVmVjdG9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD12ZWN0b3IuanMubWFwIiwiaW1wb3J0IFJheVRyYWNlciwgeyBkZWZhdWx0U2NlbmUsIGVtcHR5U2NlbmUgfSBmcm9tICdAcHl0aG9uMzYvcmF5dHJhY2UnO1xyXG5pbXBvcnQgeyBQYXJzZSwgYmFzaWNTY2VuZVhNTCB9IGZyb20gJ0BweXRob24zNi9zY2VuZVhNTCc7XHJcbi8vU2NlbmUgaW5wdXQgd2FzIGF0dGVtcHQgdG8gcHJvdmlkZSB0ZXh0YXJlYSB3aXRoIGxpdmUgcmF5dHJhY2UgdXBkYXRlcyBvbiB1c2VyIGlucHV0LlxyXG4vL0R1ZSB0byBUeXBlcyBsb3N0IG9uIGNvbXBpbGUsIGFsdGVybmF0aXZlIHNvbHV0aW9uIG5lZWRlZC5cclxuZnVuY3Rpb24gb25Mb2FkKCkge1xyXG4gICAgY29uc3QgY2FudiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmF5LWNhbnZhc1wiKTtcclxuICAgIGNvbnN0IHNjZW5lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmF5LWlucHV0Jyk7XHJcbiAgICBjb25zdCBzY2VuZVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JheS1zY2VuZScpO1xyXG4gICAgY29uc3QgcmVzU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmF5LXJlcycpO1xyXG4gICAgY29uc3QgcHJvY2Vzc29yU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmF5LXByb2Nlc3NvcicpO1xyXG4gICAgY29uc3QgZWxhcHNlZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyYXktZWxhcHNlZCcpO1xyXG4gICAgY29uc3QgcmVuZGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JheS1yZW5kZXInKTtcclxuICAgIGNvbnN0IHJheVRyYWNlciA9IG5ldyBSYXlUcmFjZXIoKTtcclxuICAgIHNjZW5lSW5wdXQudmFsdWUgPSBiYXNpY1NjZW5lWE1MO1xyXG4gICAgbGV0IGN0eE1heWJlID0gY2Fudi5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBpZiAoY3R4TWF5YmUgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBjdHggPSBjdHhNYXliZTtcclxuICAgIC8vIFVJIHZhcmlibGVzLCBjaGFuZ2UgZHVlIHRvIHVzZXIgZXZlbnRzXHJcbiAgICBsZXQgc2l6ZTtcclxuICAgIGxldCBpbWc7XHJcbiAgICBsZXQgc2NlbmUgPSBkZWZhdWx0U2NlbmUoKTtcclxuICAgIGxldCByZW5ld1JheXRyYWNlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgcmF5VHJhY2VyLnJlbmRlclRvSW1hZ2Uoc2NlbmUsIGltZyk7XHJcbiAgICAgICAgY29uc3QgZW5kID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgb3V0cHV0RWxhcHNlZFRpbWUoZW5kIC0gc3RhcnQpO1xyXG4gICAgfTtcclxuICAgIGxldCBvdXRwdXRFbGFwc2VkVGltZSA9IChuKSA9PiB7XHJcbiAgICAgICAgZWxhcHNlZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdFbGFwc2VkIDogJyArIChuIC8gMTAwMC4wKS50b0ZpeGVkKDIpLnRvU3RyaW5nKCkgKyAncyc7XHJcbiAgICAgICAgWydidG4tcHJpbWFyeScsICdidG4tc3VjY2VzcycsICdidG4td2FybmluZycsICdidG4tZGFuZ2VyJ11cclxuICAgICAgICAgICAgLmZvckVhY2goY2xhc3NOYW1lID0+IHsgZWxhcHNlZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH0pO1xyXG4gICAgICAgIGlmIChuID4gMjAwMCkge1xyXG4gICAgICAgICAgICBlbGFwc2VkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1kYW5nZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobiA+IDUwMCkge1xyXG4gICAgICAgICAgICBlbGFwc2VkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi13YXJuaW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbGFwc2VkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1zdWNjZXNzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlc2l6ZUNhbnZhcyA9ICgpID0+IGN0eC5jYW52YXMuaGVpZ2h0ID0gY3R4LmNhbnZhcy53aWR0aDtcclxuICAgIGNvbnN0IHJlc2l6ZVRleHRhcmVhID0gKCkgPT4gc2NlbmVJbnB1dC5zdHlsZS5oZWlnaHQgPSBjdHguY2FudmFzLmNsaWVudEhlaWdodC50b1N0cmluZygpICsgJ3B4JztcclxuICAgIGxldCBjaGFuZ2VSZW5kZXJTaXplID0gKCkgPT4ge1xyXG4gICAgICAgIHNpemUgPSBwYXJzZUludChyZXNTZWxlY3Rvci52YWx1ZSk7XHJcbiAgICAgICAgaW1nID0gY3R4LmNyZWF0ZUltYWdlRGF0YShzaXplLCBzaXplKTtcclxuICAgIH07XHJcbiAgICBsZXQgb3V0cHV0UmVuZGVySW1hZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgY3JlYXRlSW1hZ2VCaXRtYXAoaW1nLCAwLCAwLCBzaXplLCBzaXplKVxyXG4gICAgICAgICAgICAudGhlbihpbWFnZUJpdG1hcCA9PiBjdHguZHJhd0ltYWdlKGltYWdlQml0bWFwLCAwLCAwLCBjYW52LndpZHRoLCBjYW52LmhlaWdodCkpO1xyXG4gICAgfTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgcmVzaXplQ2FudmFzKCk7XHJcbiAgICAgICAgcmVzaXplVGV4dGFyZWEoKTtcclxuICAgICAgICBvdXRwdXRSZW5kZXJJbWFnZSgpO1xyXG4gICAgfSk7XHJcbiAgICBzY2VuZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAvLyBzY2VuZSA9IFtlbXB0eVNjZW5lLCBkZWZhdWx0U2NlbmUsIHNjZW5lMl1bcGFyc2VJbnQoc2NlbmVTZWxlY3Rvci52YWx1ZSldKCk7IFxyXG4gICAgICAgIHNjZW5lID0gZGVmYXVsdFNjZW5lKCk7XHJcbiAgICAgICAgcmVuZXdSYXl0cmFjZSgpO1xyXG4gICAgICAgIG91dHB1dFJlbmRlckltYWdlKCk7XHJcbiAgICB9KTtcclxuICAgIHJlc1NlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBjaGFuZ2VSZW5kZXJTaXplKCk7XHJcbiAgICAgICAgcmVuZXdSYXl0cmFjZSgpO1xyXG4gICAgICAgIG91dHB1dFJlbmRlckltYWdlKCk7XHJcbiAgICB9KTtcclxuICAgIHByb2Nlc3NvclNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBwcm9jZXNzb3JTZWxlY3Rvci52YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgcmVuZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3RvciB2YWx1ZTonLCBwcm9jZXNzb3JTZWxlY3Rvci52YWx1ZSk7XHJcbiAgICAgICAgbGV0IHByb2Nlc3NvciA9IHByb2Nlc3NvcnNbcHJvY2Vzc29yU2VsZWN0b3IudmFsdWVdO1xyXG4gICAgICAgIGlmIChwcm9jZXNzb3IpIHtcclxuICAgICAgICAgICAgcHJvY2Vzc29yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSW52YWxpZCBwcm9jZXNzb3Igc2VsZWN0IHZhbHVlLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY2hhbmdlUmVuZGVyU2l6ZSgpO1xyXG4gICAgcmVuZXdSYXl0cmFjZSgpO1xyXG4gICAgcmVzaXplQ2FudmFzKCk7XHJcbiAgICByZXNpemVUZXh0YXJlYSgpO1xyXG4gICAgb3V0cHV0UmVuZGVySW1hZ2UoKTtcclxuICAgIGNvbnN0IHByb2Nlc3NvcnMgPSB7XHJcbiAgICAgICAgJ2dvbGFuZy1iYWNrJzogKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgeG1sID0gc2NlbmVJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjU2MDAvZ2VuX3htbC5wbmc/XCIgKyBcInhtbC1zY2VuZT1cIiArIGVuY29kZVVSSSh4bWwpLCB7XHJcbiAgICAgICAgICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiYWNjZXB0XCI6IFwidGV4dC9odG1sLGFwcGxpY2F0aW9uL3hodG1sK3htbCxhcHBsaWNhdGlvbi94bWw7cT0wLjksaW1hZ2Uvd2VicCxpbWFnZS9hcG5nLCovKjtxPTAuOFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYWNjZXB0LWxhbmd1YWdlXCI6IFwiZW4tVVMsZW47cT0wLjlcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcInJlZmVycmVyUG9saWN5XCI6IFwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIixcclxuICAgICAgICAgICAgICAgIFwiYm9keVwiOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgXCJtZXRob2RcIjogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgIFwibW9kZVwiOiBcImNvcnNcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5ibG9iKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihibG9iID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIub25lcnJvciA9IHJlamVjdDtcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odiA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgaS5zcmMgPSB2O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaS5zcmMpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coeyBlcnIgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3R5cGVzY3JpcHQtYmFjayc6ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHhtbCA9IHNjZW5lSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDoxMjM0L2dlbi5ibXA/XCIgKyBcInhtbC1zY2VuZT1cIiArIGVuY29kZVVSSSh4bWwpLCB7XHJcbiAgICAgICAgICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiYWNjZXB0XCI6IFwidGV4dC9odG1sLGFwcGxpY2F0aW9uL3hodG1sK3htbCxhcHBsaWNhdGlvbi94bWw7cT0wLjksaW1hZ2Uvd2VicCxpbWFnZS9hcG5nLCovKjtxPTAuOFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYWNjZXB0LWxhbmd1YWdlXCI6IFwiZW4tVVMsZW47cT0wLjlcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcInJlZmVycmVyUG9saWN5XCI6IFwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIixcclxuICAgICAgICAgICAgICAgIFwiYm9keVwiOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgXCJtZXRob2RcIjogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgIFwibW9kZVwiOiBcImNvcnNcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5ibG9iKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihibG9iID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIub25lcnJvciA9IHJlamVjdDtcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odiA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgaS5zcmMgPSB2O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaS5zcmMpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coeyBlcnIgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3R5cGVzY3JpcHQtZnJvbnQnOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0eXBlc2NyaXB0LWZyb250Jyk7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBQYXJzZShzY2VuZUlucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBYTUwgcGFyc2luZzonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgc2NlbmUgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICByZW5ld1JheXRyYWNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzY2VuZSA9IGVtcHR5U2NlbmUoKTtcclxuICAgICAgICAgICAgICAgIHJlbmV3UmF5dHJhY2UoKTtcclxuICAgICAgICAgICAgICAgIFsnYnRuLXByaW1hcnknLCAnYnRuLXN1Y2Nlc3MnLCAnYnRuLXdhcm5pbmcnLCAnYnRuLWRhbmdlciddXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goY2xhc3NOYW1lID0+IHsgZWxhcHNlZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgZWxhcHNlZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgICAgICBlbGFwc2VkQnV0dG9uLnRleHRDb250ZW50ID0gJ0ludmFsaWQgWE1MJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXRwdXRSZW5kZXJJbWFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpO1xyXG5jb25zdCBnb2JhY2tQb3N0U3RyaW5nID0gYFxyXG5yZXM9NTEyJnhtbC1zY2VuZT0lM0NzY2VuZSUzRSUwRCUwQSsrJTNDY2FtZXJhK3BvcyUzRCUyMjMuMCUyQysyLjAlMkMrNC4wJTIyK2xvb2tBdCUzRCUyMi0xLjAlMkMrMC41JTJDKzAuMCUyMislMkYlM0UlMEQlMEErKyUzQ29iamVjdHMlM0UlMEQlMEErKysrJTNDcGxhbmUrbm9ybWFsJTNEJTIyMC4wJTJDMS4wJTJDMC4wJTIyK29mZnNldCUzRCUyMjAuMCUyMitzdXJmYWNlJTNEJTIyY2hlY2tlcmJvYXJkJTIyKyUyRiUzRSUwRCUwQSsrKyslM0NzcGhlcmUrcG9zJTNEJTIyMC4wJTJDMS4wJTJDLTAuMjUlMjIrc2l6ZSUzRCUyMjEuMCUyMitzdXJmYWNlJTNEJTIyc2hpbnklMjIlMkYlM0UlMEQlMEErKysrJTNDc3BoZXJlK3BvcyUzRCUyMi0xLjAlMkMwLjUlMkMxLjUlMjIrc2l6ZSUzRCUyMjAuNSUyMitzdXJmYWNlJTNEJTIyc2hpbnklMjIlMkYlM0UlMEQlMEErKysrJTNDc3BoZXJlK3BvcyUzRCUyMi01LjUlMkMyLjAlMkMtMy41JTIyK3NpemUlM0QlMjIxLjI1JTIyK3N1cmZhY2UlM0QlMjJjaGVja2VyYm9hcmQlMjIlMkYlM0UlMEQlMEErKyUzQyUyRm9iamVjdHMlM0UlMEQlMEErKyUzQ2xpZ2h0cyUzRSUwRCUwQSsrKyslM0NsaWdodCtwb3MlM0QlMjItMi4wJTJDKzIuNSUyQyswLjAlMjIrY29sb3IlM0QlMjIwLjQ5JTJDKzAuMDclMkMrMC4wNyUyMislMkYlM0UrJTBEJTBBKysrKyUzQ2xpZ2h0K3BvcyUzRCUyMjEuNSUyQysyLjUlMkMrMS41JTIyK2NvbG9yJTNEJTIyMC4wNyUyQyswLjA3JTJDKzAuNDklMjIrJTJGJTNFKyUwRCUwQSsrKyslM0NsaWdodCtwb3MlM0QlMjIxLjUlMkMrMi41JTJDKy0xLjUlMjIrY29sb3IlM0QlMjIwLjA3JTJDKzAuNDklMkMrMC4wNzElMjIrJTJGJTNFKyUwRCUwQSsrKyslM0NsaWdodCtwb3MlM0QlMjIwLjAlMkMrMy41JTJDKzAuMCUyMitjb2xvciUzRCUyMjAuMjElMkMrMC4yMSUyQyswLjM1JTIyKyUyRiUzRSslMEQlMEErKyUzQyUyRmxpZ2h0cyUzRSUwRCUwQSUzQyUyRnNjZW5lJTNFXHJcbmAudHJpbSgpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZWEJ3TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwyRndjQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeFBRVUZQTEZOQlFWTXNSVUZCUlN4RlFVRlRMRmxCUVZrc1JVRkJSU3hWUVVGVkxFVkJRVVVzVFVGQlRTeHZRa0ZCYjBJc1EwRkJRenRCUVVOb1JpeFBRVUZQTEVWQlFVVXNTMEZCU3l4RlFVRkZMR0ZCUVdFc1JVRkJSU3hOUVVGTkxHOUNRVUZ2UWl4RFFVRkRPMEZCUlRGRUxIVkdRVUYxUmp0QlFVTjJSaXcwUkVGQk5FUTdRVUZETlVRc1UwRkJVeXhOUVVGTk8wbEJRMklzVFVGQlRTeEpRVUZKTEVkQlFYTkNMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTTdTVUZEZEVVc1RVRkJUU3hWUVVGVkxFZEJRWGRDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03U1VGRk4wVXNUVUZCVFN4aFFVRmhMRWRCUVhOQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1NVRkRPVVVzVFVGQlRTeFhRVUZYTEVkQlFYTkNMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdTVUZETVVVc1RVRkJUU3hwUWtGQmFVSXNSMEZCYzBJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGRE8wbEJSWFJHTEUxQlFVMHNZVUZCWVN4SFFVRnhRaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMGxCUXk5RkxFMUJRVTBzV1VGQldTeEhRVUZ4UWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzBsQlJUZEZMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzVTBGQlV5eEZRVUZGTEVOQlFVTTdTVUZGYkVNc1ZVRkJWU3hEUVVGRExFdEJRVXNzUjBGQlJ5eGhRVUZoTEVOQlFVTTdTVUZGYWtNc1NVRkJTU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOeVF5eEpRVUZKTEZGQlFWRXNTVUZCU1N4SlFVRkpMRVZCUVVVN1VVRkJSU3hQUVVGUE8wdEJRVVU3U1VGRmFrTXNTVUZCU1N4SFFVRkhMRWRCUVRaQ0xGRkJRVkVzUTBGQlF6dEpRVVUzUXl4NVEwRkJlVU03U1VGRGVrTXNTVUZCU1N4SlFVRlpMRU5CUVVNN1NVRkRha0lzU1VGQlNTeEhRVUZqTEVOQlFVTTdTVUZEYmtJc1NVRkJTU3hMUVVGTExFZEJRVlVzV1VGQldTeEZRVUZGTEVOQlFVTTdTVUZIYkVNc1NVRkJTU3hoUVVGaExFZEJRVWNzUjBGQlJ5eEZRVUZGTzFGQlEzWkNMRTFCUVUwc1MwRkJTeXhIUVVGSExGZEJRVmNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTm9ReXhUUVVGVExFTkJRVU1zWVVGQllTeERRVUZETEV0QlFVc3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOd1F5eE5RVUZOTEVkQlFVY3NSMEZCUnl4WFFVRlhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRE9VSXNhVUpCUVdsQ0xFTkJRVU1zUjBGQlJ5eEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJwRExFTkJRVU1zUTBGQlF6dEpRVVZHTEVsQlFVa3NhVUpCUVdsQ0xFZEJRVWNzUTBGQlF5eERRVUZUTEVWQlFVVXNSVUZCUlR0UlFVTndReXhoUVVGaExFTkJRVU1zVjBGQlZ5eEhRVUZITEZsQlFWa3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETzFGQlJYQkdMRU5CUVVNc1lVRkJZU3hGUVVGRkxHRkJRV0VzUlVGQlJTeGhRVUZoTEVWQlFVVXNXVUZCV1N4RFFVRkRPMkZCUTNoRUxFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlN4SFFVRkhMR0ZCUVdFc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRmVFVXNTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hGUVVGRk8xbEJRMW9zWVVGQllTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03VTBGRE0wTTdZVUZCVFN4SlFVRkpMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVU3V1VGRGJFSXNZVUZCWVN4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTTdVMEZETlVNN1lVRkJUVHRaUVVOTUxHRkJRV0VzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8xTkJRelZETzBsQlEwZ3NRMEZCUXl4RFFVRkRPMGxCUlVZc1RVRkJUU3haUVVGWkxFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNN1NVRkRhRVVzVFVGQlRTeGpRVUZqTEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhaUVVGWkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRPMGxCUldwSExFbEJRVWtzWjBKQlFXZENMRWRCUVVjc1IwRkJSeXhGUVVGRk8xRkJRekZDTEVsQlFVa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFGQlEyNURMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zWlVGQlpTeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVONFF5eERRVUZETEVOQlFVTTdTVUZGUml4SlFVRkpMR2xDUVVGcFFpeEhRVUZITEVkQlFVY3NSVUZCUlR0UlFVTXpRaXhwUWtGQmFVSXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRPMkZCUTNKRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhUUVVGVExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOd1JpeERRVUZETEVOQlFVRTdTVUZIUkN4TlFVRk5MRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVjc1JVRkJSVHRSUVVOeVF5eFpRVUZaTEVWQlFVVXNRMEZCUXp0UlFVTm1MR05CUVdNc1JVRkJSU3hEUVVGRE8xRkJRMnBDTEdsQ1FVRnBRaXhGUVVGRkxFTkJRVU03U1VGRGRFSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkZTQ3hoUVVGaExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzUlVGQlJUdFJRVU0xUXl4blJrRkJaMFk3VVVGRGFFWXNTMEZCU3l4SFFVRkhMRmxCUVZrc1JVRkJSU3hEUVVGRE8xRkJRM1pDTEdGQlFXRXNSVUZCUlN4RFFVRkRPMUZCUTJoQ0xHbENRVUZwUWl4RlFVRkZMRU5CUVVNN1NVRkRkRUlzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZGU0N4WFFVRlhMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVjc1JVRkJSVHRSUVVNeFF5eG5Ra0ZCWjBJc1JVRkJSU3hEUVVGRE8xRkJRMjVDTEdGQlFXRXNSVUZCUlN4RFFVRkRPMUZCUTJoQ0xHbENRVUZwUWl4RlFVRkZMRU5CUVVNN1NVRkRkRUlzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZGU0N4cFFrRkJhVUlzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhSUVVGUkxFVkJRVVVzUjBGQlJ5eEZRVUZGTzFGQlEyaEVMR2xDUVVGcFFpeERRVUZETEV0QlFVc3NRMEZCUVR0SlFVTjZRaXhEUVVGRExFTkJRVU1zUTBGQlFUdEpRVVZHTEZsQlFWa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZPMUZCUXpGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzYVVKQlFXbENMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVUU3VVVGRGRrUXNTVUZCU1N4VFFVRlRMRWRCUVVjc1ZVRkJWU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRM0JFTEVsQlFVa3NVMEZCVXl4RlFVRkZPMWxCUTJJc1UwRkJVeXhGUVVGRkxFTkJRVU03VTBGRFlqdGhRVUZOTzFsQlEwd3NUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhwUTBGQmFVTXNRMEZCUXl4RFFVRkRPMU5CUTJoRU8wbEJRMGdzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZGU0N4blFrRkJaMElzUlVGQlJTeERRVUZETzBsQlEyNUNMR0ZCUVdFc1JVRkJSU3hEUVVGRE8wbEJRMmhDTEZsQlFWa3NSVUZCUlN4RFFVRkRPMGxCUTJZc1kwRkJZeXhGUVVGRkxFTkJRVU03U1VGRGFrSXNhVUpCUVdsQ0xFVkJRVVVzUTBGQlF6dEpRVVZ3UWl4TlFVRk5MRlZCUVZVc1IwRkJiME03VVVGRGJFUXNZVUZCWVN4RlFVRkZMRWRCUVVjc1JVRkJSVHRaUVVOc1FpeEpRVUZKTEVkQlFVY3NSMEZCUnl4VlFVRlZMRU5CUVVNc1MwRkJTeXhEUVVGRE8xbEJRek5DTEV0QlFVc3NRMEZCUXl4dlEwRkJiME1zUjBGQlJ5eFpRVUZaTEVkQlFVY3NVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8yZENRVU14UlN4VFFVRlRMRVZCUVVVN2IwSkJRMVFzVVVGQlVTeEZRVUZGTEhWR1FVRjFSanR2UWtGRGFrY3NhVUpCUVdsQ0xFVkJRVVVzWjBKQlFXZENPMmxDUVVOd1F6dG5Ra0ZEUkN4blFrRkJaMElzUlVGQlJTdzBRa0ZCTkVJN1owSkJRemxETEUxQlFVMHNSVUZCUlN4SlFVRkpPMmRDUVVOYUxGRkJRVkVzUlVGQlJTeExRVUZMTzJkQ1FVTm1MRTFCUVUwc1JVRkJSU3hOUVVGTk8yRkJRMllzUTBGQlF6dHBRa0ZEUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN2FVSkJRM1pDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRuUWtGRFdDeFBRVUZQTEVsQlFVa3NUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFMUJRVTBzUlVGQlJTeEZRVUZGTzI5Q1FVTnlReXhOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEZWQlFWVXNSVUZCUlN4RFFVRkJPMjlDUVVNdlFpeE5RVUZOTEVOQlFVTXNVMEZCVXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRExFOUJRVThzUTBGQlV5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVFN2IwSkJRM1pFTEUxQlFVMHNRMEZCUXl4UFFVRlBMRWRCUVVjc1RVRkJUU3hEUVVGQk8yOUNRVU4yUWl4TlFVRk5MRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZCTzJkQ1FVTTFRaXhEUVVGRExFTkJRVU1zUTBGQlFUdFpRVU5LTEVOQlFVTXNRMEZCUXp0cFFrRkRSQ3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdaMEpCUTFJc1NVRkJTU3hEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRuUWtGRGRFTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJWeXhEUVVGRExFTkJRVU03WjBKQlEyeENMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVWdVFpeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU12UWl4RFFVRkRMRU5CUVVNN2FVSkJRMFFzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMmRDUVVOWUxFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM1pDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTFBc1EwRkJRenRSUVVORUxHbENRVUZwUWl4RlFVRkZMRWRCUVVjc1JVRkJSVHRaUVVOMFFpeEpRVUZKTEVkQlFVY3NSMEZCUnl4VlFVRlZMRU5CUVVNc1MwRkJTeXhEUVVGRE8xbEJRek5DTEV0QlFVc3NRMEZCUXl4blEwRkJaME1zUjBGQlJ5eFpRVUZaTEVkQlFVY3NVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8yZENRVU4wUlN4VFFVRlRMRVZCUVVVN2IwSkJRMVFzVVVGQlVTeEZRVUZGTEhWR1FVRjFSanR2UWtGRGFrY3NhVUpCUVdsQ0xFVkJRVVVzWjBKQlFXZENPMmxDUVVOd1F6dG5Ra0ZEUkN4blFrRkJaMElzUlVGQlJTdzBRa0ZCTkVJN1owSkJRemxETEUxQlFVMHNSVUZCUlN4SlFVRkpPMmRDUVVOYUxGRkJRVkVzUlVGQlJTeExRVUZMTzJkQ1FVTm1MRTFCUVUwc1JVRkJSU3hOUVVGTk8yRkJRMllzUTBGQlF6dHBRa0ZEUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN2FVSkJRM1pDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRuUWtGRFdDeFBRVUZQTEVsQlFVa3NUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFMUJRVTBzUlVGQlJTeEZRVUZGTzI5Q1FVTnlReXhOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEZWQlFWVXNSVUZCUlN4RFFVRkJPMjlDUVVNdlFpeE5RVUZOTEVOQlFVTXNVMEZCVXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRExFOUJRVThzUTBGQlV5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVFN2IwSkJRM1pFTEUxQlFVMHNRMEZCUXl4UFFVRlBMRWRCUVVjc1RVRkJUU3hEUVVGQk8yOUNRVU4yUWl4TlFVRk5MRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZCTzJkQ1FVTTFRaXhEUVVGRExFTkJRVU1zUTBGQlFUdFpRVU5LTEVOQlFVTXNRMEZCUXp0cFFrRkRSQ3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdaMEpCUTFJc1NVRkJTU3hEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRuUWtGRGRFTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJWeXhEUVVGRExFTkJRVU03WjBKQlEyeENMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVWdVFpeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU12UWl4RFFVRkRMRU5CUVVNN2FVSkJRMFFzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMmRDUVVOWUxFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM1pDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTFBc1EwRkJRenRSUVVORUxHdENRVUZyUWl4RlFVRkZMRWRCUVVjc1JVRkJSVHRaUVVOMlFpeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMR3RDUVVGclFpeERRVUZETEVOQlFVTTdXVUZGYUVNc1NVRkJTU3hOUVVGNVFpeERRVUZETzFsQlJUbENMRWxCUVVrN1owSkJRMFlzVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03WVVGRGJFTTdXVUZEUkN4UFFVRlBMRXRCUVVzc1JVRkJSVHRuUWtGRFdpeFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMREpDUVVFeVFpeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMkZCUTI1RU8xbEJSVVFzU1VGQlNTeE5RVUZOTEVWQlFVVTdaMEpCUTFZc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF6dG5Ra0ZEWml4aFFVRmhMRVZCUVVVc1EwRkJRenRoUVVOcVFqdHBRa0ZCVFR0blFrRkRUQ3hMUVVGTExFZEJRVWNzVlVGQlZTeEZRVUZGTEVOQlFVTTdaMEpCUTNKQ0xHRkJRV0VzUlVGQlJTeERRVUZETzJkQ1FVVm9RaXhEUVVGRExHRkJRV0VzUlVGQlJTeGhRVUZoTEVWQlFVVXNZVUZCWVN4RlFVRkZMRmxCUVZrc1EwRkJRenR4UWtGRGVFUXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhGUVVGRkxFZEJRVWNzWVVGQllTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkZlRVVzWVVGQllTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03WjBKQlF6RkRMR0ZCUVdFc1EwRkJReXhYUVVGWExFZEJRVWNzWVVGQllTeERRVUZETzJGQlF6TkRPMWxCUTBRc2FVSkJRV2xDTEVWQlFVVXNRMEZCUXp0UlFVTjBRaXhEUVVGRE8wdEJRMFlzUTBGQlFUdEJRVVZJTEVOQlFVTTdRVUZGUkN4TlFVRk5MRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNUVUZCVFN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJSWGhETEUxQlFVMHNaMEpCUVdkQ0xFZEJRVWM3TzBOQlJYaENMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1pZlE9PSJdLCJzb3VyY2VSb290IjoiIn0=