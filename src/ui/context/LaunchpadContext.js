import React, { createContext, useState, useEffect, useContext } from 'react';
import { SessionContext } from './SessionContext';

export const LaunchpadContext = createContext();

const LaunchpadContextProvider = ({ children }) => {
  const [launchpad, setLaunchpad] = useState([]);

  const { sessionId } = useContext(SessionContext);

  /* add a pad to launchpad */
  const addPad = async () => {
    const list = [...launchpad, {
        'uuid': 'areallyniceuuid',
        'loop': 'false',
        'home': 'true',
        'volume': '1',
        'album': 'somerandom',
    }];

    setLaunchpad(list);
  };

  return (
    <LaunchpadContext.Provider
      value={{
        launchpad,
        addPad
      }}
    >
      {children}
    </LaunchpadContext.Provider>
  );
};

export default LaunchpadContextProvider;