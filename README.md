A learning project utilizing raytracing as 'work' with the following goals:
- Adapt [raytracer from typescript samples](https://github.com/microsoft/TypeScriptSamples/tree/master/raytracer) for use as long duration workload
- Create single library to be used in either browser or node environment (scene-xml and raytrace)
- Frontend is written using vanilaJS for DOM manipulation.
- Backend uses express
- Both front and backend use scene-xml and raytrace without having to be explicit in code. That is, both use the same import statement: `import { Parse, basicSceneXML } from '@python36/scene-xml'`
- However, scene-xml delievers different code to front and back. Simply, front end uses browsers `DOMParser` to parse XML, while backend uses JS dependency. Scene-xml uses one API, doesn't care if its environment provided or not. 