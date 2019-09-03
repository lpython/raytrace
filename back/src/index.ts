import path from 'path';

import express from 'express';
import bmp from 'bmp-js';

import cors from 'cors';
 

import RayTracer, { defaultScene } from '@python36/raytrace';

const PORT = process.env.PORT || 1234;

const int = (s: string) => {
  try {
    return parseInt(s);
  } catch (err) {
    throw new Error('Failed To Parse ');
  }
}

express()
  .use(cors())
  .use(express.static(path.join(__dirname, '/../', 'public')))
  .get('/gen.bmp', (req, res) => {
    const width = req.query.width ? Math.max(int(req.query.width),128) : 128;
    const height = req.query.height ? Math.max(int(req.query.height),128) : 128;

    const img = {
      width,
      height,
      data: new Uint8ClampedArray(width * height * 4)
    };
    
    const rayTracer = new RayTracer();
    rayTracer.renderToImage(defaultScene(), img);
    
    ABGRtoRGBA(img.data);

    res.contentType('image/bmp');
    res.send(bmp.encode(img).data);

  })
  // .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))

function ABGRtoRGBA(imageData: Uint8ClampedArray) {
  for (let i = 0; i < imageData.length; i += 4) {
    let r = imageData[i]; let g = imageData[i + 1]; let b = imageData[i + 2]; let a = imageData[i + 3];
    imageData[i] = a; imageData[i + 1] = b; imageData[i + 2] = g; imageData[i + 3] = r;
  }
}