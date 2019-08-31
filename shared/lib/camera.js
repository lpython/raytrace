"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vector_1 = require("./vector");
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