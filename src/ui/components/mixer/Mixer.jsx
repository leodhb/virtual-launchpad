import { useContext } from 'react';
import { LaunchpadContext } from '../../context/LaunchpadContext';
import Channel from './channel/Channel';

import './Mixer.css';

function Mixer() {
  const { launchpad } = useContext(LaunchpadContext);

  return (
      <div className="container mixer p-4">
        <div className="row">
          <h1>Mixer</h1>
        </div>
        <div className="row text-center">
            {
                launchpad.map((item, index) => {
                    return <Channel key={index} params={item}/>
                })
            }
        </div>
      </div>
  );
}

export default Mixer;
