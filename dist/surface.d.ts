import Vector from './vector';
import Color from './color';
export default interface Surface {
    diffuse: (pos: Vector) => Color;
    specular: (pos: Vector) => Color;
    reflect: (pos: Vector) => number;
    roughness: number;
}
export declare var shiny: Surface;
export declare var checkerboard: Surface;
