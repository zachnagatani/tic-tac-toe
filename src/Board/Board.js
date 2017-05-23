import React from 'react';
import Square from '../Square/Square';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="board">
                <Square squareID="square1" player=""></Square>
                <Square squareID="square2" player=""></Square>
                <Square squareID="square3" player=""></Square>
                <Square squareID="square4" player=""></Square>
                <Square squareID="square5" player=""></Square>
                <Square squareID="square6" player=""></Square>
                <Square squareID="square7" player=""></Square>
                <Square squareID="square8" player=""></Square>
                <Square squareID="square9" player=""></Square>
            </main>
        );
    }
};