#!/bin/sh

echo 'Starting build'

# Libraries
## raytrace
npm install --prefix raytrace
npm run build --prefix raytrace
rm -r raytrace/node_modules/

## scene-xml
npm install --prefix scene-xml
npm run build --prefix scene-xml
rm -r scene-xml/node_modules/

# front (vanillaJS)
npm install --prefix front
npm run build --prefix front
rm -r front/node_modules/

# back 
npm install --prefix back
npm run build --prefix back

cp -r /front/dist/* /back/public/

echo 'Finished build'