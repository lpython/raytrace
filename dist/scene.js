"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = __importDefault(require("./vector"));
var color_1 = __importDefault(require("./color"));
var things_1 = require("./things");
var camera_1 = __importDefault(require("./camera"));
var Surfaces = __importStar(require("./surface"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NlbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvc2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQThCO0FBQzlCLGtEQUE0QjtBQUU1QixtQ0FBeUM7QUFDekMsb0RBQThCO0FBQzlCLGtEQUFzQztBQVV0QyxTQUFnQixZQUFZO0lBQzFCLE9BQU87UUFDTCxNQUFNLEVBQUU7WUFDTixJQUFJLGNBQUssQ0FBQyxJQUFJLGdCQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLFlBQVksQ0FBQztZQUNoRSxJQUFJLGVBQU0sQ0FBQyxJQUFJLGdCQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzVELElBQUksZUFBTSxDQUFDLElBQUksZ0JBQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUM7U0FDNUQ7UUFDRCxNQUFNLEVBQUU7WUFDTixFQUFFLEdBQUcsRUFBRSxJQUFJLGdCQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLGVBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ3ZFLEVBQUUsR0FBRyxFQUFFLElBQUksZ0JBQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLGVBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ3RFLEVBQUUsR0FBRyxFQUFFLElBQUksZ0JBQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUs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