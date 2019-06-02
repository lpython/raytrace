import Thing from './things';
import Ray from './ray';

export default interface Intersection {
  thing: Thing;
  ray: Ray;
  dist: number;
}
