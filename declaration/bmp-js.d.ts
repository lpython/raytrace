declare module 'bmp-js' {
  // typing module default export as `any` will allow you to access its members without compiler warning
 
  interface ImageData {
    width: number;
    height: number;
    data: Uint8ClampedArray;
  }

  export function encode(img: ImageData) : { data: Buffer }
  
}