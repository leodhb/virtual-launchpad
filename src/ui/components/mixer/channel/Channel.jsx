import { useContext, useEffect, useState } from 'react';
import { LaunchpadContext } from '../../../context/LaunchpadContext';
import RangeSlider from '../range-slider/RangeSlider';
import './Channel.css';

function Channel(props) {
  const { setChannelVolume } = useContext(LaunchpadContext);
  const [ volume, setVolume ] = useState(props.params.volume)

  const handleVolume = (volume) => {
    setVolume(volume)
    setChannelVolume(props.params.uuid, parseFloat(volume))
  }

  return (
      <div className="col-lg-1 col-md-2 col-4 text-center mixer-channel">
        <p className="text-center text-light">Channel {props.channelindex + 1}</p>
        <p className={`mixer-screen`}>{(props.params.volume * 100).toFixed(1)}</p>
        <hr />

        <RangeSlider volume={volume} onChange={e => handleVolume(e.target.value)}></RangeSlider>

        <p className="mt-4 sample-description channel-note">{props.params.name}</p>
      </div>
  );
}

export default Channel;
