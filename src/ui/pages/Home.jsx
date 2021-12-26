import Editor from '../components/editor/Editor';
import Launchpad from '../components/launchpad/Launchpad';
import Mixer from '../components/mixer/Mixer';

import './Home.css';

function Home() {
  return (
      <div className="container-fluid">
        <div className="row d-flex justify-content-center inner-container">
            <Editor/>
            <Launchpad/>
        </div>
        <div className="row inner-container">
            <Mixer/>
        </div>
      </div>
  );
}

export default Home;
