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
var raytrace_1 = __importDefault(require("./raytrace"));
var camera_1 = __importDefault(require("./camera"));
exports.Camera = camera_1.default;
var vector_1 = __importDefault(require("./vector"));
exports.Vector = vector_1.default;
var scene_1 = require("./scene");
exports.defaultScene = scene_1.defaultScene;
exports.scene2 = scene_1.scene2;
exports.emptyScene = scene_1.emptyScene;
var sceneXML_1 = __importStar(require("./sceneXML"));
exports.ParseSceneXML = sceneXML_1.default;
exports.DefaultXML = sceneXML_1.DefaultXML;
var Surfaces = __importStar(require("./surface"));
exports.Surfaces = Surfaces;
var things_1 = require("./things");
exports.Sphere = things_1.Sphere;
exports.Plane = things_1.Plane;
exports.default = raytrace_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQW1DO0FBQ25DLG9EQUE4QjtBQVM1QixpQkFUSyxnQkFBTSxDQVNMO0FBUlIsb0RBQThCO0FBUzVCLGlCQVRLLGdCQUFNLENBU0w7QUFSUixpQ0FBMkQ7QUFTekQsdUJBVE8sb0JBQVksQ0FTUDtBQUFFLGlCQVRPLGNBQU0sQ0FTUDtBQUFFLHFCQVRPLGtCQUFVLENBU1A7QUFSbEMscURBQXVEO0FBU3JELHdCQVRLLGtCQUFhLENBU0w7QUFBRSxxQkFUTyxxQkFBVSxDQVNQO0FBUjNCLGtEQUFzQztBQVNwQyw0QkFBUTtBQVJWLG1DQUF5QztBQVN2QyxpQkFUTyxlQUFNLENBU1A7QUFBRSxnQkFUTyxjQUFLLENBU1A7QUFQZixrQkFBZSxrQkFBUyxDQUFDIn0=