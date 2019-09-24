
import Raytrace, { Scene } from '@python36/raytrace'
import { xmlToScene } from '@python36/scene-xml';
import * as bmp from 'bmp-js';


export interface SceneProcessors {
  [index: string] : (xml: string, size: number) => Promise<string>
}

export const sceneProcessors: SceneProcessors = {
  'typescript-back': (xml, size): Promise<string> => {
    let json = JSON.stringify({
      scene: xml, 
      width: size,
      height: size
    });

    return fetch("/gen_xml", {
      "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json"
      },
      "referrerPolicy": "no-referrer-when-downgrade",
      "body": json,
      "method": "POST",
      "mode": "cors"
    })
      .then(res => res.blob())
      .then(blob => URL.createObjectURL(blob))
  }, 

  'typescript-front': (xml, size): Promise<string> => {

    console.log('typescript-front')

    let scene: Scene | undefined;
    
    try {
      scene = xmlToScene(xml);
    }
    catch (error) {
      console.error('Error during XML parsing:', error);
      return Promise.reject(error);
    }

    const raytracer = new Raytrace();
    const imageData = new ImageData(size, size);

    raytracer.renderToImage(scene, imageData);
    RGBAtoABGR(imageData.data);
    const { data: buffer } = bmp.encode(imageData);
    let newBlob = new Blob([buffer], {type: 'image/bmp'});
    let url = URL.createObjectURL(newBlob);
    return Promise.resolve(url);
  },
  
  // 'golang-back': (xml, size) => {
  //   fetch("http://localhost:5600/gen_xml.png?" + "xml-scene=" + encodeURI(xml), {
  //     "headers": {
  //       "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
  //       "accept-language": "en-US,en;q=0.9",
  //     },
  //     "referrerPolicy": "no-referrer-when-downgrade",
  //     "body": null,
  //     "method": "GET",
  //     "mode": "cors"
  //   })
  //     .then(res => res.blob())
  //     .then(blob => {
  //       return new Promise((resolve, reject) => {
  //         const reader = new FileReader()
  //         reader.onloadend = () => resolve(<string>reader.result)
  //         reader.onerror = reject
  //         reader.readAsDataURL(blob)
  //       })
  //     })
  //     .then(v => {
  //       let i = document.createElement('img');
  //       i.src = <string>v;
  //       console.log(i.src);

  //       document.body.appendChild(i);
  //     })
  //     .catch(err => {
  //       console.log({ err });
  //     });
  // }
};

function RGBAtoABGR(imageData: Uint8ClampedArray) {
  for (let i = 0; i < imageData.length; i += 4) {
    let r = imageData[i]; let g = imageData[i + 1]; let b = imageData[i + 2]; let a = imageData[i + 3];
    imageData[i] = a; imageData[i + 1] = b; imageData[i + 2] = g; imageData[i + 3] = r;
  }
}