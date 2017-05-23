import React from 'react';
// import ReactTestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import { CoverPresentational } from './cover';

describe('Cover component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        // ReactTestUtils.createRenderer().render(<Cover />);
        ReactDOM.render(<CoverPresentational />, div);
    });
});