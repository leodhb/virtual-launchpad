import Editor from '../components/editor/Editor';
import Launchpad from '../components/launchpad/Launchpad';
import Mixer from '../components/mixer/Mixer';

import './Home.css';

function Home() {
  return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3 p-3 inner-container">
            <Editor/>
          </div>
          <div className="col-lg-9 p-3 inner-container">
            <Launchpad/>
          </div>
        </div>
        <div className="row">
          <div className="col-12 inner-container">
            <Mixer/>
          </div>
        </div>
      </div>
  );
}

export default Home;
