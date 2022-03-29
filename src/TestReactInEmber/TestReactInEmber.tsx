// Generated with util/create-component.js
import React, { useState } from "react";

import "./TestReactInEmber.scss";

const TestReactInEmber = (props: {passedIn?: () => void}) => {
    const {passedIn} = props;
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>This is a test React component</h1>
            <div className="counter">
                <span>Counter: {count}</span>
                <button onClick={() => setCount(count + 1)}>Increase Count</button>
                <button onClick={() => setCount(0)}>Reset Count</button>
            </div>
            {passedIn && 
                <div>
                    <span>Run function from props:</span>
                    <button onClick={() => passedIn()}>Run</button>
                </div>
            }
        </div>
    )
}

export default TestReactInEmber;

