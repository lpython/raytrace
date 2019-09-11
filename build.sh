#!/bin/sh

echo 'Starting build'

set -x 

# Libraries
## raytrace
cd raytrace/
npm install --dev
npm run build
rm -r node_modules/
cd ..

## scene-xml
cd scene-xml/
npm install --dev
npm run build 
rm -r node_modules/
cd ..

# front (vanillaJS)
cd front/
npm install --dev
npm run build
rm -r node_modules/
cd ..

# back 
cd back/
npm install --dev
npm run build
npm prune --production
cd ..

cp -r -v front/dist/* back/public/

echo 'Finished build'