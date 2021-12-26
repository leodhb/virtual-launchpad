import { useContext } from 'react';
import { LaunchpadContext } from '../../context/LaunchpadContext';
import { SessionContext } from '../../context/SessionContext';
import Channel from './channel/Channel';

import './Mixer.css';

function Mixer() {
  const { launchpad } = useContext(LaunchpadContext);
  const { mixerVisible } = useContext(SessionContext);

  return (
    <div className={`col mixer-container ${mixerVisible ? '' : 'mixer-closed'}`}>
      <div className="container-fluid mixer p-4">
        <div className="row">
          <h1>Mixer</h1>
        </div>
        <div className="row">
            {
              launchpad.map((item, index) => {
                return <Channel key={index} channelindex={index} params={item}/>
              })
            }
        </div>
      </div>
    </div>
  );
}

export default Mixer;
