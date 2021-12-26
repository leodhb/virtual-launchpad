import { useContext, useEffect, useRef, useState } from 'react';
import { LaunchpadContext } from '../../context/LaunchpadContext';
import { SessionContext } from '../../context/SessionContext';
import './Editor.css';

function Editor() {
  const { addPad } = useContext(LaunchpadContext);
  const [ disabled, setDisabled ] = useState(true);
  const [ sendButtonText, setSendButtonText] = useState(<span><i className="fas fa-upload"></i> Enviar</span>);
  const [ filename, setFilename ] = useState('');

  const { editorVisible } = useContext(SessionContext);

  const uploadSampleRef = useRef(null);

  const [ padObject, setPadObject] = useState({
    source: 'audio/rapazie.mp3',
    color: '#ff0000',
    name: 'VIIIXI',
    keycode: 'KeyC',
    playing: false,
    loaded: false,
    loop: false,
    mute: false,
    volume: 0.5,
    seek: 0.0,
    isSeeking: false
  });

  useEffect(() => {
    if(padObject['source'] != '') {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    console.log(padObject);
  }, [padObject])

  const updateFile = (file) => {
    setPadObject({...padObject, source: URL.createObjectURL(file)})
    setSendButtonText(<span><i className="fa fa-check"></i> Enviado<br></br>{file.name}</span>)
  }

  const updateColor = (color) => {
    setPadObject({...padObject, color: color})
  }

  const updateFileName = (name) => {
    setPadObject({...padObject, name: name})
  }

  const handleSampleUpload = () => {
    uploadSampleRef.current.click()
  }

  return (
    <div className={`editor-container col-lg-3 ${editorVisible ? '' : 'editor-closed'}`}>
      <div className=" p-4 editor-window">
        <h1>Editor</h1>
        <label htmlFor="audio">Audio</label>
        <input className="d-none" accept="audio/*" ref={uploadSampleRef} type="file" name="audio" id="audio" onChange={e => updateFile(e.target.files[0])}></input>

        <div className="d-grid gap-2">
            <button className="btn btn-primary file-upload" onClick={handleSampleUpload}>{sendButtonText}</button>
        </div>

        <label htmlFor="name">Name</label>
        <input type="text" name="nome" id="nome" className="form-control" value={padObject.name} onChange={e => updateFileName(e.target.value)}/>
        
        <label htmlFor="color">Color</label>
        <div className="d-grid gap-2">
          <input className="form-control mb-4 pad-color-picker" type="color" id="color" name="color" value={padObject.color} onChange={e => updateColor(e.target.value)}></input>
        </div>

        <div className="d-grid gap-2">
          <button className="btn btn-primary" onClick={() => addPad(padObject)} disabled={disabled}>Add pad</button>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="true" id="flexCheckDefault"/>
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Is a loop?
          </label>
        </div>

      </div>
    </div>
  );
}

export default Editor;
