import { useRef } from "react";
import "./RangeSlider.css";

function RangeSlider(props) {
  return (
    <div className="range-slider">
      <input
        value={props.volume}
        type="range"
        orient="vertical"
        step=".001"
        min="0"
        max="1"
        onChange={props.onChange}
      />
      <div className="range-slider__bar theme2"></div>
      <div className="range-slider__thumb"></div>
    </div>
  );
}

export default RangeSlider;
