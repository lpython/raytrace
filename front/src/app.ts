import RayTracer, { Scene, defaultScene, emptyScene } from '@python36/raytrace';
import { xmlToScene, samples } from '@python36/scene-xml';

console.log({xmlToScene, samples})

//Scene input was attempt to provide textarea with live raytrace updates on user input.
//Due to Types lost on compile, alternative solution needed.
function onLoad() {
  const canv = <HTMLCanvasElement>document.querySelector("#ray-canvas");
  const sceneInput = <HTMLTextAreaElement>document.querySelector('#ray-input');

  const sceneSelector = <HTMLSelectElement>document.querySelector('#ray-scene');
  const resSelector = <HTMLSelectElement>document.querySelector('#ray-res');
  const processorSelector = <HTMLSelectElement>document.querySelector('#ray-processor');

  const elapsedButton = <HTMLInputElement>document.querySelector('#ray-elapsed');
  const renderButton = <HTMLInputElement>document.querySelector('#ray-render');

  const rayTracer = new RayTracer();

  sceneInput.value = samples['Default Scene'];

  let ctxMaybe = canv.getContext("2d");
  if (ctxMaybe == null) { return; }

  let ctx: CanvasRenderingContext2D = ctxMaybe;

  // UI varibles, change due to user events
  let size: number;
  let img: ImageData;

  Object.keys(samples).forEach(s => {
    let option = document.createElement('option');
    option.textContent = s;
    option.value = s;
    sceneSelector.appendChild(option);
  });

  sceneSelector.value = 'Default Scene';

  const inputToRaytrace = () => xmlToRaytrace(sceneInput.value);

  const xmlToRaytrace = (xml: string) => timedRaytrace(xmlToScene(xml));

  const timedRaytrace = (scene: Scene) => {
    const start = performance.now();
    rayTracer.renderToImage(scene, img);
    const end = performance.now();
    outputElapsedTime(end - start);
  };

  let outputElapsedTime = (n: number) => {
    elapsedButton.textContent = 'Elapsed : ' + (n / 1000.0).toFixed(2).toString() + 's';

    ['btn-primary', 'btn-success', 'btn-warning', 'btn-danger']
      .forEach(className => { elapsedButton.classList.remove(className); });

    if (n > 2000) {
      elapsedButton.classList.add('btn-danger');
    } else if (n > 500) {
      elapsedButton.classList.add('btn-warning');
    } else {
      elapsedButton.classList.add('btn-success');
    }
  };

  const resizeCanvas = () => ctx.canvas.height = ctx.canvas.width;
  const resizeTextarea = () => sceneInput.style.height = ctx.canvas.clientHeight.toString() + 'px';

  let changeRenderSize = () => {
    size = parseInt(resSelector.value);
    img = ctx.createImageData(size, size);
  };

  let outputRenderImage = () => {
    createImageBitmap(img, 0, 0, size, size)
      .then(imageBitmap => ctx.drawImage(imageBitmap, 0, 0, canv.width, canv.height));
  }

  window.addEventListener('resize', () => {
    resizeCanvas();
    resizeTextarea();
    outputRenderImage();
  });

  sceneSelector.addEventListener('change', () => {
    let xml = samples[sceneSelector.value];
    sceneInput.value = xml;
  });

  resSelector.addEventListener('change', () => {
    changeRenderSize();
    // let scene = xmlToScene(sceneInput.value);
    // timedRaytrace(scene);
    // outputRenderImage();
  });

  renderButton.addEventListener('click', () => {
    console.log('selector value:', processorSelector.value)
    let processor = processors[processorSelector.value];
    if (processor) {
      processor();
    } else {
      console.log('Invalid processor select value.');
    }
  });

  changeRenderSize();
  inputToRaytrace();
  resizeCanvas();
  resizeTextarea();
  outputRenderImage();

  const processors: { [index: string]: () => void } = {
    'golang-back': () => {
      let xml = sceneInput.value;
      fetch("http://localhost:5600/gen_xml.png?" + "xml-scene=" + encodeURI(xml), {
        "headers": {
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
          "accept-language": "en-US,en;q=0.9",
        },
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": null,
        "method": "GET",
        "mode": "cors"
      })
        .then(res => res.blob())
        .then(blob => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(<string>reader.result)
            reader.onerror = reject
            reader.readAsDataURL(blob)
          })
        })
        .then(v => {
          let i = document.createElement('img');
          i.src = <string>v;
          console.log(i.src);

          document.body.appendChild(i);
        })
        .catch(err => {
          console.log({ err });
        });
    },
    'typescript-back': () => {
      let xml = sceneInput.value;

      let json = JSON.stringify({
        scene: xml, 
        width: size,
        height: size
      });

      fetch("gen_xml", {
        "headers": {
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/json"
        },
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": json,
        "method": "POST",
        "mode": "cors"
      })
        .then(res => res.blob())
        .then(blob => {
          // var ctx = this.getContext('2d');

          let imageResponse = new Image();
        
          imageResponse.onload = () => {
            createImageBitmap(imageResponse, 0, 0, size, size)
              .then(imageBitmap => ctx.drawImage(imageBitmap, 0, 0, canv.width, canv.height));
          }
        
          imageResponse.src = URL.createObjectURL(blob);
        })
        .catch(err => {
          console.log({ err });
        });
    }, 
    'typescript-front': () => {
      console.log('typescript-front');

      let result: Scene | undefined;
      
      try {
        result = xmlToScene(sceneInput.value);
      }
      catch (error) {
        console.error('Error during XML parsing:', error);
      }

      if (result) {
        timedRaytrace(result);
      } else {
        // let scene = xmlToScene(samples['empty'])

        // scene = emptyScene();
        timedRaytrace(emptyScene());

        ['btn-primary', 'btn-success', 'btn-warning', 'btn-danger']
          .forEach(className => { elapsedButton.classList.remove(className); });

        elapsedButton.classList.add('btn-danger');
        elapsedButton.textContent = 'Invalid XML';
      }
      outputRenderImage();
    }
  }

}

window.addEventListener('load', onLoad);

const gobackPostString = `
res=512&xml-scene=%3Cscene%3E%0D%0A++%3Ccamera+pos%3D%223.0%2C+2.0%2C+4.0%22+lookAt%3D%22-1.0%2C+0.5%2C+0.0%22+%2F%3E%0D%0A++%3Cobjects%3E%0D%0A++++%3Cplane+normal%3D%220.0%2C1.0%2C0.0%22+offset%3D%220.0%22+surface%3D%22checkerboard%22+%2F%3E%0D%0A++++%3Csphere+pos%3D%220.0%2C1.0%2C-0.25%22+size%3D%221.0%22+surface%3D%22shiny%22%2F%3E%0D%0A++++%3Csphere+pos%3D%22-1.0%2C0.5%2C1.5%22+size%3D%220.5%22+surface%3D%22shiny%22%2F%3E%0D%0A++++%3Csphere+pos%3D%22-5.5%2C2.0%2C-3.5%22+size%3D%221.25%22+surface%3D%22checkerboard%22%2F%3E%0D%0A++%3C%2Fobjects%3E%0D%0A++%3Clights%3E%0D%0A++++%3Clight+pos%3D%22-2.0%2C+2.5%2C+0.0%22+color%3D%220.49%2C+0.07%2C+0.07%22+%2F%3E+%0D%0A++++%3Clight+pos%3D%221.5%2C+2.5%2C+1.5%22+color%3D%220.07%2C+0.07%2C+0.49%22+%2F%3E+%0D%0A++++%3Clight+pos%3D%221.5%2C+2.5%2C+-1.5%22+color%3D%220.07%2C+0.49%2C+0.071%22+%2F%3E+%0D%0A++++%3Clight+pos%3D%220.0%2C+3.5%2C+0.0%22+color%3D%220.21%2C+0.21%2C+0.35%22+%2F%3E+%0D%0A++%3C%2Flights%3E%0D%0A%3C%2Fscene%3E
`.trim();
