#!/bin/sh

echo 'Starting build'

set -x 

# Libraries
## raytrace
cd raytrace/
npm install 
npm run build
rm -r /node_modules/
cd ..

## scene-xml
cd scene-xml/
npm install 
npm run build 
rm -r /node_modules/
cd..

# front (vanillaJS)
cd front/
npm install
npm run build
rm -r front/node_modules/
cd ..

# back 
cd back/
npm install
npm run build
cd ..

cp -r /front/dist/* /back/public/

echo 'Finished build'