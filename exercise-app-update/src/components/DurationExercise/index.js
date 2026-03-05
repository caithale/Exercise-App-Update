import React, {useState, useRef} from "react";

function DurationExercise() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);

    const startStop = () => {
        if (isRunning) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        } else {
            timerRef.current = setInterval(() => {
                setTime((t) => t+1);
            }, 100); 
        }
        setIsRunning(!isRunning);
    };

    const reset = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setTime(0);
        setIsRunning(false);
    };

 const formatTime = (t) =>
        `${Math.floor(t / 60).toString().padStart(2, "0")}:${(t % 60)
            .toString()
            .padStart(2, "0")}`;

return (
    <div>
        <h2>Duration Exercise</h2>
        <p>Timer: {formatTime(time)}</p>
        <button onClick={startStop}>Start</button>
        <button onClick={reset}>Reset</button>
    </div>
);
}

export default DurationExercise;