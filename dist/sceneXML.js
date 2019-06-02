"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Surfaces = __importStar(require("./surface"));
var things_1 = require("./things");
var vector_1 = __importDefault(require("./vector"));
var camera_1 = __importDefault(require("./camera"));
var color_1 = __importDefault(require("./color"));
// Throws error on invalid xml
function ParseXMLToScene(xmlInput) {
    var parser = new DOMParser();
    var xml = parser.parseFromString(xmlInput, 'application/xml');
    console.log('xml', xml);
    var parserErrorNode = xml.getElementsByTagName('parsererror');
    if (parserErrorNode.length != 0) {
        throw new SyntaxError();
    }
    var objects = [];
    var lights = [];
    var camera = new camera_1.default(new vector_1.default(3.0, 2.0, 4.0), new vector_1.default(-1.0, 0.5, 0.0));
    //Level 1
    var sceneNode = xml.getElementsByTagName('scene')[0];
    // console.log(sceneNode);
    //Level 2
    var cameraNode = sceneNode.getElementsByTagName('camera')[0];
    var objectsNode = sceneNode.getElementsByTagName('objects')[0];
    var lightsNode = sceneNode.getElementsByTagName('lights')[0];
    //Level 3
    var planeNodes = objectsNode.getElementsByTagName('plane');
    var sphereNodes = objectsNode.getElementsByTagName('sphere');
    var lightNodes = lightsNode.getElementsByTagName('light');
    var _loop_1 = function (p) {
        var requiredAttributes = ['pos', 'offset', 'surface'];
        if (requiredAttributes.every(function (a) { return p.hasAttribute(a); })) {
            var posAtt = p.getAttribute('pos');
            var offsetAtt = p.getAttribute('offset');
            var surfaceAtt = p.getAttribute('surface');
            var numbers = posAtt.split(',').slice(0, 3).map(function (s) { return parseFloat(s); });
            var vec = new vector_1.default(numbers[0], numbers[1], numbers[2]);
            var offset = parseFloat(offsetAtt);
            var surface = Surfaces.checkerboard;
            if (surfaceAtt === 'shiny') {
                surface = Surfaces.shiny;
            }
            // console.log('vec:', vec);
            // console.log('numbers:', numbers);
            // console.log('offset:', offset);
            // console.log('surface:', surface);
            objects.push(new things_1.Plane(vec, offset, surface));
        }
    };
    // xml nodes to typescript objects
    for (var _i = 0, _a = planeNodes; _i < _a.length; _i++) {
        var p = _a[_i];
        _loop_1(p);
    }
    var _loop_2 = function (s) {
        var requiredAttributes = ['pos', 'size', 'surface'];
        if (requiredAttributes.every(function (a) { return s.hasAttribute(a); })) {
            var posAtt = s.getAttribute('pos');
            var sizeAtt = s.getAttribute('size');
            var surfaceAtt = s.getAttribute('surface');
            console.log({ posAtt: posAtt, sizeAtt: sizeAtt, surfaceAtt: surfaceAtt });
            var numbers = posAtt.split(',').slice(0, 3).map(function (s) { return parseFloat(s); });
            var vec = new vector_1.default(numbers[0], numbers[1], numbers[2]);
            var size = parseFloat(sizeAtt);
            var surface = Surfaces.checkerboard;
            if (surfaceAtt === 'shiny') {
                surface = Surfaces.shiny;
            }
            // console.log('vec:', vec);
            // console.log('numbers:', numbers);
            // console.log('size:', size);
            // console.log('surface:', surface);
            objects.push(new things_1.Sphere(vec, size, surface));
        }
    };
    for (var _b = 0, _c = sphereNodes; _b < _c.length; _b++) {
        var s = _c[_b];
        _loop_2(s);
    }
    var _loop_3 = function (l) {
        var requiredAttributes = ['pos', 'color'];
        if (requiredAttributes.every(function (a) { return l.hasAttribute(a); })) {
            var posAtt = l.getAttribute('pos');
            var colorAtt = l.getAttribute('color');
            console.log({ posAtt: posAtt, colorAtt: colorAtt });
            var numbers = posAtt.split(',').slice(0, 3).map(function (s) { return parseFloat(s); });
            var vec = new vector_1.default(numbers[0], numbers[1], numbers[2]);
            var color = colorAtt.split(',').slice(0, 3).map(function (s) { return parseFloat(s); });
            // console.log('vec:', vec);
            // console.log('numbers:', numbers);
            // console.log('color:', color);
            lights.push({ pos: vec, color: new color_1.default(color[0], color[1], color[2]) });
        }
    };
    for (var _d = 0, _e = lightNodes; _d < _e.length; _d++) {
        var l = _e[_d];
        _loop_3(l);
    }
    (function parseLight(cameraNode) {
        console.log(cameraNode);
        var requiredAttributes = ['pos', 'lookAt'];
        if (requiredAttributes.every(function (a) { return cameraNode.hasAttribute(a); })) {
            var posAtt = cameraNode.getAttribute('pos');
            var lookAtAtt = cameraNode.getAttribute('lookAt');
            console.log({ posAtt: posAtt, lookAtAtt: lookAtAtt });
            var numbers = posAtt.split(',').slice(0, 3).map(function (s) { return parseFloat(s); });
            var pos = new vector_1.default(numbers[0], numbers[1], numbers[2]);
            numbers = lookAtAtt.split(',').slice(0, 3).map(function (s) { return parseFloat(s); });
            var lookAt = new vector_1.default(numbers[0], numbers[1], numbers[2]);
            // console.log({ pos, lookAt })
            camera = new camera_1.default(pos, lookAt);
        }
    })(cameraNode);
    console.log(objects);
    console.log(lights);
    var scene = {
        things: objects,
        lights: lights,
        camera: camera
    };
    console.log('parsed scene : ', scene);
    return scene;
}
exports.default = ParseXMLToScene;
function DefaultXML() {
    return "\n<scene>\n  <camera pos=\"3.0, 2.0, 4.0\" lookAt=\"-1.0, 0.5, 0.0\" />\n  <objects>\n    <plane pos=\"0.0,1.0,0.0\" offset=\"0.0\" surface=\"checkerboard\" />\n    <sphere pos=\"0.0,1.0,-0.25\" size=\"1.0\" surface=\"shiny\"/>\n    <sphere pos=\"-1.0,0.5,1.5\" size=\"0.5\" surface=\"shiny\"/>\n    <sphere pos=\"-5.5,2.0,-3.5\" size=\"1.25\" surface=\"checkerboard\"/>\n  </objects>\n  <lights>\n    <light pos=\"-2.0, 2.5, 0.0\" color=\"0.49, 0.07, 0.07\" /> \n    <light pos=\"1.5, 2.5, 1.5\" color=\"0.07, 0.07, 0.49\" /> \n    <light pos=\"1.5, 2.5, -1.5\" color=\"0.07, 0.49, 0.071\" /> \n    <light pos=\"0.0, 3.5, 0.0\" color=\"0.21, 0.21, 0.35\" /> \n  </lights>\n</scene>\n  ".trim();
}
exports.DefaultXML = DefaultXML;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NlbmVYTUwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvc2NlbmVYTUwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQXNDO0FBRXRDLG1DQUF5QztBQUN6QyxvREFBOEI7QUFDOUIsb0RBQThCO0FBQzlCLGtEQUE0QjtBQUk1Qiw4QkFBOEI7QUFDOUIsU0FBd0IsZUFBZSxDQUFDLFFBQWdCO0lBQ3RELElBQU0sTUFBTSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7SUFDL0IsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4QixJQUFNLGVBQWUsR0FBRyxHQUFHLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEUsSUFBSSxlQUFlLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtRQUMvQixNQUFNLElBQUksV0FBVyxFQUFFLENBQUM7S0FDekI7SUFFRCxJQUFNLE9BQU8sR0FBWSxFQUFFLENBQUM7SUFDNUIsSUFBTSxNQUFNLEdBQVksRUFBRSxDQUFDO0lBQzNCLElBQUksTUFBTSxHQUFHLElBQUksZ0JBQU0sQ0FBQyxJQUFJLGdCQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLGdCQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFL0UsU0FBUztJQUNULElBQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCwwQkFBMEI7SUFDMUIsU0FBUztJQUNULElBQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENB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