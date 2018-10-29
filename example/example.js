import React from 'react';
import { render } from 'react-dom';
import { Provider } from '../src';
import Counter from './counter';
import Complex from './complex';
import Name from './name';

render(
    <React.Fragment>
        <Counter />
        <Complex />
        <Name />
    </React.Fragment>,
    document.getElementById('root')
);
