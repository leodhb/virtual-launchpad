import { useContext } from 'react';
import { LaunchpadContext } from '../../context/LaunchpadContext';
import './Launchpad.css';

function Launchpad() {
  const { launchpad } = useContext(LaunchpadContext);

  return (
      <div className="p-4 editor-window">
        <h1>Launchpad</h1>
        {
            launchpad.map(item => {
                return JSON.stringify(item)
            })
        }
      </div>
  );
}

export default Launchpad;
