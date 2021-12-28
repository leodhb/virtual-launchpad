import { useRef, useEffect, useState } from "react";
import "./RangeSlider.css";

function RangeSlider(props) {
  const parentRef = useRef();
  const thumbRef = useRef();
  const barRef = useRef();

  const [thumbStyle, setThumbStyle] = useState({});
  const [barStyle, setBarStyle] = useState({});

  function updateSlider() {
    const parentHeight = parentRef.current.clientHeight;
    const thumbHeight  = thumbRef.current.clientHeight;

    let pct = (props.volume * ((parentHeight - thumbHeight) / parentHeight) * 100).toFixed(2);

    setThumbStyle({bottom: `${pct}%`});
    setBarStyle({height:  `calc(${pct}% + ${thumbHeight / 2}px)`});
  }

  useEffect(() => {
    updateSlider();
  }, [props.volume]);

  return (
    <div className="range-slider" ref={parentRef}>
      <input
        value={props.volume}
        type="range"
        orient="vertical"
        step=".005"
        min="0"
        max="1"
        onChange={props.onChange}
      />
      <div
        className="range-slider__bar theme2"
        ref={barRef}
        style={barStyle}
      ></div>
      <div
        className="range-slider__thumb"
        ref={thumbRef}
        style={thumbStyle}
      ></div>
    </div>
  );
}

export default RangeSlider;
