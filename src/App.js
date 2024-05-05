import logo from './logo.svg';
import './App.css';
import React, { useState, useRef } from "react";
import { formatTime } from './Timer';
import { useState, useRef } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App">
      <Timer/>
      </header>
    </div>
  );
}

export default App;export const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    const startStopwatch = () => {
        if (isRunning) {
            clearInterval(intervalRef.current);
        } else {
            const startTime = Date.now() - time;
            intervalRef.current = setInterval(() => {
                setTime(Date.now() - startTime);
            }, 10);
        }
        setIsRunning(!isRunning);
    };

    const resetStopwatch = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setTime(0);
    };

    return (
        <div>
            <h1>{formatTime(time)}</h1>
            <button onClick={startStopwatch}>{isRunning ? 'Stop' : 'Start'}</button>
            <button onClick={resetStopwatch}>Reset</button>
        </div>
    );
};

