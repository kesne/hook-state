import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatcher } from '../src';

const INC = '+';
const DEC = '-';

function reducer(state = { one: 0, two: 0 }, action) {
    switch (action.type) {
        case INC:
            return {
                ...state,
                [action.segment]: state[action.segment] + 1
            };
        case DEC:
            return {
                ...state,

                [action.segment]: state[action.segment] - 1
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

function Counter({ segment }) {
    const increment = useDispatcher({ type: INC, segment });
    const decrement = useDispatcher({ type: DEC, segment });
    const count = useSelector(state => state[segment]);

    return (
        <div>
            <button onClick={() => decrement()}>-</button>
            {count}
            <button onClick={() => increment()}>+</button>
        </div>
    );
}

export function Complex() {
    return (
        <Provider store={store}>
            <div>
                Complex:
                <Counter segment="one" />
                <Counter segment="two" />
            </div>
        </Provider>
    );
}
