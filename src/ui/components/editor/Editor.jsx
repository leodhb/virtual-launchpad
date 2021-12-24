import { useContext } from 'react';
import { LaunchpadContext } from '../../context/LaunchpadContext';
import './Editor.css';

function Editor() {
  const { addPad } = useContext(LaunchpadContext);

  return (
      <div className="p-4 editor-window">
        <h1>Editor</h1>
        <button className="btn btn-primary" onClick={addPad}>Add pad</button>
      </div>
  );
}

export default Editor;
