import { useContext } from 'react';
import { SessionContext } from '../context/SessionContext';
import Editor from '../components/Editor';

import './Home.css';

function Home() {
  const { sessionId } = useContext(SessionContext);

  return (
      <div className="container px-4">
        <div className="row g-2">
          <div className="col-lg-3 p-3 inner-container">
            <Editor/>
          </div>
          <div className="col-lg-9 p-3 inner-container">
            
            {sessionId}
          </div>
        </div>
      </div>
  );
}

export default Home;
