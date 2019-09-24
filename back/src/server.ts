import path from 'path';

import express from 'express';
import bodyParser from 'body-parser';
import bmp from 'bmp-js';

import cors from 'cors';

import RayTracer, { defaultScene } from '@python36/raytrace';
import { xmlToScene, samples } from '@python36/scene-xml';

const PORT = process.env.PORT || 1234;

const int = (s: string) => {
  try {
    return parseInt(s);
  } catch (err) {
    throw new Error('Failed To Parse ');
  }
}

const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, '/../', 'public')))
app.use(bodyParser.json())

app.get('/gen.bmp', (req, res) => {
  const width = req.query.width ? Math.max(int(req.query.width),128) : 128;
  const height = req.query.height ? Math.max(int(req.query.height),128) : 128;

  const img = {
    width,
    height,
    data: new Uint8ClampedArray(width * height * 4)
  };
  
  const rayTracer = new RayTracer();
  rayTracer.renderToImage(defaultScene(), img);
  
  RGBAtoABGR(img.data);

  res.contentType('image/bmp');
  res.send(bmp.encode(img).data);

})

app.post('/gen_xml', (req, res) => {
  const width = req.body.width ? Math.max(req.body.width,128) : 128;
  const height = req.body.height ? Math.max(req.body.height,128) : 128;

  const img = {
    width,
    height,
    data: new Uint8ClampedArray(width * height * 4)
  };

  const rayTracer = new RayTracer();
  const scene = xmlToScene(req.body.scene);
  rayTracer.renderToImage(scene, img);
  
  RGBAtoABGR(img.data);

  res.contentType('image/bmp');
  res.send(bmp.encode(img).data);

})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))

function RGBAtoABGR(imageData: Uint8ClampedArray) {
  for (let i = 0; i < imageData.length; i += 4) {
    let r = imageData[i]; let g = imageData[i + 1]; let b = imageData[i + 2]; let a = imageData[i + 3];
    imageData[i] = a; imageData[i + 1] = b; imageData[i + 2] = g; imageData[i + 3] = r;
  }
}