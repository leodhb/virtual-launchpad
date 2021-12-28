import React, { useEffect, useRef, useState } from "react";
import { LightenDarkenColor } from "../../../../helpers/Colors";
import { Howl } from "howler";

import "./PadButton.css";

function PadButton(props) {
  const [source, setSource] = useState(props.source);
  const [color, setColor] = useState(props.color);
  const [name, setName] = useState(props.name);
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(props.loaded);
  const [loop, setLoop] = useState(props.loop);
  const [mute, setMute] = useState(props.mute);
  const [volume, setVolume] = useState(props.volume);
  const [clicked, setClicked] = useState(false);

  const buttonRef = useRef();

  const [sound, setSound] = useState(null);

  useEffect(() => {
    destroyHowler();

    if (typeof Howl !== "undefined") {
      setSound(
        new Howl({
          src: [source],
          format: ["mp3"],
          onplay: () => setPlaying(true),
          onend: () => setPlaying(false),
          onload: () => setLoaded(true),
          volume: volume,
          loop: loop,
          mute: mute,
        })
      );
    }
    return () => {
      destroyHowler();
    };
  }, []);

  //Change volume when the mixer channel fader is moved
  useEffect(() => {
    if (volume != props.volume) {
      setVolume(props.volume);
      sound.volume(props.volume);
    }
  }, [props.volume]);

  useEffect(() => {
    if (sound) {
      playing ? handleReset() : sound.stop();
    }
  }, [sound, playing]);

  const handleToggle = () => (loop ? handleLoop() : handleSample());

  const handleSample = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 50);

    if (playing) handleReset();

    setPlaying(true);
  };

  const handleLoop = () => {
    let playingsong = true;

    if (playing) playingsong = false;

    setPlaying(playingsong);
  };

  const handleReset = () => {
    sound.stop();
    sound.play();
  };

  const destroyHowler = () => {
    if (sound) {
      sound.off();
      sound.unload();
      sound.stop();
      setSound(null);
    }
  };

  const lightenColor = LightenDarkenColor(color, 50);
  const darkerColor = LightenDarkenColor(color, -30);

  const activeStyles =
    playing && !clicked
      ? {
          boxShadow: `0 0 50px 8px ${lightenColor}, inset 0 0 4px 4px rgba(0, 0, 0, 0.2)`,
          backgroundColor: color,
          borderBottom: `solid 2px ${darkerColor}`,
          borderRight: `solid 2px ${darkerColor}`,
        }
      : {};

  return (
    <>
      <button
        className="pad"
        ref={buttonRef}
        id={props.uuid}
        style={activeStyles}
        onClick={handleToggle}
      >
        {props.keycode.substr(-1)}
      </button>
      <p className="sample-description">{name}</p>
    </>
  );
}

export default PadButton;
