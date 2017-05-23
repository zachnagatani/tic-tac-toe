import React from 'react';
import ReactDOM from 'react-dom';
import Square from './Square';

describe('Square component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Square />, div);
    });
});