import React, { createContext, useState, useContext, useMemo, useEffect, useRef } from 'react';

const StoreContext = createContext();

const defaultSelector = state => state;
export function useSelector(selector = defaultSelector) {
    const store = useContext(StoreContext);
    const [state, setState] = useState(() => selector(store.getState()));
    const lastStoreState = useRef(state);

    useEffect(() => {
        return store.subscribe(() => {
            const selectedState = selector(store.getState());
            if (selectedState !== lastStoreState.current) {
                lastStoreState.current = selectedState;
                setState(selectedState);
            }
        });
    }, [store, selector]);

    return state;
}

const EMPTY = {};
export function useDispatcher(init = EMPTY) {
    const store = useContext(StoreContext);
    return useMemo(
        () => options =>
            store.dispatch({
                ...init,
                ...options
            }),
        [store, init]
    );
}

export function Provider({ store, children }) {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}
