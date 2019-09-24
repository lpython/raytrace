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

# front (react)
cd react-client/
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

# copy frontend bundles to public folder
cp -r -v front/build/* back/public/
cp -r -v react-client/build/* back/public/

echo 'Finished build'