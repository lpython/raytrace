import Thing from './things';
import Camera from './camera';
import { Light } from './ray';
export default interface Scene {
    things: Thing[];
    lights: Light[];
    camera: Camera;
}
export declare function defaultScene(): Scene;
export declare function scene2(): Scene;
export declare function emptyScene(): Scene;
