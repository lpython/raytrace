"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = require("./color");
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