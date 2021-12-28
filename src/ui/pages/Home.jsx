import Editor from '../components/editor/Editor';
import Launchpad from '../components/launchpad/Launchpad';
import Mixer from '../components/mixer/Mixer';
import Navbar from '../components/navbar/Navbar';
import './Home.css';

function Home() {
  return (
      <div className="container-fluid">
        <div className="row inner-container">
          <Navbar/>
        </div>
        
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
