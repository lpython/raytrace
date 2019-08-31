"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const raytrace_1 = __importStar(require("@python36/raytrace"));
//Scene input was attempt to provide textarea with live raytrace updates on user input.
//Due to Types lost on compile, alternative solution needed.
function onLoad() {
    const canv = document.querySelector("#ray-canvas");
    const sceneInput = document.querySelector('#ray-input');
    const sceneSelector = document.querySelector('#ray-scene');
    const resSelector = document.querySelector('#ray-res');
    const processorSelector = document.querySelector('#ray-processor');
    const elapsedButton = document.querySelector('#ray-elapsed');
    const renderButton = document.querySelector('#ray-render');
    const rayTracer = new raytrace_1.default();
    let ctxMaybe = canv.getContext("2d");
    if (ctxMaybe == null) {
        return;
    }
    let ctx = ctxMaybe;
    // UI varibles, change due to user events
    let size;
    let img;
    let scene = raytrace_1.defaultScene();
    // sceneInput.value = DefaultXML();
    let renewRaytrace = () => {
        const start = performance.now();
        rayTracer.renderToImage(scene, img);
        const end = performance.now();
        outputElapsedTime(end - start);
    };
    let outputElapsedTime = (n) => {
        elapsedButton.textContent = 'Elapsed : ' + (n / 1000.0).toFixed(2).toString() + 's';
        ['btn-primary', 'btn-success', 'btn-warning', 'btn-danger']
            .forEach(className => { elapsedButton.classList.remove(className); });
        if (n > 2000) {
            elapsedButton.classList.add('btn-danger');
        }
        else if (n > 500) {
            elapsedButton.classList.add('btn-warning');
        }
        else {
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
            .then(img => ctx.drawImage(img, 0, 0, canv.width, canv.height));
    };
    // let sceneXMLFromTextarea = () => {
    //   try {
    //     scene = ParseXMLToScene(sceneInput.value);
    //   }
    //   catch (error) {
    //     console.error('sceneXMLFromTextarea()', error);
    //     //TODO refactor clearing of button
    //     ['btn-primary', 'btn-success', 'btn-warning', 'btn-danger']
    //       .forEach(className => { elapsedButton.classList.remove(className); });
    //     elapsedButton.classList.add('btn-danger');
    //     elapsedButton.textContent = 'Invalid XML';
    //     scene = emptyScene();
    //   }
    // };
    window.addEventListener('resize', () => {
        resizeCanvas();
        resizeTextarea();
        outputRenderImage();
    });
    sceneSelector.addEventListener('change', () => {
        // scene = [emptyScene, defaultScene, scene2][parseInt(sceneSelector.value)]();
        scene = raytrace_1.defaultScene();
        renewRaytrace();
        outputRenderImage();
    });
    resSelector.addEventListener('change', () => {
        changeRenderSize();
        renewRaytrace();
        outputRenderImage();
    });
    processorSelector.addEventListener('change', () => {
        processorSelector.value;
    });
    // TODO Bootstrap pop up noticies
    // TODO webworker
    renderButton.addEventListener('click', () => {
        let processor = processors[processorSelector.value];
        if (processor) {
            processor();
        }
        else {
            console.log('Invalid processor select value.');
        }
    });
    changeRenderSize();
    renewRaytrace();
    resizeCanvas();
    resizeTextarea();
    outputRenderImage();
    const processors = {
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
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result);
                    reader.onerror = reject;
                    reader.readAsDataURL(blob);
                });
            })
                .then(v => {
                let i = document.createElement('img');
                i.src = v;
                console.log(i.src);
                document.body.appendChild(i);
            })
                .catch(err => {
                console.log({ err });
            });
        },
        'typescript-front': () => {
            // Front
            // sceneXMLFromTextarea();
            renewRaytrace();
            outputRenderImage();
        }
    };
}
window.addEventListener('load', onLoad);
const gobackPostString = `
res=512&xml-scene=%3Cscene%3E%0D%0A++%3Ccamera+pos%3D%223.0%2C+2.0%2C+4.0%22+lookAt%3D%22-1.0%2C+0.5%2C+0.0%22+%2F%3E%0D%0A++%3Cobjects%3E%0D%0A++++%3Cplane+normal%3D%220.0%2C1.0%2C0.0%22+offset%3D%220.0%22+surface%3D%22checkerboard%22+%2F%3E%0D%0A++++%3Csphere+pos%3D%220.0%2C1.0%2C-0.25%22+size%3D%221.0%22+surface%3D%22shiny%22%2F%3E%0D%0A++++%3Csphere+pos%3D%22-1.0%2C0.5%2C1.5%22+size%3D%220.5%22+surface%3D%22shiny%22%2F%3E%0D%0A++++%3Csphere+pos%3D%22-5.5%2C2.0%2C-3.5%22+size%3D%221.25%22+surface%3D%22checkerboard%22%2F%3E%0D%0A++%3C%2Fobjects%3E%0D%0A++%3Clights%3E%0D%0A++++%3Clight+pos%3D%22-2.0%2C+2.5%2C+0.0%22+color%3D%220.49%2C+0.07%2C+0.07%22+%2F%3E+%0D%0A++++%3Clight+pos%3D%221.5%2C+2.5%2C+1.5%22+color%3D%220.07%2C+0.07%2C+0.49%22+%2F%3E+%0D%0A++++%3Clight+pos%3D%221.5%2C+2.5%2C+-1.5%22+color%3D%220.07%2C+0.49%2C+0.071%22+%2F%3E+%0D%0A++++%3Clight+pos%3D%220.0%2C+3.5%2C+0.0%22+color%3D%220.21%2C+0.21%2C+0.35%22+%2F%3E+%0D%0A++%3C%2Flights%3E%0D%0A%3C%2Fscene%3E
`.trim();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwrREFBb0U7QUFHcEUsdUZBQXVGO0FBQ3ZGLDREQUE0RDtBQUM1RCxTQUFTLE1BQU07SUFDYixNQUFNLElBQUksR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0RSxNQUFNLFVBQVUsR0FBd0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUU3RSxNQUFNLGFBQWEsR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5RSxNQUFNLFdBQVcsR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxRSxNQUFNLGlCQUFpQixHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFFdEYsTUFBTSxhQUFhLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDL0UsTUFBTSxZQUFZLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFN0UsTUFBTSxTQUFTLEdBQUcsSUFBSSxrQkFBUyxFQUFFLENBQUM7SUFFbEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7UUFBRSxPQUFPO0tBQUU7SUFFakMsSUFBSSxHQUFHLEdBQTZCLFFBQVEsQ0FBQztJQUU3Qyx5Q0FBeUM7SUFDekMsSUFBSSxJQUFZLENBQUM7SUFDakIsSUFBSSxHQUFjLENBQUM7SUFDbkIsSUFBSSxLQUFLLEdBQVUsdUJBQVksRUFBRSxDQUFDO0lBRWxDLG1DQUFtQztJQUVuQyxJQUFJLGFBQWEsR0FBRyxHQUFHLEVBQUU7UUFDdkIsTUFBTSxLQUFLLEdBQUcsV0FBVyxD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