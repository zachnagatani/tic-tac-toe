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
        this.claimSquare = this.claimSquare.bind(this);
        this.checkWinLoop = this.checkWinLoop.bind(this);
        this.checkWin = this.checkWin.bind(this);
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

    claimSquare(squareID) {
        this.props.claimSquare(this.props.currentPlayer, squareID);
        this.props.changePlayer();
        this.props.incrementTurnCounter();
        // TODO: figure out better way to handle redux store update async nature
        setTimeout(this.mapOwnedSquares, 1);
        setTimeout(this.checkWin, 1);
    }

    checkWinLoop(player) {
        const arr = player === 'x' ? this.props.xOwnedSquares : this.props.oOwnedSquares,
              winConditions = [
                  ['square1', 'square2', 'square3'],
                  ['square4', 'square5', 'square6'],
                  ['square7', 'square8', 'square9'],
                  ['square1', 'square4', 'square7'],
                  ['square2', 'square5', 'square8'],
                  ['square3', 'square6', 'square9'],
                  ['square1', 'square5', 'square9'],
                  ['square3', 'square5', 'square7'],
              ];

        for (let i = 0; i < winConditions.length; i++) {
            let winner;

            for (let j = 0; j < winConditions[i].length; j++) {
                if (!arr.includes(winConditions[i][j])) {
                    winner = null;
                    break;
                }
            }

            if (winner === undefined) {
                winner = player;
                return winner;
            }
        }
    }

    checkWin() {
        if (this.props.numOfTurns === 9) {
            this.props.declareWinner('TIE');
            return;
        }

        if (this.checkWinLoop('x')) {
            this.props.declareWinner('x');
        } else if (this.checkWinLoop('o')) {
            this.props.declareWinner('o');
        }

        return;
    }

    render() {
        return (
            <main className="board">
                <Square squareID="square1" owningPlayer={this.state.square1Owner} claimSquare={this.claimSquare}></Square>
                <Square squareID="square2" owningPlayer={this.state.square2Owner} claimSquare={this.claimSquare}></Square>
                <Square squareID="square3" owningPlayer={this.state.square3Owner} claimSquare={this.claimSquare}></Square>
                <Square squareID="square4" owningPlayer={this.state.square4Owner} claimSquare={this.claimSquare}></Square>
                <Square squareID="square5" owningPlayer={this.state.square5Owner} claimSquare={this.claimSquare}></Square>
                <Square squareID="square6" owningPlayer={this.state.square6Owner} claimSquare={this.claimSquare}></Square>
                <Square squareID="square7" owningPlayer={this.state.square7Owner} claimSquare={this.claimSquare}></Square>
                <Square squareID="square8" owningPlayer={this.state.square8Owner} claimSquare={this.claimSquare}></Square>
                <Square squareID="square9" owningPlayer={this.state.square9Owner} claimSquare={this.claimSquare}></Square>
            </main>
        );
    }
};