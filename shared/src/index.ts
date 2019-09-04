import RayTracer from './raytrace';
import Vector from './vector';
import { Light } from './ray';
import Camera from './camera';
import Color from './color';
import * as Surfaces from './surface';
import Thing, { Sphere, Plane } from './things';
import Scene, { defaultScene, scene2, emptyScene } from './scene';

export default RayTracer;
export { 
  Vector,
  Light,
  Camera,
  Color,
  Surfaces,
  Thing, Sphere, Plane,
  Scene, defaultScene, scene2, emptyScene
};
