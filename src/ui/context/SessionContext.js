import React, { createContext, useState, useEffect } from 'react';
import { loadItem } from '../../helpers/LocalStorage';

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const [sessionId, setSessionId] = useState('');
  const [ editorVisible, setEditorVisible ] = useState(true);
  const [ mixerVisible, setMixerVisible ] = useState(true);

  useEffect(() => {
    loadItem('launchpadid').then((result) => {
      setSessionId(result);
    });
  }, []);

  const toggleEditorVisible = () => setEditorVisible(!editorVisible);
  const toggleMixerVisible = () => setMixerVisible(!mixerVisible);

  return (
    <SessionContext.Provider 
          value={{ sessionId, 
                   setSessionId, 
                   editorVisible, 
                   toggleEditorVisible,
                   mixerVisible,
                   toggleMixerVisible
                }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;