import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatcher } from '../src';

const INC = '+';
const DEC = '-';

function reducer(state = 0, action) {
    switch (action.type) {
        case INC:
            return state + 1;
        case DEC:
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(reducer);

function CounterImp() {
    const increment = useDispatcher({ type: INC });
    const decrement = useDispatcher({ type: DEC });
    const count = useSelector();

    return (
        <Provider store={store}>
            <div>
                <button onClick={() => decrement()}>-</button>
                {count}
                <button onClick={() => increment()}>+</button>
            </div>
        </Provider>
    );
}

export function Counter() {
    return (
        <Provider store={store}>
            Simple:
            <CounterImp />
        </Provider>
    );
}
