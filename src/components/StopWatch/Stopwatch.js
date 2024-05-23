import React, { useEffect, useState } from "react";
// import Button from "../common/button/Button";
import '../StopWatch/Stopwatch.css'

const StopWatch = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [[m, s, ms], setTimer] = useState([0, 0, 0]);

  useEffect(() => {
    const timerId = setInterval(() => onStart(), 10);
    return () => clearInterval(timerId);
  });

  const onStart = () => {
    if (!isStarted) return;
    if (ms === 99 && s === 60) {
      //3rd
      setTimer([m + 1, 0, 0]);
    } else if (ms === 99) {
      //2nd
      setTimer([m, s + 1, 0]);
    } else {
      //1st
      setTimer([m, s, ms + 1]);
    }
  };

  const onReset = () => {
    setIsStarted(false);
    setTimer([0, 0, 0]);
  };

  return (
    <div>
      <div className="stopwatch">
        <div className="container">
          <div className="clock" onClick={() => setIsStarted(true)}>
            <div className="clock-border-ring">
              <div className="clock-border-ring-inner"></div>
            </div>
            <div className="clock-timer">
              {m < 10 && 0}
              {m}:{s < 10 && 0}
              {s}:{ms < 10 && 0}
              {ms}
            </div>
          </div>
          <div className="button-row">
            <button onClickHandler={onReset}>Reset</button>
            <button onClickHandler={() => setIsStarted(!isStarted)}>
              {isStarted ? <>Pause</> : <>Start</>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
