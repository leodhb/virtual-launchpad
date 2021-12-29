import { SessionContext } from "../../context/SessionContext";
import { Howler } from "howler";
import { useContext, useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar(props) {
  const {
    editorVisible,
    mixerVisible,
    toggleEditorVisible,
    toggleMixerVisible,
  } = useContext(SessionContext);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    Howler.mute(muted);
  }, [muted]);

  const toggleMute = () => {
    if (muted) {
      setMuted(false);
    } else {
      setMuted(true);
    }
  };

  return (
    <nav className="navbar navbar-dark bg-black">
      <span className="navbar-brand mb-0 h1">Launchpad</span>
      <button className="btn btn-light btn-circle" onClick={toggleMute}>
        {muted ? (
          <i className="fas fa-volume-mute"></i>
        ) : (
          <i className="fas fa-volume-up"></i>
        )}
      </button>
      <div className="form-inline">
        <button
          className="btn btn-light rounded-0 launchpad-menu-btn left-btn"
          onClick={toggleEditorVisible}
        >
          {!editorVisible ? (
            <i className="fa fa-eye-slash"></i>
          ) : (
            <i className="fa fa-eye"></i>
          )}
          Editor
        </button>
        <button
          className="btn btn-light rounded-0 launchpad-menu-btn right-btn"
          onClick={toggleMixerVisible}
        >
          {!mixerVisible ? (
            <i className="fa fa-eye-slash"></i>
          ) : (
            <i className="fa fa-eye"></i>
          )}
          Mixer
        </button>
      </div>
    </nav>
  );
}
