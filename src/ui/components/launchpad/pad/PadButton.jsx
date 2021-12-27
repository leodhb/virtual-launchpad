import React, { useEffect, useRef, useState } from "react";
import { useEventListener } from "../../../../hooks/useEventListener";
import { useActiveElement } from "../../../../hooks/useActiveElement";
import { LightenDarkenColor } from "../../../../helpers/Colors";
import { Howl } from "howler";

import './PadButton.css'

function PadButton(props) {
  const [source, setSource] = useState(props.source);
  const [color, setColor] = useState(props.color);
  const [name, setName] = useState(props.name)
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(props.loaded);
  const [loop, setLoop] = useState(props.loop);
  const [mute, setMute] = useState(props.mute);
  const [volume, setVolume] = useState(props.volume);
  const [clicked, setClicked] = useState(false)
  
  const buttonRef = useRef();

  const currentActiveElement = useActiveElement();

  //useEventListener("keydown", handleKeyPress)

  //Change volume when the mixer channel fader is moved
  useEffect(() => {
    if(volume != props.volume) {
      setVolume(props.volume)
    }
  }, [props.volume]);

  useEffect(() => {
    if(playing) {
      ReactHowler.current.play()
    } else {
      ReactHowler.current.stop()
    }
  }, [playing])

  const handleToggle = () => loop ? handleLoop() : handleSample()

  const handleSample = () => {
    setClicked(true);
    setTimeout(() => { setClicked(false) }, 50)

    if(playing) {
      handleReset();
    }

    setPlaying(true);
  }

  const handleLoop = () => {
    let playingsong = true;

    if(playing) {
      playingsong = false;
      handleStop();
    }

   setPlaying(playingsong)
  }

  const handleReset = () => {
    ReactHowler.current.stop()
    ReactHowler.current.play()
  }

  const handleStop = () => {
    ReactHowler.current.stop()
    setPlaying(false)
  }

  const handleOnPlay = () => {
    setPlaying(true)
  }

  const handleOnLoad = () => {
    setLoaded(true)
  }

  const handleOnEnd = () => {
    setPlaying(false)
  }

  const ReactHowler = useRef(new Howl({
    src: [source],
    format: ['mp3'],
    onplay: handleOnPlay,
    onend: handleOnEnd,
    onload: handleOnLoad,
    volume: volume,
    loop: loop,
    mute: mute
  }));

  const lightenColor = LightenDarkenColor(color, 50);
  const darkerColor  = LightenDarkenColor(color, -30);

  const activeStyles = (playing && !clicked) ? {
    boxShadow: `0 0 50px 8px ${lightenColor}, inset 0 0 4px 4px rgba(0, 0, 0, 0.2)`,
    backgroundColor: color,
    borderBottom: `solid 2px ${darkerColor}`,
    borderRight: `solid 2px ${darkerColor}`
  } : {};

  return (
      <>
        <button className="pad" ref={buttonRef} id={props.uuid} style={activeStyles} onClick={handleToggle}>{props.keycode.substr(-1)}</button>
        <p className="sample-description">{name}</p>
      </>
  );

}

export default PadButton;