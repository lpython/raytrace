
export interface SceneProcessors {
  [index: string] : (xml: string, size: number) => Promise<string>
}

export const sceneProcessors: SceneProcessors = {
  'typescript-back': (xml, size): Promise<string> => {

    let json = JSON.stringify({
      scene: xml, 
      width: size,
      height: size
    });

    return fetch("gen_xml", {
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
      .then(blob => URL.createObjectURL(blob))

  }, 
  // 'typescript-front': (xml, size) => {
  //   console.log('typescript-front');

  //   let result: Scene | undefined;
    
  //   try {
  //     result = xmlToScene(sceneInput.value);
  //   }
  //   catch (error) {
  //     console.error('Error during XML parsing:', error);
  //   }

  //   if (result) {
  //     timedRaytrace(result);
  //   } else {
  //     // let scene = xmlToScene(samples['empty'])

  //     // scene = emptyScene();
  //     timedRaytrace(emptyScene());

  //     ['btn-primary', 'btn-success', 'btn-warning', 'btn-danger']
  //       .forEach(className => { elapsedButton.classList.remove(className); });

  //     elapsedButton.classList.add('btn-danger');
  //     elapsedButton.textContent = 'Invalid XML';
  //   }
  //   outputRenderImage();
  // },
  // 'golang-back': (xml, size) => {
  //   fetch("http://localhost:5600/gen_xml.png?" + "xml-scene=" + encodeURI(xml), {
  //     "headers": {
  //       "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
  //       "accept-language": "en-US,en;q=0.9",
  //     },
  //     "referrerPolicy": "no-referrer-when-downgrade",
  //     "body": null,
  //     "method": "GET",
  //     "mode": "cors"
  //   })
  //     .then(res => res.blob())
  //     .then(blob => {
  //       return new Promise((resolve, reject) => {
  //         const reader = new FileReader()
  //         reader.onloadend = () => resolve(<string>reader.result)
  //         reader.onerror = reject
  //         reader.readAsDataURL(blob)
  //       })
  //     })
  //     .then(v => {
  //       let i = document.createElement('img');
  //       i.src = <string>v;
  //       console.log(i.src);

  //       document.body.appendChild(i);
  //     })
  //     .catch(err => {
  //       console.log({ err });
  //     });
  // }
};