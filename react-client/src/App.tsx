import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react';
import { samples } from '@python36/scene-xml';

import { sceneProcessors } from './processors';

const App: React.FC = () => {
  const [ imageURL, setImageURL ] = useState<string | undefined>(undefined);
  const [ xmlInput, setXmlInput ] = useState(samples['Default Scene']);
  const [ size, setSize ] = useState(128);
  const [ processor, setProcessor ] = useState('typescript-front');
  const [ textareaHeight, setTextareaHeight ] = useState(256);

  const renderingEl = useRef(null);

  const setScene = (e: any) => setXmlInput(samples[e.target.value]);
  const setHeight = useCallback(():void  => {
    console.log('setHeight():', {renderingEl})
    if (renderingEl && renderingEl.current) {
      const elm = renderingEl.current as any;
      if (elm.clientHeight !== textareaHeight && elm.clientHeight > 256) {
        console.log('setTextareaHeight():',{clientHeight: elm.clientHeight, textareaHeight})
        setTextareaHeight(elm.clientHeight);
      }
    }
  }, [renderingEl, textareaHeight]);

  const render = () => {
    const selectedProcessor = sceneProcessors[processor];
    selectedProcessor(xmlInput, size)
      .then(url => setImageURL(url))
      .catch(err => console.log({ err }));
  }

  // Initial backend rendering
  useEffect(() => {
    const tsBack = sceneProcessors['typescript-back'];
    tsBack(samples['Default Scene'], 512)
      .then(url => setImageURL(url))
      .catch(err => console.log({ err }));
  }, []);

  // Keep textarea sized with image
  useEffect(() => {
    window.addEventListener('resize', setHeight); 
    return () => window.removeEventListener('resize', setHeight);
  }, [setHeight]);

  useLayoutEffect(() => void setTimeout(() => 
    window.dispatchEvent(new Event('resize')), 1)
  , [imageURL]);
  
  return (
    <div className="container">
      <hr />

      <div className="row">
        <div className="col-md-6">
          <img src={imageURL} ref={renderingEl} className="rendering" />
        </div>
        <div className="col-md-6 visible-md-inline visible-lg-inline">
          <textarea 
            id="ray-input" 
            className="form-control" 
            style={{height: textareaHeight.toString() + 'px'}}
            rows={10} 
            spellCheck={false} 
            wrap="off" 
            value={xmlInput}
            onChange={e => setXmlInput(e.target.value)}
          />
        </div>
      </div>
      
      <hr />

      <div className="container">
        <form className="form-inline">
          <div className="form-group">
            <label htmlFor="ray-scene">Scene</label>
            <select id="ray-scene" className="form-control" onChange={setScene}>
              { Object.keys(samples).map((s,i) => <option key={i} value={s}>{s}</option> ) }
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="ray-res">Resolution</label>
            <select id="ray-res" className="form-control" onChange={e => setSize(parseInt(e.target.value))}>
              <option value="128">128</option>
              <option value="256">256</option>
              <option value="384">384</option>
              <option value="512">512</option>
              <option value="1024">1024</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="ray-processor">Processor</label>
            <select id="ray-processor" className="form-control" onChange={e => setProcessor(e.target.value)}>
              <option value="typescript-front">Typescript | Front-end</option>
              <option value="typescript-back">Typescript | Back-end</option>
              <option value="golang-back">Go | Back-end</option>
            </select>
          </div>
          <div className="form-group">
            <button id="ray-elapsed" type="button" className="form-control btn btn-primary disabled" >Elapsed : #</button>
          </div>
          <div className="form-group">
            <button id="ray-render" type="button" className="form-control btn btn-primary" onClick={render}>Render</button>
          </div>
        </form>
      </div>
    </div>
  );
    }
    
    export default App;
