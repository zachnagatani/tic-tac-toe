import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './Heading';

describe('Heading component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Heading />, div);
    });
});