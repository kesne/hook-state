import React from 'react';
import { Provider, useWriter, useReader } from '../src';

function ReadName() {
    const name = useReader('name');

    // Force a render delay:
    const start = Date.now();
    while (Date.now() < start + 100) {}

    return <div>Name in reader: {name}</div>;
}

function ChangeName() {
    const [name, setName] = useWriter('name', 'Bob');

    return (
        <div>
            <div>
                Change name: <input value={name} onChange={e => setName(e.target.value)} />
            </div>
        </div>
    );
}

export default function Example() {
    return (
        <Provider>
            <ReadName />
            <ChangeName />
        </Provider>
    );
}
