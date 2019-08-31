import RayTracer from "./raytrace";
import Camera from './camera';
import Vector from "./vector";
import Scene, { defaultScene, scene2, emptyScene } from './scene';
// import ParseSceneXML, { DefaultXML } from './sceneXML';
import * as Surfaces from './surface';
import { Sphere, Plane } from './things';

export default RayTracer;
export { 
  Camera,
  Vector,
  Scene, defaultScene, scene2, emptyScene,
  // ParseSceneXML, DefaultXML,
  Surfaces,
  Sphere, Plane
};
