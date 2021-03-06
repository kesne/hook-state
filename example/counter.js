import React from 'react';
import { Provider, useWriter } from '../src';

function Counter() {
    const [count, setCount] = useWriter('count', 0);

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
            Simple:
            <Counter />
        </Provider>
    );
}
