import Vector from './vector';
import Color from './color';
import Thing from './things';
import { Plane, Sphere } from './things';
import Camera from './camera';
import * as Surfaces from './surface';
import { Light } from './ray';


export default interface Scene {
  things: Thing[];
  lights: Light[];
  camera: Camera;
}

export function defaultScene(): Scene {
  return {
    things: [
      new Plane(new Vector(0.0, 1.0, 0.0), 0.0, Surfaces.checkerboard),
      new Sphere(new Vector(0.0, 1.0, -0.25), 1.0, Surfaces.shiny),
      new Sphere(new Vector(-1.0, 0.5, 1.5), 0.5, Surfaces.shiny)
    ],
    lights: [
      { pos: new Vector(-2.0, 2.5, 0.0), color: new Color(0.49, 0.07, 0.07) },
      { pos: new Vector(1.5, 2.5, 1.5), color: new Color(0.07, 0.07, 0.49) },
      { pos: new Vector(1.5, 2.5, -1.5), color: new Color(0.07, 0.49, 0.071) },
      { pos: new Vector(0.0, 3.5, 0.0), color: new Color(0.21, 0.21, 0.35) }
    ],
    camera: new Camera(new Vector(3.0, 2.0, 4.0), new Vector(-1.0, 0.5, 0.0))
  };
}

export function scene2(): Scene {
  return {
    things: [
      new Plane(new Vector(0.0, 1.0, 0.0), 0.0, Surfaces.checkerboard),
      new Sphere(new Vector(0.0, 1.0, -0.25), 1.0, Surfaces.shiny),
      new Sphere(new Vector(-1.0, 0.5, 1.5), 0.5, Surfaces.shiny),
      new Sphere(new Vector(-5.5, 2.0, -3.5), 1.25, Surfaces.checkerboard)
    ],
    lights: [
      { pos: new Vector(-2.0, 2.5, 0.0), color: new Color(0.49, 0.07, 0.07) },
      { pos: new Vector(1.5, 2.5, 1.5), color: new Color(0.07, 0.07, 0.49) },
      { pos: new Vector(1.5, 2.5, -1.5), color: new Color(0.07, 0.49, 0.071) },
      { pos: new Vector(0.0, 3.5, 0.0), color: new Color(0.21, 0.21, 0.35) }
    ],
    camera: new Camera(new Vector(3.0, 2.0, 4.0), new Vector(-1.0, 0.5, 0.0))
  };
}

export function emptyScene(): Scene {
  return {
    things: [],
    lights: [],
    camera: new Camera(new Vector(3.0, 2.0, 4.0), new Vector(-1.0, 0.5, 0.0))
  };
}


