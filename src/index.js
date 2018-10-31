import React, { createContext, useState, useContext, useMemo, useEffect, useRef } from 'react';
import { unstable_scheduleCallback } from 'scheduler';

const StoreContext = createContext();

export function Provider({ children }) {
    const store = useMemo(() => {
        let state = {};
        const subscribers = new Map();

        const store = {
            getState(namespace) {
                return state[namespace];
            },
            modify(namespace, value) {
                state = {
                    ...state,
                    [namespace]: value
                };

                unstable_scheduleCallback(() => {
                    const subs = subscribers.get(namespace);
                    if (subs) {
                        subs.forEach(sub => sub(store.getState(namespace)));
                    }
                });

                return value;
            },
            subscribe(namespace, fn) {
                subscribers.set(namespace, (subscribers.get(namespace) || new Set()).add(fn));
                return () => subscribers.delete(fn);
            }
        };

        return store;
    }, []);

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

const defaultSelector = state => state;
export function useReader(namespace, selector = defaultSelector) {
    const store = useContext(StoreContext);
    const [state, setState] = useState(() => selector(store.getState(namespace)));
    const lastStateRef = useRef(state);

    useEffect(
        () =>
            store.subscribe(namespace, updatedState => {
                const selectedState = selector(updatedState);
                if (lastStateRef.current !== selectedState) {
                    lastStateRef.current = selectedState;
                    setState(selectedState);
                }
            }),
        [store]
    );

    return state;
}

export function useWriter(namespace, initialValue) {
    const store = useContext(StoreContext);
    const [state, setState] = useState(initialValue);
    const lastStateRef = useRef(state);
    const writeState = useMemo(
        () => value => {
            lastStateRef.current = value;
            setState(store.modify(namespace, value));
        },
        [store, namespace]
    );

    useEffect(
        () =>
            store.subscribe(namespace, updatedState => {
                const selectedState = updatedState;
                if (lastStateRef.current !== selectedState) {
                    lastStateRef.current = selectedState;
                    setState(selectedState);
                }
            }),
        [store]
    );

    return [state, writeState];
}
