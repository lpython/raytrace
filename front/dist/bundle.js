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
    let ctxMaybe = canv.getContext("2d");
    if (ctxMaybe == null) {
        return;
    }
    let ctx = ctxMaybe;
    // UI varibles, change due to user events
    let size;
    let img;
    let scene = Object(_python36_raytrace__WEBPACK_IMPORTED_MODULE_0__["defaultScene"])();
    // sceneInput.value = DefaultXML();
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
            .then(img => ctx.drawImage(img, 0, 0, canv.width, canv.height));
    };
    // let sceneXMLFromTextarea = () => {
    //   try {
    //     scene = ParseXMLToScene(sceneInput.value);
    //   }
    //   catch (error) {
    //     console.error('sceneXMLFromTextarea()', error);
    //     //TODO refactor clearing of button
    //     ['btn-primary', 'btn-success', 'btn-warning', 'btn-danger']
    //       .forEach(className => { elapsedButton.classList.remove(className); });
    //     elapsedButton.classList.add('btn-danger');
    //     elapsedButton.textContent = 'Invalid XML';
    //     scene = emptyScene();
    //   }
    // };
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
    // TODO Bootstrap pop up noticies
    // TODO webworker
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
            // Front
            // sceneXMLFromTextarea();
            renewRaytrace();
            outputRenderImage();
        }
    };
}
window.addEventListener('load', onLoad);
const gobackPostString = `
res=512&xml-scene=%3Cscene%3E%0D%0A++%3Ccamera+pos%3D%223.0%2C+2.0%2C+4.0%22+lookAt%3D%22-1.0%2C+0.5%2C+0.0%22+%2F%3E%0D%0A++%3Cobjects%3E%0D%0A++++%3Cplane+normal%3D%220.0%2C1.0%2C0.0%22+offset%3D%220.0%22+surface%3D%22checkerboard%22+%2F%3E%0D%0A++++%3Csphere+pos%3D%220.0%2C1.0%2C-0.25%22+size%3D%221.0%22+surface%3D%22shiny%22%2F%3E%0D%0A++++%3Csphere+pos%3D%22-1.0%2C0.5%2C1.5%22+size%3D%220.5%22+surface%3D%22shiny%22%2F%3E%0D%0A++++%3Csphere+pos%3D%22-5.5%2C2.0%2C-3.5%22+size%3D%221.25%22+surface%3D%22checkerboard%22%2F%3E%0D%0A++%3C%2Fobjects%3E%0D%0A++%3Clights%3E%0D%0A++++%3Clight+pos%3D%22-2.0%2C+2.5%2C+0.0%22+color%3D%220.49%2C+0.07%2C+0.07%22+%2F%3E+%0D%0A++++%3Clight+pos%3D%221.5%2C+2.5%2C+1.5%22+color%3D%220.07%2C+0.07%2C+0.49%22+%2F%3E+%0D%0A++++%3Clight+pos%3D%221.5%2C+2.5%2C+-1.5%22+color%3D%220.07%2C+0.49%2C+0.071%22+%2F%3E+%0D%0A++++%3Clight+pos%3D%220.0%2C+3.5%2C+0.0%22+color%3D%220.21%2C+0.21%2C+0.35%22+%2F%3E+%0D%0A++%3C%2Flights%3E%0D%0A%3C%2Fscene%3E
`.trim();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFNBQVMsRUFBRSxFQUFTLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3BFLHVGQUF1RjtBQUN2Riw0REFBNEQ7QUFDNUQsU0FBUyxNQUFNO0lBQ2IsTUFBTSxJQUFJLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEUsTUFBTSxVQUFVLEdBQXdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFN0UsTUFBTSxhQUFhLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUUsTUFBTSxXQUFXLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUUsTUFBTSxpQkFBaUIsR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRXRGLE1BQU0sYUFBYSxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sWUFBWSxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRTdFLE1BQU0sU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7SUFFbEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7UUFBRSxPQUFPO0tBQUU7SUFFakMsSUFBSSxHQUFHLEdBQTZCLFFBQVEsQ0FBQztJQUU3Qyx5Q0FBeUM7SUFDekMsSUFBSSxJQUFZLENBQUM7SUFDakIsSUFBSSxHQUFjLENBQUM7SUFDbkIsSUFBSSxLQUFLLEdBQVUsWUFBWSxFQUFFLENBQUM7SUFFbEMsbUNBQW1DO0lBRW5DLElBQUksYUFBYSxHQUFHLEdBQUcsRUFB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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BweXRob24zNi9yYXl0cmFjZS9saWIvY2FtZXJhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcHl0aG9uMzYvcmF5dHJhY2UvbGliL2NvbG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcHl0aG9uMzYvcmF5dHJhY2UvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcHl0aG9uMzYvcmF5dHJhY2UvbGliL3JheXRyYWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcHl0aG9uMzYvcmF5dHJhY2UvbGliL3NjZW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcHl0aG9uMzYvcmF5dHJhY2UvbGliL3N1cmZhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BweXRob24zNi9yYXl0cmFjZS9saWIvdGhpbmdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcHl0aG9uMzYvcmF5dHJhY2UvbGliL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlD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O0FBQ0EsNkJBQTZCLE1BQU07QUFDbkMsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxnQ0FBZ0M7QUFDL0csaURBQWlEO0FBQ2pELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDZCQUE2QixNQUFNO0FBQ25DLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG0vTyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCB2ZWN0b3JfMSA9IHJlcXVpcmUoXCIuL3ZlY3RvclwiKTtcclxuY2xhc3MgQ2FtZXJhIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcywgbG9va0F0KSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICAgICAgdmFyIGRvd24gPSBuZXcgdmVjdG9yXzEuZGVmYXVsdCgwLjAsIC0xLjAsIDAuMCk7XHJcbiAgICAgICAgdGhpcy5mb3J3YXJkID0gdmVjdG9yXzEuZGVmYXVsdC5ub3JtKHZlY3Rvcl8xLmRlZmF1bHQubWludXMobG9va0F0LCB0aGlzLnBvcykpO1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSB2ZWN0b3JfMS5kZWZhdWx0LnRpbWVzKDEuNSwgdmVjdG9yXzEuZGVmYXVsdC5ub3JtKHZlY3Rvcl8xLmRlZmF1bHQuY3Jvc3ModGhpcy5mb3J3YXJkLCBkb3duKSkpO1xyXG4gICAgICAgIHRoaXMudXAgPSB2ZWN0b3JfMS5kZWZhdWx0LnRpbWVzKDEuNSwgdmVjdG9yXzEuZGVmYXVsdC5ub3JtKHZlY3Rvcl8xLmRlZmF1bHQuY3Jvc3ModGhpcy5mb3J3YXJkLCB0aGlzLnJpZ2h0KSkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENhbWVyYTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FtZXJhLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIENvbG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHIsIGcsIGIpIHtcclxuICAgICAgICB0aGlzLnIgPSByO1xyXG4gICAgICAgIHRoaXMuZyA9IGc7XHJcbiAgICAgICAgdGhpcy5iID0gYjtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzY2FsZShrLCB2KSB7IHJldHVybiBuZXcgQ29sb3IoayAqIHYuciwgayAqIHYuZywgayAqIHYuYik7IH1cclxuICAgIHN0YXRpYyBwbHVzKHYxLCB2MikgeyByZXR1cm4gbmV3IENvbG9yKHYxLnIgKyB2Mi5yLCB2MS5nICsgdjIuZywgdjEuYiArIHYyLmIpOyB9XHJcbiAgICBzdGF0aWMgdGltZXModjEsIHYyKSB7IHJldHVybiBuZXcgQ29sb3IodjEuciAqIHYyLnIsIHYxLmcgKiB2Mi5nLCB2MS5iICogdjIuYik7IH1cclxuICAgIHN0YXRpYyB0b0RyYXdpbmdDb2xvcihjKSB7XHJcbiAgICAgICAgdmFyIGxlZ2FsaXplID0gKGQpID0+IGQgPiAxID8gMSA6IGQ7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcjogTWF0aC5mbG9vcihsZWdhbGl6ZShjLnIpICogMjU1KSxcclxuICAgICAgICAgICAgZzogTWF0aC5mbG9vcihsZWdhbGl6ZShjLmcpICogMjU1KSxcclxuICAgICAgICAgICAgYjogTWF0aC5mbG9vcihsZWdhbGl6ZShjLmIpICogMjU1KVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gQ29sb3I7XHJcbkNvbG9yLndoaXRlID0gbmV3IENvbG9yKDEuMCwgMS4wLCAxLjApO1xyXG5Db2xvci5ncmV5ID0gbmV3IENvbG9yKDAuNSwgMC41LCAwLjUpO1xyXG5Db2xvci5ibGFjayA9IG5ldyBDb2xvcigwLjAsIDAuMCwgMC4wKTtcclxuQ29sb3IuYmFja2dyb3VuZCA9IENvbG9yLmJsYWNrO1xyXG5Db2xvci5kZWZhdWx0Q29sb3IgPSBDb2xvci5ibGFjaztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29sb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcmF5dHJhY2VfMSA9IHJlcXVpcmUoXCIuL3JheXRyYWNlXCIpO1xyXG5jb25zdCBjYW1lcmFfMSA9IHJlcXVpcmUoXCIuL2NhbWVyYVwiKTtcclxuZXhwb3J0cy5DYW1lcmEgPSBjYW1lcmFfMS5kZWZhdWx0O1xyXG5jb25zdCB2ZWN0b3JfMSA9IHJlcXVpcmUoXCIuL3ZlY3RvclwiKTtcclxuZXhwb3J0cy5WZWN0b3IgPSB2ZWN0b3JfMS5kZWZhdWx0O1xyXG5jb25zdCBzY2VuZV8xID0gcmVxdWlyZShcIi4vc2NlbmVcIik7XHJcbmV4cG9ydHMuZGVmYXVsdFNjZW5lID0gc2NlbmVfMS5kZWZhdWx0U2NlbmU7XHJcbmV4cG9ydHMuc2NlbmUyID0gc2NlbmVfMS5zY2VuZTI7XHJcbmV4cG9ydHMuZW1wdHlTY2VuZSA9IHNjZW5lXzEuZW1wdHlTY2VuZTtcclxuY29uc3QgU3VyZmFjZXMgPSByZXF1aXJlKFwiLi9zdXJmYWNlXCIpO1xyXG5leHBvcnRzLlN1cmZhY2VzID0gU3VyZmFjZXM7XHJcbmNvbnN0IHRoaW5nc18xID0gcmVxdWlyZShcIi4vdGhpbmdzXCIpO1xyXG5leHBvcnRzLlNwaGVyZSA9IHRoaW5nc18xLlNwaGVyZTtcclxuZXhwb3J0cy5QbGFuZSA9IHRoaW5nc18xLlBsYW5lO1xyXG5leHBvcnRzLmRlZmF1bHQgPSByYXl0cmFjZV8xLmRlZmF1bHQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHZlY3Rvcl8xID0gcmVxdWlyZShcIi4vdmVjdG9yXCIpO1xyXG5jb25zdCBjb2xvcl8xID0gcmVxdWlyZShcIi4vY29sb3JcIik7XHJcbmNsYXNzIFJheVRyYWNlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm1heERlcHRoID0gNTtcclxuICAgIH1cclxuICAgIGludGVyc2VjdGlvbnMocmF5LCBzY2VuZSkge1xyXG4gICAgICAgIHZhciBjbG9zZXN0ID0gK0luZmluaXR5O1xyXG4gICAgICAgIHZhciBjbG9zZXN0SW50ZXIgPSBudWxsO1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gc2NlbmUudGhpbmdzKSB7XHJcbiAgICAgICAgICAgIHZhciBpbnRlciA9IHNjZW5lLnRoaW5nc1tpXS5pbnRlcnNlY3QocmF5KTtcclxuICAgICAgICAgICAgaWYgKGludGVyICE9IG51bGwgJiYgaW50ZXIuZGlzdCA8IGNsb3Nlc3QpIHtcclxuICAgICAgICAgICAgICAgIGNsb3Nlc3RJbnRlciA9IGludGVyO1xyXG4gICAgICAgICAgICAgICAgY2xvc2VzdCA9IGludGVyLmRpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNsb3Nlc3RJbnRlcjtcclxuICAgIH1cclxuICAgIHRlc3RSYXkocmF5LCBzY2VuZSkge1xyXG4gICAgICAgIHZhciBpc2VjdCA9IHRoaXMuaW50ZXJzZWN0aW9ucyhyYXksIHNjZW5lKTtcclxuICAgICAgICBpZiAoaXNlY3QgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNlY3QuZGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRyYWNlUmF5KHJheSwgc2NlbmUsIGRlcHRoKSB7XHJcbiAgICAgICAgdmFyIGlzZWN0ID0gdGhpcy5pbnRlcnNlY3Rpb25zKHJheSwgc2NlbmUpO1xyXG4gICAgICAgIGlmIChpc2VjdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sb3JfMS5kZWZhdWx0LmJhY2tncm91bmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaGFkZShpc2VjdCwgc2NlbmUsIGRlcHRoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaGFkZShpc2VjdCwgc2NlbmUsIGRlcHRoKSB7XHJcbiAgICAgICAgdmFyIGQgPSBpc2VjdC5yYXkuZGlyO1xyXG4gICAgICAgIHZhciBwb3MgPSB2ZWN0b3JfMS5kZWZhdWx0LnBsdXModmVjdG9yXzEuZGVmYXVsdC50aW1lcyhpc2VjdC5kaXN0LCBkKSwgaXNlY3QucmF5LnN0YXJ0KTtcclxuICAgICAgICB2YXIgbm9ybWFsID0gaXNlY3QudGhpbmcubm9ybWFsKHBvcyk7XHJcbiAgICAgICAgdmFyIHJlZmxlY3REaXIgPSB2ZWN0b3JfMS5kZWZhdWx0Lm1pbnVzKGQsIHZlY3Rvcl8xLmRlZmF1bHQudGltZXMoMiwgdmVjdG9yXzEuZGVmYXVsdC50aW1lcyh2ZWN0b3JfMS5kZWZhdWx0LmRvdChub3JtYWwsIGQpLCBub3JtYWwpKSk7XHJcbiAgICAgICAgdmFyIG5hdHVyYWxDb2xvciA9IGNvbG9yXzEuZGVmYXVsdC5wbHVzKGNvbG9yXzEuZGVmYXVsdC5iYWNrZ3JvdW5kLCB0aGlzLmdldE5hdHVyYWxDb2xvcihpc2VjdC50aGluZywgcG9zLCBub3JtYWwsIHJlZmxlY3REaXIsIHNjZW5lKSk7XHJcbiAgICAgICAgdmFyIHJlZmxlY3RlZENvbG9yID0gKGRlcHRoID49IHRoaXMubWF4RGVwdGgpID8gY29sb3JfMS5kZWZhdWx0LmdyZXkgOiB0aGlzLmdldFJlZmxlY3Rpb25Db2xvcihpc2VjdC50aGluZywgcG9zLCBub3JtYWwsIHJlZmxlY3REaXIsIHNjZW5lLCBkZXB0aCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yXzEuZGVmYXVsdC5wbHVzKG5hdHVyYWxDb2xvciwgcmVmbGVjdGVkQ29sb3IpO1xyXG4gICAgfVxyXG4gICAgZ2V0UmVmbGVjdGlvbkNvbG9yKHRoaW5nLCBwb3MsIG5vcm1hbCwgcmQsIHNjZW5lLCBkZXB0aCkge1xyXG4gICAgICAgIHJldHVybiBjb2xvcl8xLmRlZmF1bHQuc2NhbGUodGhpbmcuc3VyZmFjZS5yZWZsZWN0KHBvcyksIHRoaXMudHJhY2VSYXkoeyBzdGFydDogcG9zLCBkaXI6IHJkIH0sIHNjZW5lLCBkZXB0aCArIDEpKTtcclxuICAgIH1cclxuICAgIGdldE5hdHVyYWxDb2xvcih0aGluZywgcG9zLCBub3JtLCByZCwgc2NlbmUpIHtcclxuICAgICAgICB2YXIgYWRkTGlnaHQgPSAoY29sLCBsaWdodCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgbGRpcyA9IHZlY3Rvcl8xLmRlZmF1bHQubWludXMobGlnaHQucG9zLCBwb3MpO1xyXG4gICAgICAgICAgICB2YXIgbGl2ZWMgPSB2ZWN0b3JfMS5kZWZhdWx0Lm5vcm0obGRpcyk7XHJcbiAgICAgICAgICAgIHZhciBuZWF0SXNlY3QgPSB0aGlzLnRlc3RSYXkoeyBzdGFydDogcG9zLCBkaXI6IGxpdmVjIH0sIHNjZW5lKTtcclxuICAgICAgICAgICAgdmFyIGlzSW5TaGFkb3cgPSAobmVhdElzZWN0ID09PSBudWxsKSA/IGZhbHNlIDogKG5lYXRJc2VjdCA8PSB2ZWN0b3JfMS5kZWZhdWx0Lm1hZyhsZGlzKSk7XHJcbiAgICAgICAgICAgIGlmIChpc0luU2hhZG93KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlsbHVtID0gdmVjdG9yXzEuZGVmYXVsdC5kb3QobGl2ZWMsIG5vcm0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxjb2xvciA9IChpbGx1bSA+IDApID8gY29sb3JfMS5kZWZhdWx0LnNjYWxlKGlsbHVtLCBsaWdodC5jb2xvcilcclxuICAgICAgICAgICAgICAgICAgICA6IGNvbG9yXzEuZGVmYXVsdC5kZWZhdWx0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3BlY3VsYXIgPSB2ZWN0b3JfMS5kZWZhdWx0LmRvdChsaXZlYywgdmVjdG9yXzEuZGVmYXVsdC5ub3JtKHJkKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NvbG9yID0gKHNwZWN1bGFyID4gMCkgPyBjb2xvcl8xLmRlZmF1bHQuc2NhbGUoTWF0aC5wb3coc3BlY3VsYXIsIHRoaW5nLnN1cmZhY2Uucm91Z2huZXNzKSwgbGlnaHQuY29sb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBjb2xvcl8xLmRlZmF1bHQuZGVmYXVsdENvbG9yO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yXzEuZGVmYXVsdC5wbHVzKGNvbCwgY29sb3JfMS5kZWZhdWx0LnBsdXMoY29sb3JfMS5kZWZhdWx0LnRpbWVzKHRoaW5nLnN1cmZhY2UuZGlmZnVzZShwb3MpLCBsY29sb3IpLCBjb2xvcl8xLmRlZmF1bHQudGltZXModGhpbmcuc3VyZmFjZS5zcGVjdWxhcihwb3MpLCBzY29sb3IpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBzY2VuZS5saWdodHMucmVkdWNlKGFkZExpZ2h0LCBjb2xvcl8xLmRlZmF1bHQuZGVmYXVsdENvbG9yKTtcclxuICAgIH1cclxuICAgIHJlbmRlclRvSW1hZ2Uoc2NlbmUsIGltYWdlKSB7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IGltYWdlLmhlaWdodDtcclxuICAgICAgICB2YXIgd2lkdGggPSBpbWFnZS53aWR0aDtcclxuICAgICAgICB2YXIgZ2V0UG9pbnQgPSBmdW5jdGlvbiAoeCwgeSwgY2FtZXJhKSB7XHJcbiAgICAgICAgICAgIHZhciByZWNlbnRlclggPSBmdW5jdGlvbiAoeCkgeyByZXR1cm4gKHggLSAod2lkdGggLyAyLjApKSAvIDIuMCAvIHdpZHRoOyB9O1xyXG4gICAgICAgICAgICB2YXIgcmVjZW50ZXJZID0gZnVuY3Rpb24gKHkpIHsgcmV0dXJuIC0oeSAtIChoZWlnaHQgLyAyLjApKSAvIDIuMCAvIGhlaWdodDsgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHZlY3Rvcl8xLmRlZmF1bHQubm9ybSh2ZWN0b3JfMS5kZWZhdWx0LnBsdXMoY2FtZXJhLmZvcndhcmQsIHZlY3Rvcl8xLmRlZmF1bHQucGx1cyh2ZWN0b3JfMS5kZWZhdWx0LnRpbWVzKHJlY2VudGVyWCh4KSwgY2FtZXJhLnJpZ2h0KSwgdmVjdG9yXzEuZGVmYXVsdC50aW1lcyhyZWNlbnRlclkoeSksIGNhbWVyYS51cCkpKSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbG9yID0gdGhpcy50cmFjZVJheSh7IHN0YXJ0OiBzY2VuZS5jYW1lcmEucG9zLCBkaXI6IGdldFBvaW50KHgsIHksIHNjZW5lLmNhbWVyYSkgfSwgc2NlbmUsIDApO1xyXG4gICAgICAgICAgICAgICAgdmFyIGMgPSBjb2xvcl8xLmRlZmF1bHQudG9EcmF3aW5nQ29sb3IoY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UuZGF0YVsoKHkgKiAod2lkdGggKiA0KSkgKyAoeCAqIDQpKV0gPSBjLnI7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5kYXRhWygoeSAqICh3aWR0aCAqIDQpKSArICh4ICogNCkpICsgMV0gPSBjLmc7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5kYXRhWygoeSAqICh3aWR0aCAqIDQpKSArICh4ICogNCkpICsgMl0gPSBjLmI7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5kYXRhWygoeSAqICh3aWR0aCAqIDQpKSArICh4ICogNCkpICsgM10gPSAyNTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gUmF5VHJhY2VyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYXl0cmFjZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCB2ZWN0b3JfMSA9IHJlcXVpcmUoXCIuL3ZlY3RvclwiKTtcclxuY29uc3QgY29sb3JfMSA9IHJlcXVpcmUoXCIuL2NvbG9yXCIpO1xyXG5jb25zdCB0aGluZ3NfMSA9IHJlcXVpcmUoXCIuL3RoaW5nc1wiKTtcclxuY29uc3QgY2FtZXJhXzEgPSByZXF1aXJlKFwiLi9jYW1lcmFcIik7XHJcbmNvbnN0IFN1cmZhY2VzID0gcmVxdWlyZShcIi4vc3VyZmFjZVwiKTtcclxuZnVuY3Rpb24gZGVmYXVsdFNjZW5lKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aGluZ3M6IFtcclxuICAgICAgICAgICAgbmV3IHRoaW5nc18xLlBsYW5lKG5ldyB2ZWN0b3JfMS5kZWZhdWx0KDAuMCwgMS4wLCAwLjApLCAwLjAsIFN1cmZhY2VzLmNoZWNrZXJib2FyZCksXHJcbiAgICAgICAgICAgIG5ldyB0aGluZ3NfMS5TcGhlcmUobmV3IHZlY3Rvcl8xLmRlZmF1bHQoMC4wLCAxLjAsIC0wLjI1KSwgMS4wLCBTdXJmYWNlcy5zaGlueSksXHJcbiAgICAgICAgICAgIG5ldyB0aGluZ3NfMS5TcGhlcmUobmV3IHZlY3Rvcl8xLmRlZmF1bHQoLTEuMCwgMC41LCAxLjUpLCAwLjUsIFN1cmZhY2VzLnNoaW55KVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGlnaHRzOiBbXHJcbiAgICAgICAgICAgIHsgcG9zOiBuZXcgdmVjdG9yXzEuZGVmYXVsdCgtMi4wLCAyLjUsIDAuMCksIGNvbG9yOiBuZXcgY29sb3JfMS5kZWZhdWx0KDAuNDksIDAuMDcsIDAuMDcpIH0sXHJcbiAgICAgICAgICAgIHsgcG9zOiBuZXcgdmVjdG9yXzEuZGVmYXVsdCgxLjUsIDIuNSwgMS41KSwgY29sb3I6IG5ldyBjb2xvcl8xLmRlZmF1bHQoMC4wNywgMC4wNywgMC40OSkgfSxcclxuICAgICAgICAgICAgeyBwb3M6IG5ldyB2ZWN0b3JfMS5kZWZhdWx0KDEuNSwgMi41LCAtMS41KSwgY29sb3I6IG5ldyBjb2xvcl8xLmRlZmF1bHQoMC4wNywgMC40OSwgMC4wNzEpIH0sXHJcbiAgICAgICAgICAgIHsgcG9zOiBuZXcgdmVjdG9yXzEuZGVmYXVsdCgwLjAsIDMuNSwgMC4wKSwgY29sb3I6IG5ldyBjb2xvcl8xLmRlZmF1bHQoMC4yMSwgMC4yMSwgMC4zNSkgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY2FtZXJhOiBuZXcgY2FtZXJhXzEuZGVmYXVsdChuZXcgdmVjdG9yXzEuZGVmYXVsdCgzLjAsIDIuMCwgNC4wKSwgbmV3IHZlY3Rvcl8xLmRlZmF1bHQoLTEuMCwgMC41LCAwLjApKVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmRlZmF1bHRTY2VuZSA9IGRlZmF1bHRTY2VuZTtcclxuZnVuY3Rpb24gc2NlbmUyKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aGluZ3M6IFtcclxuICAgICAgICAgICAgbmV3IHRoaW5nc18xLlBsYW5lKG5ldyB2ZWN0b3JfMS5kZWZhdWx0KDAuMCwgMS4wLCAwLjApLCAwLjAsIFN1cmZhY2VzLmNoZWNrZXJib2FyZCksXHJcbiAgICAgICAgICAgIG5ldyB0aGluZ3NfMS5TcGhlcmUobmV3IHZlY3Rvcl8xLmRlZmF1bHQoMC4wLCAxLjAsIC0wLjI1KSwgMS4wLCBTdXJmYWNlcy5zaGlueSksXHJcbiAgICAgICAgICAgIG5ldyB0aGluZ3NfMS5TcGhlcmUobmV3IHZlY3Rvcl8xLmRlZmF1bHQoLTEuMCwgMC41LCAxLjUpLCAwLjUsIFN1cmZhY2VzLnNoaW55KSxcclxuICAgICAgICAgICAgbmV3IHRoaW5nc18xLlNwaGVyZShuZXcgdmVjdG9yXzEuZGVmYXVsdCgtNS41LCAyLjAsIC0zLjUpLCAxLjI1LCBTdXJmYWNlcy5jaGVja2VyYm9hcmQpXHJcbiAgICAgICAgXSxcclxuICAgICAgICBsaWdodHM6IFtcclxuICAgICAgICAgICAgeyBwb3M6IG5ldyB2ZWN0b3JfMS5kZWZhdWx0KC0yLjAsIDIuNSwgMC4wKSwgY29sb3I6IG5ldyBjb2xvcl8xLmRlZmF1bHQoMC40OSwgMC4wNywgMC4wNykgfSxcclxuICAgICAgICAgICAgeyBwb3M6IG5ldyB2ZWN0b3JfMS5kZWZhdWx0KDEuNSwgMi41LCAxLjUpLCBjb2xvcjogbmV3IGNvbG9yXzEuZGVmYXVsdCgwLjA3LCAwLjA3LCAwLjQ5KSB9LFxyXG4gICAgICAgICAgICB7IHBvczogbmV3IHZlY3Rvcl8xLmRlZmF1bHQoMS41LCAyLjUsIC0xLjUpLCBjb2xvcjogbmV3IGNvbG9yXzEuZGVmYXVsdCgwLjA3LCAwLjQ5LCAwLjA3MSkgfSxcclxuICAgICAgICAgICAgeyBwb3M6IG5ldyB2ZWN0b3JfMS5kZWZhdWx0KDAuMCwgMy41LCAwLjApLCBjb2xvcjogbmV3IGNvbG9yXzEuZGVmYXVsdCgwLjIxLCAwLjIxLCAwLjM1KSB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBjYW1lcmE6IG5ldyBjYW1lcmFfMS5kZWZhdWx0KG5ldyB2ZWN0b3JfMS5kZWZhdWx0KDMuMCwgMi4wLCA0LjApLCBuZXcgdmVjdG9yXzEuZGVmYXVsdCgtMS4wLCAwLjUsIDAuMCkpXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuc2NlbmUyID0gc2NlbmUyO1xyXG5mdW5jdGlvbiBlbXB0eVNjZW5lKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aGluZ3M6IFtdLFxyXG4gICAgICAgIGxpZ2h0czogW10sXHJcbiAgICAgICAgY2FtZXJhOiBuZXcgY2FtZXJhXzEuZGVmYXVsdChuZXcgdmVjdG9yXzEuZGVmYXVsdCgzLjAsIDIuMCwgNC4wKSwgbmV3IHZlY3Rvcl8xLmRlZmF1bHQoLTEuMCwgMC41LCAwLjApKVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmVtcHR5U2NlbmUgPSBlbXB0eVNjZW5lO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2VuZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjb2xvcl8xID0gcmVxdWlyZShcIi4vY29sb3JcIik7XHJcbmV4cG9ydHMuc2hpbnkgPSB7XHJcbiAgICBkaWZmdXNlOiBmdW5jdGlvbiAocG9zKSB7IHJldHVybiBjb2xvcl8xLmRlZmF1bHQud2hpdGU7IH0sXHJcbiAgICBzcGVjdWxhcjogZnVuY3Rpb24gKHBvcykgeyByZXR1cm4gY29sb3JfMS5kZWZhdWx0LmdyZXk7IH0sXHJcbiAgICByZWZsZWN0OiBmdW5jdGlvbiAocG9zKSB7IHJldHVybiAwLjc7IH0sXHJcbiAgICByb3VnaG5lc3M6IDI1MFxyXG59O1xyXG5leHBvcnRzLmNoZWNrZXJib2FyZCA9IHtcclxuICAgIGRpZmZ1c2U6IGZ1bmN0aW9uIChwb3MpIHtcclxuICAgICAgICBpZiAoKE1hdGguZmxvb3IocG9zLnopICsgTWF0aC5mbG9vcihwb3MueCkpICUgMiAhPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sb3JfMS5kZWZhdWx0LndoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yXzEuZGVmYXVsdC5ibGFjaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3BlY3VsYXI6IGZ1bmN0aW9uIChwb3MpIHsgcmV0dXJuIGNvbG9yXzEuZGVmYXVsdC53aGl0ZTsgfSxcclxuICAgIHJlZmxlY3Q6IGZ1bmN0aW9uIChwb3MpIHtcclxuICAgICAgICBpZiAoKE1hdGguZmxvb3IocG9zLnopICsgTWF0aC5mbG9vcihwb3MueCkpICUgMiAhPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMC4xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDAuNztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcm91Z2huZXNzOiAxNTBcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3VyZmFjZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCB2ZWN0b3JfMSA9IHJlcXVpcmUoXCIuL3ZlY3RvclwiKTtcclxuY2xhc3MgU3BoZXJlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzLCBzdXJmYWNlKSB7XHJcbiAgICAgICAgdGhpcy5jZW50ZXIgPSBjZW50ZXI7XHJcbiAgICAgICAgdGhpcy5zdXJmYWNlID0gc3VyZmFjZTtcclxuICAgICAgICB0aGlzLnJhZGl1czIgPSByYWRpdXMgKiByYWRpdXM7XHJcbiAgICB9XHJcbiAgICBub3JtYWwocG9zKSB7IHJldHVybiB2ZWN0b3JfMS5kZWZhdWx0Lm5vcm0odmVjdG9yXzEuZGVmYXVsdC5taW51cyhwb3MsIHRoaXMuY2VudGVyKSk7IH1cclxuICAgIGludGVyc2VjdChyYXkpIHtcclxuICAgICAgICB2YXIgZW8gPSB2ZWN0b3JfMS5kZWZhdWx0Lm1pbnVzKHRoaXMuY2VudGVyLCByYXkuc3RhcnQpO1xyXG4gICAgICAgIHZhciB2ID0gdmVjdG9yXzEuZGVmYXVsdC5kb3QoZW8sIHJheS5kaXIpO1xyXG4gICAgICAgIHZhciBkaXN0ID0gMDtcclxuICAgICAgICBpZiAodiA+PSAwKSB7XHJcbiAgICAgICAgICAgIHZhciBkaXNjID0gdGhpcy5yYWRpdXMyIC0gKHZlY3Rvcl8xLmRlZmF1bHQuZG90KGVvLCBlbykgLSB2ICogdik7XHJcbiAgICAgICAgICAgIGlmIChkaXNjID49IDApIHtcclxuICAgICAgICAgICAgICAgIGRpc3QgPSB2IC0gTWF0aC5zcXJ0KGRpc2MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkaXN0ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdGhpbmc6IHRoaXMsIHJheTogcmF5LCBkaXN0OiBkaXN0IH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU3BoZXJlID0gU3BoZXJlO1xyXG5jbGFzcyBQbGFuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihub3JtLCBvZmZzZXQsIHN1cmZhY2UpIHtcclxuICAgICAgICB0aGlzLnN1cmZhY2UgPSBzdXJmYWNlO1xyXG4gICAgICAgIHRoaXMubm9ybWFsID0gZnVuY3Rpb24gKHBvcykgeyByZXR1cm4gbm9ybTsgfTtcclxuICAgICAgICB0aGlzLmludGVyc2VjdCA9IGZ1bmN0aW9uIChyYXkpIHtcclxuICAgICAgICAgICAgdmFyIGRlbm9tID0gdmVjdG9yXzEuZGVmYXVsdC5kb3Qobm9ybSwgcmF5LmRpcik7XHJcbiAgICAgICAgICAgIGlmIChkZW5vbSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpc3QgPSAodmVjdG9yXzEuZGVmYXVsdC5kb3Qobm9ybSwgcmF5LnN0YXJ0KSArIG9mZnNldCkgLyAoLWRlbm9tKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHRoaW5nOiB0aGlzLCByYXk6IHJheSwgZGlzdDogZGlzdCB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBsYW5lID0gUGxhbmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRoaW5ncy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBWZWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgeikge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnogPSB6O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHRpbWVzKGssIHYpIHsgcmV0dXJuIG5ldyBWZWN0b3IoayAqIHYueCwgayAqIHYueSwgayAqIHYueik7IH1cclxuICAgIHN0YXRpYyBtaW51cyh2MSwgdjIpIHsgcmV0dXJuIG5ldyBWZWN0b3IodjEueCAtIHYyLngsIHYxLnkgLSB2Mi55LCB2MS56IC0gdjIueik7IH1cclxuICAgIHN0YXRpYyBwbHVzKHYxLCB2MikgeyByZXR1cm4gbmV3IFZlY3Rvcih2MS54ICsgdjIueCwgdjEueSArIHYyLnksIHYxLnogKyB2Mi56KTsgfVxyXG4gICAgc3RhdGljIGRvdCh2MSwgdjIpIHsgcmV0dXJuIHYxLnggKiB2Mi54ICsgdjEueSAqIHYyLnkgKyB2MS56ICogdjIuejsgfVxyXG4gICAgc3RhdGljIG1hZyh2KSB7IHJldHVybiBNYXRoLnNxcnQodi54ICogdi54ICsgdi55ICogdi55ICsgdi56ICogdi56KTsgfVxyXG4gICAgc3RhdGljIG5vcm0odikge1xyXG4gICAgICAgIHZhciBtYWcgPSBWZWN0b3IubWFnKHYpO1xyXG4gICAgICAgIHZhciBkaXYgPSAobWFnID09PSAwKSA/IEluZmluaXR5IDogMS4wIC8gbWFnO1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IudGltZXMoZGl2LCB2KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjcm9zcyh2MSwgdjIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2MS55ICogdjIueiAtIHYxLnogKiB2Mi55LCB2MS56ICogdjIueCAtIHYxLnggKiB2Mi56LCB2MS54ICogdjIueSAtIHYxLnkgKiB2Mi54KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBWZWN0b3I7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZlY3Rvci5qcy5tYXAiLCJpbXBvcnQgUmF5VHJhY2VyLCB7IGRlZmF1bHRTY2VuZSB9IGZyb20gJ0BweXRob24zNi9yYXl0cmFjZSc7XHJcbi8vU2NlbmUgaW5wdXQgd2FzIGF0dGVtcHQgdG8gcHJvdmlkZSB0ZXh0YXJlYSB3aXRoIGxpdmUgcmF5dHJhY2UgdXBkYXRlcyBvbiB1c2VyIGlucHV0LlxyXG4vL0R1ZSB0byBUeXBlcyBsb3N0IG9uIGNvbXBpbGUsIGFsdGVybmF0aXZlIHNvbHV0aW9uIG5lZWRlZC5cclxuZnVuY3Rpb24gb25Mb2FkKCkge1xyXG4gICAgY29uc3QgY2FudiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmF5LWNhbnZhc1wiKTtcclxuICAgIGNvbnN0IHNjZW5lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmF5LWlucHV0Jyk7XHJcbiAgICBjb25zdCBzY2VuZVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JheS1zY2VuZScpO1xyXG4gICAgY29uc3QgcmVzU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmF5LXJlcycpO1xyXG4gICAgY29uc3QgcHJvY2Vzc29yU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmF5LXByb2Nlc3NvcicpO1xyXG4gICAgY29uc3QgZWxhcHNlZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyYXktZWxhcHNlZCcpO1xyXG4gICAgY29uc3QgcmVuZGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JheS1yZW5kZXInKTtcclxuICAgIGNvbnN0IHJheVRyYWNlciA9IG5ldyBSYXlUcmFjZXIoKTtcclxuICAgIGxldCBjdHhNYXliZSA9IGNhbnYuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgaWYgKGN0eE1heWJlID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgY3R4ID0gY3R4TWF5YmU7XHJcbiAgICAvLyBVSSB2YXJpYmxlcywgY2hhbmdlIGR1ZSB0byB1c2VyIGV2ZW50c1xyXG4gICAgbGV0IHNpemU7XHJcbiAgICBsZXQgaW1nO1xyXG4gICAgbGV0IHNjZW5lID0gZGVmYXVsdFNjZW5lKCk7XHJcbiAgICAvLyBzY2VuZUlucHV0LnZhbHVlID0gRGVmYXVsdFhNTCgpO1xyXG4gICAgbGV0IHJlbmV3UmF5dHJhY2UgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICByYXlUcmFjZXIucmVuZGVyVG9JbWFnZShzY2VuZSwgaW1nKTtcclxuICAgICAgICBjb25zdCBlbmQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICBvdXRwdXRFbGFwc2VkVGltZShlbmQgLSBzdGFydCk7XHJcbiAgICB9O1xyXG4gICAgbGV0IG91dHB1dEVsYXBzZWRUaW1lID0gKG4pID0+IHtcclxuICAgICAgICBlbGFwc2VkQnV0dG9uLnRleHRDb250ZW50ID0gJ0VsYXBzZWQgOiAnICsgKG4gLyAxMDAwLjApLnRvRml4ZWQoMikudG9TdHJpbmcoKSArICdzJztcclxuICAgICAgICBbJ2J0bi1wcmltYXJ5JywgJ2J0bi1zdWNjZXNzJywgJ2J0bi13YXJuaW5nJywgJ2J0bi1kYW5nZXInXVxyXG4gICAgICAgICAgICAuZm9yRWFjaChjbGFzc05hbWUgPT4geyBlbGFwc2VkQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfSk7XHJcbiAgICAgICAgaWYgKG4gPiAyMDAwKSB7XHJcbiAgICAgICAgICAgIGVsYXBzZWRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLWRhbmdlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChuID4gNTAwKSB7XHJcbiAgICAgICAgICAgIGVsYXBzZWRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLXdhcm5pbmcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVsYXBzZWRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLXN1Y2Nlc3MnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzaXplQ2FudmFzID0gKCkgPT4gY3R4LmNhbnZhcy5oZWlnaHQgPSBjdHguY2FudmFzLndpZHRoO1xyXG4gICAgY29uc3QgcmVzaXplVGV4dGFyZWEgPSAoKSA9PiBzY2VuZUlucHV0LnN0eWxlLmhlaWdodCA9IGN0eC5jYW52YXMuY2xpZW50SGVpZ2h0LnRvU3RyaW5nKCkgKyAncHgnO1xyXG4gICAgbGV0IGNoYW5nZVJlbmRlclNpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2l6ZSA9IHBhcnNlSW50KHJlc1NlbGVjdG9yLnZhbHVlKTtcclxuICAgICAgICBpbWcgPSBjdHguY3JlYXRlSW1hZ2VEYXRhKHNpemUsIHNpemUpO1xyXG4gICAgfTtcclxuICAgIGxldCBvdXRwdXRSZW5kZXJJbWFnZSA9ICgpID0+IHtcclxuICAgICAgICBjcmVhdGVJbWFnZUJpdG1hcChpbWcsIDAsIDAsIHNpemUsIHNpemUpXHJcbiAgICAgICAgICAgIC50aGVuKGltZyA9PiBjdHguZHJhd0ltYWdlKGltZywgMCwgMCwgY2Fudi53aWR0aCwgY2Fudi5oZWlnaHQpKTtcclxuICAgIH07XHJcbiAgICAvLyBsZXQgc2NlbmVYTUxGcm9tVGV4dGFyZWEgPSAoKSA9PiB7XHJcbiAgICAvLyAgIHRyeSB7XHJcbiAgICAvLyAgICAgc2NlbmUgPSBQYXJzZVhNTFRvU2NlbmUoc2NlbmVJbnB1dC52YWx1ZSk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5lcnJvcignc2NlbmVYTUxGcm9tVGV4dGFyZWEoKScsIGVycm9yKTtcclxuICAgIC8vICAgICAvL1RPRE8gcmVmYWN0b3IgY2xlYXJpbmcgb2YgYnV0dG9uXHJcbiAgICAvLyAgICAgWydidG4tcHJpbWFyeScsICdidG4tc3VjY2VzcycsICdidG4td2FybmluZycsICdidG4tZGFuZ2VyJ11cclxuICAgIC8vICAgICAgIC5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7IGVsYXBzZWRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9KTtcclxuICAgIC8vICAgICBlbGFwc2VkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1kYW5nZXInKTtcclxuICAgIC8vICAgICBlbGFwc2VkQnV0dG9uLnRleHRDb250ZW50ID0gJ0ludmFsaWQgWE1MJztcclxuICAgIC8vICAgICBzY2VuZSA9IGVtcHR5U2NlbmUoKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgcmVzaXplQ2FudmFzKCk7XHJcbiAgICAgICAgcmVzaXplVGV4dGFyZWEoKTtcclxuICAgICAgICBvdXRwdXRSZW5kZXJJbWFnZSgpO1xyXG4gICAgfSk7XHJcbiAgICBzY2VuZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAvLyBzY2VuZSA9IFtlbXB0eVNjZW5lLCBkZWZhdWx0U2NlbmUsIHNjZW5lMl1bcGFyc2VJbnQoc2NlbmVTZWxlY3Rvci52YWx1ZSldKCk7XHJcbiAgICAgICAgc2NlbmUgPSBkZWZhdWx0U2NlbmUoKTtcclxuICAgICAgICByZW5ld1JheXRyYWNlKCk7XHJcbiAgICAgICAgb3V0cHV0UmVuZGVySW1hZ2UoKTtcclxuICAgIH0pO1xyXG4gICAgcmVzU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGNoYW5nZVJlbmRlclNpemUoKTtcclxuICAgICAgICByZW5ld1JheXRyYWNlKCk7XHJcbiAgICAgICAgb3V0cHV0UmVuZGVySW1hZ2UoKTtcclxuICAgIH0pO1xyXG4gICAgcHJvY2Vzc29yU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIHByb2Nlc3NvclNlbGVjdG9yLnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICAvLyBUT0RPIEJvb3RzdHJhcCBwb3AgdXAgbm90aWNpZXNcclxuICAgIC8vIFRPRE8gd2Vid29ya2VyXHJcbiAgICByZW5kZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NlbGVjdG9yIHZhbHVlOicsIHByb2Nlc3NvclNlbGVjdG9yLnZhbHVlKTtcclxuICAgICAgICBsZXQgcHJvY2Vzc29yID0gcHJvY2Vzc29yc1twcm9jZXNzb3JTZWxlY3Rvci52YWx1ZV07XHJcbiAgICAgICAgaWYgKHByb2Nlc3Nvcikge1xyXG4gICAgICAgICAgICBwcm9jZXNzb3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbnZhbGlkIHByb2Nlc3NvciBzZWxlY3QgdmFsdWUuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjaGFuZ2VSZW5kZXJTaXplKCk7XHJcbiAgICByZW5ld1JheXRyYWNlKCk7XHJcbiAgICByZXNpemVDYW52YXMoKTtcclxuICAgIHJlc2l6ZVRleHRhcmVhKCk7XHJcbiAgICBvdXRwdXRSZW5kZXJJbWFnZSgpO1xyXG4gICAgY29uc3QgcHJvY2Vzc29ycyA9IHtcclxuICAgICAgICAnZ29sYW5nLWJhY2snOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB4bWwgPSBzY2VuZUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTYwMC9nZW5feG1sLnBuZz9cIiArIFwieG1sLXNjZW5lPVwiICsgZW5jb2RlVVJJKHhtbCksIHtcclxuICAgICAgICAgICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJhY2NlcHRcIjogXCJ0ZXh0L2h0bWwsYXBwbGljYXRpb24veGh0bWwreG1sLGFwcGxpY2F0aW9uL3htbDtxPTAuOSxpbWFnZS93ZWJwLGltYWdlL2FwbmcsKi8qO3E9MC44XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhY2NlcHQtbGFuZ3VhZ2VcIjogXCJlbi1VUyxlbjtxPTAuOVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwicmVmZXJyZXJQb2xpY3lcIjogXCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJib2R5XCI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBcIm1ldGhvZFwiOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgXCJtb2RlXCI6IFwiY29yc1wiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmJsb2IoKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGJsb2IgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gcmVqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbih2ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgICAgICBpLnNyYyA9IHY7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpLnNyYyk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7IGVyciB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAndHlwZXNjcmlwdC1iYWNrJzogKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgeG1sID0gc2NlbmVJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjEyMzQvZ2VuLmJtcD9cIiArIFwieG1sLXNjZW5lPVwiICsgZW5jb2RlVVJJKHhtbCksIHtcclxuICAgICAgICAgICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJhY2NlcHRcIjogXCJ0ZXh0L2h0bWwsYXBwbGljYXRpb24veGh0bWwreG1sLGFwcGxpY2F0aW9uL3htbDtxPTAuOSxpbWFnZS93ZWJwLGltYWdlL2FwbmcsKi8qO3E9MC44XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhY2NlcHQtbGFuZ3VhZ2VcIjogXCJlbi1VUyxlbjtxPTAuOVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwicmVmZXJyZXJQb2xpY3lcIjogXCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJib2R5XCI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBcIm1ldGhvZFwiOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgXCJtb2RlXCI6IFwiY29yc1wiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmJsb2IoKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGJsb2IgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gcmVqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbih2ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgICAgICBpLnNyYyA9IHY7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpLnNyYyk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7IGVyciB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAndHlwZXNjcmlwdC1mcm9udCc6ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gRnJvbnRcclxuICAgICAgICAgICAgLy8gc2NlbmVYTUxGcm9tVGV4dGFyZWEoKTtcclxuICAgICAgICAgICAgcmVuZXdSYXl0cmFjZSgpO1xyXG4gICAgICAgICAgICBvdXRwdXRSZW5kZXJJbWFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpO1xyXG5jb25zdCBnb2JhY2tQb3N0U3RyaW5nID0gYFxyXG5yZXM9NTEyJnhtbC1zY2VuZT0lM0NzY2VuZSUzRSUwRCUwQSsrJTNDY2FtZXJhK3BvcyUzRCUyMjMuMCUyQysyLjAlMkMrNC4wJTIyK2xvb2tBdCUzRCUyMi0xLjAlMkMrMC41JTJDKzAuMCUyMislMkYlM0UlMEQlMEErKyUzQ29iamVjdHMlM0UlMEQlMEErKysrJTNDcGxhbmUrbm9ybWFsJTNEJTIyMC4wJTJDMS4wJTJDMC4wJTIyK29mZnNldCUzRCUyMjAuMCUyMitzdXJmYWNlJTNEJTIyY2hlY2tlcmJvYXJkJTIyKyUyRiUzRSUwRCUwQSsrKyslM0NzcGhlcmUrcG9zJTNEJTIyMC4wJTJDMS4wJTJDLTAuMjUlMjIrc2l6ZSUzRCUyMjEuMCUyMitzdXJmYWNlJTNEJTIyc2hpbnklMjIlMkYlM0UlMEQlMEErKysrJTNDc3BoZXJlK3BvcyUzRCUyMi0xLjAlMkMwLjUlMkMxLjUlMjIrc2l6ZSUzRCUyMjAuNSUyMitzdXJmYWNlJTNEJTIyc2hpbnklMjIlMkYlM0UlMEQlMEErKysrJTNDc3BoZXJlK3BvcyUzRCUyMi01LjUlMkMyLjAlMkMtMy41JTIyK3NpemUlM0QlMjIxLjI1JTIyK3N1cmZhY2UlM0QlMjJjaGVja2VyYm9hcmQlMjIlMkYlM0UlMEQlMEErKyUzQyUyRm9iamVjdHMlM0UlMEQlMEErKyUzQ2xpZ2h0cyUzRSUwRCUwQSsrKyslM0NsaWdodCtwb3MlM0QlMjItMi4wJTJDKzIuNSUyQyswLjAlMjIrY29sb3IlM0QlMjIwLjQ5JTJDKzAuMDclMkMrMC4wNyUyMislMkYlM0UrJTBEJTBBKysrKyUzQ2xpZ2h0K3BvcyUzRCUyMjEuNSUyQysyLjUlMkMrMS41JTIyK2NvbG9yJTNEJTIyMC4wNyUyQyswLjA3JTJDKzAuNDklMjIrJTJGJTNFKyUwRCUwQSsrKyslM0NsaWdodCtwb3MlM0QlMjIxLjUlMkMrMi41JTJDKy0xLjUlMjIrY29sb3IlM0QlMjIwLjA3JTJDKzAuNDklMkMrMC4wNzElMjIrJTJGJTNFKyUwRCUwQSsrKyslM0NsaWdodCtwb3MlM0QlMjIwLjAlMkMrMy41JTJDKzAuMCUyMitjb2xvciUzRCUyMjAuMjElMkMrMC4yMSUyQyswLjM1JTIyKyUyRiUzRSslMEQlMEErKyUzQyUyRmxpZ2h0cyUzRSUwRCUwQSUzQyUyRnNjZW5lJTNFXHJcbmAudHJpbSgpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZWEJ3TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwyRndjQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeFBRVUZQTEZOQlFWTXNSVUZCUlN4RlFVRlRMRmxCUVZrc1JVRkJSU3hOUVVGTkxHOUNRVUZ2UWl4RFFVRkRPMEZCUjNCRkxIVkdRVUYxUmp0QlFVTjJSaXcwUkVGQk5FUTdRVUZETlVRc1UwRkJVeXhOUVVGTk8wbEJRMklzVFVGQlRTeEpRVUZKTEVkQlFYTkNMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTTdTVUZEZEVVc1RVRkJUU3hWUVVGVkxFZEJRWGRDTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03U1VGRk4wVXNUVUZCVFN4aFFVRmhMRWRCUVhOQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1NVRkRPVVVzVFVGQlRTeFhRVUZYTEVkQlFYTkNMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdTVUZETVVVc1RVRkJUU3hwUWtGQmFVSXNSMEZCYzBJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGRE8wbEJSWFJHTEUxQlFVMHNZVUZCWVN4SFFVRnhRaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMGxCUXk5RkxFMUJRVTBzV1VGQldTeEhRVUZ4UWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzBsQlJUZEZMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzVTBGQlV5eEZRVUZGTEVOQlFVTTdTVUZGYkVNc1NVRkJTU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOeVF5eEpRVUZKTEZGQlFWRXNTVUZCU1N4SlFVRkpMRVZCUVVVN1VVRkJSU3hQUVVGUE8wdEJRVVU3U1VGRmFrTXNTVUZCU1N4SFFVRkhMRWRCUVRaQ0xGRkJRVkVzUTBGQlF6dEpRVVUzUXl4NVEwRkJlVU03U1VGRGVrTXNTVUZCU1N4SlFVRlpMRU5CUVVNN1NVRkRha0lzU1VGQlNTeEhRVUZqTEVOQlFVTTdTVUZEYmtJc1NVRkJTU3hMUVVGTExFZEJRVlVzV1VGQldTeEZRVUZGTEVOQlFVTTdTVUZGYkVNc2JVTkJRVzFETzBsQlJXNURMRWxCUVVrc1lVRkJZU3hIUVVGSExFZEJRVWNzUlVGQlJUdFJRVU4yUWl4TlFVRk5MRXRCUVVzc1IwRkJSeXhYUVVGWExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZEYUVNc1UwRkJVeXhEUVVGRExHRkJRV0VzUTBGQlF5eExRVUZMTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRjRU1zVFVGQlRTeEhRVUZITEVkQlFVY3NWMEZCVnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRemxDTEdsQ1FVRnBRaXhEUVVGRExFZEJRVWNzUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnFReXhEUVVGRExFTkJRVU03U1VGRlJpeEpRVUZKTEdsQ1FVRnBRaXhIUVVGSExFTkJRVU1zUTBGQlV5eEZRVUZGTEVWQlFVVTdVVUZEY0VNc1lVRkJZU3hEUVVGRExGZEJRVmNzUjBGQlJ5eFpRVUZaTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF6dFJRVVZ3Uml4RFFVRkRMR0ZCUVdFc1JVRkJSU3hoUVVGaExFVkJRVVVzWVVGQllTeEZRVUZGTEZsQlFWa3NRMEZCUXp0aFFVTjRSQ3hQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVXNSMEZCUnl4aFFVRmhMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSWGhGTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1JVRkJSVHRaUVVOYUxHRkJRV0VzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8xTkJRek5ETzJGQlFVMHNTVUZCU1N4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRk8xbEJRMnhDTEdGQlFXRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzFOQlF6VkRPMkZCUVUwN1dVRkRUQ3hoUVVGaExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJRenRUUVVNMVF6dEpRVU5JTEVOQlFVTXNRMEZCUXp0SlFVVkdMRTFCUVUwc1dVRkJXU3hIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUTJoRkxFMUJRVTBzWTBGQll5eEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXp0SlFVVnFSeXhKUVVGSkxHZENRVUZuUWl4SFFVRkhMRWRCUVVjc1JVRkJSVHRSUVVNeFFpeEpRVUZKTEVkQlFVY3NVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU51UXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExHVkJRV1VzUTBGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRlRU1zUTBGQlF5eERRVUZETzBsQlJVWXNTVUZCU1N4cFFrRkJhVUlzUjBGQlJ5eEhRVUZITEVWQlFVVTdVVUZETTBJc2FVSkJRV2xDTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXp0aFFVTnlReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRjRVVzUTBGQlF5eERRVUZCTzBsQlIwUXNjVU5CUVhGRE8wbEJRM0pETEZWQlFWVTdTVUZEVml4cFJFRkJhVVE3U1VGRGFrUXNUVUZCVFR0SlFVTk9MRzlDUVVGdlFqdEpRVU53UWl4elJFRkJjMFE3U1VGRGRFUXNlVU5CUVhsRE8wbEJRM3BETEd0RlFVRnJSVHRKUVVOc1JTd3JSVUZCSzBVN1NVRkZMMFVzYVVSQlFXbEVPMGxCUTJwRUxHbEVRVUZwUkR0SlFVVnFSQ3cwUWtGQk5FSTdTVUZETlVJc1RVRkJUVHRKUVVOT0xFdEJRVXM3U1VGSlRDeE5RVUZOTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVkQlFVY3NSVUZCUlR0UlFVTnlReXhaUVVGWkxFVkJRVVVzUTBGQlF6dFJRVU5tTEdOQlFXTXNSVUZCUlN4RFFVRkRPMUZCUTJwQ0xHbENRVUZwUWl4RlFVRkZMRU5CUVVNN1NVRkRkRUlzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZGU0N4aFFVRmhMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVjc1JVRkJSVHRSUVVNMVF5d3JSVUZCSzBVN1VVRkRMMFVzUzBGQlN5eEhRVUZITEZsQlFWa3NSVUZCUlN4RFFVRkRPMUZCUTNaQ0xHRkJRV0VzUlVGQlJTeERRVUZETzFGQlEyaENMR2xDUVVGcFFpeEZRVUZGTEVOQlFVTTdTVUZEZEVJc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRlNDeFhRVUZYTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVkQlFVY3NSVUZCUlR0UlFVTXhReXhuUWtGQlowSXNSVUZCUlN4RFFVRkRPMUZCUTI1Q0xHRkJRV0VzUlVGQlJTeERRVUZETzFGQlEyaENMR2xDUVVGcFFpeEZRVUZGTEVOQlFVTTdTVUZEZEVJc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRlNDeHBRa0ZCYVVJc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4UlFVRlJMRVZCUVVVc1IwRkJSeXhGUVVGRk8xRkJRMmhFTEdsQ1FVRnBRaXhEUVVGRExFdEJRVXNzUTBGQlFUdEpRVU42UWl4RFFVRkRMRU5CUVVNc1EwRkJRVHRKUVVWR0xHbERRVUZwUXp0SlFVTnFReXhwUWtGQmFVSTdTVUZGYWtJc1dVRkJXU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRTlCUVU4c1JVRkJSU3hIUVVGSExFVkJRVVU3VVVGRE1VTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4cFFrRkJhVUlzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUVR0UlFVTjJSQ3hKUVVGSkxGTkJRVk1zUjBGQlJ5eFZRVUZWTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEY0VRc1NVRkJTU3hUUVVGVExFVkJRVVU3V1VGRFlpeFRRVUZUTEVWQlFVVXNRMEZCUXp0VFFVTmlPMkZCUVUwN1dVRkRUQ3hQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEdsRFFVRnBReXhEUVVGRExFTkJRVU03VTBGRGFFUTdTVUZEU0N4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVWSUxHZENRVUZuUWl4RlFVRkZMRU5CUVVNN1NVRkRia0lzWVVGQllTeEZRVUZGTEVOQlFVTTdTVUZEYUVJc1dVRkJXU3hGUVVGRkxFTkJRVU03U1VGRFppeGpRVUZqTEVWQlFVVXNRMEZCUXp0SlFVTnFRaXhwUWtGQmFVSXNSVUZCUlN4RFFVRkRPMGxCUlhCQ0xFMUJRVTBzVlVGQlZTeEhRVUZ2UXp0UlFVTnNSQ3hoUVVGaExFVkJRVVVzUjBGQlJ5eEZRVUZGTzFsQlEyeENMRWxCUVVrc1IwRkJSeXhIUVVGSExGVkJRVlVzUTBGQlF5eExRVUZMTEVOQlFVTTdXVUZETTBJc1MwRkJTeXhEUVVGRExHOURRVUZ2UXl4SFFVRkhMRmxCUVZrc1IwRkJSeXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdaMEpCUXpGRkxGTkJRVk1zUlVGQlJUdHZRa0ZEVkN4UlFVRlJMRVZCUVVVc2RVWkJRWFZHTzI5Q1FVTnFSeXhwUWtGQmFVSXNSVUZCUlN4blFrRkJaMEk3YVVKQlEzQkRPMmRDUVVORUxHZENRVUZuUWl4RlFVRkZMRFJDUVVFMFFqdG5Ra0ZET1VNc1RVRkJUU3hGUVVGRkxFbEJRVWs3WjBKQlExb3NVVUZCVVN4RlFVRkZMRXRCUVVzN1owSkJRMllzVFVGQlRTeEZRVUZGTEUxQlFVMDdZVUZEWml4RFFVRkRPMmxDUVVORExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dHBRa0ZEZGtJc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzJkQ1FVTllMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZMRVZCUVVVN2IwSkJRM0pETEUxQlFVMHNUVUZCVFN4SFFVRkhMRWxCUVVrc1ZVRkJWU3hGUVVGRkxFTkJRVUU3YjBKQlF5OUNMRTFCUVUwc1EwRkJReXhUUVVGVExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RFFVRlRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlFUdHZRa0ZEZGtRc1RVRkJUU3hEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVRTdiMEpCUTNaQ0xFMUJRVTBzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVFN1owSkJRelZDTEVOQlFVTXNRMEZCUXl4RFFVRkJPMWxCUTBvc1EwRkJReXhEUVVGRE8ybENRVU5FTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSVHRuUWtGRFVpeEpRVUZKTEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzJkQ1FVTjBReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZYTEVOQlFVTXNRMEZCUXp0blFrRkRiRUlzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlJXNUNMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXk5Q0xFTkJRVU1zUTBGQlF6dHBRa0ZEUkN4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3WjBKQlExZ3NUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEZGtJc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRFVDeERRVUZETzFGQlEwUXNhVUpCUVdsQ0xFVkJRVVVzUjBGQlJ5eEZRVUZGTzFsQlEzUkNMRWxCUVVrc1IwRkJSeXhIUVVGSExGVkJRVlVzUTBGQlF5eExRVUZMTEVOQlFVTTdXVUZETTBJc1MwRkJTeXhEUVVGRExHZERRVUZuUXl4SFFVRkhMRmxCUVZrc1IwRkJSeXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdaMEpCUTNSRkxGTkJRVk1zUlVGQlJUdHZRa0ZEVkN4UlFVRlJMRVZCUVVVc2RVWkJRWFZHTzI5Q1FVTnFSeXhwUWtGQmFVSXNSVUZCUlN4blFrRkJaMEk3YVVKQlEzQkRPMmRDUVVORUxHZENRVUZuUWl4RlFVRkZMRFJDUVVFMFFqdG5Ra0ZET1VNc1RVRkJUU3hGUVVGRkxFbEJRVWs3WjBKQlExb3NVVUZCVVN4RlFVRkZMRXRCUVVzN1owSkJRMllzVFVGQlRTeEZRVUZGTEUxQlFVMDdZVUZEWml4RFFVRkRPMmxDUVVORExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dHBRa0ZEZGtJc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzJkQ1FVTllMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZMRVZCUVVVN2IwSkJRM0pETEUxQlFVMHNUVUZCVFN4SFFVRkhMRWxCUVVrc1ZVRkJWU3hGUVVGRkxFTkJRVUU3YjBKQlF5OUNMRTFCUVUwc1EwRkJReXhUUVVGVExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RFFVRlRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlFUdHZRa0ZEZGtRc1RVRkJUU3hEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVRTdiMEpCUTNaQ0xFMUJRVTBzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVFN1owSkJRelZDTEVOQlFVTXNRMEZCUXl4RFFVRkJPMWxCUTBvc1EwRkJReXhEUVVGRE8ybENRVU5FTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSVHRuUWtGRFVpeEpRVUZKTEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzJkQ1FVTjBReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZYTEVOQlFVTXNRMEZCUXp0blFrRkRiRUlzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlJXNUNMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXk5Q0xFTkJRVU1zUTBGQlF6dHBRa0ZEUkN4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3WjBKQlExZ3NUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEZGtJc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRFVDeERRVUZETzFGQlEwUXNhMEpCUVd0Q0xFVkJRVVVzUjBGQlJ5eEZRVUZGTzFsQlEzWkNMRkZCUVZFN1dVRkRVaXd3UWtGQk1FSTdXVUZETVVJc1lVRkJZU3hGUVVGRkxFTkJRVU03V1VGRGFFSXNhVUpCUVdsQ0xFVkJRVVVzUTBGQlF6dFJRVU4wUWl4RFFVRkRPMHRCUTBZc1EwRkJRVHRCUVVWSUxFTkJRVU03UVVGRlJDeE5RVUZOTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVFVGQlRTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMEZCUlhoRExFMUJRVTBzWjBKQlFXZENMRWRCUVVjN08wTkJSWGhDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNaWZRPT0iXSwic291cmNlUm9vdCI6IiJ9