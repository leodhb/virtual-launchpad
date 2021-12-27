import React, { createContext, useState } from 'react';
import { v4 as UUID } from 'uuid';
import { ratinho } from '../../helpers/Soundboard';

export const LaunchpadContext = createContext();

const LaunchpadContextProvider = ({ children }) => {

  const loadSoundboard = (array) => {
    let soundboard = [...array]
    return soundboard.map(obj => {
      return {...obj, uuid: UUID()}
    })
  }

  const [launchpad, setLaunchpad] = useState(loadSoundboard(ratinho));

  /* add a pad to launchpad */
  const addPad = (padObject) => {
    const list = [...launchpad, {
      ...padObject, uuid: UUID()
    }];


    setLaunchpad(list);
  };

  
  const playSampleByKey = keycode => {
    let samples = [...launchpad]

    samples.find(obj => obj.keycode === keycode).playing = true

    setLaunchpad(samples)
  }


  const setChannelVolume =  (id, volume) => {
    let items = [...launchpad]

    items.find(obj => obj.uuid === id).volume = volume

    setLaunchpad(items);
  }


  return (
    <LaunchpadContext.Provider
      value={{
        launchpad,
        addPad,
        setChannelVolume,
        playSampleByKey
      }}
    >
      {children}
    </LaunchpadContext.Provider>
  );
};

export default LaunchpadContextProvider;