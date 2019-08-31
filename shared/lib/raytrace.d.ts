import Scene from './scene';
import ImageData from './imageData';
export default class RayTracer {
    private maxDepth;
    private intersections;
    private testRay;
    private traceRay;
    private shade;
    private getReflectionColor;
    private getNaturalColor;
    renderToImage(scene: Scene, image: ImageData): void;
}
