import React, { createContext, useState, useEffect } from 'react';
import { loadItem } from '../../helpers/LocalStorage';

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    loadItem('launchpadid').then((result) => {
      setSessionId(result);
      console.log('SESSÃO: ', result);
    });
  }, []);

  return (
    <SessionContext.Provider value={{ sessionId, setSessionId }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;