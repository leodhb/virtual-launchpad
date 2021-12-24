import Home from '../ui/pages/Home';
import SessionContextProvider from '../ui/context/SessionContext';

function App() {
  return (
    <SessionContextProvider>
      <Home/>
    </SessionContextProvider>
  );
}

export default App;
