"use strict";
// const express = require('express');
// const path = require('path');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var bmp_js_1 = __importDefault(require("bmp-js"));
var raytrace_1 = __importDefault(require("./raytrace"));
var scene_1 = require("./scene");
var PORT = process.env.PORT || 1234;
var int = function (s) {
    try {
        return parseInt(s);
    }
    catch (err) {
        throw new Error('Failed To Parse ');
    }
};
express_1.default()
    .use(express_1.default.static(path_1.default.join(__dirname, '/../', 'public')))
    .get('/gen.bmp', function (req, res) {
    var width = req.query.width ? Math.max(int(req.query.width), 128) : 128;
    var height = req.query.height ? Math.max(int(req.query.height), 128) : 128;
    var img = {
        width: width,
        height: height,
        data: new Uint8ClampedArray(width * height * 4)
    };
    var rayTracer = new raytrace_1.default();
    rayTracer.renderToImage(scene_1.defaultScene(), img);
    ABGRtoRGBA(img.data);
    res.contentType('image/bmp');
    res.send(bmp_js_1.default.encode(img).data);
})
    // .get('/cool', (req, res) => res.send(cool()))
    .listen(PORT, function () { return console.log("Listening on " + PORT); });
function ABGRtoRGBA(imageData) {
    for (var i = 0; i < imageData.length; i += 4) {
        var r = imageData[i];
        var g = imageData[i + 1];
        var b = imageData[i + 2];
        var a = imageData[i + 3];
        imageData[i] = a;
        imageData[i + 1] = b;
        imageData[i + 2] = g;
        imageData[i + 3] = r;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL3dlYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXNDO0FBQ3RDLGdDQUFnQzs7Ozs7QUFFaEMsb0RBQThCO0FBQzlCLDhDQUF3QjtBQUV4QixrREFBeUI7QUFFekIsd0RBQW1DO0FBQ25DLGlDQUF1QztBQUd2QyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7QUFFdEMsSUFBTSxHQUFHLEdBQUcsVUFBQyxDQUFTO0lBQ3BCLElBQUk7UUFDRixPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNwQjtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1osTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0tBQ3JDO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsaUJBQU8sRUFBRTtLQUNOLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUMzRCxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDeEIsSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUN6RSxJQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBRTVFLElBQU0sR0FBRyxHQUFHO1FBQ1YsS0FBSyxPQUFBO1FBQ0wsTUFBTSxRQUFBO1FBQ04sSUFBSSxFQUFFLElBQUksaUJBQWlCLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7S0FDaEQsQ0FBQztJQUVGLElBQU0sU0FBUyxHQUFHLElBQUksa0JBQVMsRUFBRSxDQUFDO0lBQ2xDLFNBQVMsQ0FBQyxhQUFhLENBQUMsb0JBQVksRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRTdDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFckIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWpDLENBQUMsQ0FBQztJQUNGLGdEQUFnRDtLQUMvQyxNQUFNLENBQUMsSUFBSSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFnQixJQUFNLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFBO0FBRTFELFNBQVMsVUFBVSxDQUFDLFNBQTRCO0lBQzlDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDNUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25HLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDcEY7QUFDSCxDQUFDIn0=