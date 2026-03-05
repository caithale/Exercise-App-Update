import React, {useState} from "react";

function PushUps() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Push Ups</h2>
            <p>Repetitions: {count}</p>
            <button onClick={() => setCount(count+1)}>Increase</button>
            <button onClick={() => setCount(0)}>Reset Counter</button>
        </div>
    );
}

export default PushUps;