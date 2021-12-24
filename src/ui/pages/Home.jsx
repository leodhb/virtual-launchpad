import Editor from '../components/editor/Editor';
import Launchpad from '../components/launchpad/Launchpad';

import './Home.css';

function Home() {
  return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3 p-3 inner-container">
            <Editor/>
          </div>
          <div className="col-lg-9 p-3 inner-container">
            <Launchpad/>
          </div>
        </div>
      </div>
  );
}

export default Home;
