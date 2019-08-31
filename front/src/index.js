"use strict";
// const express = require('express');
// const path = require('path');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const bmp_js_1 = __importDefault(require("bmp-js"));
const raytrace_1 = __importDefault(require("../lib/raytrace"));
const scene_1 = require("../lib/scene");
const PORT = process.env.PORT || 1234;
const int = (s) => {
    try {
        return parseInt(s);
    }
    catch (err) {
        throw new Error('Failed To Parse ');
    }
};
express_1.default()
    .use(express_1.default.static(path_1.default.join(__dirname, '/../', 'public')))
    .get('/gen.bmp', (req, res) => {
    const width = req.query.width ? Math.max(int(req.query.width), 128) : 128;
    const height = req.query.height ? Math.max(int(req.query.height), 128) : 128;
    const img = {
        width,
        height,
        data: new Uint8ClampedArray(width * height * 4)
    };
    const rayTracer = new raytrace_1.default();
    rayTracer.renderToImage(scene_1.defaultScene(), img);
    ABGRtoRGBA(img.data);
    res.contentType('image/bmp');
    res.send(bmp_js_1.default.encode(img).data);
})
    // .get('/cool', (req, res) => res.send(cool()))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));
function ABGRtoRGBA(imageData) {
    for (let i = 0; i < imageData.length; i += 4) {
        let r = imageData[i];
        let g = imageData[i + 1];
        let b = imageData[i + 2];
        let a = imageData[i + 3];
        imageData[i] = a;
        imageData[i + 1] = b;
        imageData[i + 2] = g;
        imageData[i + 3] = r;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXNDO0FBQ3RDLGdDQUFnQzs7Ozs7QUFFaEMsc0RBQThCO0FBQzlCLGdEQUF3QjtBQUV4QixvREFBeUI7QUFFekIsK0RBQXdDO0FBQ3hDLHdDQUE0QztBQUc1QyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7QUFFdEMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRTtJQUN4QixJQUFJO1FBQ0YsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDcEI7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztLQUNyQztBQUNILENBQUMsQ0FBQTtBQUVELGlCQUFPLEVBQUU7S0FDTixHQUFHLENBQUMsaUJBQU8sQ0FBQyxNQUFNLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7S0FDM0QsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUM1QixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3pFLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFFNUUsTUFBTSxHQUFHLEdBQUc7UUFDVixLQUFLO1FBQ0wsTUFBTTtRQUNOLElBQUksRUFBRSxJQUFJLGlCQUFpQixDQUFDLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0tBQ2hELENBQUM7SUFFRixNQUFNLFNBQVMsR0FBRyxJQUFJLGtCQUFTLEVBQUUsQ0FBQztJQUNsQyxTQUFTLENBQUMsYUFBYSxDQUFDLG9CQUFZLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUU3QyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXJCLEdBQUcsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVqQyxDQUFDLENBQUM7SUFDRixnREFBZ0Q7S0FDL0MsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFFMUQsU0FBUyxVQUFVLENBQUMsU0FBNEI7SUFDOUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUM1QyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNwRjtBQUNILENBQUMifQ==