import Home from '../ui/pages/Home';
import SessionContextProvider from '../ui/context/SessionContext';
import LaunchpadContextProvider from '../ui/context/LaunchpadContext';

function App() {
  return (
    <SessionContextProvider>
      <LaunchpadContextProvider>
        <Home/>
      </LaunchpadContextProvider>
    </SessionContextProvider>
  );
}

export default App;
