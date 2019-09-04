
import {
  Vector,
  Light, 
  Color, 
  Camera,
  Scene, defaultScene, scene2, emptyScene,
  Surfaces,
  Thing, Sphere, Plane
} from '@python36/raytrace';

import JSDOMParser from 'dom-parser';

console.log('JSDOMParser : ', JSDOMParser)


// Throws error on invalid xml
export default function ParseXMLToScene(xmlInput: string): Scene {
  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlInput, 'application/xml');
  console.log('xml', xml);
  const parserErrorNode = xml.getElementsByTagName('parsererror');
  if (parserErrorNode.length != 0) {
    throw new SyntaxError();
  }

  const objects: Thing[] = [];
  const lights: Light[] = [];
  let camera = new Camera(new Vector(3.0, 2.0, 4.0), new Vector(-1.0, 0.5, 0.0));

  //Level 1
  const sceneNode = xml.getElementsByTagName('scene')[0];
  // console.log(sceneNode);
  //Level 2
  const cameraNode = sceneNode.getElementsByTagName('camera')[0];
  const objectsNode = sceneNode.getElementsByTagName('objects')[0];
  const lightsNode = sceneNode.getElementsByTagName('lights')[0];
  //Level 3
  const planeNodes = objectsNode.getElementsByTagName('plane');
  const sphereNodes = objectsNode.getElementsByTagName('sphere');
  const lightNodes = lightsNode.getElementsByTagName('light');

  // xml nodes to typescript objects

  for (let p of <any>planeNodes) {
    const requiredAttributes = ['pos', 'offset', 'surface'];
    if (requiredAttributes.every(a => p.hasAttribute(a))) {
      const posAtt = <string>p.getAttribute('pos');
      const offsetAtt = <string>p.getAttribute('offset');
      const surfaceAtt = <string>p.getAttribute('surface');

      const numbers = posAtt.split(',').slice(0, 3).map(s => parseFloat(s));
      const vec = new Vector(numbers[0], numbers[1], numbers[2]);
      const offset = parseFloat(offsetAtt);
      let surface = Surfaces.checkerboard;
      if (surfaceAtt === 'shiny') {
        surface = Surfaces.shiny;
      }

      // console.log('vec:', vec);
      // console.log('numbers:', numbers);
      // console.log('offset:', offset);
      // console.log('surface:', surface);

      objects.push(new Plane(vec, offset, surface));
    }
  }

  for (let s of <any>sphereNodes) {
    const requiredAttributes = ['pos', 'size', 'surface'];
    if (requiredAttributes.every(a => s.hasAttribute(a))) {
      const posAtt = <string>s.getAttribute('pos');
      const sizeAtt = <string>s.getAttribute('size');
      const surfaceAtt = <string>s.getAttribute('surface');
      console.log({ posAtt, sizeAtt, surfaceAtt });
      const numbers = posAtt.split(',').slice(0, 3).map(s => parseFloat(s));
      const vec = new Vector(numbers[0], numbers[1], numbers[2]);
      const size = parseFloat(sizeAtt);
      let surface = Surfaces.checkerboard;
      if (surfaceAtt === 'shiny') {
        surface = Surfaces.shiny;
      }

      // console.log('vec:', vec);
      // console.log('numbers:', numbers);
      // console.log('size:', size);
      // console.log('surface:', surface);

      objects.push(new Sphere(vec, size, surface));
    }
  }


  for (let l of <any>lightNodes) {
    const requiredAttributes = ['pos', 'color'];
    if (requiredAttributes.every(a => l.hasAttribute(a))) {
      const posAtt = <string>l.getAttribute('pos');
      const colorAtt = <string>l.getAttribute('color');
      console.log({ posAtt, colorAtt });
      const numbers = posAtt.split(',').slice(0, 3).map(s => parseFloat(s));
      const vec = new Vector(numbers[0], numbers[1], numbers[2]);
      const color = colorAtt.split(',').slice(0, 3).map(s => parseFloat(s));

      // console.log('vec:', vec);
      // console.log('numbers:', numbers);
      // console.log('color:', color);

      lights.push({ pos: vec, color: new Color(color[0], color[1], color[2]) });
    }
  }

  (function parseLight(cameraNode: Element) {
    console.log(cameraNode);
    const requiredAttributes = ['pos', 'lookAt'];
    if (requiredAttributes.every(a => cameraNode.hasAttribute(a))) {
      const posAtt = <string>cameraNode.getAttribute('pos');
      const lookAtAtt = <string>cameraNode.getAttribute('lookAt');
      console.log({ posAtt, lookAtAtt });
      let numbers = posAtt.split(',').slice(0, 3).map(s => parseFloat(s));
      const pos = new Vector(numbers[0], numbers[1], numbers[2]);
      numbers = lookAtAtt.split(',').slice(0, 3).map(s => parseFloat(s));
      const lookAt = new Vector(numbers[0], numbers[1], numbers[2]);

      // console.log({ pos, lookAt })

      camera = new Camera(pos, lookAt);
    }
  })(cameraNode);

  console.log(objects);
  console.log(lights);

  const scene = {
    things: objects,
    lights: lights,
    camera
  };

  console.log('parsed scene : ', scene);
  return scene;
}

export const basicSceneXML: string = 
// export function DefaultXML(): string {
//  return 
  `
<scene>
  <camera pos="3.0, 2.0, 4.0" lookAt="-1.0, 0.5, 0.0" />
  <objects>
    <plane pos="0.0,1.0,0.0" offset="0.0" surface="checkerboard" />
    <sphere pos="0.0,1.0,-0.25" size="1.0" surface="shiny"/>
    <sphere pos="-1.0,0.5,1.5" size="0.5" surface="shiny"/>
    <sphere pos="-5.5,2.0,-3.5" size="1.25" surface="checkerboard"/>
  </objects>
  <lights>
    <light pos="-2.0, 2.5, 0.0" color="0.49, 0.07, 0.07" /> 
    <light pos="1.5, 2.5, 1.5" color="0.07, 0.07, 0.49" /> 
    <light pos="1.5, 2.5, -1.5" color="0.07, 0.49, 0.071" /> 
    <light pos="0.0, 3.5, 0.0" color="0.21, 0.21, 0.35" /> 
  </lights>
</scene>
  `.trim();
//}

