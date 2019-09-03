import RayTracer, { defaultScene } from '@python36/raytrace';
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
    const rayTracer = new RayTracer();
    let ctxMaybe = canv.getContext("2d");
    if (ctxMaybe == null) {
        return;
    }
    let ctx = ctxMaybe;
    // UI varibles, change due to user events
    let size;
    let img;
    let scene = defaultScene();
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
        scene = defaultScene();
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
        console.log('selector value:', processorSelector.value);
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
        'typescript-back': () => {
            let xml = sceneInput.value;
            fetch("http://localhost:1234/gen.bmp?" + "xml-scene=" + encodeURI(xml), {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFNBQVMsRUFBRSxFQUFTLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3BFLHVGQUF1RjtBQUN2Riw0REFBNEQ7QUFDNUQsU0FBUyxNQUFNO0lBQ2IsTUFBTSxJQUFJLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEUsTUFBTSxVQUFVLEdBQXdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFN0UsTUFBTSxhQUFhLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUUsTUFBTSxXQUFXLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUUsTUFBTSxpQkFBaUIsR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRXRGLE1BQU0sYUFBYSxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sWUFBWSxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRTdFLE1BQU0sU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7SUFFbEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7UUFBRSxPQUFPO0tBQUU7SUFFakMsSUFBSSxHQUFHLEdBQTZCLFFBQVEsQ0FBQztJQUU3Qyx5Q0FBeUM7SUFDekMsSUFBSSxJQUFZLENBQUM7SUFDakIsSUFBSSxHQUFjLENBQUM7SUFDbkIsSUFBSSxLQUFLLEdBQVUsWUFBWSxFQUFFLENBQUM7SUFFbEMsbUNBQW1DO0lBRW5DLElBQUksYUFBYSxHQUFHLEdBQUcsRUFBRTtRQUN2QixNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsTUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzlCLGlCQUFpQixDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDLENBQUM7SUFFRixJQUFJLGlCQUFpQixHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUU7UUFDcEMsYUFBYSxDQUFDLFdBQVcsR0FBRyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUVwRixDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQzthQUN4RCxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXhFLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRTtZQUNaLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzNDO2FBQU0sSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFO1lBQ2xCLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzVDO2FBQU07WUFDTCxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUMsQ0FBQztJQUVGLE1BQU0sWUFBWSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2hFLE1BQU0sY0FBYyxHQUFHLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQztJQUVqRyxJQUFJLGdCQUFnQixHQUFHLEdBQUcsRUFBRTtRQUMxQixJQUFJLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxHQUFHLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDO0lBRUYsSUFBSSxpQkFBaUIsR0FBRyxHQUFHLEVBQUU7UUFDM0IsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQzthQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQyxDQUFBO0lBR0QscUNBQXFDO0lBQ3JDLFVBQVU7SUFDVixpREFBaUQ7SUFDakQsTUFBTTtJQUNOLG9CQUFvQjtJQUNwQixzREFBc0Q7SUFDdEQseUNBQXlDO0lBQ3pDLGtFQUFrRTtJQUNsRSwrRUFBK0U7SUFFL0UsaURBQWlEO0lBQ2pELGlEQUFpRDtJQUVqRCw0QkFBNEI7SUFDNUIsTUFBTTtJQUNOLEtBQUs7SUFJTCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtRQUNyQyxZQUFZLEVBQUUsQ0FBQztRQUNmLGNBQWMsRUFBRSxDQUFDO1FBQ2pCLGlCQUFpQixFQUFFLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxhQUFhLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtRQUM1QywrRUFBK0U7UUFDL0UsS0FBSyxHQUFHLFlBQVksRUFBRSxDQUFDO1FBQ3ZCLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLGlCQUFpQixFQUFFLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxXQUFXLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtRQUMxQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ25CLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLGlCQUFpQixFQUFFLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1FBQ2hELGlCQUFpQixDQUFDLEtBQUssQ0FBQTtJQUN6QixDQUFDLENBQUMsQ0FBQTtJQUVGLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFFakIsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN2RCxJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEQsSUFBSSxTQUFTLEVBQUU7WUFDYixTQUFTLEVBQUUsQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILGdCQUFnQixFQUFFLENBQUM7SUFDbkIsYUFBYSxFQUFFLENBQUM7SUFDaEIsWUFBWSxFQUFFLENBQUM7SUFDZixjQUFjLEVBQUUsQ0FBQztJQUNqQixpQkFBaUIsRUFBRSxDQUFDO0lBRXBCLE1BQU0sVUFBVSxHQUFvQztRQUNsRCxhQUFhLEVBQUUsR0FBRyxFQUFFO1lBQ2xCLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDM0IsS0FBSyxDQUFDLG9DQUFvQyxHQUFHLFlBQVksR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzFFLFNBQVMsRUFBRTtvQkFDVCxRQUFRLEVBQUUsdUZBQXVGO29CQUNqRyxpQkFBaUIsRUFBRSxnQkFBZ0I7aUJBQ3BDO2dCQUNELGdCQUFnQixFQUFFLDRCQUE0QjtnQkFDOUMsTUFBTSxFQUFFLElBQUk7Z0JBQ1osUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsTUFBTSxFQUFFLE1BQU07YUFDZixDQUFDO2lCQUNDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNYLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7b0JBQ3JDLE1BQU0sTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUE7b0JBQy9CLE1BQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFTLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtvQkFDdkQsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUE7b0JBQ3ZCLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQzVCLENBQUMsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFDO2lCQUNELElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDUixJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0QyxDQUFDLENBQUMsR0FBRyxHQUFXLENBQUMsQ0FBQztnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRW5CLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0QsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO1lBQ3RCLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDM0IsS0FBSyxDQUFDLGdDQUFnQyxHQUFHLFlBQVksR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3RFLFNBQVMsRUFBRTtvQkFDVCxRQUFRLEVBQUUsdUZBQXVGO29CQUNqRyxpQkFBaUIsRUFBRSxnQkFBZ0I7aUJBQ3BDO2dCQUNELGdCQUFnQixFQUFFLDRCQUE0QjtnQkFDOUMsTUFBTSxFQUFFLElBQUk7Z0JBQ1osUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsTUFBTSxFQUFFLE1BQU07YUFDZixDQUFDO2lCQUNDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNYLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7b0JBQ3JDLE1BQU0sTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUE7b0JBQy9CLE1BQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFTLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtvQkFDdkQsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUE7b0JBQ3ZCLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQzVCLENBQUMsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFDO2lCQUNELElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDUixJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0QyxDQUFDLENBQUMsR0FBRyxHQUFXLENBQUMsQ0FBQztnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRW5CLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0Qsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO1lBQ3ZCLFFBQVE7WUFDUiwwQkFBMEI7WUFDMUIsYUFBYSxFQUFFLENBQUM7WUFDaEIsaUJBQWlCLEVBQUUsQ0FBQztRQUN0QixDQUFDO0tBQ0YsQ0FBQTtBQUVILENBQUM7QUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBRXhDLE1BQU0sZ0JBQWdCLEdBQUc7O0NBRXhCLENBQUMsSUFBSSxFQUFFLENBQUMifQ==