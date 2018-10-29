import React from 'react';
import { render } from 'react-dom';
import { Provider } from '../src';
import { Counter } from './counter';
import { Complex } from './complex';

render(
    <React.Fragment>
        <Counter />
        <Complex />
    </React.Fragment>,
    document.getElementById('root')
);
