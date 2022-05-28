import React, { useRef, useState } from "react";

const Timer = ( props) => {
    const [Time, SetTime] = useState(props.start);
 const Timerid=useRef(4)
  const start = () => {
    if (!Timerid.current) {
      let id = setInterval(() => {
        SetTime((prev) => prev + 1000);
      }, 100);
      Timerid.current=id;
    }
  };
  const end = () => {
    clearInterval(Timerid.current);
    Timerid.current=0
  };
  function msToTime(duration) {
  
    var  seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds ;
  }

  return (
    <div>
      <h1>Timer</h1>
      <h1>{msToTime(Time)}</h1>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={end}>End</button>
      </div>
    </div>
  );
};

export default Timer;
