import React, { createContext, useState } from 'react';

export const EditorContext = createContext();

const EditorContextProvider = ({ children }) => {
  const [ editorVisible, setEditorVisible ] = useState(true)

  return (
    <EditorContext.Provider
      value={{
        editorVisible,
        setEditorVisible
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorContextProvider;