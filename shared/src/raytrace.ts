
import Scene from './scene';
import Vector from './vector';
import Intersection from './intersection';
import Color from './color';
import Ray, { Light } from './ray';
import Thing from './things';
import Camera from './camera';
import ImageData from './imageData';

export default class RayTracer {
  private maxDepth = 5;

  private intersections(ray: Ray, scene: Scene) {
    var closest = +Infinity;
    var closestInter: Intersection | null = null;
    for (var i in scene.things) {
      var inter = scene.things[i].intersect(ray);
      if (inter != null && inter.dist < closest) {
        closestInter = inter;
        closest = inter.dist;
      }
    }
    return closestInter;
  }

  private testRay(ray: Ray, scene: Scene) {
    var isect = this.intersections(ray, scene);
    if (isect != null) {
      return isect.dist;
    } else {
      return null;
    }
  }

  private traceRay(ray: Ray, scene: Scene, depth: number): Color {
    var isect = this.intersections(ray, scene);
    if (isect === null) {
      return Color.background;
    } else {
      return this.shade(isect, scene, depth);
    }
  }

  private shade(isect: Intersection, scene: Scene, depth: number) {
    var d = isect.ray.dir;
    var pos = Vector.plus(Vector.times(isect.dist, d), isect.ray.start);
    var normal = isect.thing.normal(pos);
    var reflectDir = Vector.minus(d, Vector.times(2, Vector.times(Vector.dot(normal, d), normal)));
    var naturalColor = Color.plus(Color.background,
      this.getNaturalColor(isect.thing, pos, normal, reflectDir, scene));
    var reflectedColor = (depth >= this.maxDepth) ? Color.grey : this.getReflectionColor(isect.thing, pos, normal, reflectDir, scene, depth);
    return Color.plus(naturalColor, reflectedColor);
  }

  private getReflectionColor(thing: Thing, pos: Vector, normal: Vector, rd: Vector, scene: Scene, depth: number) {
    return Color.scale(thing.surface.reflect(pos), this.traceRay({ start: pos, dir: rd }, scene, depth + 1));
  }

  private getNaturalColor(thing: Thing, pos: Vector, norm: Vector, rd: Vector, scene: Scene) {
    var addLight = (col: Color, light: Light) => {
      var ldis = Vector.minus(light.pos, pos);
      var livec = Vector.norm(ldis);
      var neatIsect = this.testRay({ start: pos, dir: livec }, scene);
      var isInShadow = (neatIsect === null) ? false : (neatIsect <= Vector.mag(ldis));
      if (isInShadow) {
        return col;
      } else {
        var illum = Vector.dot(livec, norm);
        var lcolor = (illum > 0) ? Color.scale(illum, light.color)
          : Color.defaultColor;
        var specular = Vector.dot(livec, Vector.norm(rd));
        var scolor = (specular > 0) ? Color.scale(Math.pow(specular, thing.surface.roughness), light.color)
          : Color.defaultColor;
        return Color.plus(col, Color.plus(Color.times(thing.surface.diffuse(pos), lcolor),
          Color.times(thing.surface.specular(pos), scolor)));
      }
    }
    return scene.lights.reduce(addLight, Color.defaultColor);
  }

  // render(scene: Scene, ctx: CanvasRenderingContext2D, screenWidth: number, screenHeight: number) {
  //   var getPoint = (x: number, y: number, camera: Camera) => {
  //     var recenterX = (x: number) => (x - (screenWidth / 2.0)) / 2.0 / screenWidth;
  //     var recenterY = (y: number) => - (y - (screenHeight / 2.0)) / 2.0 / screenHeight;
  //     return Vector.norm(Vector.plus(camera.forward, Vector.plus(Vector.times(recenterX(x), camera.right), Vector.times(recenterY(y), camera.up))));
  //   }
  //   for (var y = 0; y < screenHeight; y++) {
  //     for (var x = 0; x < screenWidth; x++) {
  //       var color = this.traceRay({ start: scene.camera.pos, dir: getPoint(x, y, scene.camera) }, scene, 0);
  //       var c = Color.toDrawingColor(color);
  //       ctx.fillStyle = "rgb(" + String(c.r) + ", " + String(c.g) + ", " + String(c.b) + ")";
  //       ctx.fillRect(x, y, x + 1, y + 1);
  //     }
  //   }
  // }

  renderToImage(scene: Scene, image: ImageData) {
    var height = image.height;
    var width = image.width;

    var getPoint = function (x: number, y: number, camera: Camera) {
      var recenterX = function (x: number) { return (x - (width / 2.0)) / 2.0 / width; };
      var recenterY = function (y: number) { return -(y - (height / 2.0)) / 2.0 / height; };
      return Vector.norm(Vector.plus(camera.forward, Vector.plus(Vector.times(recenterX(x), camera.right), Vector.times(recenterY(y), camera.up))));
    };
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        var color = this.traceRay({ start: scene.camera.pos, dir: getPoint(x, y, scene.camera) }, scene, 0);
        var c = Color.toDrawingColor(color);
        // ctx.fillStyle = "rgb(" + String(c.r) + ", " + String(c.g) + ", " + String(c.b) + ")";
        // ctx.fillRect(x, y, x + 1, y + 1);
        image.data[((y * (width * 4)) + (x * 4))] = c.r;
        image.data[((y * (width * 4)) + (x * 4)) + 1] = c.g;
        image.data[((y * (width * 4)) + (x * 4)) + 2] = c.b;
        image.data[((y * (width * 4)) + (x * 4)) + 3] = 255;
      }
    }
  }
}

