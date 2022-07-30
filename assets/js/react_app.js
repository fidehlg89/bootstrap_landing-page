import React, { useState } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click Me
            </button>
        </div>
    );
}
// Find all DOM containers, and render Like buttons into them.
const rootElement = document.getElementById("app");
ReactDOM.render(<Example />, rootElement);