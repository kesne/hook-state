import React from 'react';
import { render } from 'react-dom';
import { Provider } from '../src';
import Counter from './counter';
import Double from './double';
import Name from './name';

render(
    <React.StrictMode>
        <Counter />
        <Double />
        <Name />
    </React.StrictMode>,
    document.getElementById('root')
);
