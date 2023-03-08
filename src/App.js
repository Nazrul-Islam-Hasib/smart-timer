import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [countdown, setCountdown] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let intervalId = 0;
    if (countdown > 0 && !isPaused) {
      intervalId = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [countdown, isPaused]);

  const handleStartTimer = () => {
    setCountdown(10);
    setIsPaused(false);
  };

  const handleClickTimer = () => {
    setCountdown(0);
    setIsPaused(false);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="App">
      <div className='app-content'>
        <div>
          <h2>Smart Timer</h2>
        </div>
        {countdown === 0 ?
          <div>
            <p>Click the button to start the counter</p>
            <button onClick={handleStartTimer}>Start timer</button>
          </div>
          :
          <div>
            <p>Hover over the box to pause the counter or click to reset the counter</p>
            <div
              onClick={handleClickTimer}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              className='timer'>
              <p>{isPaused ? `Timer Paused: ${countdown}s` : `Remaining time: ${countdown}s`}</p>
            </div>
          </div>

        }
      </div>

    </div>
  );
}

export default App;
