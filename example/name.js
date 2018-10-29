import React, { useState } from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatcher } from '../src';

const SET_NAME = 'SET_NAME';

function reducer(state = { name: '' }, action) {
    switch (action.type) {
        case SET_NAME:
            return { ...state, name: action.payload };
        default:
            return state;
    }
}

const store = createStore(reducer);

function ChangeName() {
    const savedName = useSelector(state => state.name);
    const [name, setName] = useState(savedName);
    const saveName = useDispatcher({ type: 'SET_NAME', payload: name });

    return (
        <div>
            <div>Saved name: {savedName}</div>
            <div>Change name: <input value={name} onChange={e => setName(e.target.value)} /></div>
            <button onClick={() => saveName()}>Save</button>
        </div>
    );
}

export default function Example() {
    return (
        <Provider store={store}>
            <ChangeName />
        </Provider>
    );
}
