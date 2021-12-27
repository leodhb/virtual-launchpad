import { useContext, useEffect, useRef, useState } from 'react';
import { LaunchpadContext } from '../../context/LaunchpadContext';
import { SessionContext } from '../../context/SessionContext';
import { LoadKeys } from '../../../helpers/LoadKeys';
import './Launchpad.css';
import PadButton from './pad/PadButton';

function Launchpad() {
  const { launchpad, playSampleByKey } = useContext(LaunchpadContext);
  const { toggleEditorVisible, toggleMixerVisible } = useContext(SessionContext)

  LoadKeys(launchpad);

  return (
    <div className="col p-3 launchpad-container">
      <div className="launchpad-window">
        <div className="row mb-3">
          <div className="col-lg-5">
            <button className="btn btn-primary" onClick={toggleEditorVisible}>Editor</button>
            <button className="btn btn-primary mx-4" onClick={toggleMixerVisible}>Mixer</button>
          </div>
        </div>
        
        <h1>Launchpad</h1>
          <div className="row">
            {
                launchpad.map((item, index) => {
                    
                    return (
                      <div key={index} className="col-lg-2 col-3 text-center p-0 pad-wrapper">
                        <PadButton 
                          key={index}
                          uuid={item.uuid}
                          source={item.source}
                          color={item.color}
                          name={item.name}
                          keycode={item.keycode}
                          loaded={item.loaded}
                          loop={item.loop}
                          mute={item.mute}
                          volume={item.volume}
                        />
                      </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  );
}

export default Launchpad;
