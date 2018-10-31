import React, { useEffect } from 'react';
import { Provider, useWriter } from '../src';

function Counter({ repeater }) {
    const [count, setCount] = useWriter('counter', 0);

    return (
        <div>
            <button onClick={() => setCount(count - 1)}>-</button>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}

export default function Example() {
    return (
        <Provider>
            <div>
                Multiple:
                <Counter />
                <Counter repeater />
            </div>
        </Provider>
    );
}
