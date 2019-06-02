import Scene from './scene';
export default class RayTracer {
    private maxDepth;
    private intersections;
    private testRay;
    private traceRay;
    private shade;
    private getReflectionColor;
    private getNaturalColor;
    render(scene: Scene, ctx: CanvasRenderingContext2D, screenWidth: number, screenHeight: number): void;
    renderToImage(scene: Scene, image: ImageData): void;
}
