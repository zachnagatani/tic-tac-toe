import React from 'react';
import Square from '../Square/Square';

export default class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            square1Owner: null,
            square2Owner: null,
            square3Owner: null,
            square4Owner: null,
            square5Owner: null,
            square6Owner: null,
            square7Owner: null,
            square8Owner: null,
            square9Owner: null
        };

        this.mapOwnedSquares = this.mapOwnedSquares.bind(this);
    }

    mapOwnedSquares() {
        const squareIDs = ['square1', 'square2', 'square3', 'square4', 'square5', 'square6', 'square7', 'square8', 'square9'];

        squareIDs.forEach(ID => {
            if (this.props.xOwnedSquares.includes(ID)) {
                let newStateSlice = {};
                newStateSlice[ID + 'Owner'] = 'X';
                this.setState(newStateSlice);
            } else if (this.props.oOwnedSquares.includes(ID)) {
                let newStateSlice = {};
                newStateSlice[ID + 'Owner'] = 'O';
                this.setState(newStateSlice);
            }
        });
    }

    render() {
        return (
            <main className="board" onClick={this.mapOwnedSquares} style={{height: 1000}}>
                <Square squareID="square1" owningPlayer={this.state.square1Owner}></Square>
                <Square squareID="square2" owningPlayer={this.state.square2Owner}></Square>
                <Square squareID="square3" owningPlayer={this.state.square3Owner}></Square>
                <Square squareID="square4" owningPlayer={this.state.square4Owner}></Square>
                <Square squareID="square5" owningPlayer={this.state.square5Owner}></Square>
                <Square squareID="square6" owningPlayer={this.state.square6Owner}></Square>
                <Square squareID="square7" owningPlayer={this.state.square7Owner}></Square>
                <Square squareID="square8" owningPlayer={this.state.square8Owner}></Square>
                <Square squareID="square9" owningPlayer={this.state.square9Owner}></Square>
            </main>
        );
    }
};