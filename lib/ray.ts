import Vector from './vector';
import Color from './color';

export default interface Ray {
  start: Vector;
  dir: Vector;
}

export interface Light {
  pos: Vector;
  color: Color;
}

